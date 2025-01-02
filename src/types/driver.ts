export interface DriverProfile {
  [x: string]: ReactNode;
  id: string;
  name: string;
  photo: string;
  rating: number;
  totalDeliveries: number;
  joinedDate: Date;
  isOnline: boolean;
  currentOrder?: string;
}

export interface DriverRating {
  id: string;
  driverId: string;
  orderId: string;
  rating: number;
  comment?: string;
  timestamp: Date;
}