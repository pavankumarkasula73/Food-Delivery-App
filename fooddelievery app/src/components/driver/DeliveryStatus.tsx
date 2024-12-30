import React from 'react';
import { MapPin, Clock, Check } from 'lucide-react';
import { DriverProfile } from '../../types/driver';

interface DeliveryStatusProps {
  driver: DriverProfile;
  estimatedTime: string;
  currentLocation: string;
  status: 'picking' | 'delivering' | 'completed';
}

const DeliveryStatus = ({ driver, estimatedTime, currentLocation, status }: DeliveryStatusProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'picking': return 'text-yellow-600';
      case 'delivering': return 'text-blue-600';
      case 'completed': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'picking': return 'Picking up your order';
      case 'delivering': return 'On the way to you';
      case 'completed': return 'Delivered';
      default: return '';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={driver.photo}
          alt={driver.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">{driver.name}</h3>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>{driver.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Clock className={`w-5 h-5 ${getStatusColor()}`} />
          <span>Estimated delivery: {estimatedTime}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <MapPin className={`w-5 h-5 ${getStatusColor()}`} />
          <span>{currentLocation}</span>
        </div>

        <div className="flex items-center gap-2">
          <Check className={`w-5 h-5 ${getStatusColor()}`} />
          <span>{getStatusText()}</span>
        </div>
      </div>
    </div>
  );
}