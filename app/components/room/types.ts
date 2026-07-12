export interface AmenityItem {
  id: string;
  label: string;
  icon: string;
}

export interface RoomDetail {
  id: string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  hostName: string;
  hostYears: number;
  pricePerNight: number;
  images: string[];
  amenities: AmenityItem[];
}
