import React from 'react';
import { Calendar } from 'lucide-react';

const seasonalFoods = {
  spring: ['Asparagus', 'Peas', 'Strawberries'],
  summer: ['Tomatoes', 'Corn', 'Peaches'],
  fall: ['Pumpkin', 'Apples', 'Sweet Potatoes'],
  winter: ['Citrus', 'Root Vegetables', 'Brussels Sprouts'],
};

const getCurrentSeason = () => {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'fall';
  return 'winter';
};

const SeasonalCalendar = () => {
  const currentSeason = getCurrentSeason();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md">
      <div className="flex items-center gap-3 mb-4">
        <Calendar className="w-6 h-6 text-orange-500" />
        <h2 className="text-xl font-bold text-gray-800">Seasonal Specials</h2>
      </div>
      <div className="space-y-4">
        {Object.entries(seasonalFoods).map(([season, foods]) => (
          <div
            key={season}
            className={`p-4 rounded-lg transition-all duration-300 ${
              season === currentSeason
                ? 'bg-orange-50 border-2 border-orange-500'
                : 'bg-gray-50'
            }`}
          >
            <h3 className="capitalize font-semibold text-gray-700 mb-2">
              {season}
              {season === currentSeason && ' (Current)'}
            </h3>
            <div className="flex gap-2 flex-wrap">
              {foods.map((food) => (
                <span
                  key={food}
                  className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 shadow-sm"
                >
                  {food}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeasonalCalendar;