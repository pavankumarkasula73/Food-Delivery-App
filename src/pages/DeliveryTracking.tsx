import React, { useState } from 'react';
import DriverCard from '../components/driver/DriverCard';
import DeliveryStatus from '../components/driver/DeliveryStatus';
import RatingForm from '../components/driver/RatingForm';
import { DriverProfile } from '../types/driver';

const DeliveryTracking = () => {
  const [driver] = useState<DriverProfile>({
    id: '1',
    name: 'John Doe',
    photo: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400',
    rating: 4.8,
    totalDeliveries: 1250,
    joinedDate: new Date('2023-01-15'),
    isOnline: true,
    currentOrder: 'ORDER123'
  });

  const [showRating, setShowRating] = useState(false);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Track Your Delivery</h1>
      
      <div className="space-y-6">
        <DriverCard driver={driver} />
        
        <DeliveryStatus
          driver={driver}
          estimatedTime="15-20 mins"
          currentLocation="2.5 km away"
          status="delivering"
        />

        {showRating && (
          <RatingForm
            driverId={driver.id}
            orderId={driver.currentOrder!}
            onSubmit={(rating, comment) => {
              console.log('Rating submitted:', { rating, comment });
              setShowRating(false);
            }}
          />
        )}
      </div>
    </div>
  );
}