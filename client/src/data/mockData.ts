import { ProjectItem, StatItem, TestimonialItem, ServiceItem, BeforeAfterItem, ReelItem } from '../types';

// Hero Main Visual - Ultra-Luxury Indian Villa Living Hall with Mirror-Polished Italian Marble & Warm Cove Illumination
export const HERO_IMAGE = "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=85";

export const FEATURED_FIVE_CATEGORIES = [
  {
    id: 'custom-tile',
    title: 'Italian Marble & Wall Cladding',
    subtitle: 'Statuario & Bookmatching',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'bathroom-tile',
    title: 'Luxury Bathroom Renovation',
    subtitle: 'Floor-to-Ceiling Tiling & Vanities',
    imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'kitchen-tile',
    title: 'Kitchen Platform & Countertops',
    subtitle: 'Quartz & Granite Slab Work',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'outdoor-tile',
    title: 'Floating Marble Staircase',
    subtitle: 'LED Profile Steps & Foyers',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'floor-tile',
    title: 'Large Format Floor Tiling',
    subtitle: '1200x2400mm GVT / PGVT Slabs',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85'
  }
];

export const GALLERY_PROJECTS: ProjectItem[] = [
  {
    id: '1',
    title: 'Sindhu Bhavan Luxury Villa Atrium',
    category: 'Italian Marble & Architecture',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85',
    aspect: 'tall',
    description: 'Bookmatched Italian Statuario marble with warm ambient illumination and brass inlays in Ahmedabad.'
  },
  {
    id: '2',
    title: 'Ambli Road Master Suite & Fluted Wall',
    category: 'Interior Finishing',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=85',
    aspect: 'tall',
    description: 'High-gloss vitrified tile flooring paired with custom fluted timber paneling and stone borders.'
  },
  {
    id: '3',
    title: 'Bodakdev Sky Penthouse Grand Hall',
    category: 'Living & Marble Flooring',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85',
    aspect: 'tall',
    description: 'Mirror-polished seamless Italian marble spanning 1,800 sq ft with zero-grout precision joints.'
  },
  {
    id: '4',
    title: 'Artisanal Stone Pooja Mandir Nook',
    category: 'Stone Craft & Cladding',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85',
    aspect: 'tall',
    description: 'Custom CNC carved natural stone wall backdrop with integrated backlight and floating marble altar.'
  }
];

export const STATS: StatItem[] = [
  {
    value: '500+',
    label: 'Luxury Projects Delivered',
    subtext: 'Bungalows, villas & penthouses across Ahmedabad & Gujarat.'
  },
  {
    value: '15+',
    label: 'Years of Master Craft',
    subtext: 'Pioneering precision stone cutting and Italian marble fabrication.'
  },
  {
    value: '1.2K+',
    label: 'Happy Homeowners',
    subtext: 'Trusted by top Indian architects, interior designers & families.'
  },
  {
    value: '99%',
    label: 'On-Time Handover Rate',
    subtext: 'Committed to flawless finishing and strict milestone timelines.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    quote: 'Tilecraft Interiors executed the complete Italian marble flooring and custom master bathroom tiling for our 4BHK bungalow on Ambli Road. The diamond mirror polish and precision bookmatching on the double-height living room wall is extraordinary.',
    author: 'Rajesh Patel',
    role: 'Bungalow Owner',
    location: 'Ambli Road, Ahmedabad',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: '2',
    quote: 'The modular kitchen quartz platform, seamless staircase cladding, and master bathroom tiling completely transformed our penthouse. Sujal and his artisan team delivered on time with unmatched Indian craftsmanship.',
    author: 'Pooja & Sameer Mehta',
    role: 'Penthouse Owners',
    location: 'Bodakdev, Ahmedabad',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: '3',
    quote: 'As an architectural practice in Gujarat, finding stone artisans who execute zero-grout laser alignment for 1200x2400mm GVT slabs and imported marble is rare. Tilecraft is our first recommendation for premium projects.',
    author: 'Ar. Vikram Desai',
    role: 'Principal Architect',
    location: 'Sindhu Bhavan Road, Ahmedabad',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'stone-marble',
    title: 'Italian & Natural Stone Crafting',
    category: 'Stone & Marble',
    description: 'Master artisan fabrication of imported Italian marble (Statuario, Bottochino, Michelangelo), Onyx backlighting, granite, and CNC 3D stone carving.',
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=85',
    features: ['Bookmatched Italian Marble', 'CNC 3D Stone Carving', 'Diamond Mirror Polish', 'Brass & Metal Inlay Work']
  },
  {
    id: 'luxury-bathrooms',
    title: 'Bespoke Bathroom Renovation',
    category: 'Bathroom',
    description: 'Creating 5-star spa retreat bathrooms with seamless floor-to-ceiling tiling, concealed plumbing niches, anti-skid stone floors, and quartz floating vanities.',
    imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=85',
    features: ['Floor-to-Ceiling Tile Fitting', 'Custom Quartz Vanity Counters', 'Concealed LED Niche Work', '100% Waterproof Membrane']
  },
  {
    id: 'architectural-kitchens',
    title: 'Kitchen Platform & Backsplash',
    category: 'Kitchen',
    description: 'Heavy-duty modular kitchen platform design using stain-resistant quartz slabs, Black Galaxy granite, waterfall edges, and designer Moroccan/fluted tile backsplashes.',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=85',
    features: ['Quartz & Granite Platforms', 'Waterfall Countertop Sinks', 'Heat & Stain Resistant Slabs', 'Designer Backsplash Tiling']
  },
  {
    id: 'flooring-living',
    title: 'Luxury Floor & Wall Tiling',
    category: 'Flooring',
    description: 'Large-format porcelain slabs (800x1600mm / 1200x2400mm GVT & PGVT), seamless laser level alignment, wooden plank tiles, and terrace weather-proof tiling.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85',
    features: ['1200x2400mm Large Slabs', 'Laser Level Alignment', 'Epoxy Stainproof Grouting', 'Staircase & Skirting Detailing']
  }
];

export const BEFORE_AFTER_DATA: BeforeAfterItem = {
  id: 'ba-1',
  title: 'Ahmedabad Bungalow Living Hall Transformation',
  category: 'Full Marble & Tile Renovation',
  beforeImage: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80',
  afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
  description: 'Complete transformation of raw civil construction into a magnificent Indian luxury living hall featuring high-gloss Italian marble and bespoke wall architecture.'
};

export const RECENT_WORKS = [
  {
    title: 'Ambli-Bopal Luxury Villa',
    category: 'Italian Marble & Flooring',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=85',
    tag: 'Completed in Ahmedabad'
  },
  {
    title: 'Sindhu Bhavan Road Penthouse',
    category: 'Kitchen Quartz & Living',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=85',
    tag: 'Completed in Ahmedabad'
  },
  {
    title: 'Science City Spa Master Suite',
    category: 'Bathroom & Stone Tiling',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=85',
    tag: 'Completed in Ahmedabad'
  }
];

export const REELS_DATA: ReelItem[] = [
  {
    id: 'reel-1',
    title: '✨ Crafted with precision. Finished with perfection.',
    category: 'Tile & Stone Interiors',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-kitchen-with-wooden-countertops-and-white-cabinets-41551-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=85',
    duration: '0:30',
    likes: 2840,
    views: '54.2K',
    description: 'From beautiful tiles to stone work, flooring and complete interior finishing — every detail matters. Design • Quality • Perfection in Ahmedabad, Gujarat.',
    tags: ['#TileCraft', '#TileCraftInteriors', '#Ahmedabad', '#MarbleWork', '#BathroomRenovation', '#KitchenTiles'],
    instagramUrl: 'https://www.instagram.com/p/DcNktoTt5hY/'
  },
  {
    id: 'reel-2',
    title: 'Italian Bookmatched Marble Installation',
    category: 'Stone Crafting',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-living-room-with-a-couch-and-decorations-41554-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=85',
    duration: '0:35',
    likes: 3190,
    views: '68.1K',
    description: 'Master artisans aligning continuous Italian marble veining across a double-height luxury bungalow living room wall in Ahmedabad.',
    tags: ['#TileCraftInteriors', '#ItalianMarble', '#Bookmatching', '#AhmedabadInteriors'],
    instagramUrl: 'https://www.instagram.com/tilecraftinteriors/'
  },
  {
    id: 'reel-3',
    title: 'Bespoke Spa Master Bathroom Suite',
    category: 'Bathroom Luxe',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-bright-kitchen-with-island-41553-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=85',
    duration: '0:24',
    likes: 4120,
    views: '83.4K',
    description: 'Walkthrough of our latest spa retreat: floor-to-ceiling imported tiles, LED underlit quartz floating vanity, and frameless shower glass in Gujarat.',
    tags: ['#TileCraft', '#MasterBathroom', '#SpaBathroom', '#TileFitting'],
    instagramUrl: 'https://www.instagram.com/tilecraftinteriors/'
  },
  {
    id: 'reel-4',
    title: 'Floating Stone Staircase & Platform Work',
    category: 'Staircase Work',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-modern-room-with-decorations-and-furniture-41552-large.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=85',
    duration: '0:30',
    likes: 2950,
    views: '49.8K',
    description: 'Cantilevered marble stair risers with integrated ambient warm LED profile lighting in an Ahmedabad luxury duplex.',
    tags: ['#StaircaseDesign', '#StoneWork', '#InteriorFinishing', '#TileCraftInteriors'],
    instagramUrl: 'https://www.instagram.com/tilecraftinteriors/'
  }
];

