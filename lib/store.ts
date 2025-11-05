import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserProfileData {
  // Step 1: Personal Info
  ageRange?: string;
  educationLevel?: string;
  hasFamily?: boolean;

  // Step 2: Professional Background
  profession?: string;
  industry?: string;
  employmentStatus?: string;
  yearsExperience?: number;

  // Step 3: Language & Preferences
  languageSkills?: {
    english?: 'none' | 'basic' | 'intermediate' | 'fluent';
    german?: 'none' | 'basic' | 'intermediate' | 'fluent';
    french?: 'none' | 'basic' | 'intermediate' | 'fluent';
    other?: string;
  };
  preferredClimate?: string;

  // Step 4: Financial & Timeline
  budgetRange?: string;
  timeline?: string;

  // Step 5: Goals
  primaryGoal?: string;

  // Step 6: Lead Capture (optional)
  email?: string;
  phone?: string;
  interestedInConsultation?: boolean;
}

interface AppState {
  // Modal state
  isModalOpen: boolean;
  currentStep: number;
  hasCompletedForm: boolean;

  // User profile
  userProfile: UserProfileData;

  // Recommendations (after form completion)
  recommendedCountries: string[]; // country slugs

  // Actions
  openModal: () => void;
  closeModal: () => void;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateProfile: (data: Partial<UserProfileData>) => void;
  completeForm: (recommendations: string[]) => void;
  resetForm: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Initial state
      isModalOpen: false,
      currentStep: 1,
      hasCompletedForm: false,
      userProfile: {},
      recommendedCountries: [],

      // Actions
      openModal: () => set({ isModalOpen: true }),
      closeModal: () => set({ isModalOpen: false }),
      setStep: (step) => set({ currentStep: step }),
      nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
      prevStep: () => set((state) => ({ currentStep: Math.max(1, state.currentStep - 1) })),

      updateProfile: (data) =>
        set((state) => ({
          userProfile: { ...state.userProfile, ...data },
        })),

      completeForm: (recommendations) =>
        set({
          hasCompletedForm: true,
          recommendedCountries: recommendations,
          isModalOpen: false,
        }),

      resetForm: () =>
        set({
          currentStep: 1,
          hasCompletedForm: false,
          userProfile: {},
          recommendedCountries: [],
        }),
    }),
    {
      name: 'emigration-app-storage',
      partialize: (state) => ({
        hasCompletedForm: state.hasCompletedForm,
        userProfile: state.userProfile,
        recommendedCountries: state.recommendedCountries,
      }),
    }
  )
);
