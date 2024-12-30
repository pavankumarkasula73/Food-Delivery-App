import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import PaymentMethodCard from '../components/payments/PaymentMethodCard';
import PaymentMethodForm from '../components/payments/PaymentMethodForm';
import TransactionList from '../components/payments/TransactionList';
import { PaymentMethod, Transaction } from '../types/payment';

const PaymentSettings = () => {
  const [showAddPayment, setShowAddPayment] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: '1',
      type: 'card',
      lastFour: '4242',
      expiryMonth: '12',
      expiryYear: '25',
      identifier: 'Visa ending in 4242',
      isDefault: true
    },
    {
      id: '2',
      type: 'upi',
      identifier: 'user@okicici',
      isDefault: false
    }
  ]);

  const [transactions] = useState<Transaction[]>([
    {
      id: '1',
      date: new Date(),
      amount: 450,
      description: 'Order #12345',
      status: 'success',
      type: 'debit',
      paymentMethod: paymentMethods[0]
    },
    {
      id: '2',
      date: new Date(Date.now() - 86400000),
      amount: 250,
      description: 'Refund Order #12340',
      status: 'refunded',
      type: 'credit',
      paymentMethod: paymentMethods[0]
    }
  ]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <PaymentMethodCard
              key={method.id}
              method={method}
              isDefault={method.isDefault}
              onSetDefault={() => {
                setPaymentMethods(methods =>
                  methods.map(m => ({...m, isDefault: m.id === method.id}))
                );
              }}
              onDelete={() => {
                setPaymentMethods(methods =>
                  methods.filter(m => m.id !== method.id)
                );
              }}
            />
          ))}
          
          {!showAddPayment && (
            <button
              onClick={() => setShowAddPayment(true)}
              className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-[#4CAF50] hover:text-[#4CAF50] transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add Payment Method
            </button>
          )}
          
          {showAddPayment && (
            <PaymentMethodForm
              onSubmit={(data) => {
                console.log('New payment method:', data);
                setShowAddPayment(false);
              }}
              onCancel={() => setShowAddPayment(false)}
            />
          )}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
};

export default PaymentSettings;