export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  aspect?: 'tall' | 'wide' | 'square';
  description?: string;
}

export interface StatItem {
  value: string;
  label: string;
  subtext: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export interface ReelItem {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration?: string;
  likes: number;
  views: string;
  description: string;
  tags: string[];
  instagramUrl?: string;
}
