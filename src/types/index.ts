export interface Place {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  image: string | number;
  latitude: number;
  longitude: number;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Weather {
  location: string;
  condition: string;
  temperature: string;
  icon: string;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  cuisine: string;
  rating: number;
  image: string;
  latitude: number;
  longitude: number;
}

export interface Hotel {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  image: string;
  latitude: number;
  longitude: number;
}

export interface Experience {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  image: string;
  latitude: number;
  longitude: number;
}

