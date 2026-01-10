import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { themeMode, setThemeMode, isDark } = useTheme();

  return (
    <div className="flex gap-2 bg-white/10 backdrop-blur-md rounded-full p-1.5 border border-white/20 shadow-lg">
      <button
        onClick={() => setThemeMode('light')}
        className={`p-2 sm:p-2.5 rounded-full transition-all ${
          themeMode === 'light' 
            ? 'bg-white text-yellow-500 shadow-lg' 
            : 'text-white/70 hover:text-white hover:bg-white/10'
        }`}
        title="Light Mode"
        aria-label="Light Mode"
      >
        <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button
        onClick={() => setThemeMode('dark')}
        className={`p-2 sm:p-2.5 rounded-full transition-all ${
          themeMode === 'dark' 
            ? 'bg-gray-800 text-blue-400 shadow-lg' 
            : 'text-white/70 hover:text-white hover:bg-white/10'
        }`}
        title="Dark Mode"
        aria-label="Dark Mode"
      >
        <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button
        onClick={() => setThemeMode('system')}
        className={`p-2 sm:p-2.5 rounded-full transition-all ${
          themeMode === 'system' 
            ? isDark ? 'bg-gray-800 text-purple-400 shadow-lg' : 'bg-white text-purple-600 shadow-lg'
            : 'text-white/70 hover:text-white hover:bg-white/10'
        }`}
        title="System Mode"
        aria-label="System Mode"
      >
        <Monitor className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
}