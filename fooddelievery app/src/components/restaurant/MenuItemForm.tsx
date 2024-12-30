import React, { useState } from 'react';
import { Upload } from 'lucide-react';

interface MenuItemFormData {
  name: string;
  description: string;
  price: number;
  category: string;
  isCustomizable: boolean;
  image: string;
}

const MenuItemForm = () => {
  const [formData, setFormData] = useState<MenuItemFormData>({
    name: '',
    description: '',
    price: 0,
    category: '',
    isCustomizable: false,
    image: ''
  });

  const categories = [
    'Breakfast',
    'Main Course',
    'Starters',
    'Desserts',
    'Beverages'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Menu item data:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Add Menu Item</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Item Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
            rows={3}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Price (₹)</label>
            <input
              type="number"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
              min="0"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
              required
            >
              <option value="">Select Category</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="customizable"
            checked={formData.isCustomizable}
            onChange={(e) => setFormData({...formData, isCustomizable: e.target.checked})}
            className="rounded text-[#4CAF50] focus:ring-[#4CAF50]"
          />
          <label htmlFor="customizable" className="text-sm text-gray-700">
            Allow Customization
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#4CAF50] text-white py-3 rounded-lg hover:bg-[#43A047] transition-colors duration-200"
        >
          Add Menu Item
        </button>
      </form>
    </div>
  );
};

export default MenuItemForm;