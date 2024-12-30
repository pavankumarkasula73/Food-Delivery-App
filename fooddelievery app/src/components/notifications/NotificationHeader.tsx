import React from 'react';
import { Settings } from 'lucide-react';
import { useNotifications } from '../../contexts/NotificationContext';

const NotificationHeader = () => {
  const { clearAll } = useNotifications();

  return (
    <div className="p-4 border-b flex justify-between items-center">
      <h3 className="font-semibold">Notifications</h3>
      <div className="flex gap-2">
        <button 
          onClick={clearAll} 
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Clear All
        </button>
        <Settings className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
      </div>
    </div>
  );
};

export default NotificationHeader;