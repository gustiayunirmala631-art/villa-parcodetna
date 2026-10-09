export interface VillaUnit {
  id: string;
  name: string;
  tagline: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  areaM2: number;
  poolSize: string;
  pricePerNightIdr: number;
  pricePerNightUsd: number;
  featuredImage: string;
  images: string[];
  features: string[];
  agodaDeepLink?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'pool' | 'bedroom' | 'living' | 'bathroom' | 'sunset' | 'dining';
  categoryLabel: string;
  imageUrl: string;
  caption: string;
  featured?: boolean;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight?: boolean;
}

export interface NearbyAttraction {
  id: string;
  name: string;
  category: string;
  driveTime: string;
  distance: string;
  description: string;
}

export interface GuestReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  source: 'Agoda' | 'Google' | 'Direct Guest';
  title: string;
  comment: string;
  verified: boolean;
}
