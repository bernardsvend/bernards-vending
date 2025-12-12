import { BlogPost, Product, MachineType } from './types';

const AMAZON_TAG = 'whatevrinfo-20';
const createAmazonLink = (query: string) => `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Bulk Healthy Nut Mix',
    category: 'Healthy',
    image: 'https://picsum.photos/300/300?random=1',
    affiliateLink: createAmazonLink('Bulk Healthy Nut Mix'),
    priceRange: '$15 - $25',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Sparkling Water Variety Pack',
    category: 'Drink',
    image: 'https://picsum.photos/300/300?random=2',
    affiliateLink: createAmazonLink('Sparkling Water Variety Pack'),
    priceRange: '$20 - $30',
    rating: 4.9
  },
  {
    id: '4',
    name: 'Organic Fruit Snacks',
    category: 'Snack',
    image: 'https://picsum.photos/300/300?random=4',
    affiliateLink: createAmazonLink('Organic Fruit Snacks'),
    priceRange: '$18 - $24',
    rating: 4.5
  },
    {
    id: '5',
    name: 'Energy Bar Mega Pack',
    category: 'Snack',
    image: 'https://picsum.photos/300/300?random=5',
    affiliateLink: createAmazonLink('Energy Bar Mega Pack'),
    priceRange: '$25 - $35',
    rating: 4.6
  },
  {
    id: '6',
    name: 'Eco-Friendly Cups',
    category: 'Office',
    image: 'https://picsum.photos/300/300?random=6',
    affiliateLink: createAmazonLink('Eco-Friendly Cups'),
    priceRange: '$20 - $25',
    rating: 4.9
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Snacks to Boost Office Productivity',
    excerpt: 'Discover the science behind fueling your team with the right nutrition.',
    content: `<p>Keeping your team energized is key. We recommend high-protein nuts and low-sugar bars. <a href="${createAmazonLink('bulk nut mix')}" target="_blank" rel="noopener noreferrer" class="text-red-600 underline">Check out this bulk nut mix on Amazon</a>.</p>`,
    image: 'https://picsum.photos/800/400?random=10',
    date: 'Oct 12, 2023',
    category: 'Productivity'
  },
  {
    id: '2',
    title: 'Why Free Vending Services Save You Money',
    excerpt: 'Stop buying snacks yourself. Here is how a full-service solution works.',
    content: '<p>Time is money. Managing the breakroom takes hours. Our free service handles stocking and maintenance.</p>',
    image: 'https://picsum.photos/800/400?random=11',
    date: 'Nov 05, 2023',
    category: 'Business Tips'
  },
  {
    id: '3',
    title: 'The Shift to Healthy Vending Options',
    excerpt: 'Employees are demanding better choices. Here is what is trending in 2024.',
    content: '<p>Gone are the days of just sugary sodas. Sparkling waters and organic chips are taking over.</p>',
    image: 'https://picsum.photos/800/400?random=12',
    date: 'Dec 15, 2023',
    category: 'Trends'
  }
];

export const MACHINE_TYPES_INFO = [
  {
    id: 'snack',
    name: 'Snack Machine',
    description: 'Perfect for chips, candy, bars, and pastries. Features glass front display and sure-vend technology.',
    icon: 'cookie',
    image: '/combo-machine.jpg'
  },
  {
    id: 'drink',
    name: 'Beverage Center',
    description: 'Ice cold sodas, energy drinks, water, and juices. High capacity for high traffic areas.',
    icon: 'cup-soda',
    image: '/drink-machine.jpg'
  },
  {
    id: 'combo',
    name: 'Combo Machine',
    description: 'The space saver. Snacks on top, cold drinks on bottom. Ideal for offices with 30-75 employees.',
    icon: 'utensils',
    image: '/snack-machine.jpg'
  }
];