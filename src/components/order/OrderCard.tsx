import { Clock, Utensils, Heart } from 'lucide-react';
import { formatIndianCurrency } from '../../utils/currency';

interface OrderCardProps {
  name: string;
  image: string;
  price: number;
  rating: number;
  deliveryTime: string;
  isCustomizable?: boolean;
  isTrending?: boolean;
}

const OrderCard = ({
  name,
  image,
  price,
  rating,
  deliveryTime,
  isCustomizable = false,
  isTrending = false,
}: OrderCardProps) => {
  const priceInRupees = price * 83; // Approximate USD to INR conversion

  return (
    <div className="bg-[#F1F8E9] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        {isTrending && (
          <span className="absolute top-2 right-2 bg-[#4CAF50] text-white px-2 py-1 rounded-full text-sm">
            Trending
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <button title="Add to favorites" className="text-gray-400 hover:text-[#4CAF50] transform hover:scale-110 transition-all duration-200">
            <Heart className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{deliveryTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>⭐</span>
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-[#4CAF50]">{formatIndianCurrency(priceInRupees)}</span>
          {isCustomizable && (
            <button className="flex items-center gap-1 text-sm text-[#4CAF50] hover:scale-105 transition-transform duration-200">
              <Utensils className="w-4 h-4" />
              Customize
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;