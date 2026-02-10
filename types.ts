export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  type: 'Villa' | 'Apartment' | 'Penthouse' | 'Estate';
  imageUrl: string;
  isFeatured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export interface Statistic {
  label: string;
  value: string;
  description: string;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  phone: string;
  email: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  excerpt: string;
}

export type FilterState = {
  location: string;
  type: string;
  priceRange: string;
};