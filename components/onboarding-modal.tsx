'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useAppStore } from '@/lib/store';
import { getRecommendedCountries } from '@/lib/recommendation-engine';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

import { Step1Personal } from './form-steps/step1-personal';
import { Step2Professional } from './form-steps/step2-professional';
import { Step3Languages } from './form-steps/step3-languages';
import { Step4Budget } from './form-steps/step4-budget';
import { Step5Goals } from './form-steps/step5-goals';
import { Step6Consultation } from './form-steps/step6-consultation';

const TOTAL_STEPS = 6;

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
      case 6:
        return 'Size Nasıl Yardımcı Olabiliriz?';
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
      case 6:
        return <Step6Consultation onValidChange={setIsValid} />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        <DialogTitle className="sr-only">{getStepTitle()}</DialogTitle>
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-zinc-900" aria-hidden="true">{getStepTitle()}</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeModal}
              className="h-8 w-8"
              aria-label="Formu kapat"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-zinc-600">
              <span>Adım {currentStep} / {TOTAL_STEPS}</span>
              <span>{Math.round(progress)}% tamamlandı</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 z-10 bg-white border-t px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={handleBack}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              {currentStep === 1 ? 'Kapat' : 'Geri'}
            </Button>
            <Button
              onClick={handleNext}
              disabled={!isValid}
              className="gap-2"
            >
              {currentStep === TOTAL_STEPS ? 'Önerileri Gör' : 'İleri'}
              {currentStep !== TOTAL_STEPS && <ArrowRight className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
