import React from 'react';
import { CreditCard, Trash2 } from 'lucide-react';
import { PaymentMethod } from '../../types/payment';

interface PaymentMethodCardProps {
  method: PaymentMethod;
  isDefault: boolean;
  onSetDefault: () => void;
  onDelete: () => void;
}

const PaymentMethodCard = ({ method, isDefault, onSetDefault, onDelete }: PaymentMethodCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <CreditCard className="w-6 h-6 text-[#4CAF50]" />
          <div>
            <p className="font-medium">{method.type === 'card' ? `•••• ${method.lastFour}` : method.identifier}</p>
            <p className="text-sm text-gray-500">{method.type === 'card' ? `Expires ${method.expiryMonth}/${method.expiryYear}` : method.type}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {!isDefault && (
            <button
              onClick={onSetDefault}
              className="text-sm text-[#4CAF50] hover:underline"
            >
              Set Default
            </button>
          )}
          {isDefault && (
            <span className="text-sm bg-[#E8F5E9] text-[#4CAF50] px-2 py-1 rounded">
              Default
            </span>
          )}
          <button
            onClick={onDelete}
            className="p-1 text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethodCard;