// Standalone backup of original COCKROACH data
export interface OriginalProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const ORIGINAL_BRAND_NAME = 'COCKROACH';
export const ORIGINAL_SLOGANS = [
  'WE DON’T BLOOM.',
  'UGLY BUT ALIVE.',
  'RESILIENCE IN DECAY.'
];

export const ORIGINAL_PRODUCTS: OriginalProduct[] = [
  {
    id: 'CR-001',
    name: 'EXOSKELETON HOODIE',
    price: 245,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop&grayscale=true',
    description: 'Triple-layered 600GSM organic cotton. Reinforced spine stitching.',
    category: 'Armor'
  },
  {
    id: 'CR-002',
    name: 'URBAN SHELL CARGOS',
    price: 310,
    image: 'https://images.unsplash.com/photo-1624282388085-f67455084931?q=80&w=800&auto=format&fit=crop&grayscale=true',
    description: 'High-tenacity ripstop nylon. Molecular-bonded pockets.',
    category: 'Legwear'
  }
];
