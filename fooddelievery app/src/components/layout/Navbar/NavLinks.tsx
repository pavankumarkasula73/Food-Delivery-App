import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, ChefHat } from 'lucide-react';
import LoginModal from '../../auth/LoginModal';
import RestaurantLoginModal from '../../auth/RestaurantLoginModal';

const NavLinks = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRestaurantLoginOpen, setIsRestaurantLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('John Doe');

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About Us', href: '/about' },
    { name: 'Offers', href: '/offers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <div className="flex gap-6 items-center">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="relative px-2 py-1 text-gray-700 hover:text-[#4CAF50] transition-colors duration-200 group"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4CAF50] group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}
        
        <div className="flex gap-4">
          {isLoggedIn ? (
            <div className="flex items-center gap-2 px-4 py-1 bg-[#E8F5E9] rounded-full">
              <User className="w-5 h-5 text-[#4CAF50]" />
              <span className="text-[#4CAF50]">{userName}</span>
            </div>
          ) : (
            <>
              <button
                onClick={() => setIsLoginOpen(true)}
                className="px-4 py-1 bg-[#4CAF50] text-white rounded-full hover:bg-[#43A047] transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Login
              </button>
              <button
                onClick={() => setIsRestaurantLoginOpen(true)}
                className="flex items-center gap-2 px-4 py-1 border-2 border-[#4CAF50] text-[#4CAF50] rounded-full hover:bg-[#E8F5E9] transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <ChefHat className="w-4 h-4" />
                Restaurant Login
              </button>
            </>
          )}
        </div>
      </div>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <RestaurantLoginModal 
        isOpen={isRestaurantLoginOpen} 
        onClose={() => setIsRestaurantLoginOpen(false)} 
      />
    </>
  );
};

export default NavLinks;