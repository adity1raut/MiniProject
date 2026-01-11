import React, { useState } from 'react';
import { MessageSquare, Video, Users, Bot } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggle from '../common/ThemeToggle';
import Sidebar from '../common/Sidebar';
import SettingsModal from '../common/SettingsModal';
import MainDashboard from './MainDashboard';
import ChatPage from './ChatPage';

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

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage('');
    }
  };

  const handleLogout = () => {
    alert('Logging out...');
  };

  return (
    <div className={`flex h-screen ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900' 
        : 'bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400'
    } transition-colors duration-500`}>
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Sidebar */}
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
        <MainDashboard 
          stats={stats}
          recentActivity={recentActivity}
          aiEnabled={aiEnabled}
          setAiEnabled={setAiEnabled}
          setCurrentView={setCurrentView}
          setShowSettingsModal={setShowSettingsModal}
        />
      ) : (
        <ChatPage 
          contacts={contacts}
          selectedChat={selectedChat}
          setSelectedChat={setSelectedChat}
          message={message}
          setMessage={setMessage}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isVideoCall={isVideoCall}
          setIsVideoCall={setIsVideoCall}
          aiEnabled={aiEnabled}
          handleSendMessage={handleSendMessage}
        />
      )}

      {/* Settings Modal */}
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