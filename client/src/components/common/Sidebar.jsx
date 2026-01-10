import React from 'react';

const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const ChatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const BellIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v6m0 6v6m5.66-13.66l-4.24 4.24m-2.83 2.83l-4.24 4.24M23 12h-6m-6 0H1m18.66 5.66l-4.24-4.24m-2.83-2.83l-4.24-4.24"/>
  </svg>
);

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const LogoutIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);

export default function Sidebar({ 
  currentView, 
  setCurrentView, 
  showUserMenu, 
  setShowUserMenu, 
  setShowSettingsModal,
  handleLogout 
}) {
  return (
    <div className="w-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center py-6 gap-4 shadow-2xl border-r border-slate-700/50">
      <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-lg hover:scale-105 transition-transform cursor-pointer">
        C
      </div>
      
      <button 
        onClick={() => setCurrentView('home')}
        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-200 ${
          currentView === 'home' 
            ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/50 scale-105' 
            : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
        }`}
      >
        <HomeIcon />
      </button>
      
      <button 
        onClick={() => setCurrentView('chat')}
        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-200 ${
          currentView === 'chat' 
            ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/50 scale-105' 
            : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
        }`}
      >
        <ChatIcon />
      </button>

      <button className="w-14 h-14 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-200 relative">
        <BellIcon />
        <span className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-red-500 to-pink-600 rounded-full animate-pulse shadow-lg shadow-red-500/50"></span>
      </button>

      <button 
        onClick={() => setShowSettingsModal(true)}
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-200"
      >
        <SettingsIcon />
      </button>

      <div className="flex-1"></div>

      <div className="relative">
        <button 
          onClick={() => setShowUserMenu(!showUserMenu)}
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-2xl shadow-lg hover:scale-105 transition-transform"
        >
          👤
        </button>
        {showUserMenu && (
          <div className="absolute bottom-0 left-24 bg-slate-800 rounded-2xl shadow-2xl py-3 w-56 z-50 border border-slate-700">
            <div className="px-4 py-3 border-b border-slate-700">
              <p className="font-semibold text-white">John Doe</p>
              <p className="text-sm text-slate-400">john@example.com</p>
            </div>
            <button className="w-full px-4 py-3 text-left hover:bg-slate-700/50 flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
              <UserIcon />
              <span>Profile</span>
            </button>
            <button 
              onClick={() => setShowSettingsModal(true)}
              className="w-full px-4 py-3 text-left hover:bg-slate-700/50 flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
            >
              <SettingsIcon />
              <span>Settings</span>
            </button>
            <button 
              onClick={handleLogout}
              className="w-full px-4 py-3 text-left hover:bg-red-500/10 flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors"
            >
              <LogoutIcon />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}