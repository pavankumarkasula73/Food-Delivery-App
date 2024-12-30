import React from 'react';
import { useNotifications } from '../../contexts/NotificationContext';

interface NotificationItemProps {
  notification: {
    id: string;
    message: string;
    read: boolean;
    timestamp: Date;
  };
}

const NotificationItem = ({ notification }: NotificationItemProps) => {
  const { markAsRead } = useNotifications();

  return (
    <div
      className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${
        !notification.read ? 'bg-gray-50' : ''
      }`}
      onClick={() => markAsRead(notification.id)}
    >
      <div className="text-sm">{notification.message}</div>
      <div className="text-xs text-gray-500 mt-1">
        {notification.timestamp.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default NotificationItem;