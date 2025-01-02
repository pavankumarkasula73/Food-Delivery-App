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

  const categories = ['Appetizer', 'Main Course', 'Dessert', 'Beverage'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
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
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select id="category" name="category" value={formData.category} onChange={handleChange}>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="isCustomizable">Customizable</label>
        <input type="checkbox" id="isCustomizable" name="isCustomizable" checked={formData.isCustomizable} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input type="file" id="image" name="image" onChange={handleChange} />
        <Upload />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MenuItemForm;