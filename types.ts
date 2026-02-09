export type View = 'discovery' | 'outreach' | 'builder' | 'billing';

export type HuntingMode = 'website' | 'voice';

export interface Lead {
  id: string;
  name: string;
  niche: string;
  rating: number;
  reviews: number;
  location: string;
  websiteStatus: 'active' | 'missing' | 'broken';
  aiVoiceStatus: 'none' | 'basic' | 'advanced';
  techHealth: number; // 0-100
  phone: string;
}

export interface Metric {
  label: string;
  value: string;
  trend: number;
  positive: boolean;
}
