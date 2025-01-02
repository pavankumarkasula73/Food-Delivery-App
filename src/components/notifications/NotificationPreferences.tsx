import { useNotifications } from '../../contexts/NotificationContext';

const NotificationPreferences: React.FC = () => {
  const { preferences, updatePreferences } = useNotifications();

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={preferences.orders}
              onChange={(e) => updatePreferences({ orders: e.target.checked })}
              className="w-4 h-4 text-[#4CAF50] rounded focus:ring-[#4CAF50]"
            />
            <span>Order Updates</span>
          </label>
          <p className="text-sm text-gray-500">Get updates about your orders</p>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={preferences.promotions}
              onChange={(e) => updatePreferences({ promotions: e.target.checked })}
              className="w-4 h-4 text-[#4CAF50] rounded focus:ring-[#4CAF50]"
            />
            <span>Promotions</span>
          </label>
          <p className="text-sm text-gray-500">Receive special offers and deals</p>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={preferences.reminders}
              onChange={(e) => updatePreferences({ reminders: e.target.checked })}
              className="w-4 h-4 text-[#4CAF50] rounded focus:ring-[#4CAF50]"
            />
            <span>Reminders</span>
          </label>
          <p className="text-sm text-gray-500">Get reminded about pending actions</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationPreferences;