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
              <p className="text-gray-600">123 India</p>
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
              <p className="text-gray-600">contact@example.com</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"></textarea>
            </div>
            <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#4CAF50] hover:bg-[#45a049]">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;