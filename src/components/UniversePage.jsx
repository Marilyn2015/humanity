import { useEffect } from "react";
import GlobeCanvas from "./GlobeCanvas";
import StarCanvas from "./StarCanvas";
import "./UniversePage.css";

function UniversePage() {
  useEffect(() => {
    // You'll later move your Firebase and button event logic here using hooks
  }, []);

  return (
    <>
      <StarCanvas />
      <GlobeCanvas />

      <div className="button-bar">
        <button className="btn" id="newPostBtn">New Post</button>
        <button className="btn" id="profileBtn">Profile</button>
        <button className="btn" id="logoutBtn">Log Out</button>
      </div>

      <div className="overlay" id="overlay"></div>
      <div className="modal" id="postModal">
        <div className="modal-box">
          <h2>New Post</h2>
          <textarea id="postContent" placeholder="What's on your mind?" />
          <input type="file" id="postImage" accept="image/*" />
          <div className="modal-footer">
            <button className="btn" id="cancelBtn">Cancel</button>
            <button className="btn" id="postButton">Post</button>
          </div>
        </div>
      </div>

      <div className="post-container" id="postFeed"></div>
    </>
  );
}

export default UniversePage;
