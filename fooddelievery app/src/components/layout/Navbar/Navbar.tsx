import React from 'react';
import { ChefHat, Menu } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';
import NavLinks from './NavLinks';
import BouncyBlockClock from '../../BouncyBlockClock';
import NotificationCenter from '../../notifications/NotificationCenter';

const Navbar = () => {
  const { theme, season, toggleTheme } = useTheme();

  const getSeasonalStyles = () => {
    switch (season) {
      case 'christmas':
        return 'bg-red-100 dark:bg-red-900';
      case 'newyear':
        return 'bg-purple-100 dark:bg-purple-900';
      default:
        return theme === 'dark' ? 'bg-gray-800' : 'bg-[#C8E6C9]';
    }
  };

  return (
    <nav className={`sticky top-0 z-50 ${getSeasonalStyles()} shadow-lg transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 group">
            <ChefHat className="w-8 h-8 text-primary-light dark:text-primary-dark transform group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-bold text-xl text-gray-900 dark:text-white relative">
              FoodieExpress
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-light dark:bg-primary-dark group-hover:w-full transition-all duration-300"></span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
          </div>

          <div className="flex items-center gap-4">
            <BouncyBlockClock />
            <NotificationCenter />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
            
            <button className="md:hidden p-2 hover:bg-[#A5D6A7] dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
              <Menu className="w-6 h-6 dark:text-white" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;