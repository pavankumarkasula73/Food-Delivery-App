import React, { useState } from 'react';
import { Upload, Clock, MapPin } from 'lucide-react';

interface RestaurantFormData {
  name: string;
  address: string;
  cuisine: string;
  openingTime: string;
  closingTime: string;
  minOrderValue: number;
  deliveryRadius: number;
}

const RestaurantForm = () => {
  const [formData, setFormData] = useState<RestaurantFormData>({
    name: '',
    address: '',
    cuisine: '',
    openingTime: '',
    closingTime: '',
    minOrderValue: 0,
    deliveryRadius: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Restaurant data:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Register Your Restaurant</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Restaurant Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <textarea
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
            rows={3}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Opening Time</label>
            <input
              type="time"
              value={formData.openingTime}
              onChange={(e) => setFormData({...formData, openingTime: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Closing Time</label>
            <input
              type="time"
              value={formData.closingTime}
              onChange={(e) => setFormData({...formData, closingTime: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#4CAF50] text-white py-3 rounded-lg hover:bg-[#43A047] transition-colors duration-200"
        >
          Register Restaurant
        </button>
      </form>
    </div>
  );
};

export default RestaurantForm;