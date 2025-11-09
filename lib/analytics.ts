/**
 * Analytics utility for tracking user events
 * Supports Google Analytics, Vercel Analytics, and custom tracking
 */

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Predefined event trackers
export const trackFormStart = () => {
  event({
    action: 'form_start',
    category: 'engagement',
    label: 'onboarding_modal',
  });
};

export const trackFormComplete = (recommendations: string[]) => {
  event({
    action: 'form_complete',
    category: 'conversion',
    label: recommendations.join(','),
  });
};

export const trackFormStep = (step: number) => {
  event({
    action: 'form_step',
    category: 'engagement',
    label: `step_${step}`,
    value: step,
  });
};

export const trackCountryView = (countrySlug: string) => {
  event({
    action: 'country_view',
    category: 'engagement',
    label: countrySlug,
  });
};

export const trackCategoryView = (categorySlug: string) => {
  event({
    action: 'category_view',
    category: 'engagement',
    label: categorySlug,
  });
};

export const trackSearch = (query: string) => {
  event({
    action: 'search',
    category: 'engagement',
    label: query,
  });
};

export const trackConsultationRequest = () => {
  event({
    action: 'consultation_request',
    category: 'conversion',
    label: 'lead_capture',
  });
};
