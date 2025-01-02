import React, { useState } from 'react';

interface RestaurantFormData {
  name: string;
  address: string;
  minOrderValue: number;
  deliveryFee: number;
  deliveryTime: string;
  cuisine: string;
}

const RestaurantForm = () => {
  const [formData, setFormData] = useState<RestaurantFormData>({
    name: '',
    address: '',
    minOrderValue: 0,
    deliveryFee: 0,
    deliveryTime: '',
    cuisine: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <textarea id="address" name="address" value={formData.address} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="minOrderValue">Minimum Order Value</label>
        <input type="number" id="minOrderValue" name="minOrderValue" value={formData.minOrderValue} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="deliveryFee">Delivery Fee</label>
        <input type="number" id="deliveryFee" name="deliveryFee" value={formData.deliveryFee} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="deliveryTime">Delivery Time</label>
        <input type="text" id="deliveryTime" name="deliveryTime" value={formData.deliveryTime} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="cuisine">Cuisine</label>
        <input type="text" id="cuisine" name="cuisine" value={formData.cuisine} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RestaurantForm;