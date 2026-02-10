import { Property, Statistic, Testimonial, Agent, BlogPost } from './types';

// Using specific Unsplash IDs for a consistent luxury real estate look
export const FEATURED_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'The Glass House Estate',
    price: 4500000,
    location: 'Beverly Hills, CA',
    beds: 5,
    baths: 6,
    sqft: 6500,
    type: 'Estate',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-2a429b08e695?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Modern Seaside Villa',
    price: 2800000,
    location: 'Malibu, CA',
    beds: 4,
    baths: 4,
    sqft: 4200,
    type: 'Villa',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
  },
  {
    id: '3',
    title: 'Skyline Penthouse',
    price: 3200000,
    location: 'New York, NY',
    beds: 3,
    baths: 3.5,
    sqft: 3100,
    type: 'Penthouse',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
  },
  {
    id: '4',
    title: 'Alpine Luxury Lodge',
    price: 5900000,
    location: 'Aspen, CO',
    beds: 6,
    baths: 7,
    sqft: 7800,
    type: 'Estate',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
  },
  {
    id: '5',
    title: 'Minimalist Desert Retreat',
    price: 1850000,
    location: 'Joshua Tree, CA',
    beds: 3,
    baths: 2,
    sqft: 2400,
    type: 'Villa',
    imageUrl: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
  },
  {
    id: '6',
    title: 'Historic Townhouse',
    price: 2400000,
    location: 'London, UK',
    beds: 4,
    baths: 3,
    sqft: 3500,
    type: 'Apartment',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
  },
];

export const STATISTICS: Statistic[] = [
  { label: 'Properties Sold', value: '1,200+', description: 'Successfully closed deals' },
  { label: 'Years Experience', value: '15+', description: 'In luxury real estate' },
  { label: 'Happy Clients', value: '98%', description: 'Satisfaction rate' },
  { label: 'Total Value', value: '$3.5B', description: 'Real estate managed' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Elena Rodriguez',
    role: 'Tech Entrepreneur',
    content: "The level of service and attention to detail was unmatched. They found my dream home in weeks, not months.",
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: '2',
    name: 'James Sterling',
    role: 'Investment Banker',
    content: "Professional, discreet, and incredibly knowledgeable about the high-end market. A seamless experience.",
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    id: '3',
    name: 'Sarah Jenkins',
    role: 'Architect',
    content: "As an architect, I'm picky. LuxeEstate understood exactly what I was looking for structurally and aesthetically.",
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  }
];

export const CATEGORIES = [
  { name: 'Villa', display: 'Modern Villas', count: 45, image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Apartment', display: 'Urban Apartments', count: 82, image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Penthouse', display: 'Penthouses', count: 15, image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Estate', display: 'Luxury Estates', count: 28, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
];

export const AGENTS: Agent[] = [
  {
    id: '1',
    name: 'Alexandra Moore',
    role: 'Senior Estate Agent',
    phone: '+1 (555) 123-4567',
    email: 'alexandra@luxeestate.com',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Luxury Property Specialist',
    phone: '+1 (555) 234-5678',
    email: 'david@luxeestate.com',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: '3',
    name: 'Isabella Rossellini',
    role: 'International Consultant',
    phone: '+1 (555) 345-6789',
    email: 'isabella@luxeestate.com',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Top 5 Investment Trends in 2024',
    date: 'March 15, 2024',
    category: 'Market Insights',
    excerpt: 'Discover where the smart money is moving in the global luxury real estate market this year.',
    imageUrl: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '2',
    title: 'Designing for Wellness: The New Luxury',
    date: 'March 10, 2024',
    category: 'Architecture',
    excerpt: 'How high-end amenities are shifting from entertainment to health, longevity, and peace of mind.',
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '3',
    title: 'A Guide to Buying Historic Properties',
    date: 'March 5, 2024',
    category: 'Guides',
    excerpt: 'Navigating the complexities and rewards of owning a piece of architectural history.',
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];