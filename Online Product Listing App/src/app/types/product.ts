export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  condition: "new" | "used" | "refurbished";
  seller: string;
  location: string;
  createdAt: string;
  featured?: boolean;
}