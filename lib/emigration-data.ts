// COMPREHENSIVE EMIGRATION DATA LOADER
// Integrates all research data for USA, Germany, Poland, and Ireland
// With type-safe structures for the entire application

import polandComplete from '../poland-emigration-data-COMPLETE.json';
import germanyComplete from '../germany-emigration-data-COMPLETE.json';
import irelandComplete from '../ireland-emigration-data-COMPLETE.json';
import usaComplete from '../usa-emigration-data-COMPLETE.json';

// Core Types
export interface CountryData {
  countryCode: string;
  countrySlug: string;
  officialName: string;
  nameInTurkish: string;
  officialLanguages: string[];
  currency: string;
  currencyToTRY: number;
  timezone: string;
  euMember: boolean;
  schengenMember: boolean;
  population: string;
  capital: string;
}

export interface VisaProgram {
  visaId: string;
  visaCode: string;
  officialName: string;
  nameInTurkish?: string;
  category: 'work' | 'student' | 'business' | 'family' | 'entrepreneur' | 'investor';
  popularity?: string;
  overview: {
    description: string;
    keyBenefits: string[];
    bestFor: string[];
  };
  eligibilityCriteria: {
    ageRequirements: {
      minimumAge: number | null;
      maximumAge: number | null;
      notes?: string;
    };
    educationRequirements: Record<string, unknown>;
    languageRequirements: Record<string, unknown>;
    financialRequirements: Record<string, unknown>;
    workExperienceRequirements?: Record<string, unknown>;
  };
  applicationProcess: {
    overview: string;
    estimatedTotalDuration: string;
    steps: Array<{
      stepNumber: number;
      stepName: string;
      description: string;
      duration: string;
      costs?: Array<{
        item: string;
        amount: number;
        currency: string;
        amountTRY?: number;
      }>;
      tips?: string[];
    }>;
    totalCosts: {
      applicantPays: Array<{
        item: string;
        amount: number;
        currency: string;
        amountTRY?: number;
      }>;
      totalEstimate: {
        minimum: number;
        typical: number;
        maximum: number;
        currency: string;
      };
    };
    processingTimes: {
      standard?: string;
      minimum?: string;
      typical?: string;
      maximum?: string;
    };
  };
  rightsAndRestrictions: {
    workRights: Record<string, unknown>;
    familyRights: Record<string, unknown>;
    travelRights: Record<string, unknown>;
  };
  pathToPermanentResidency?: {
    available: boolean;
    minimumYears?: number | string;
    requirements?: string[];
  };
  pathToCitizenship?: {
    available: boolean;
    minimumResidencyYears?: number;
    requirements?: string[];
  };
}

export interface EmigrationData {
  dataVersion: string;
  lastUpdated: string;
  country: CountryData;
  visaPrograms?: VisaProgram[];
  turkishCitizenSpecificInfo?: Record<string, unknown>;
  governmentContacts?: Record<string, unknown>;
}

// Type guards
function isEmigrationData(data: unknown): data is EmigrationData {
  return (
    typeof data === 'object' &&
    data !== null &&
    'country' in data &&
    typeof (data as Record<string, unknown>).country === 'object'
  );
}

// Load and validate data
export const emigrationData = {
  poland: isEmigrationData(polandComplete) ? polandComplete : null,
  germany: isEmigrationData(germanyComplete) ? germanyComplete : null,
  ireland: isEmigrationData(irelandComplete) ? irelandComplete : null,
  usa: isEmigrationData(usaComplete) ? usaComplete : null,
};

// Country metadata for display
export const countryMetadata = {
  poland: {
    slug: 'polonya',
    name: 'Polonya',
    flagEmoji: '🇵🇱',
    description: 'AB\'ye en uygun maliyetli giriş! Varşova\'da aylık €1,000-1,400 yaşam maliyeti. Decision 1/80 ile Türk vatandaşlarına özel iş güvenceleri.',
    popularityScore: 82,
    images: [
      'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1605641495026-d8e2e3e88e04?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1580159287648-d3cb43143b4d?w=1200&h=600&fit=crop'
    ],
    highlights: [
      'En düşük EU Blue Card eşiği (€2,894/ay)',
      'Decision 1/80 - Türk vatandaşlarına özel haklar',
      'Ücretsiz tıp eğitimi programları',
      '2 yılda kalıcı oturum (EU Blue Card)',
      'Schengen vizesi'
    ],
  },
  germany: {
    slug: 'almanya',
    name: 'Almanya',
    flagEmoji: '🇩🇪',
    description: 'Avrupa\'nın en güçlü ekonomisi ve 3.5 milyon kişilik Türk diasporası. YENİ 2024: Çifte vatandaşlık artık mümkün!',
    popularityScore: 95,
    images: [
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560930950-5cc20e80e392?w=1200&h=600&fit=crop'
    ],
    highlights: [
      'CHANCENKARTE (Fırsat Kartı) - YENİ 2024!',
      'Ücretsiz üniversite eğitimi',
      'EU Blue Card - dil şartı yok (2024)',
      'Çifte vatandaşlık izni (Haziran 2024)',
      '21-33 ayda kalıcı oturum'
    ],
  },
  ireland: {
    slug: 'irlanda',
    name: 'İrlanda',
    flagEmoji: '🇮🇪',
    description: 'AB\'nin tek İngilizce konuşan ülkesi. Google, Meta, Apple\'ın Avrupa genel merkezleri. Yüksek teknoloji maaşları.',
    popularityScore: 68,
    images: [
      'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=600&fit=crop'
    ],
    highlights: [
      'Critical Skills İzni - 2 yılda kalıcı oturum',
      'İngilizce konuşulan AB ülkesi',
      'Tech hub - €40,000-70,000 maaşlar',
      'Eş hemen çalışabilir',
      '5 yılda AB vatandaşlığı'
    ],
  },
  usa: {
    slug: 'abd',
    name: 'Amerika Birleşik Devletleri',
    flagEmoji: '🇺🇸',
    description: 'Dünyanın en yüksek maaşları. STEM için 36 ay OPT. 350,000 kişilik Türk topluluğu. UYARI: H-1B vizesi artık €91,000 ek ücret!',
    popularityScore: 75,
    images: [
      'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=600&fit=crop'
    ],
    highlights: [
      'E-2 Treaty Investor (Türkiye anlaşmalı)',
      'STEM OPT - 36 ay çalışma',
      'Türk vatandaşları için hızlı Green Card',
      'Silicon Valley teknoloji merkezleri',
      'Yüksek maaşlar ($80K-200K+)'
    ],
  },
};

// Helper functions to get country data
export function getCountryData(countrySlug: string): EmigrationData | null {
  const slugMap: Record<string, keyof typeof emigrationData> = {
    'polonya': 'poland',
    'almanya': 'germany',
    'irlanda': 'ireland',
    'abd': 'usa',
  };

  const key = slugMap[countrySlug];
  return key ? emigrationData[key] : null;
}

export function getAllCountries() {
  return Object.values(countryMetadata);
}

export function getCountryMetadata(countrySlug: string) {
  const metadata = Object.values(countryMetadata).find(c => c.slug === countrySlug);
  return metadata || null;
}

export function getVisaPrograms(countrySlug: string): VisaProgram[] {
  const data = getCountryData(countrySlug);
  return data?.visaPrograms || [];
}

// Get visa by ID
export function getVisaProgram(countrySlug: string, visaId: string): VisaProgram | null {
  const programs = getVisaPrograms(countrySlug);
  return programs.find(v => v.visaId === visaId) || null;
}

// Search and filter functions
export function searchVisas(query: string, countrySlug?: string) {
  const countries = countrySlug ? [countrySlug] : ['polonya', 'almanya', 'irlanda', 'abd'];
  const results: Array<{ country: string; visa: VisaProgram }> = [];

  countries.forEach(slug => {
    const visas = getVisaPrograms(slug);
    visas.forEach(visa => {
      const searchText = `${visa.officialName} ${visa.nameInTurkish || ''} ${visa.overview.description}`.toLowerCase();
      if (searchText.includes(query.toLowerCase())) {
        results.push({ country: slug, visa });
      }
    });
  });

  return results;
}

// Get visa statistics
export function getCountryStats(countrySlug: string) {
  const data = getCountryData(countrySlug);
  if (!data || !data.visaPrograms) {
    return {
      totalVisas: 0,
      fastestProcessing: 'N/A',
      lowestCost: 'N/A',
      categories: [],
    };
  }

  const visas = data.visaPrograms;

  // Find fastest processing
  let fastestDays = Infinity;
  visas.forEach(visa => {
    const duration = visa.applicationProcess.estimatedTotalDuration;
    // Extract days from strings like "60-90 days" or "2-3 months"
    const match = duration.match(/(\d+)/);
    if (match) {
      const days = parseInt(match[1]);
      if (days < fastestDays) fastestDays = days;
    }
  });

  // Find lowest cost
  let lowestCost = Infinity;
  visas.forEach(visa => {
    const cost = visa.applicationProcess.totalCosts.totalEstimate.minimum;
    if (cost < lowestCost) lowestCost = cost;
  });

  // Get categories
  const categories = [...new Set(visas.map(v => v.category))];

  return {
    totalVisas: visas.length,
    fastestProcessing: fastestDays === Infinity ? 'N/A' : `${fastestDays}+ gün`,
    lowestCost: lowestCost === Infinity ? 'N/A' : `€${lowestCost.toLocaleString()}+`,
    categories,
  };
}

// Calculate match score based on user profile
export function calculateMatchScore(
  countrySlug: string,
  userProfile: {
    age?: number;
    education?: string;
    profession?: string;
    budget?: number;
    language?: string[];
  }
): number {
  let score = 50; // Base score

  const visas = getVisaPrograms(countrySlug);

  // Check if user qualifies for any visa
  visas.forEach(visa => {
    const eligibility = visa.eligibilityCriteria;

    // Age check
    if (userProfile.age) {
      const minAge = eligibility.ageRequirements.minimumAge || 0;
      const maxAge = eligibility.ageRequirements.maximumAge || 100;
      if (userProfile.age >= minAge && userProfile.age <= maxAge) {
        score += 10;
      }
    }

    // Budget check
    if (userProfile.budget) {
      const visaCost = visa.applicationProcess.totalCosts.totalEstimate.typical;
      if (userProfile.budget >= visaCost) {
        score += 15;
      }
    }

    // Category bonus
    if (visa.category === 'work') score += 5;
    if (visa.category === 'student') score += 5;
  });

  // Country-specific bonuses
  if (countrySlug === 'almanya' && userProfile.language?.includes('german')) {
    score += 20;
  }

  if (countrySlug === 'irlanda' && userProfile.language?.includes('english')) {
    score += 15;
  }

  if (countrySlug === 'polonya') {
    score += 10; // Lower cost bonus
  }

  return Math.min(score, 100); // Cap at 100
}

export default emigrationData;
