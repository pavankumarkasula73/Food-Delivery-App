export interface DriverProfile {
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