# 📁 React Frontend Directory Structure

```
frontend/
│
├── public/
│   ├── icons/
│   ├── images/
│   └── index.html
│
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── Loader.jsx
│   │   │
│   │   ├── auth/
│   │   │   ├── LoginForm.jsx
│   │   │   └── RegisterForm.jsx
│   │   │
│   │   ├── chat/
│   │   │   ├── ChatWindow.jsx
│   │   │   ├── MessageBubble.jsx
│   │   │   ├── MessageInput.jsx
│   │   │   ├── TypingIndicator.jsx
│   │   │   └── ChatHeader.jsx
│   │   │
│   │   ├── group/
│   │   │   ├── CreateGroupModal.jsx
│   │   │   ├── GroupList.jsx
│   │   │   └── GroupMembers.jsx
│   │   │
│   │   ├── video/
│   │   │   ├── VideoGrid.jsx
│   │   │   ├── VideoControls.jsx
│   │   │   ├── ParticipantTile.jsx
│   │   │   └── ScreenShare.jsx
│   │   │
│   │   └── ai/
│   │       ├── SmartReply.jsx
│   │       ├── ChatSummary.jsx
│   │       └── SentimentBadge.jsx
│
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Chat.jsx
│   │   ├── GroupChat.jsx
│   │   ├── VideoRoom.jsx
│   │   └── Settings.jsx
│
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── SocketContext.jsx
│   │   ├── ChatContext.jsx
│   │   └── VideoContext.jsx
│
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useSocket.js
│   │   ├── useChat.js
│   │   └── useVideoCall.js
│
│   ├── services/
│   │   ├── api.js
│   │   ├── auth.service.js
│   │   ├── chat.service.js
│   │   ├── group.service.js
│   │   ├── video.service.js
│   │   └── ai.service.js
│
│   ├── store/                    # Optional (Redux / Zustand)
│   │   ├── index.js
│   │   ├── authSlice.js
│   │   ├── chatSlice.js
│   │   └── videoSlice.js
│
│   ├── utils/
│   │   ├── socketEvents.js
│   │   ├── constants.js
│   │   └── helpers.js
│
│   ├── styles/
│   │   ├── index.css
│   │   └── theme.css
│
│   ├── config/
│   │   ├── env.js
│   │   └── webrtc.config.js
│
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧠 Why This Structure Is **Industry-Level**

### ✅ Clear Separation

* **components/** → UI blocks
* **pages/** → Route-level screens
* **context/** → Real-time global state
* **hooks/** → Logic abstraction
* **services/** → API & Socket logic
* **ai/** → AI-only features (clean & modular)

### ✅ Real-Time Ready

* Single WebSocket connection via `SocketContext`
* WebRTC logic isolated in `useVideoCall`
* Events centralized in `socketEvents.js`

### ✅ Easy to Scale

* Add voice calls / screen sharing easily
* Replace Context with Redux without refactor
* AI features stay isolated
