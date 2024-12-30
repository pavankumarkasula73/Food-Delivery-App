import React, { useState } from 'react';
import { CreditCard } from 'lucide-react';

interface PaymentMethodFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

const PaymentMethodForm = ({ onSubmit, onCancel }: PaymentMethodFormProps) => {
  const [paymentType, setPaymentType] = useState<'card' | 'upi'>('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    upiId: ''
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Add Payment Method</h3>
      
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setPaymentType('card')}
          className={`flex-1 py-2 rounded-lg border ${
            paymentType === 'card' 
              ? 'border-[#4CAF50] bg-[#E8F5E9] text-[#4CAF50]' 
              : 'border-gray-200'
          }`}
        >
          Credit/Debit Card
        </button>
        <button
          onClick={() => setPaymentType('upi')}
          className={`flex-1 py-2 rounded-lg border ${
            paymentType === 'upi' 
              ? 'border-[#4CAF50] bg-[#E8F5E9] text-[#4CAF50]' 
              : 'border-gray-200'
          }`}
        >
          UPI
        </button>
      </div>

      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }} className="space-y-4">
        {paymentType === 'card' ? (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number
              </label>
              <input
                type="text"
                maxLength={16}
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                value={formData.cardNumber}
                onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="MM"
                    maxLength={2}
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                    value={formData.expiryMonth}
                    onChange={(e) => setFormData({...formData, expiryMonth: e.target.value})}
                  />
                  <input
                    type="text"
                    placeholder="YY"
                    maxLength={2}
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                    value={formData.expiryYear}
                    onChange={(e) => setFormData({...formData, expiryYear: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVV
                </label>
                <input
                  type="password"
                  maxLength={3}
                  placeholder="123"
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
                  value={formData.cvv}
                  onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                />
              </div>
            </div>
          </>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              UPI ID
            </label>
            <input
              type="text"
              placeholder="username@upi"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-[#4CAF50] focus:border-transparent"
              value={formData.upiId}
              onChange={(e) => setFormData({...formData, upiId: e.target.value})}
            />
          </div>
        )}

        <div className="flex gap-4 mt-6">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 py-2 bg-[#4CAF50] text-white rounded-lg hover:bg-[#43A047]"
          >
            Add Payment Method
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentMethodForm;