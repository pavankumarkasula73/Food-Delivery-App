import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-[#4CAF50]" />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600">123 Food Street, Bangalore, India</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-[#4CAF50]" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+91 1234567890</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-[#4CAF50]" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">support@foodieexpress.com</p>
            </div>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#4CAF50] text-white py-2 rounded-lg hover:bg-[#43A047] transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;