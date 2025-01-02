import React from 'react';
import SearchBar from '../components/search/SearchBar';
import OrderCard from '../components/order/OrderCard';
import SeasonalCalendar from '../components/SeasonalCalendar';
import { restaurants } from '../data/restaurants';

const Home = () => {
  return (
    <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <SearchBar />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Delicious Food,
              <br />
              Delivered to You
            </h1>
            <p className="text-lg opacity-75">
              Experience the best local restaurants at your doorstep
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {restaurants.map((restaurant, index) => (
              <OrderCard key={index} {...restaurant} />
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <SeasonalCalendar />
        </div>
      </div>
    </main>
  );
};

export default Home;