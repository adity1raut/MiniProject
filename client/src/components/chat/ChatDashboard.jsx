import React, { useState } from 'react';
import { Send, Phone, Video, MoreVertical, Search, Users, User, MessageSquare, Image, Paperclip, Smile, X, Home, Settings, LogOut, Bell, Zap, Bot, Menu, ChevronDown, Shield, Palette, Moon, Globe, HelpCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggle from '../common/ThemeToggle';
import Sidebar from '../common/Sidebar';
import SettingsModal from '../common/SettingsModal';

export default function ChatDashboard() {
  const { isDark } = useTheme();
  const [currentView, setCurrentView] = useState('home');
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [isVideoCall, setIsVideoCall] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [aiEnabled, setAiEnabled] = useState(true);
  const [notifications, setNotifications] = useState(true);

  const contacts = [
    { id: 1, name: 'Sarah Johnson', status: 'online', lastMessage: 'Hey, how are you?', time: '2m ago', unread: 2, type: 'user', avatar: '👩‍💼' },
    { id: 2, name: 'Marketing Team', status: '12 members', lastMessage: 'John: Meeting at 3 PM', time: '15m ago', unread: 5, type: 'group', avatar: '📢' },
    { id: 3, name: 'Michael Chen', status: 'online', lastMessage: 'Thanks for the update', time: '1h ago', unread: 0, type: 'user', avatar: '👨‍💻' },
    { id: 4, name: 'Design Squad', status: '8 members', lastMessage: 'Emma: New mockups ready', time: '2h ago', unread: 3, type: 'group', avatar: '🎨' },
    { id: 5, name: 'Emily Rodriguez', status: 'away', lastMessage: 'See you tomorrow!', time: '3h ago', unread: 0, type: 'user', avatar: '👩‍🎨' },
    { id: 6, name: 'Development Team', status: '15 members', lastMessage: 'Alex: Code review needed', time: '4h ago', unread: 1, type: 'group', avatar: '💻' },
  ];

  const stats = [
    { label: 'Total Messages', value: '1,284', icon: MessageSquare, color: 'blue' },
    { label: 'Active Chats', value: '23', icon: Users, color: 'green' },
    { label: 'Video Calls', value: '47', icon: Video, color: 'purple' },
    { label: 'AI Responses', value: '156', icon: Bot, color: 'orange' },
  ];

  const recentActivity = [
    { user: 'Sarah Johnson', action: 'sent you a message', time: '2 minutes ago', avatar: '👩‍💼' },
    { user: 'Marketing Team', action: 'new message in group', time: '15 minutes ago', avatar: '📢' },
    { user: 'AI Assistant', action: 'suggested a response', time: '1 hour ago', avatar: '🤖' },
    { user: 'Michael Chen', action: 'started a video call', time: '2 hours ago', avatar: '👨‍💻' },
  ];

  const messages = selectedChat ? [
    { id: 1, sender: 'them', text: 'Hey! How\'s the project going?', time: '10:30 AM' },
    { id: 2, sender: 'me', text: 'Going well! Just finished the dashboard design.', time: '10:32 AM' },
    { id: 3, sender: 'ai', text: '💡 AI Suggestion: You might want to mention the new features you added', time: '10:32 AM' },
    { id: 4, sender: 'them', text: 'That\'s great! Can you share a preview?', time: '10:33 AM' },
    { id: 5, sender: 'me', text: 'Sure, I\'ll send it over in a few minutes.', time: '10:35 AM' },
  ] : [];

  const filteredContacts = contacts.filter(contact => {
    if (activeTab === 'users') return contact.type === 'user';
    if (activeTab === 'groups') return contact.type === 'group';
    return true;
  });

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage('');
    }
  };

  const handleLogout = () => {
    alert('Logging out...');
  };

  // Homepage Dashboard
  const HomePage = () => (
    <div className={`flex-1 overflow-y-auto p-6 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900' 
        : 'bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-white'} mb-2`}>Welcome back, John! 👋</h1>
          <p className={`${isDark ? 'text-gray-300' : 'text-white/90'}`}>Here's what's happening with your conversations today</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className={`${
              isDark ? 'bg-gray-800/80 backdrop-blur-xl border-gray-700/50' : 'bg-white/90 backdrop-blur-xl border-white/50'
            } border rounded-xl p-6 shadow-lg hover:shadow-xl transition`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                  stat.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  stat.color === 'green' ? 'from-green-500 to-green-600' :
                  stat.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  'from-orange-500 to-orange-600'
                } flex items-center justify-center shadow-lg`}>
                  <stat.icon size={24} className="text-white" />
                </div>
                <span className="text-green-500 text-sm font-medium">↑ 12%</span>
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-1`}>{stat.value}</h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className={`lg:col-span-2 ${
            isDark ? 'bg-gray-800/80 backdrop-blur-xl border-gray-700/50' : 'bg-white/90 backdrop-blur-xl border-white/50'
          } border rounded-xl shadow-lg p-6`}>
            <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-4`}>Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className={`flex items-center gap-4 p-3 ${isDark ? 'hover:bg-gray-700/50' : 'hover:bg-white/50'} rounded-lg transition`}>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-xl shadow-md">
                    {activity.avatar}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                      <span className="font-semibold">{activity.user}</span> {activity.action}
                    </p>
                    <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Enhancement Panel */}
          <div className="bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 rounded-xl shadow-lg p-6 text-white">
            <div className="flex items-center gap-2 mb-4">
              <Bot size={24} />
              <h2 className="text-xl font-bold">AI Assistant</h2>
            </div>
            <p className="text-purple-100 mb-6">Your AI-powered chat companion is active and helping you communicate better!</p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4 border border-white/30">
              <h3 className="font-semibold mb-2">Today's AI Insights</h3>
              <ul className="space-y-2 text-sm text-purple-100">
                <li>✓ 23 smart replies suggested</li>
                <li>✓ 8 messages auto-translated</li>
                <li>✓ 5 meetings scheduled</li>
              </ul>
            </div>
            <button 
              onClick={() => setAiEnabled(!aiEnabled)}
              className="w-full bg-white text-purple-600 py-2 rounded-lg font-semibold hover:bg-purple-50 transition shadow-md"
            >
              {aiEnabled ? 'AI Enabled ✓' : 'Enable AI'}
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className={`mt-8 ${
          isDark ? 'bg-gray-800/80 backdrop-blur-xl border-gray-700/50' : 'bg-white/90 backdrop-blur-xl border-white/50'
        } border rounded-xl shadow-lg p-6`}>
          <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-4`}>Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button 
              onClick={() => setCurrentView('chat')}
              className={`p-4 border-2 ${
                isDark ? 'border-gray-700/50 hover:border-blue-500 hover:bg-blue-900/20' : 'border-white/50 hover:border-blue-500 hover:bg-blue-500/20'
              } rounded-lg transition shadow-sm hover:shadow-md backdrop-blur-sm bg-white/10`}
            >
              <MessageSquare className="mx-auto mb-2 text-blue-500" size={24} />
              <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>New Chat</p>
            </button>
            <button className={`p-4 border-2 ${
              isDark ? 'border-gray-700/50 hover:border-green-500 hover:bg-green-900/20' : 'border-white/50 hover:border-green-500 hover:bg-green-500/20'
            } rounded-lg transition shadow-sm hover:shadow-md backdrop-blur-sm bg-white/10`}>
              <Video className="mx-auto mb-2 text-green-500" size={24} />
              <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>Start Call</p>
            </button>
            <button className={`p-4 border-2 ${
              isDark ? 'border-gray-700/50 hover:border-purple-500 hover:bg-purple-900/20' : 'border-white/50 hover:border-purple-500 hover:bg-purple-500/20'
            } rounded-lg transition shadow-sm hover:shadow-md backdrop-blur-sm bg-white/10`}>
              <Users className="mx-auto mb-2 text-purple-500" size={24} />
              <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>New Group</p>
            </button>
            <button 
              onClick={() => setShowSettingsModal(true)}
              className={`p-4 border-2 ${
                isDark ? 'border-gray-700/50 hover:border-orange-500 hover:bg-orange-900/20' : 'border-white/50 hover:border-orange-500 hover:bg-orange-500/20'
              } rounded-lg transition shadow-sm hover:shadow-md backdrop-blur-sm bg-white/10`}
            >
              <Settings className="mx-auto mb-2 text-orange-500" size={24} />
              <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>Settings</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`flex h-screen ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900' 
        : 'bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400'
    } transition-colors duration-500`}>
      {/* Theme Toggle - Similar to Login Page */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Use the extracted Sidebar component */}
      <Sidebar 
        currentView={currentView}
        setCurrentView={setCurrentView}
        showUserMenu={showUserMenu}
        setShowUserMenu={setShowUserMenu}
        setShowSettingsModal={setShowSettingsModal}
        handleLogout={handleLogout}
      />

      {/* Main Content */}
      {currentView === 'home' ? (
        <HomePage />
      ) : (
        <>
          {/* Chat Sidebar */}
          <div className={`w-80 ${
            isDark ? 'bg-gray-800/80 backdrop-blur-xl border-gray-700/50' : 'bg-white/90 backdrop-blur-xl border-white/50'
          } border-r flex flex-col`}>
            <div className={`p-4 border-b ${isDark ? 'border-gray-700/50' : 'border-white/50'}`}>
              <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-800'} mb-4`}>Messages</h1>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className={`w-full pl-10 pr-4 py-2 ${
                    isDark ? 'bg-gray-700/50 text-white placeholder-gray-400' : 'bg-white/50 text-gray-800 placeholder-gray-500'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm`}
                />
              </div>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition ${
                    activeTab === 'all' 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md' 
                      : `${isDark ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50' : 'bg-white/50 text-gray-600 hover:bg-white/70'}`
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveTab('users')}
                  className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition ${
                    activeTab === 'users' 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md' 
                      : `${isDark ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50' : 'bg-white/50 text-gray-600 hover:bg-white/70'}`
                  }`}
                >
                  Users
                </button>
                <button
                  onClick={() => setActiveTab('groups')}
                  className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition ${
                    activeTab === 'groups' 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md' 
                      : `${isDark ? 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50' : 'bg-white/50 text-gray-600 hover:bg-white/70'}`
                  }`}
                >
                  Groups
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {filteredContacts.map(contact => (
                <div
                  key={contact.id}
                  onClick={() => setSelectedChat(contact)}
                  className={`p-4 ${isDark ? 'border-gray-700/50' : 'border-white/50'} border-b cursor-pointer transition ${
                    isDark ? 'hover:bg-gray-700/50' : 'hover:bg-white/50'
                  } ${
                    selectedChat?.id === contact.id ? (isDark ? 'bg-gray-700/50' : 'bg-purple-100/50') : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-2xl shadow-md">
                        {contact.avatar}
                      </div>
                      {contact.type === 'user' && contact.status === 'online' && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'} truncate`}>{contact.name}</h3>
                        <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{contact.time}</span>
                      </div>
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} truncate`}>{contact.lastMessage}</p>
                      <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} mt-1`}>{contact.status}</p>
                    </div>
                    {contact.unread > 0 && (
                      <div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                        {contact.unread}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {selectedChat ? (
              <>
                <div className={`${
                  isDark ? 'bg-gray-800/80 backdrop-blur-xl border-gray-700/50' : 'bg-white/90 backdrop-blur-xl border-white/50'
                } border-b p-4 flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-xl shadow-md">
                      {selectedChat.avatar}
                    </div>
                    <div>
                      <h2 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>{selectedChat.name}</h2>
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>{selectedChat.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {aiEnabled && (
                      <div className="flex items-center gap-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm shadow-md">
                        <Bot size={16} />
                        <span>AI Active</span>
                      </div>
                    )}
                    <button className={`p-2 ${isDark ? 'hover:bg-gray-700/50' : 'hover:bg-white/50'} rounded-lg transition`}>
                      <Phone size={20} className={isDark ? 'text-gray-300' : 'text-gray-600'} />
                    </button>
                    <button 
                      onClick={() => setIsVideoCall(true)}
                      className={`p-2 ${isDark ? 'hover:bg-gray-700/50' : 'hover:bg-white/50'} rounded-lg transition`}
                    >
                      <Video size={20} className={isDark ? 'text-gray-300' : 'text-gray-600'} />
                    </button>
                    <button className={`p-2 ${isDark ? 'hover:bg-gray-700/50' : 'hover:bg-white/50'} rounded-lg transition`}>
                      <MoreVertical size={20} className={isDark ? 'text-gray-300' : 'text-gray-600'} />
                    </button>
                  </div>
                </div>

                {isVideoCall && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 z-50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-6xl mx-auto mb-6 shadow-2xl">
                        {selectedChat.avatar}
                      </div>
                      <h2 className="text-2xl font-semibold text-white mb-2">{selectedChat.name}</h2>
                      <p className="text-gray-300 mb-8">Calling...</p>
                      <div className="flex gap-4 justify-center">
                        <button className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center hover:from-green-600 hover:to-green-700 transition shadow-xl">
                          <Video size={24} className="text-white" />
                        </button>
                        <button 
                          onClick={() => setIsVideoCall(false)}
                          className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:from-red-600 hover:to-red-700 transition shadow-xl"
                        >
                          <X size={24} className="text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className={`flex-1 overflow-y-auto p-6 ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900' 
                    : 'bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400'
                }`}>
                  {messages.map(msg => (
                    <div
                      key={msg.id}
                      className={`flex mb-4 ${msg.sender === 'me' ? 'justify-end' : msg.sender === 'ai' ? 'justify-center' : 'justify-start'}`}
                    >
                      {msg.sender === 'ai' ? (
                        <div className={`max-w-md ${
                          isDark ? 'bg-purple-100 border-purple-200 text-purple-800' : 'bg-white/90 border-white/50 text-purple-800'
                        } border px-4 py-2 rounded-lg text-sm flex items-center gap-2 shadow-md backdrop-blur-sm`}>
                          <Bot size={16} />
                          <span>{msg.text}</span>
                        </div>
                      ) : (
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl shadow-md ${
                            msg.sender === 'me'
                              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-br-none'
                              : `${isDark ? 'bg-gray-800/80 backdrop-blur-sm text-gray-200' : 'bg-white/90 backdrop-blur-sm text-gray-800'} rounded-bl-none`
                          }`}
                        >
                          <p className="text-sm">{msg.text}</p>
                          <p className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-purple-100' : (isDark ? 'text-gray-400' : 'text-gray-500')}`}>
                            {msg.time}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className={`${
                  isDark ? 'bg-gray-800/80 backdrop-blur-xl border-gray-700/50' : 'bg-white/90 backdrop-blur-xl border-white/50'
                } border-t p-4`}>
                  <div className="flex items-center gap-2">
                    <button className={`p-2 ${isDark ? 'hover:bg-gray-700/50' : 'hover:bg-white/50'} rounded-lg transition`}>
                      <Paperclip size={20} className={isDark ? 'text-gray-300' : 'text-gray-600'} />
                    </button>
                    <button className={`p-2 ${isDark ? 'hover:bg-gray-700/50' : 'hover:bg-white/50'} rounded-lg transition`}>
                      <Image size={20} className={isDark ? 'text-gray-300' : 'text-gray-600'} />
                    </button>
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type a message..."
                      className={`flex-1 px-4 py-2 ${
                        isDark ? 'bg-gray-700/50 text-white placeholder-gray-400' : 'bg-white/50 text-gray-800 placeholder-gray-500'
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm`}
                    />
                    {aiEnabled && (
                      <button className={`p-2 ${isDark ? 'hover:bg-purple-900/30' : 'hover:bg-purple-100/50'} rounded-lg transition`}>
                        <Bot size={20} className="text-purple-500" />
                      </button>
                    )}
                    <button className={`p-2 ${isDark ? 'hover:bg-gray-700/50' : 'hover:bg-white/50'} rounded-lg transition`}>
                      <Smile size={20} className={isDark ? 'text-gray-300' : 'text-gray-600'} />
                    </button>
                    <button
                      onClick={handleSendMessage}
                      className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-lg transition shadow-md"
                    >
                      <Send size={20} className="text-white" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className={`flex-1 flex items-center justify-center ${
                isDark 
                  ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900' 
                  : 'bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400'
              }`}>
                <div className="text-center">
                  <div className={`w-24 h-24 ${
                    isDark ? 'bg-purple-900/30' : 'bg-white/30'
                  } backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <MessageSquare size={40} className={isDark ? 'text-purple-500' : 'text-white'} />
                  </div>
                  <h2 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-white'} mb-2`}>Select a conversation</h2>
                  <p className={isDark ? 'text-gray-300' : 'text-white/90'}>Choose a contact or group to start chatting</p>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {/* Use the extracted SettingsModal component */}
      <SettingsModal 
        showSettingsModal={showSettingsModal}
        setShowSettingsModal={setShowSettingsModal}
        aiEnabled={aiEnabled}
        setAiEnabled={setAiEnabled}
        notifications={notifications}
        setNotifications={setNotifications}
      />
    </div>
  );
}