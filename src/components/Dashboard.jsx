import React from 'react';
import GlobeCanvas from './GlobeCanvas';
import PostForm from './PostForm';
import Feed from './Feed';
import './dashboard.css';

const Dashboard = () => {
  const handleLogout = () => {
    // Implement logout logic
  };

  return (
    <div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <canvas id="globeCanvas"></canvas>
      <div className="container">
        <h1>#HUMANITY Feed</h1>
        <PostForm />
        <Feed />
      </div>
    </div>
  );
};

export default Dashboard;
