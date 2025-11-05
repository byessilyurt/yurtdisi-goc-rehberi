import { UserProfileData } from './store';
import { MOCK_COUNTRIES } from './mock-data';

interface CountryScore {
  slug: string;
  score: number;
  reasons: string[];
}

/**
 * Mock recommendation engine that matches user profile to countries
 * Later this will be replaced with actual AI/ML or sophisticated matching
 */
export function getRecommendedCountries(profile: UserProfileData): string[] {
  const scores: CountryScore[] = MOCK_COUNTRIES.map((country) => {
    let score = country.popularityScore;
    const reasons: string[] = [];

    // Factor 1: Employment Status & Goals
    if (profile.employmentStatus === 'student' || profile.primaryGoal === 'education') {
      if (['kanada', 'almanya', 'hollanda'].includes(country.slug)) {
        score += 20;
        reasons.push('Öğrenciler için mükemmel eğitim fırsatları');
      }
    }

    if (profile.employmentStatus === 'employed' || profile.primaryGoal === 'employment') {
      if (['kanada', 'almanya', 'hollanda', 'avustralya'].includes(country.slug)) {
        score += 15;
        reasons.push('Profesyoneller için güçlü iş pazarı');
      }
    }

    if (profile.primaryGoal === 'business') {
      if (['hollanda', 'portekiz', 'kanada'].includes(country.slug)) {
        score += 25;
        reasons.push('Girişimciler için özel vize programları');
      }
    }

    // Factor 2: Profession specific
    if (profile.profession) {
      const professionLower = profile.profession.toLowerCase();

      // IT/Tech
      if (professionLower.includes('yazılım') || professionLower.includes('developer') ||
          professionLower.includes('mühendis') || professionLower.includes('it')) {
        if (['kanada', 'hollanda', 'almanya'].includes(country.slug)) {
          score += 20;
          reasons.push('Teknoloji sektörü için yüksek talep');
        }
      }

      // Healthcare
      if (professionLower.includes('doktor') || professionLower.includes('hemşire') ||
          professionLower.includes('sağlık')) {
        if (['kanada', 'almanya', 'avustralya'].includes(country.slug)) {
          score += 25;
          reasons.push('Sağlık profesyonellerine acil ihtiyaç');
        }
      }

      // Engineering
      if (professionLower.includes('mühendis')) {
        if (['almanya', 'kanada', 'hollanda'].includes(country.slug)) {
          score += 20;
          reasons.push('Mühendislik pozisyonları için yüksek maaşlar');
        }
      }
    }

    // Factor 3: Budget
    if (profile.budgetRange) {
      if (profile.budgetRange === '0-100k') {
        // Low budget - favor cheaper countries
        if (['ispanya', 'portekiz'].includes(country.slug)) {
          score += 20;
          reasons.push('Düşük yaşam maliyeti');
        }
      } else if (profile.budgetRange === '500k+') {
        // High budget - favor premium destinations
        if (['kanada', 'avustralya', 'hollanda'].includes(country.slug)) {
          score += 15;
          reasons.push('Yüksek yaşam kalitesi');
        }
      }
    }

    // Factor 4: Language Skills
    if (profile.languageSkills) {
      if (profile.languageSkills.english === 'fluent' || profile.languageSkills.english === 'intermediate') {
        if (['kanada', 'avustralya', 'hollanda'].includes(country.slug)) {
          score += 15;
          reasons.push('İngilizce konuşulan ülke');
        }
      }

      if (profile.languageSkills.german === 'fluent' || profile.languageSkills.german === 'intermediate') {
        if (country.slug === 'almanya') {
          score += 25;
          reasons.push('Almanca bilginiz büyük avantaj');
        }
      }

      if (profile.languageSkills.french === 'fluent' || profile.languageSkills.french === 'intermediate') {
        if (country.slug === 'kanada') {
          score += 15;
          reasons.push('Fransızca Kanada\'da avantaj sağlar');
        }
      }
    }

    // Factor 5: Climate Preference
    if (profile.preferredClimate) {
      if (profile.preferredClimate === 'sicak') {
        if (['ispanya', 'portekiz', 'avustralya'].includes(country.slug)) {
          score += 15;
          reasons.push('Sıcak ve güneşli iklim');
        }
      } else if (profile.preferredClimate === 'ilik') {
        if (['hollanda', 'almanya'].includes(country.slug)) {
          score += 10;
          reasons.push('Ilıman iklim');
        }
      }
    }

    // Factor 6: Age Range
    if (profile.ageRange) {
      if (profile.ageRange === '18-25' || profile.ageRange === '26-35') {
        // Young professionals - favor countries with easier entry for youth
        if (['kanada', 'almanya', 'hollanda'].includes(country.slug)) {
          score += 10;
          reasons.push('Genç profesyoneller için uygun');
        }
      } else if (profile.ageRange === '55+') {
        // Retirees
        if (['ispanya', 'portekiz'].includes(country.slug)) {
          score += 20;
          reasons.push('Emekliler için özel programlar');
        }
      }
    }

    // Factor 7: Timeline
    if (profile.timeline) {
      if (profile.timeline === 'urgent' || profile.timeline === '6months') {
        // Fast processing countries
        if (['portekiz', 'ispanya'].includes(country.slug)) {
          score += 15;
          reasons.push('Hızlı vize işlemleri');
        }
      }
    }

    // Factor 8: Experience Level
    if (profile.yearsExperience) {
      if (profile.yearsExperience >= 5) {
        // Experienced professionals
        if (['kanada', 'almanya', 'avustralya'].includes(country.slug)) {
          score += 15;
          reasons.push('Deneyimli profesyonellere öncelik');
        }
      }
    }

    // Factor 9: Family
    if (profile.hasFamily) {
      if (['kanada', 'almanya', 'hollanda'].includes(country.slug)) {
        score += 10;
        reasons.push('Aile dostu politikalar');
      }
    }

    return { slug: country.slug, score, reasons };
  });

  // Sort by score and return top 5
  scores.sort((a, b) => b.score - a.score);
  return scores.slice(0, 5).map((s) => s.slug);
}

/**
 * Get match reasons for a specific country based on user profile
 */
export function getMatchReasons(countrySlug: string, profile: UserProfileData): string[] {
  const country = MOCK_COUNTRIES.find((c) => c.slug === countrySlug);
  if (!country) return [];

  const reasons: string[] = [];

  // Get personalized match reason based on profile
  if (profile.employmentStatus === 'student' && country.matchReasons.student) {
    reasons.push(country.matchReasons.student);
  } else if (profile.profession) {
    const professionLower = profile.profession.toLowerCase();
    if (professionLower.includes('sağlık') && country.matchReasons.healthcare) {
      reasons.push(country.matchReasons.healthcare);
    } else if (professionLower.includes('it') || professionLower.includes('yazılım')) {
      reasons.push(country.matchReasons.it || country.matchReasons.default);
    } else {
      reasons.push(country.matchReasons.default);
    }
  } else {
    reasons.push(country.matchReasons.default);
  }

  return reasons;
}

/**
 * Get user profile type for personalization
 */
export function getUserType(profile: UserProfileData): 'student' | 'healthcare' | 'it' | 'engineer' | 'business' | 'general' {
  if (profile.employmentStatus === 'student' || profile.primaryGoal === 'education') {
    return 'student';
  }

  if (profile.profession) {
    const professionLower = profile.profession.toLowerCase();
    if (professionLower.includes('sağlık') || professionLower.includes('doktor') || professionLower.includes('hemşire')) {
      return 'healthcare';
    }
    if (professionLower.includes('yazılım') || professionLower.includes('developer') || professionLower.includes('it')) {
      return 'it';
    }
    if (professionLower.includes('mühendis')) {
      return 'engineer';
    }
  }

  if (profile.primaryGoal === 'business') {
    return 'business';
  }

  return 'general';
}
