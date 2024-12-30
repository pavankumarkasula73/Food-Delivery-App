import React from 'react';
import { Users, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About FoodieExpress</h1>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="p-6 bg-white rounded-lg shadow-lg text-center">
          <Users className="w-12 h-12 text-[#4CAF50] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">10M+ Happy Customers</h3>
          <p className="text-gray-600">Serving delicious meals across India</p>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-lg text-center">
          <Award className="w-12 h-12 text-[#4CAF50] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Best in Quality</h3>
          <p className="text-gray-600">Premium ingredients, exceptional taste</p>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow-lg text-center">
          <Clock className="w-12 h-12 text-[#4CAF50] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quick Delivery</h3>
          <p className="text-gray-600">30 minutes or less guaranteed</p>
        </div>
      </div>

      <div className="prose max-w-none">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-lg mb-6">
          Founded in 2020, FoodieExpress has revolutionized the way India eats. 
          We connect you with the best restaurants in your city, ensuring that 
          quality food is just a click away.
        </p>

        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg mb-6">
          To deliver not just food, but moments of joy to every household. 
          We believe in making good food accessible to everyone while supporting 
          local restaurants and communities.
        </p>
      </div>
    </div>
  );
};

export default About;