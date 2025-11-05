import { UserProfileData } from './store';
import { MOCK_COUNTRIES } from './real-data';

interface CountryScore {
  slug: string;
  score: number;
  reasons: string[];
}

/**
 * Recommendation engine that matches user profile to countries
 * Updated for real data: abd, almanya, irlanda, polonya, kanada
 */
export function getRecommendedCountries(profile: UserProfileData): string[] {
  const scores: CountryScore[] = MOCK_COUNTRIES.map((country) => {
    let score = country.popularityScore;
    const reasons: string[] = [];

    // Factor 1: Employment Status & Goals
    if (profile.employmentStatus === 'student' || profile.primaryGoal === 'education') {
      if (['kanada', 'almanya', 'polonya', 'irlanda'].includes(country.slug)) {
        score += 20;
        reasons.push('Öğrenciler için mükemmel eğitim fırsatları');
      }
    }

    if (profile.employmentStatus === 'employed' || profile.primaryGoal === 'employment') {
      if (['kanada', 'almanya', 'irlanda', 'abd'].includes(country.slug)) {
        score += 15;
        reasons.push('Profesyoneller için güçlü iş pazarı');
      }
    }

    if (profile.primaryGoal === 'business') {
      if (['abd', 'irlanda', 'kanada', 'almanya'].includes(country.slug)) {
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
        if (['abd', 'irlanda', 'almanya', 'kanada'].includes(country.slug)) {
          score += 20;
          reasons.push('Teknoloji sektörü için yüksek talep');
        }
      }

      // Healthcare
      if (professionLower.includes('doktor') || professionLower.includes('hemşire') ||
          professionLower.includes('sağlık')) {
        if (['almanya', 'irlanda', 'kanada', 'abd'].includes(country.slug)) {
          score += 25;
          reasons.push('Sağlık profesyonellerine acil ihtiyaç');
        }
      }

      // Engineering
      if (professionLower.includes('mühendis')) {
        if (['almanya', 'abd', 'kanada', 'irlanda'].includes(country.slug)) {
          score += 20;
          reasons.push('Mühendislik pozisyonları için yüksek maaşlar');
        }
      }
    }

    // Factor 3: Budget
    if (profile.budgetRange) {
      if (profile.budgetRange === '0-100k' || profile.budgetRange === '100k-250k') {
        // Lower budget - favor Poland
        if (['polonya'].includes(country.slug)) {
          score += 25;
          reasons.push('AB\'nin en uygun yaşam maliyeti');
        }
      } else if (profile.budgetRange === '500k+') {
        // High budget - favor premium destinations
        if (['abd', 'kanada', 'irlanda'].includes(country.slug)) {
          score += 15;
          reasons.push('Yüksek yaşam kalitesi');
        }
      }
    }

    // Factor 4: Language Skills
    if (profile.languageSkills) {
      if (profile.languageSkills.english === 'fluent' || profile.languageSkills.english === 'intermediate') {
        if (['abd', 'kanada', 'irlanda'].includes(country.slug)) {
          score += 20;
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

    // Factor 5: Age Range
    if (profile.ageRange) {
      if (profile.ageRange === '18-25' || profile.ageRange === '26-35') {
        // Young professionals - favor countries with easier entry for youth
        if (['kanada', 'almanya', 'irlanda', 'polonya'].includes(country.slug)) {
          score += 10;
          reasons.push('Genç profesyoneller için uygun');
        }
      } else if (profile.ageRange === '46-55' || profile.ageRange === '55+') {
        // Older professionals - favor countries with experience-based programs
        if (['kanada', 'almanya'].includes(country.slug)) {
          score += 10;
          reasons.push('Deneyimli profesyonellere öncelik');
        }
      }
    }

    // Factor 6: Timeline
    if (profile.timeline) {
      if (profile.timeline === 'urgent' || profile.timeline === '6months') {
        // Fast processing countries
        if (['polonya', 'irlanda'].includes(country.slug)) {
          score += 15;
          reasons.push('Hızlı vize işlemleri');
        }
      } else if (profile.timeline === '1year' || profile.timeline === '2years') {
        // Countries with thorough but worthwhile processes
        if (['kanada', 'almanya', 'abd'].includes(country.slug)) {
          score += 10;
          reasons.push('Kapsamlı göç programları');
        }
      }
    }

    // Factor 7: Experience Level
    if (profile.yearsExperience) {
      if (profile.yearsExperience >= 5) {
        // Experienced professionals
        if (['abd', 'kanada', 'almanya', 'irlanda'].includes(country.slug)) {
          score += 15;
          reasons.push('Deneyimli profesyonellere öncelik');
        }
      } else if (profile.yearsExperience >= 1) {
        // Some experience
        if (['irlanda', 'polonya', 'almanya'].includes(country.slug)) {
          score += 10;
          reasons.push('Orta seviye deneyim yeterli');
        }
      }
    }

    // Factor 8: Family
    if (profile.hasFamily) {
      if (['kanada', 'almanya', 'irlanda'].includes(country.slug)) {
        score += 12;
        reasons.push('Aile dostu politikalar');
      }
    }

    // Factor 9: Education Level
    if (profile.educationLevel) {
      if (profile.educationLevel === 'yuksek_lisans' || profile.educationLevel === 'doktora') {
        // Higher education favored by all countries
        if (['abd', 'kanada', 'almanya', 'irlanda'].includes(country.slug)) {
          score += 15;
          reasons.push('Yüksek eğitim seviyeniz büyük avantaj');
        }
      } else if (profile.educationLevel === 'universite') {
        // Bachelor's degree
        if (['almanya', 'kanada', 'irlanda', 'polonya'].includes(country.slug)) {
          score += 10;
          reasons.push('Üniversite mezunları için fırsatlar');
        }
      } else if (profile.educationLevel === 'lise') {
        // High school - favor Ausbildung and vocational programs
        if (['almanya', 'polonya'].includes(country.slug)) {
          score += 15;
          reasons.push('Meslek eğitimi programları');
        }
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
    } else if ((professionLower.includes('it') || professionLower.includes('yazılım')) && country.matchReasons.it) {
      reasons.push(country.matchReasons.it);
    } else if (professionLower.includes('mühendis') && country.matchReasons.engineer) {
      reasons.push(country.matchReasons.engineer);
    } else {
      reasons.push(country.matchReasons.default);
    }
  } else if (profile.primaryGoal === 'business' && country.matchReasons.business) {
    reasons.push(country.matchReasons.business);
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
