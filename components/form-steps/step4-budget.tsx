'use client';

import { useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAppStore } from '@/lib/store';

interface StepProps {
  onValidChange: (isValid: boolean) => void;
}

export function Step4Budget({ onValidChange }: StepProps) {
  const { userProfile, updateProfile } = useAppStore();

  useEffect(() => {
    const isValid = !!(userProfile.budgetRange && userProfile.timeline);
    onValidChange(isValid);
  }, [userProfile.budgetRange, userProfile.timeline, onValidChange]);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-2">Bütçe ve Zaman Planlaması</h3>
        <p className="text-sm text-zinc-600">
          Bütçeniz ve zaman planınız, hangi göç rotalarının size uygun olduğunu belirler.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="budgetRange">Toplam Bütçeniz (TL) *</Label>
          <Select
            value={userProfile.budgetRange}
            onValueChange={(value) => updateProfile({ budgetRange: value })}
          >
            <SelectTrigger id="budgetRange">
              <SelectValue placeholder="Bütçe aralığınızı seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-100k">0 - 100,000 TL</SelectItem>
              <SelectItem value="100k-250k">100,000 - 250,000 TL</SelectItem>
              <SelectItem value="250k-500k">250,000 - 500,000 TL</SelectItem>
              <SelectItem value="500k+">500,000 TL +</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-zinc-500">
            Vize ücretleri, uçak bileti, ilk yerleşim maliyetleri dahil
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="timeline">Ne Zaman Göç Etmek İstiyorsunuz? *</Label>
          <Select
            value={userProfile.timeline}
            onValueChange={(value) => updateProfile({ timeline: value })}
          >
            <SelectTrigger id="timeline">
              <SelectValue placeholder="Zaman planınızı seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="urgent">En kısa sürede (0-3 ay)</SelectItem>
              <SelectItem value="6months">6 ay içinde</SelectItem>
              <SelectItem value="1year">1 yıl içinde</SelectItem>
              <SelectItem value="flexible">Esnek (1+ yıl)</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-zinc-500">
            Bazı vizeler daha hızlı işlem görür
          </p>
        </div>

        <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm text-blue-900">
            <strong>İpucu:</strong> Daha uzun zaman planlaması, daha fazla seçenek ve daha iyi hazırlık fırsatı sunar.
          </p>
        </div>
      </div>
    </div>
  );
}
