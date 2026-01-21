import React from "react";
import { X, Bot, Bell, Shield, HelpCircle } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function SettingsModal({
  showSettingsModal,
  setShowSettingsModal,
  aiEnabled,
  setAiEnabled,
  notifications,
  setNotifications,
}) {
  const { isDark } = useTheme();

  if (!showSettingsModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div
        className={`${isDark ? "bg-gray-800" : "bg-white"} rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}
      >
        <div
          className={`p-6 ${isDark ? "border-gray-700" : "border-gray-200"} border-b flex items-center justify-between sticky top-0 ${isDark ? "bg-gray-800" : "bg-white"}`}
        >
          <h2
            className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-800"}`}
          >
            Settings
          </h2>
          <button
            onClick={() => setShowSettingsModal(false)}
            className={`p-2 ${isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"} rounded-lg`}
          >
            <X
              size={24}
              className={isDark ? "text-gray-300" : "text-gray-800"}
            />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* AI Enhancement Settings */}
          <div
            className={`border-b ${isDark ? "border-gray-700" : "border-gray-200"} pb-6`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-10 h-10 ${isDark ? "bg-purple-900/30" : "bg-purple-100"} rounded-lg flex items-center justify-center`}
              >
                <Bot size={20} className="text-purple-500" />
              </div>
              <div>
                <h3
                  className={`font-semibold ${isDark ? "text-white" : "text-gray-800"}`}
                >
                  AI Enhancement
                </h3>
                <p
                  className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                >
                  Intelligent chat assistance
                </p>
              </div>
            </div>
            <div className="space-y-3 ml-13">
              <label className="flex items-center justify-between">
                <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                  Enable AI Suggestions
                </span>
                <input
                  type="checkbox"
                  checked={aiEnabled}
                  onChange={(e) => setAiEnabled(e.target.checked)}
                  className="w-12 h-6 rounded-full appearance-none cursor-pointer bg-gray-300 checked:bg-blue-500 relative transition"
                />
              </label>
              <label className="flex items-center justify-between">
                <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                  Auto-translate Messages
                </span>
                <input
                  type="checkbox"
                  className="w-12 h-6 rounded-full appearance-none cursor-pointer bg-gray-300 checked:bg-blue-500 relative transition"
                />
              </label>
              <label className="flex items-center justify-between">
                <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                  Smart Reply
                </span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-12 h-6 rounded-full appearance-none cursor-pointer bg-gray-300 checked:bg-blue-500 relative transition"
                />
              </label>
            </div>
          </div>

          {/* Notification Settings */}
          <div
            className={`border-b ${isDark ? "border-gray-700" : "border-gray-200"} pb-6`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-10 h-10 ${isDark ? "bg-blue-900/30" : "bg-blue-100"} rounded-lg flex items-center justify-center`}
              >
                <Bell size={20} className="text-blue-500" />
              </div>
              <div>
                <h3
                  className={`font-semibold ${isDark ? "text-white" : "text-gray-800"}`}
                >
                  Notifications
                </h3>
                <p
                  className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                >
                  Manage your alerts
                </p>
              </div>
            </div>
            <div className="space-y-3 ml-13">
              <label className="flex items-center justify-between">
                <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                  Push Notifications
                </span>
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                  className="w-12 h-6 rounded-full appearance-none cursor-pointer bg-gray-300 checked:bg-blue-500 relative transition"
                  defaultChecked
                />
              </label>
              <label className="flex items-center justify-between">
                <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                  Email Notifications
                </span>
                <input
                  type="checkbox"
                  className="w-12 h-6 rounded-full appearance-none cursor-pointer bg-gray-300 checked:bg-blue-500 relative transition"
                />
              </label>
              <label className="flex items-center justify-between">
                <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                  Sound Alerts
                </span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-12 h-6 rounded-full appearance-none cursor-pointer bg-gray-300 checked:bg-blue-500 relative transition"
                />
              </label>
            </div>
          </div>

          {/* Privacy & Security */}
          <div
            className={`border-b ${isDark ? "border-gray-700" : "border-gray-200"} pb-6`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-10 h-10 ${isDark ? "bg-red-900/30" : "bg-red-100"} rounded-lg flex items-center justify-center`}
              >
                <Shield size={20} className="text-red-500" />
              </div>
              <div>
                <h3
                  className={`font-semibold ${isDark ? "text-white" : "text-gray-800"}`}
                >
                  Privacy & Security
                </h3>
                <p
                  className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                >
                  Control your data
                </p>
              </div>
            </div>
            <div className="space-y-3 ml-13">
              <button
                className={`w-full text-left ${isDark ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-500"}`}
              >
                Change Password
              </button>
              <button
                className={`w-full text-left ${isDark ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-500"}`}
              >
                Two-Factor Authentication
              </button>
              <button
                className={`w-full text-left ${isDark ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-500"}`}
              >
                Privacy Settings
              </button>
            </div>
          </div>

          {/* Help & Support */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-10 h-10 ${isDark ? "bg-yellow-900/30" : "bg-yellow-100"} rounded-lg flex items-center justify-center`}
              >
                <HelpCircle size={20} className="text-yellow-500" />
              </div>
              <div>
                <h3
                  className={`font-semibold ${isDark ? "text-white" : "text-gray-800"}`}
                >
                  Help & Support
                </h3>
                <p
                  className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                >
                  Get assistance
                </p>
              </div>
            </div>
            <div className="space-y-3 ml-13">
              <button
                className={`w-full text-left ${isDark ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-500"}`}
              >
                Help Center
              </button>
              <button
                className={`w-full text-left ${isDark ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-500"}`}
              >
                Contact Support
              </button>
              <button
                className={`w-full text-left ${isDark ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-500"}`}
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
