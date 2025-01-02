import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface DeliveryStatusProps {
  status: 'delivered' | 'pending' | 'cancelled';
}

const DeliveryStatus: React.FC<DeliveryStatusProps> = ({ status }) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'pending':
        return <XCircle className="w-6 h-6 text-yellow-500" />;
      case 'cancelled':
        return <XCircle className="w-6 h-6 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'delivered':
        return 'Delivered';
      case 'pending':
        return 'Pending';
      case 'cancelled':
        return 'Cancelled';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {getStatusIcon()}
      <span className="text-lg font-semibold">{getStatusText()}</span>
    </div>
  );
};

export default DeliveryStatus;