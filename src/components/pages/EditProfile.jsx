import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, database, storage } from '../firebase/firebase';
import './editProfile.css'; // Move your CSS to this file

const EditProfile = () => {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [avatarPreview, setAvatarPreview] = useState('default_avatar.png');
  const [avatarFile, setAvatarFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const userId = user.uid;
        database.ref('users/' + userId).once('value').then(snapshot => {
          const data = snapshot.val();
          if (data) {
            setUsername(data.username || '');
            setBio(data.bio || '');
            setAvatarPreview(data.avatar || 'default_avatar.png');
          }
        });
      } else {
        alert('You must be logged in to edit your profile.');
        navigate('/'); // redirect to landing or login
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const saveProfile = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const userId = user.uid;
    const updateUserData = async (avatarURL = null) => {
      const data = { username, bio };
      if (avatarURL) data.avatar = avatarURL;
      await database.ref('users/' + userId).update(data);
      navigate('/dashboard'); // or /view-profile if that’s another page
    };

    if (avatarFile) {
      const avatarRef = storage.ref('avatars/' + userId);
      const snapshot = await avatarRef.put(avatarFile);
      const url = await snapshot.ref.getDownloadURL();
      updateUserData(url);
    } else {
      updateUserData();
    }
  };

  return (
    <div className="edit-profile-container">
      <div className="edit-title">Edit Profile</div>
      <img className="avatar-preview" src={avatarPreview} alt="avatar" />
      <label className="label-upload" htmlFor="avatarInput">Change Avatar</label>
      <input type="file" id="avatarInput" onChange={handleAvatarChange} accept="image/*" />
      <input
        type="text"
        className="input-field"
        placeholder="Username"
        maxLength={18}
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="text"
        className="input-field"
        placeholder="Bio (max 120 chars)"
        maxLength={120}
        value={bio}
        onChange={e => setBio(e.target.value)}
      />
      <button className="btn" onClick={saveProfile}>Save Profile</button>
    </div>
  );
};

export default EditProfile;
