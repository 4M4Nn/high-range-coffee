export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
  description?: string;
}

export interface ClientItem {
  name: string;
  category: string;
}

export type GradeTier = "AAA" | "AA" | "A" | "B" | "C";

export interface CoffeeGrade {
  slug: string;
  name: string;
  species: "Arabica" | "Robusta";
  grade: GradeTier;
  process: string;
  description: string;
  cuppingNotes: string[];
  screenSize: string;
  image: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  image: string;
}

export interface Certification {
  name: string;
  description: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  category: "Consignment" | "Export Update" | "Harvest" | "Milestone";
  excerpt: string;
  content: string[];
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SustainabilityPoint {
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}
