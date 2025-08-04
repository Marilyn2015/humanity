import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Globe from './Globe'; // Your globe component
import './LandingPage.css';

function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [userText, setUserText] = useState('');
  const navigate = useNavigate();

  const handlePost = () => {
    if (!userText.trim()) return;
    const newPost = {
      name: 'Username', // Replace with dynamic user data if available
      content: userText,
      timestamp: new Date().toLocaleString(),
    };
    setPosts([newPost, ...posts]);
    setUserText('');
    setShowModal(false);
  };

  return (
    <div className="landing-container">
      <div className="globe-wrapper">
        <Globe />
      </div>

      <div className="button-group">
        <button onClick={() => navigate('/view-profile')} className="btn glow">
          View Profile
        </button>
        <button onClick={() => setShowModal(true)} className="btn glow">
          New Post
        </button>
        <button onClick={() => navigate('/login')} className="btn logout">
          Log Out
        </button>
      </div>

      {showModal && (
        <div className="modal">
          <textarea
            value={userText}
            onChange={(e) => setUserText(e.target.value)}
            placeholder="What's on your mind?"
          />
          <button className="btn glow" onClick={handlePost}>
            Post
          </button>
        </div>
      )}

      <div className="timeline">
        {posts.map((post, index) => (
          <div className="post" key={index}>
            <p className="meta">
              <strong>{post.name}</strong> • {post.timestamp}
            </p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;

