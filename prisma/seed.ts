import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Tilecraft Interiors database...');

  // 1. Seed Admin User
  const adminPassword = await bcrypt.hash('AdminPass123!', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@tilecraftinteriors.com' },
    update: {},
    create: {
      email: 'admin@tilecraftinteriors.com',
      password: adminPassword,
      fullName: 'Tilecraft Admin',
      phone: '+1 (800) 555-TILE',
      role: 'ADMIN',
    },
  });
  console.log(`Admin user created: ${admin.email}`);

  // 2. Seed Customer User
  const customerPassword = await bcrypt.hash('CustomerPass123!', 10);
  const customer = await prisma.user.upsert({
    where: { email: 'customer@example.com' },
    update: {},
    create: {
      email: 'customer@example.com',
      password: customerPassword,
      fullName: 'John Smith',
      phone: '+1 (555) 019-2834',
      role: 'CUSTOMER',
    },
  });
  console.log(`Customer user created: ${customer.email}`);

  // 3. Seed Services
  const services = [
    {
      title: 'Luxury Bathroom Work',
      slug: 'bathroom-work',
      category: 'Bathroom',
      description: 'Complete bathroom tiling, custom marble vanities, waterproof stone flooring, and walk-in shower enclosures.',
      features: 'Waterproofing, Custom Marble Slabs, Heated Flooring, Mosaic Art',
      coverImage: '/uploads/services/bathroom.jpg',
      orderIndex: 1,
    },
    {
      title: 'Custom Stone & Tile Flooring',
      slug: 'flooring',
      category: 'Flooring',
      description: 'Premium hardwood look porcelain tiles, large format marble floor slabs, and patterned stone layouts.',
      features: 'Large Format Slabs, Anti-Slip Finish, Groutless Precision, Floor Heating',
      coverImage: '/uploads/services/flooring.jpg',
      orderIndex: 2,
    },
    {
      title: 'Kitchen Backsplash & Countertops',
      slug: 'kitchen',
      category: 'Kitchen',
      description: 'Seamless granite & quartz countertops, book-matched marble island slabs, and luxury backsplash tiles.',
      features: 'Book-matched Marble, Stain Resistant Quartz, Custom Edging, Backsplash Accents',
      coverImage: '/uploads/services/kitchen.jpg',
      orderIndex: 3,
    },
    {
      title: 'Stone & Marble Crafting',
      slug: 'stone-and-marble',
      category: 'Stone & Marble',
      description: 'Bespoke marble wall cladding, natural stone fireplace surrounds, and custom architectural masonry.',
      features: 'Italian Carrara Marble, Onyx Backlighting, CNC Stone Carving, Custom Mantels',
      coverImage: '/uploads/services/stone-marble.jpg',
      orderIndex: 4,
    },
    {
      title: 'Staircase Cladding & Tiling',
      slug: 'staircase',
      category: 'Staircase',
      description: 'Grand spiral & floating staircase marble cladding, bullnose stair steps, and anti-slip stone steps.',
      features: 'Bullnose Treads, LED Under-Step Lighting, Floating Stone Steps, Marble Riser Art',
      coverImage: '/uploads/services/staircase.jpg',
      orderIndex: 5,
    },
  ];

  for (const s of services) {
    await prisma.service.upsert({
      where: { slug: s.slug },
      update: s,
      create: s,
    });
  }
  console.log('Services seeded successfully.');

  // 4. Seed Contact Info
  await prisma.contactInfo.deleteMany();
  await prisma.contactInfo.create({
    data: {
      address: '750 Design Avenue, Suite 1200, New York, NY 10018',
      phone: '+1 (800) 555-TILE',
      email: 'info@tilecraftinteriors.com',
      workingHours: 'Mon - Sat: 8:00 AM - 6:00 PM (EST)',
      mapUrl: 'https://maps.google.com/?q=750+Design+Avenue+New+York',
      socialLinks: JSON.stringify({
        instagram: 'https://instagram.com/tilecraftinteriors',
        facebook: 'https://facebook.com/tilecraftinteriors',
        pinterest: 'https://pinterest.com/tilecraftinteriors',
      }),
    },
  });
  console.log('Contact info seeded successfully.');

  // 5. Seed Featured Project
  const project = await prisma.project.upsert({
    where: { slug: 'beverly-hills-marble-villa' },
    update: {},
    create: {
      title: 'Beverly Hills Marble Villa',
      slug: 'beverly-hills-marble-villa',
      category: 'Stone & Marble',
      description: 'A complete interior stone overhaul featuring book-matched Calacatta Gold marble flooring and floating stairs.',
      clientName: 'Private Residence',
      location: 'Beverly Hills, CA',
      completionDate: 'December 2025',
      coverImage: '/uploads/projects/villa-cover.jpg',
      isFeatured: true,
      media: {
        create: [
          { mediaUrl: '/uploads/projects/villa-1.jpg', mediaType: 'IMAGE', caption: 'Grand Foyer Marble Slabs' },
          { mediaUrl: '/uploads/projects/villa-2.jpg', mediaType: 'IMAGE', caption: 'Master Bath Floating Vanity' },
        ],
      },
      beforeAfters: {
        create: [
          {
            title: 'Living Room Flooring Transformation',
            category: 'Flooring',
            description: 'Replaced dated carpet with 120x240cm polished Italian porcelain slabs.',
            beforeImage: '/uploads/before/living-before.jpg',
            afterImage: '/uploads/after/living-after.jpg',
          },
        ],
      },
    },
  });
  console.log(`Sample project created: ${project.title}`);

  // 6. Seed Testimonial
  await prisma.testimonial.create({
    data: {
      clientName: 'Sophia Reynolds',
      roleOrLocation: 'Interior Designer, NYC',
      rating: 5,
      comment: 'Tilecraft Interiors exceeded all expectations. Their precision in marble cutting and installation is unmatched.',
      isApproved: true,
    },
  });
  console.log('Testimonials seeded successfully.');

  console.log('Seeding finished successfully!');
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
