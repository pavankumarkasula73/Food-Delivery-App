import React from 'react';
import { BarChart3, Users, ShoppingBag, Clock, TrendingUp, Settings } from 'lucide-react';

const RestaurantDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Restaurant Dashboard</h1>
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <Settings className="w-6 h-6" />
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Today's Orders</p>
              <h3 className="text-2xl font-bold">42</h3>
            </div>
            <ShoppingBag className="w-8 h-8 text-[#4CAF50]" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Revenue</p>
              <h3 className="text-2xl font-bold">₹12,450</h3>
            </div>
            <TrendingUp className="w-8 h-8 text-[#4CAF50]" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Avg. Delivery Time</p>
              <h3 className="text-2xl font-bold">28 min</h3>
            </div>
            <Clock className="w-8 h-8 text-[#4CAF50]" />
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Order ID</th>
                <th className="text-left py-3">Customer</th>
                <th className="text-left py-3">Items</th>
                <th className="text-left py-3">Total</th>
                <th className="text-left py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3">#12345</td>
                <td>John Doe</td>
                <td>2x Masala Dosa, 1x Coffee</td>
                <td>₹280</td>
                <td>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Delivered
                  </span>
                </td>
              </tr>
              {/* Add more order rows as needed */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Menu Management</h2>
          <div className="space-y-4">
            <button className="w-full px-4 py-2 text-left hover:bg-gray-50 rounded-lg flex items-center gap-2">
              <span className="text-[#4CAF50]">+</span> Add New Item
            </button>
            <button className="w-full px-4 py-2 text-left hover:bg-gray-50 rounded-lg flex items-center gap-2">
              <span className="text-[#4CAF50]">⚡</span> Update Prices
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Restaurant Status</h2>
          <div className="flex items-center justify-between">
            <span>Currently Open</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4CAF50]"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDashboard;