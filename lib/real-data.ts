// REAL DATA FOR TURKISH EMIGRATION APP
// Imported from emigration-data-structured.ts
// Transformed to match component structure

import {
  countries as rawCountries,
  visaTypes as rawVisaTypes,
  requirements as rawRequirements,
  resources as rawResources,
  costs as rawCosts
} from '../emigration-data-structured';

// Transform countries to match expected structure
export const MOCK_COUNTRIES = rawCountries.map((country, index) => ({
  id: String(index + 1),
  slug: country.slug,
  name: country.name,
  flagEmoji: country.flagEmoji,
  images: country.images,
  description: country.description,
  popularityScore: country.popularityScore,
  matchReasons: {
    student: getMatchReason(country.slug, 'student'),
    it: getMatchReason(country.slug, 'it'),
    healthcare: getMatchReason(country.slug, 'healthcare'),
    engineer: getMatchReason(country.slug, 'engineer'),
    business: getMatchReason(country.slug, 'business'),
    default: country.description,
  },
}));

// Match reasons helper function
function getMatchReason(countrySlug: string, category: string): string {
  const reasons: Record<string, Record<string, string>> = {
    abd: {
      student: 'STEM alanlarında 36 ay çalışma izni (OPT) ve dünya'nın en iyi üniversiteleri',
      it: 'Silicon Valley ve yüksek teknoloji maaşları. H-1B vizesi ile kariyer fırsatları',
      healthcare: 'Sağlık sektöründe yüksek maaşlar ve geniş iş imkanları',
      engineer: 'Teknoloji ve mühendislik için dünya'nın lider pazarı',
      business: 'E-2 ve EB-5 yatırımcı vizeleri ile iş kurma fırsatları',
    },
    almanya: {
      student: 'Ücretsiz devlet üniversiteleri ve 18 ay iş arama izni',
      it: 'EU Blue Card ile 21 ayda kalıcı oturum. Güçlü teknoloji sektörü',
      healthcare: 'Sağlık çalışanlarına yüksek talep ve Ausbildung programları',
      engineer: 'Otomotiv ve mühendislik sektörünün kalbi. EU Blue Card avantajı',
      business: 'AB'nin en güçlü ekonomisi ve girişimcilik desteği',
    },
    irlanda: {
      student: 'Lisans sonrası 12 ay, master sonrası 24 ay çalışma hakkı',
      it: 'Google, Meta, Apple'ın Avrupa merkezleri. İngilizce konuşulan AB ülkesi',
      healthcare: 'Critical Skills listesinde hemşire ve doktorlar. Hızlı kalıcı oturum',
      engineer: 'Teknoloji ve mühendislik için Critical Skills izni',
      business: 'Start-up Entrepreneur Programme ve canlı girişim ekosistemi',
    },
    polonya: {
      student: 'AB'nin en uygun fiyatlı eğitimi. €2,000-6,000 yıllık harç',
      it: 'Hızla büyüyen teknoloji sektörü ve uygun yaşam maliyeti',
      healthcare: 'AB Mavi Kart ile sağlık profesyonellerine fırsatlar',
      engineer: 'Mühendislik işleri ve AB'ye ekonomik giriş kapısı',
      business: 'Düşük başlangıç maliyetleri ve Schengen vizesi avantajı',
    },
    kanada: {
      student: 'Mezuniyet sonrası 3 yıla kadar çalışma izni (PGWP)',
      it: 'Teknoloji sektöründe yüksek maaşlar ve Express Entry sistemi',
      healthcare: 'Sağlık profesyonellerine büyük talep ve hızlı göç süreci',
      engineer: 'Mühendisler için Express Entry ve Provincial Nominee programları',
      business: 'Start-up Visa programı ile doğrudan kalıcı oturum',
    },
  };

  return reasons[countrySlug]?.[category] || reasons[countrySlug]?.default || '';
}

// Transform visa types to match expected structure (object keyed by country slug)
export const MOCK_VISA_TYPES: Record<string, any[]> = {};
rawVisaTypes.forEach(visa => {
  if (!MOCK_VISA_TYPES[visa.countrySlug]) {
    MOCK_VISA_TYPES[visa.countrySlug] = [];
  }

  MOCK_VISA_TYPES[visa.countrySlug].push({
    type: visa.type,
    name: visa.name,
    description: visa.description,
    processingTime: formatProcessingTime(visa.processingTimeMin, visa.processingTimeMax),
    estimatedCost: formatCost(visa.estimatedCostMin, visa.estimatedCostMax),
    difficulty: formatDifficulty(visa.difficultyLevel),
    demandLevel: formatDemandLevel(visa.demandLevel),
    minAge: visa.minAge,
    maxAge: visa.maxAge,
    educationLevel: visa.educationLevel,
    professions: visa.professions,
  });
});

// Helper functions for formatting
function formatProcessingTime(min: number, max: number): string {
  const formatDays = (days: number) => {
    if (days < 7) return `${days} gün`;
    if (days < 30) return `${Math.round(days / 7)} hafta`;
    if (days < 365) return `${Math.round(days / 30)} ay`;
    return `${Math.round(days / 365)} yıl`;
  };

  if (min === max) return formatDays(min);
  return `${formatDays(min)}-${formatDays(max)}`;
}

function formatCost(min: number, max: number): string {
  const formatAmount = (amount: number) => {
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)}M TL`;
    }
    if (amount >= 1000) {
      return `${(amount / 1000).toFixed(0)}K TL`;
    }
    return `${amount} TL`;
  };

  if (min === max) return formatAmount(min);
  return `${formatAmount(min)}-${formatAmount(max)}`;
}

function formatDifficulty(level: string): string {
  const map: Record<string, string> = {
    easy: 'Kolay',
    medium: 'Orta',
    hard: 'Zor',
  };
  return map[level] || 'Orta';
}

function formatDemandLevel(level: string): string {
  const map: Record<string, string> = {
    low: 'Düşük',
    medium: 'Orta',
    high: 'Yüksek',
  };
  return map[level] || 'Orta';
}

// Transform requirements to match expected structure
export const MOCK_REQUIREMENTS: Record<string, any[]> = {};
rawRequirements.forEach(req => {
  const key = `${req.visaTypeCountry}_${req.visaTypeName.toLowerCase().replace(/\s+/g, '_')}`;
  if (!MOCK_REQUIREMENTS[key]) {
    MOCK_REQUIREMENTS[key] = [];
  }

  MOCK_REQUIREMENTS[key].push({
    category: req.category,
    title: req.title,
    description: req.description,
    mandatory: req.isMandatory,
    personalizedFor: req.personalizedFor,
  });
});

// Transform resources to match expected structure
export const MOCK_RESOURCES: Record<string, Record<string, any[]>> = {};
rawResources.forEach(resource => {
  if (!MOCK_RESOURCES[resource.countrySlug]) {
    MOCK_RESOURCES[resource.countrySlug] = {
      job_search: [],
      university_search: [],
      community: [],
      housing: [],
    };
  }

  if (!MOCK_RESOURCES[resource.countrySlug][resource.category]) {
    MOCK_RESOURCES[resource.countrySlug][resource.category] = [];
  }

  MOCK_RESOURCES[resource.countrySlug][resource.category].push({
    title: resource.title,
    url: resource.url,
    description: resource.description,
    targetAudience: resource.targetAudience,
  });
});

// Export costs directly
export const COSTS = rawCosts;

// Category lists for the new countries
export const CATEGORY_LISTS = [
  {
    id: '1',
    slug: 'ogrenciler',
    title: 'Öğrenciler İçin En İyi Ülkeler',
    description: 'Kaliteli eğitim, uygun maliyetler ve mezuniyet sonrası fırsatlar',
    icon: '🎓',
    countries: ['almanya', 'polonya', 'kanada', 'irlanda'],
  },
  {
    id: '2',
    slug: 'it-profesyonelleri',
    title: 'IT Profesyonelleri İçin',
    description: 'Yüksek maaşlar, startup ekosistemi ve teknoloji fırsatları',
    icon: '💻',
    countries: ['abd', 'irlanda', 'almanya', 'kanada'],
  },
  {
    id: '3',
    slug: 'saglik-calisanlari',
    title: 'Sağlık Çalışanları İçin',
    description: 'Yüksek talep, iyi maaşlar ve hızlı göç süreçleri',
    icon: '⚕️',
    countries: ['almanya', 'irlanda', 'kanada', 'abd'],
  },
  {
    id: '4',
    slug: 'girisimciler',
    title: 'Girişimciler İçin',
    description: 'Startup ekosistemi ve girişimci vize programları',
    icon: '🚀',
    countries: ['abd', 'irlanda', 'kanada', 'almanya'],
  },
  {
    id: '5',
    slug: 'muhendisler',
    title: 'Mühendisler İçin',
    description: 'Mühendislik sektöründe güçlü fırsatlar ve EU Blue Card',
    icon: '⚙️',
    countries: ['almanya', 'abd', 'kanada', 'irlanda'],
  },
];
