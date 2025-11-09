import { z } from 'zod';

/**
 * Form validation schemas using Zod
 */

// Step 1: Personal Info
export const personalInfoSchema = z.object({
  ageRange: z.string().min(1, 'Yaş aralığı seçiniz'),
  educationLevel: z.string().min(1, 'Eğitim seviyenizi seçiniz'),
  hasFamily: z.boolean(),
});

// Step 2: Professional Background
export const professionalSchema = z.object({
  profession: z.string().min(2, 'Mesleğinizi giriniz (en az 2 karakter)'),
  industry: z.string().min(1, 'Sektör seçiniz'),
  employmentStatus: z.string().min(1, 'İstihdam durumunuzu seçiniz'),
  yearsExperience: z.number().min(0, 'Geçerli bir deneyim süresi giriniz').max(50, 'Geçersiz deneyim süresi'),
});

// Step 3: Language & Preferences
export const languageSchema = z.object({
  languageSkills: z.object({
    english: z.enum(['none', 'basic', 'intermediate', 'fluent']),
    german: z.enum(['none', 'basic', 'intermediate', 'fluent']),
    french: z.enum(['none', 'basic', 'intermediate', 'fluent']),
    other: z.string().optional(),
  }),
  preferredClimate: z.string().optional(),
});

// Step 4: Financial & Timeline
export const budgetSchema = z.object({
  budgetRange: z.string().min(1, 'Bütçe aralığı seçiniz'),
  timeline: z.string().min(1, 'Zaman planınızı seçiniz'),
});

// Step 5: Goals
export const goalsSchema = z.object({
  primaryGoal: z.string().min(1, 'Birincil hedefinizi seçiniz'),
});

// Step 6: Lead Capture (optional)
export const contactSchema = z.object({
  email: z.string().email('Geçerli bir e-posta adresi giriniz').optional().or(z.literal('')),
  phone: z.string().optional(),
  interestedInConsultation: z.boolean().optional(),
});

// Full profile schema
export const fullProfileSchema = z.object({
  ...personalInfoSchema.shape,
  ...professionalSchema.shape,
  ...languageSchema.shape,
  ...budgetSchema.shape,
  ...goalsSchema.shape,
  ...contactSchema.shape,
});

// Export types
export type PersonalInfoInput = z.infer<typeof personalInfoSchema>;
export type ProfessionalInput = z.infer<typeof professionalSchema>;
export type LanguageInput = z.infer<typeof languageSchema>;
export type BudgetInput = z.infer<typeof budgetSchema>;
export type GoalsInput = z.infer<typeof goalsSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type FullProfileInput = z.infer<typeof fullProfileSchema>;

/**
 * Validation helper for individual fields
 */
export const validateField = <T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: boolean; error?: string } => {
  try {
    schema.parse(data);
    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.issues[0]?.message || 'Validation error',
      };
    }
    return { success: false, error: 'Unknown validation error' };
  }
};

/**
 * Email validation helper
 */
export const isValidEmail = (email: string): boolean => {
  return z.string().email().safeParse(email).success;
};

/**
 * Phone validation helper (Turkish format)
 */
export const isValidTurkishPhone = (phone: string): boolean => {
  const phoneRegex = /^(\+90|0)?[1-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};
