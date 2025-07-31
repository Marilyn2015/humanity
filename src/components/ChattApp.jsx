import React, { useState, useEffect } from 'react';
import './ChatApp.css';

const emojis = ['😀','😂','😍','😎','🔥','👍','🙏','🎉','❤️','😢'];

const ChatApp = ({ currentUser }) => {
  const [threads, setThreads] = useState({});
  const [messages, setMessages] = useState({});
  
  const renderThread = (otherUserId) => {
    if (!threads[otherUserId]) {
      setThreads(prev => ({
        ...prev,
        [otherUserId]: {
          messages: [],
          reply: '',
          image: null
        }
      }));
    }
  };

  const handleEmojiClick = (emoji, userId) => {
    setThreads(prev => ({
      ...prev,
      [userId]: {
        ...prev[userId],
        reply: prev[userId].reply + emoji
      }
    }));
  };

  const sendReply = (receiverId) => {
    const { reply, image } = threads[receiverId];
    if (!reply && !image) return;

    const newMessage = {
      from: currentUser,
      to: receiverId,
      text: reply,
      imageUrl: image && URL.createObjectURL(image),
      timestamp: Date.now()
    };

    setMessages(prev => ({
      ...prev,
      [receiverId]: [...(prev[receiverId] || []), newMessage]
    }));

    setThreads(prev => ({
      ...prev,
      [receiverId]: { ...prev[receiverId], reply: '', image: null }
    }));
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Your Messages</div>
      
      {Object.keys(threads).map(userId => (
        <div key={userId} className="message-thread">
          <div><strong>Conversation with:</strong> {userId}</div>
          <div className="messages">
            {(messages[userId] || []).map((msg, idx) => (
              <div key={idx} className={`message-box ${msg.from === currentUser ? 'sent' : 'received'}`}>
                {msg.text}
                {msg.imageUrl && <img src={msg.imageUrl} alt="chat" className="chat-image" />}
                <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </div>
              </div>
            ))}
          </div>
          <div className="reply-box">
            <input
              type="text"
              value={threads[userId].reply}
              onChange={(e) =>
                setThreads(prev => ({
                  ...prev,
                  [userId]: { ...prev[userId], reply: e.target.value }
                }))
              }
              placeholder="Type a message..."
            />
            <div className="emoji-picker">
              {emojis.map(e => (
                <span key={e} onClick={() => handleEmojiClick(e, userId)}>{e}</span>
              ))}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setThreads(prev => ({
                  ...prev,
                  [userId]: { ...prev[userId], image: e.target.files[0] }
                }))
              }
            />
            <button onClick={() => sendReply(userId)}>Send</button>
          </div>
        </div>
      ))}

      <button onClick={() => renderThread('demoUser123')}>Start Chat with Demo User</button>
    </div>
  );
};

export default ChatApp;
