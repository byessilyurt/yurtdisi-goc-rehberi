'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useAppStore } from '@/lib/store';
import { getRecommendedCountries } from '@/lib/recommendation-engine';
import { X, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

import { Step1Personal } from './form-steps/step1-personal';
import { Step2Professional } from './form-steps/step2-professional';
import { Step3Languages } from './form-steps/step3-languages';
import { Step4Budget } from './form-steps/step4-budget';
import { Step5Goals } from './form-steps/step5-goals';

const TOTAL_STEPS = 5;

export function OnboardingModal() {
  const router = useRouter();
  const {
    isModalOpen,
    currentStep,
    closeModal,
    setStep,
    nextStep,
    prevStep,
    userProfile,
    updateProfile,
    completeForm,
  } = useAppStore();

  const [isValid, setIsValid] = useState(false);

  const progress = (currentStep / TOTAL_STEPS) * 100;

  const handleNext = () => {
    if (currentStep === TOTAL_STEPS) {
      // Generate recommendations
      const recommendations = getRecommendedCountries(userProfile);
      completeForm(recommendations);
      router.push('/oneriler');
    } else {
      nextStep();
    }
  };

  const handleBack = () => {
    if (currentStep === 1) {
      closeModal();
    } else {
      prevStep();
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return 'Kişisel Bilgiler';
      case 2:
        return 'Profesyonel Geçmiş';
      case 3:
        return 'Dil Becerileri';
      case 4:
        return 'Bütçe ve Zaman';
      case 5:
        return 'Hedefleriniz';
      default:
        return '';
    }
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 1:
        return 'Sizinle ilgili temel bilgileri öğrenelim';
      case 2:
        return 'İş deneyiminiz ve eğitiminiz hakkında bilgi verin';
      case 3:
        return 'Hangi dilleri konuşabiliyorsunuz?';
      case 4:
        return 'Bütçeniz ve zaman planınız nasıl?';
      case 5:
        return 'Göç etme amacınız ve tercihleriniz';
      default:
        return '';
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Personal onValidChange={setIsValid} />;
      case 2:
        return <Step2Professional onValidChange={setIsValid} />;
      case 3:
        return <Step3Languages onValidChange={setIsValid} />;
      case 4:
        return <Step4Budget onValidChange={setIsValid} />;
      case 5:
        return <Step5Goals onValidChange={setIsValid} />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-3xl max-h-[95vh] overflow-hidden p-0 gap-0 bg-white">
        <DialogTitle className="sr-only">{getStepTitle()}</DialogTitle>

        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 pt-8 pb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-blue-100 text-sm mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Adım {currentStep} / {TOTAL_STEPS}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-1">
                {getStepTitle()}
              </h2>
              <p className="text-blue-100 text-sm">
                {getStepDescription()}
              </p>
            </div>
            <button
              onClick={closeModal}
              className="text-white/80 hover:text-white transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <Progress value={progress} className="h-2 bg-white/20" />
          </div>
        </div>

        {/* Content Area - with scroll */}
        <div className="overflow-y-auto" style={{ maxHeight: 'calc(95vh - 240px)' }}>
          <div className="p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer with buttons - fixed at bottom */}
        <div className="border-t bg-zinc-50 px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              type="button"
              variant="ghost"
              onClick={handleBack}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {currentStep === 1 ? 'İptal' : 'Geri'}
            </Button>

            <Button
              type="button"
              onClick={handleNext}
              disabled={!isValid}
              className="gap-2 min-w-[120px]"
            >
              {currentStep === TOTAL_STEPS ? 'Önerileri Gör' : 'İleri'}
              {currentStep !== TOTAL_STEPS && <ArrowRight className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
