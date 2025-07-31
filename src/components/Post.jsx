// Post.jsx
import React from 'react';
import './feed.css';

const Post = ({ data }) => {
  const { text, imageUrl, timestamp } = data;

  return (
    <div className="post">
      <div className="post-header">
        <div className="username">Anonymous</div>
        <div className="timestamp">{new Date(timestamp).toLocaleString()}</div>
      </div>
      <p>{text}</p>
      {imageUrl && <img src={imageUrl} className="content-image" alt="user post" />}
    </div>
  );
};

export default Post;
