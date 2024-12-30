import React from 'react';
import { Star, Package, Calendar } from 'lucide-react';
import { DriverProfile } from '../../types/driver';
import { formatDate } from '../../utils/date';

interface DriverCardProps {
  driver: DriverProfile;
}

const DriverCard = ({ driver }: DriverCardProps) => {
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
        <div className="ml-auto">
          <span className={`px-2 py-1 rounded-full text-sm ${
            driver.isOnline ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
          }`}>
            {driver.isOnline ? 'Online' : 'Offline'}
          </span>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-[#4CAF50]" />
          <span>{driver.totalDeliveries} Deliveries</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#4CAF50]" />
          <span>Joined {formatDate(driver.joinedDate)}</span>
        </div>
      </div>
    </div>
  );
}