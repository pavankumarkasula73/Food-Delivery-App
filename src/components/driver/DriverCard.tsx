import React from 'react';
import { Star, Package, Calendar } from 'lucide-react';
import { DriverProfile } from '../../types/driver';
import { formatDate } from '../../utils/date';

interface DriverCardProps {
  driver: DriverProfile;
}

const DriverCard: React.FC<DriverCardProps> = ({ driver }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center gap-4">
        <img
          src={driver.photo}
          alt={driver.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{driver.name}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>{driver.rating.toFixed(1)} Rating</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Package className="w-4 h-4" />
          <span>{driver.deliveries} Deliveries</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
          <Calendar className="w-4 h-4" />
          <span>Joined {formatDate(driver.joinedDate)}</span>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;