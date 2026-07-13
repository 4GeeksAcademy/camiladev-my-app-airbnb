export type Category =
  | "Todas"
  | "Playa"
  | "Mansiones"
  | "Tendencias"
  | "Cabanas"
  | "Campo";

export interface PropertyCoordinates {
  lat: number;
  lng: number;
}

export interface Property {
  id: string;
  title: string;
  location: string;
  category: Exclude<Category, "Todas">;
  imageSrc: string;
  pricePerNight: number;
  rating: number;
  imageLabel: string;
  coordinates: PropertyCoordinates;
  badge?: string;
  isFavorite?: boolean;
}
