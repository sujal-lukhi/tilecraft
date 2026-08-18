import { ProjectItem, StatItem, TestimonialItem, ServiceItem, BeforeAfterItem } from '../types';

export const HERO_IMAGE = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=85"; // Scandinavian living room with blue sofa, wooden chair, soft daylight

export const GALLERY_PROJECTS: ProjectItem[] = [
  {
    id: '1',
    title: 'Minimalist Zen Atrium',
    category: 'Architecture',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85', // Serene plant + minimalist interior
    aspect: 'tall',
    description: 'Bespoke travertine pedestals and botanical balance.'
  },
  {
    id: '2',
    title: 'Sage Natural Credenza',
    category: 'Interior Styling',
    imageUrl: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=85', // Warm green wall + oak media unit
    aspect: 'tall',
    description: 'Custom fluted cabinetry with organic accents.'
  },
  {
    id: '3',
    title: 'Light-Filled Canvas Lounge',
    category: 'Living Space',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85', // Warm beige sunlit lounge
    aspect: 'tall',
    description: 'Neutral plaster walls and textured oak floors.'
  },
  {
    id: '4',
    title: 'Nordic Oak & Stone Nook',
    category: 'Stone Craft',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85', // Minimalist armchair and warm woodwork
    aspect: 'tall',
    description: 'Seamless integration of tactile stone and warm timber.'
  }
];

export const STATS: StatItem[] = [
  {
    value: '8k',
    label: 'Interior Projects',
    subtext: 'Designs and have finished in last 32 years.'
  },
  {
    value: '31',
    label: 'Years of Works',
    subtext: 'Designs and have finished in last 32 years.'
  },
  {
    value: '12K',
    label: 'Satisfied Clients',
    subtext: 'Designs and have finished in last 32 years.'
  },
  {
    value: '97%',
    label: 'Happy Rate',
    subtext: 'Designs and have finished in last 32 years.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    quote: 'As a commercial developer, working with numerous design firms, TileCraft stands out for their innovative designs, attention to detail, and ability to meet deadlines without ever compromising the luxury finish.',
    author: 'Adam Palmer',
    role: 'Principal Architectural Director',
    location: 'Metropolitan Urban Developments',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=85' // Warm wood & beige architectural living room
  },
  {
    id: '2',
    quote: 'The marble fabrication and stone tiling in our penthouse completely transformed the space. Their team brought an extraordinary eye for texture, proportion, and timeless elegance.',
    author: 'Sophia Sterling',
    role: 'Luxury Homeowner',
    location: 'Bel Air Estates',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: '3',
    quote: 'From custom bathroom suites to expansive stone staircases, TileCraft has been our go-to partner for ultra-luxury hospitality projects. Simply unmatched precision.',
    author: 'Julian Thorne',
    role: 'Design Lead',
    location: 'Aura Boutique Resorts',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'stone-marble',
    title: 'Stone & Marble Crafting',
    category: 'Stone & Marble',
    description: 'Master craftsmanship in bookmatched Italian marble, granite, quartzite, and bespoke architectural stonework.',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=85',
    features: ['Bookmatched Slabs', 'Custom Vanity Tops', 'Seamless Inlays', 'Precision Waterjet Cuts']
  },
  {
    id: 'luxury-bathrooms',
    title: 'Bespoke Bathrooms',
    category: 'Bathroom',
    description: 'Transforming bathrooms into serene sanctuary retreats with seamless micro-cement, floor-to-ceiling tiling, and premium fixtures.',
    imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=85',
    features: ['Frameless Showers', 'Heated Stone Floors', 'Niche Lighting', 'Waterproof Membrane Tiling']
  },
  {
    id: 'architectural-kitchens',
    title: 'Architectural Kitchens',
    category: 'Kitchen',
    description: 'Sleek culinary spaces crafted with porcelain slab waterfall counters, custom cabinetry, and tactile backsplashes.',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=85',
    features: ['Waterfall Islands', 'Seamless Sinks', 'Hidden Joinery', 'Porcelain Slab Surfaces']
  },
  {
    id: 'flooring-living',
    title: 'Luxury Flooring & Living',
    category: 'Flooring',
    description: 'Expansive large-format porcelain tiles, chevron wood flooring, and indoor-outdoor transition tiling.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85',
    features: ['Large Format Tiling', 'Acoustic Underlay', 'Laser Level Alignment', 'Stain-Resistant Grouting']
  }
];

export const BEFORE_AFTER_DATA: BeforeAfterItem = {
  id: 'ba-1',
  title: 'Penthouse Living & Stone Fireplace Transformation',
  category: 'Full Remodel',
  beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
  description: 'Complete reimagining of dated 1980s interiors into an open-plan light sanctuary with floor-to-ceiling porcelain stone accents and natural oak.'
};

export const RECENT_WORKS = [
  {
    title: 'Modern Minimalist Villa',
    category: 'Living & Marble',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=85',
    tag: 'Completed 2024'
  },
  {
    title: 'Warm Scandinavian Penthouse',
    category: 'Kitchen & Oak',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=85',
    tag: 'Completed 2024'
  },
  {
    title: 'Emerald Luxe Spa Suite',
    category: 'Bathroom & Tiling',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=85',
    tag: 'Completed 2024'
  }
];
