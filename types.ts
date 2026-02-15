export interface Artist {
  id: string;
  name: string;
  specialties: string[];
  image: string;
  whatsapp: string;
  instagram: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Service {
  name: string;
}

export interface Piercer {
  name: string;
  description: string;
  services: string[];
  whatsapp: string;
  instagram: string;
  image: string;
}