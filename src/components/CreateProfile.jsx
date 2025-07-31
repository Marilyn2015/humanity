import React, { useState } from 'react';
import './CreateProfile.css';
import { auth, db, storage } from '../firebase/firebase';
import {
  createUserWithEmailAndPassword
} from 'firebase/auth';
import {
  ref as dbRef,
  set
} from 'firebase/database';
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL
} from 'firebase/storage';

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', password: '',
    dob: '', username: '', bio: '', location: ''
  });
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState('');
  const [agreeRules, setAgreeRules] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleInput = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onload = (event) => setAvatarPreview(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!agreeRules) return alert('You must agree to the #HUMANITY Rules.');
    if (!formData.email || !formData.password) return alert('Email and password are required.');

    try {
      const result = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const uid = result.user.uid;

      let avatarURL = '';
      if (avatarFile) {
        const avatarRef = storageRef(storage, `avatars/${uid}`);
        await uploadBytes(avatarRef, avatarFile);
        avatarURL = await getDownloadURL(avatarRef);
      }

      const profileData = {
        ...formData,
        avatarURL,
        createdAt: Date.now()
      };

      await set(dbRef(db, `users/${uid}`), profileData);
      window.location.href = '/universe';
    } catch (err) {
      console.error('[ERROR]', err);
      alert(`Failed to create account: ${err.message}`);
    }
  };

  return (
    <div className="container">
      {avatarPreview && (
        <div className="avatar-section">
          <img id="avatarPreview" src={avatarPreview} alt="Avatar Preview" />
          <p>Your uploaded profile picture</p>
        </div>
      )}

      <h2>Create Your Profile</h2>
      {['firstName', 'lastName', 'email', 'password', 'dob', 'username', 'bio', 'location'].map((id) => (
        <label key={id}>
          {id.charAt(0).toUpperCase() + id.slice(1)}:
          {id === 'bio'
            ? <textarea id={id} value={formData[id]} onChange={handleInput} />
            : <input type={id === 'password' ? 'password' : id === 'dob' ? 'date' : 'text'} id={id} value={formData[id]} onChange={handleInput} />
          }
        </label>
      ))}
      <label>Profile Picture <input type="file" accept="image/*" onChange={handleAvatar} /></label>

      <label className="checkbox-row">
        <input type="checkbox" checked={agreeRules} onChange={(e) => setAgreeRules(e.target.checked)} />
        <span className="link" onClick={() => setShowModal(true)}>#HUMANITY Rules</span>
      </label>

      <button onClick={handleSubmit}>Save Profile</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Basic Social Media Rules</h3>
            <ul>
              <li>Respect others and avoid hate speech or personal attacks.</li>
              <li>Do not post misleading, harmful, or false information.</li>
              <li>Keep your content appropriate and avoid NSFW material.</li>
              <li>Engage constructively in conversations—no trolling.</li>
              <li>Protect your own privacy and respect others’ confidentiality.</li>
            </ul>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateProfile;
