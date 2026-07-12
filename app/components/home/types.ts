export type Category =
  | "Todas"
  | "Playa"
  | "Mansiones"
  | "Tendencias"
  | "Cabanas"
  | "Campo";

export interface Property {
  id: string;
  title: string;
  location: string;
  category: Exclude<Category, "Todas">;
  pricePerNight: number;
  rating: number;
  imageLabel: string;
  badge?: string;
  isFavorite?: boolean;
}
