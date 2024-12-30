import React, { useState } from 'react';
import { X, ChefHat } from 'lucide-react';

interface RestaurantLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RestaurantLoginModal = ({ isOpen, onClose }: RestaurantLoginModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="flex items-center gap-3 mb-6 justify-center">
          <ChefHat className="w-8 h-8 text-[#4CAF50]" />
          <h2 className="text-2xl font-bold text-center">
            {isSignUp ? 'Register Restaurant' : 'Restaurant Login'}
          </h2>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Restaurant Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="restaurant@example.com"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
            />
          </div>

          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Restaurant License Number
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                placeholder="FSSAI License Number"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#4CAF50] text-white py-2 rounded-lg hover:bg-[#43A047] transition-colors duration-200"
          >
            {isSignUp ? 'Register' : 'Login'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-[#4CAF50] hover:underline"
          >
            {isSignUp 
              ? 'Already have a restaurant account? Login' 
              : "Don't have a restaurant account? Register"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantLoginModal;