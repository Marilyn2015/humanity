import React, { useState } from 'react';
import './Login.css';
import { auth } from '../firebase/firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setStatus('');

    try {
      await auth.signInWithEmailAndPassword(email.trim(), password);
      setMessage('Login successful! Redirecting…');
      setStatus('success');
      setTimeout(() => (window.location.href = '/universe'), 800);
    } catch (err) {
      setMessage(err.message);
      setStatus('error');
    }
  };

  return (
    <div className="login-box">
      <h1>#Humanity</h1>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn">Login</button>
      </form>
      <button type="button" className="link-btn" onClick={() => window.location.href = '/register'}>
        Register
      </button>
      <div id="message" className={status}>{message}</div>
    </div>
  );
};

export default Login;
