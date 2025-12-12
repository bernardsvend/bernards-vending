export enum MachineType {
  SNACK = 'SNACK',
  DRINK = 'DRINK',
  COMBO = 'COMBO',
  HEALTHY = 'HEALTHY'
}

export interface Product {
  id: string;
  name: string;
  category: 'Snack' | 'Drink' | 'Office' | 'Healthy';
  image: string;
  affiliateLink: string;
  priceRange: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML supported for affiliate links
  image: string;
  date: string;
  category: string;
}

export interface LeadForm {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  employees: string;
  locationType: string;
}

export interface QuizResult {
  score: number;
  recommendedType: MachineType;
  explanation: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}