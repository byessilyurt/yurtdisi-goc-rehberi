'use client';

import { useEffect, useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useAppStore } from '@/lib/store';
import { CheckCircle2 } from 'lucide-react';

interface StepProps {
  onValidChange: (isValid: boolean) => void;
}

export function Step6Consultation({ onValidChange }: StepProps) {
  const { userProfile, updateProfile } = useAppStore();
  const [wantsConsultation, setWantsConsultation] = useState(false);

  useEffect(() => {
    // This step is always valid (optional)
    onValidChange(true);
  }, [onValidChange]);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-2">Size Nasıl Yardımcı Olabiliriz?</h3>
        <p className="text-sm text-zinc-600">
          Göç sürecinde profesyonel destek almak isterseniz, sizinle iletişime geçebiliriz.
        </p>
      </div>

      <div className="space-y-4">
        <div className="rounded-lg border-2 border-zinc-200 hover:border-blue-300 transition-colors">
          <button
            type="button"
            onClick={() => setWantsConsultation(!wantsConsultation)}
            className="w-full p-6 text-left"
          >
            <div className="flex items-start gap-4">
              <div className={`mt-1 rounded-full border-2 w-6 h-6 flex items-center justify-center flex-shrink-0 transition-colors ${
                wantsConsultation ? 'border-blue-600 bg-blue-600' : 'border-zinc-300'
              }`}>
                {wantsConsultation && <CheckCircle2 className="w-4 h-4 text-white" />}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-zinc-900 mb-2">
                  Ücretsiz Ön Danışmanlık İstiyorum
                </h4>
                <p className="text-sm text-zinc-600 mb-3">
                  Size özel göç planınızı uzmanlarımızla konuşun. Vize başvurusu, üniversite seçimi
                  veya iş bulma süreçlerinde profesyonel destek alın.
                </p>
                <div className="space-y-2 text-sm text-zinc-700">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>15 dakikalık ücretsiz görüşme</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Kişiselleştirilmiş göç planı</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Zorunluluk yok, sadece bilgilendirme</span>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>

        {wantsConsultation && (
          <div className="space-y-4 p-4 bg-zinc-50 rounded-lg border">
            <p className="text-sm text-zinc-700 font-medium">
              Harika! İletişim bilgilerinizi bırakın, en kısa sürede sizinle iletişime geçelim.
            </p>

            <div className="space-y-2">
              <Label htmlFor="email">E-posta Adresiniz</Label>
              <Input
                id="email"
                type="email"
                placeholder="ornek@email.com"
                value={userProfile.email || ''}
                onChange={(e) => {
                  updateProfile({
                    email: e.target.value,
                    interestedInConsultation: true
                  });
                }}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefon Numaranız (Opsiyonel)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+90 5xx xxx xx xx"
                value={userProfile.phone || ''}
                onChange={(e) => updateProfile({ phone: e.target.value })}
              />
            </div>

            <p className="text-xs text-zinc-500">
              Bilgileriniz güvende. Sadece danışmanlık için kullanılacak, üçüncü şahıslarla paylaşılmayacaktır.
            </p>
          </div>
        )}

        <div className="rounded-lg bg-zinc-50 border border-zinc-200 p-4">
          <p className="text-sm text-zinc-600">
            <strong>Not:</strong> Bu adım tamamen isteğe bağlıdır. İsterseniz boş bırakıp
            önerilerimizi görmeye devam edebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
