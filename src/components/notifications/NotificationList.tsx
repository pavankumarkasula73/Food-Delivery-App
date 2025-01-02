import { useNotifications } from '../../contexts/NotificationContext';
import NotificationItem from './NotificationItem';

const NotificationList = () => {
  const { notifications } = useNotifications();

  if (notifications.length === 0) {
    return <div className="p-4 text-center text-gray-500">No notifications</div>;
  }

  return (
    <div className="max-h-96 overflow-y-auto">
      {notifications.map(notification => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationList;