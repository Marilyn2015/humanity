// view_profile.js
import { auth, db } from './firebase.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js';
import { ref, child, get, onChildAdded, update, push, remove, onValue } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js';

onAuthStateChanged(auth, user => {
  if (!user) {
    window.location.href = 'index.html';
    return;
  }

  const uid = user.uid;
  const userRef = child(ref(db), `users/${uid}`);
  get(userRef).then(snapshot => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      document.getElementById('profileName').textContent = `${data.firstName} ${data.lastName}`;
      document.getElementById('profileEmail').textContent = user.email;
      document.getElementById('profileAvatar').src = data.photoURL || 'https://randomuser.me/api/portraits/lego/1.jpg';
    }
  });

  // Load own posts
  const postsRef = ref(db, 'posts');
  onChildAdded(postsRef, snap => {
    const post = snap.val();
    if (post.userId === uid) {
      const div = document.createElement('div');
      div.className = 'post';
      div.innerHTML = `
        <div class="post-header">
          <div class="post-author">You</div>
          <div class="post-time">${new Date(post.timestamp).toLocaleString()}</div>
        </div>
        <div class="post-content">${post.content}</div>
        ${post.imageUrl ? `<img class="post-img" src="${post.imageUrl}" />` : ''}
      `;
      document.getElementById('profilePosts').prepend(div);
    }
  });

  // Buttons setup
  const followBtn = document.getElementById('followBtn');
  const friendBtn = document.getElementById('friendBtn');
  const messageBtn = document.getElementById('messageBtn');
  const viewedUserId = uid; // Here it's your own profile; normally you'd get target UID from URL

  // FOLLOW TOGGLE
  onValue(ref(db, `follows/${uid}/${viewedUserId}`), snap => {
    followBtn.textContent = snap.exists() ? 'Unfollow' : 'Follow';
  });

  followBtn.onclick = () => {
    const followRef = ref(db, `follows/${uid}/${viewedUserId}`);
    get(followRef).then(snap => {
      snap.exists() ? remove(followRef) : update(followRef, { following: true });
    });
  };

  // FRIEND REQUEST TOGGLE
  onValue(ref(db, `friendRequests/${uid}/${viewedUserId}`), snap => {
    friendBtn.textContent = snap.exists() ? 'Cancel Request' : 'Add Friend';
  });

  friendBtn.onclick = () => {
    const frRef = ref(db, `friendRequests/${uid}/${viewedUserId}`);
    get(frRef).then(snap => {
      snap.exists() ? remove(frRef) : update(frRef, { requested: true });
    });
  };

  // SEND MESSAGE
  messageBtn.onclick = () => {
    const text = prompt('Enter your message:');
    if (text?.trim()) {
      const msg = { from: uid, to: viewedUserId, text, timestamp: Date.now() };
      push(ref(db, 'messages'), msg);
      alert('Message sent!');
    }
  };
});
