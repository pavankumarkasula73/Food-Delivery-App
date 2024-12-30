import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Transaction } from '../../types/payment';
import { formatIndianCurrency } from '../../utils/currency';
import { formatDate } from '../../utils/date';

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList = ({ transactions }: TransactionListProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-600 bg-green-50';
      case 'pending': return 'text-yellow-600 bg-yellow-50';
      case 'refunded': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              {transaction.type === 'credit' ? (
                <ArrowDownRight className="w-5 h-5 text-green-500" />
              ) : (
                <ArrowUpRight className="w-5 h-5 text-red-500" />
              )}
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-gray-500">{formatDate(transaction.date)}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">{formatIndianCurrency(transaction.amount)}</p>
              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(transaction.status)}`}>
                {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;