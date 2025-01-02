export interface PaymentMethod {
  id: string;
  type: 'card' | 'upi' | 'wallet';
  lastFour?: string;
  expiryMonth?: string;
  expiryYear?: string;
  identifier: string;
  isDefault: boolean;
}

export interface Transaction {
  id: string;
  date: Date;
  amount: number;
  description: string;
  status: 'success' | 'pending' | 'refunded';
  type: 'debit' | 'credit';
  paymentMethod: PaymentMethod;
}