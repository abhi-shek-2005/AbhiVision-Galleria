export interface FurnitureItem {
  id: string;
  title: string;
  category: string;
  images: string[];
  description: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}