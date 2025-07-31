// src/components/ChatApp.jsx
import React, { useState, useEffect } from 'react';
import { auth, db, storage } from '../firebaseConfig';               // <-- no “.js” extension
import { ref, onChildAdded, set, push } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { onAuthStateChanged } from 'firebase/auth';
import './ChatApp.css';                                              // <-- make sure ChatApp.css is in the same folder

const emojis = ['😀', '😂', '😍', '😎', '🔥', '👍', '🙏', '🎉', '❤️', '😢'];

export default function ChatApp() {
  const [currentUser, setCurrentUser] = useState(null);
  const [threads, setThreads] = useState([]);
  const [activeThread, setActiveThread] = useState(null);
  const [reply, setReply] = useState('');
  const [imageFile, setImageFile] = useState(null);

  // Auth listener
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      setCurrentUser(user ? user.uid : null);
    });
    return () => unsub();
  }, []);

  // Thread list listener
  useEffect(() => {
    if (!currentUser) return;
    const threadsRef = ref(db, `threads/${currentUser}`);
    const off = onChildAdded(threadsRef, snap => {
      const id = snap.key;
      const otherUser = id.split('_').find(x => x !== currentUser);
      setThreads(prev =>
        prev.some(t => t.id === id) ? prev : [...prev, { id, otherUser, messages: [] }]
      );
    });
    return () => off();
  }, [currentUser]);

  // Messages listener
  useEffect(() => {
    if (!activeThread) return;
    const msgsRef = ref(db, `messages/${activeThread}`);
    const off = onChildAdded(msgsRef, snap => {
      const msg = snap.val();
      setThreads(prev =>
        prev.map(t =>
          t.id === activeThread ? { ...t, messages: [...t.messages, msg] } : t
        )
      );
    });
    return () => off();
  }, [activeThread]);

  const startChat = otherUserId => {
    const threadId = [currentUser, otherUserId].sort().join('_');
    set(ref(db, `threads/${currentUser}/${threadId}`), true);
    set(ref(db, `threads/${otherUserId}/${threadId}`), true);
    setActiveThread(threadId);
  };

  const sendReply = async () => {
    if (!reply && !imageFile) return;
    let imageUrl = '';
    if (imageFile) {
      const imgRef = storageRef(storage, `chatImages/${activeThread}/${Date.now()}_${imageFile.name}`);
      await uploadBytes(imgRef, imageFile);
      imageUrl = await getDownloadURL(imgRef);
    }
    const msg = { from: currentUser, text: reply, imageUrl, timestamp: Date.now() };
    await push(ref(db, `messages/${activeThread}`), msg);
    setReply('');
    setImageFile(null);
  };

  if (!currentUser) {
    return <div>Please log in to chat.</div>;
  }

  return (
    <div className="chat-container">
      <div className="chat-header">Your Messages</div>
      <div className="thread-list">
        {threads.map(t => (
          <button key={t.id} onClick={() => setActiveThread(t.id)}>
            Chat with {t.otherUser}
          </button>
        ))}
        <button onClick={() => startChat('demoUser123')}>
          Start Chat with Demo User
        </button>
      </div>

      {activeThread && (
        <div className="thread-window">
          <div className="messages">
            {(threads.find(t => t.id === activeThread)?.messages || []).map((m, i) => (
              <div key={i} className={m.from === currentUser ? 'sent' : 'received'}>
                {m.text}
                {m.imageUrl && <img src={m.imageUrl} alt="chat" className="chat-image" />}
                <div className="timestamp">{new Date(m.timestamp).toLocaleTimeString()}</div>
              </div>
            ))}
          </div>
          <div className="reply-box">
            <input
              type="text"
              value={reply}
              onChange={e => setReply(e.target.value)}
              placeholder="Type a message..."
            />
            <div className="emoji-picker">
              {emojis.map(e => (
                <span key={e} onClick={() => setReply(r => r + e)}>
                  {e}
                </span>
              ))}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={e => setImageFile(e.target.files[0])}
            />
            <button onClick={sendReply}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
