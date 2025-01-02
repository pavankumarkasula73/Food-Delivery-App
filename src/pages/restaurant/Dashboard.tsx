import { BarChart3, Users, ShoppingBag, Clock, TrendingUp, Settings } from 'lucide-react';

const RestaurantDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Restaurant Dashboard</h1>
        <button className="p-2 rounded-lg hover:bg-gray-100" title="Settings">
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
              <p className="text-gray-500">New Customers</p>
              <h3 className="text-2xl font-bold">12</h3>
            </div>
            <Users className="w-8 h-8 text-[#4CAF50]" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Revenue</p>
              <h3 className="text-2xl font-bold">$1,200</h3>
            </div>
            <TrendingUp className="w-8 h-8 text-[#4CAF50]" />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Sales Over Time</h2>
          <BarChart3 className="w-full h-64" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Order Times</h2>
          <Clock className="w-full h-64" />
        </div>
      </div>
    </div>
  );
};

export default RestaurantDashboard;