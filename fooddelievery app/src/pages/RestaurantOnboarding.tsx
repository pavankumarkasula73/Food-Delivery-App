import React from 'react';
import RestaurantForm from '../components/restaurant/RestaurantForm';
import MenuItemForm from '../components/restaurant/MenuItemForm';

const RestaurantOnboarding = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Join Our Platform</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <RestaurantForm />
        <MenuItemForm />
      </div>

      <div className="mt-12 bg-[#F1F8E9] rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Why Partner With Us?</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Wider Reach</h3>
            <p className="text-gray-600">Connect with thousands of hungry customers in your area</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Easy Management</h3>
            <p className="text-gray-600">Manage orders, menu, and deliveries from one dashboard</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Growth Support</h3>
            <p className="text-gray-600">Get insights and support to grow your business</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantOnboarding;