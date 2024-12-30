import React, { useState } from 'react';
import { Bell, Settings } from 'lucide-react';
import { useNotifications } from '../../contexts/NotificationContext';
import NotificationList from './NotificationList';
import NotificationHeader from './NotificationHeader';

const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { unreadCount } = useNotifications();

  return (
    <div className="relative">
      <button 
        className="relative p-2 hover:bg-gray-100 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#4CAF50] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg overflow-hidden z-50">
          <NotificationHeader />
          <NotificationList />
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;