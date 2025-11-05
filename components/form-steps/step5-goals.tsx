'use client';

import { useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAppStore } from '@/lib/store';

interface StepProps {
  onValidChange: (isValid: boolean) => void;
}

export function Step5Goals({ onValidChange }: StepProps) {
  const { userProfile, updateProfile } = useAppStore();

  useEffect(() => {
    const isValid = !!userProfile.primaryGoal;
    onValidChange(isValid);
  }, [userProfile.primaryGoal, onValidChange]);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-2">Yurtdışına Çıkma Hedefiniz</h3>
        <p className="text-sm text-zinc-600">
          Ana hedefiniz, size en uygun ülke ve vize türünü belirlememize yardımcı olur.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="primaryGoal">Birincil Hedefiniz *</Label>
          <Select
            value={userProfile.primaryGoal}
            onValueChange={(value) => updateProfile({ primaryGoal: value })}
          >
            <SelectTrigger id="primaryGoal">
              <SelectValue placeholder="Ana hedefinizi seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="education">
                <div className="flex flex-col items-start">
                  <span className="font-medium">Eğitim</span>
                  <span className="text-xs text-zinc-500">Yurtdışında üniversite okumak</span>
                </div>
              </SelectItem>
              <SelectItem value="employment">
                <div className="flex flex-col items-start">
                  <span className="font-medium">İş / Kariyer</span>
                  <span className="text-xs text-zinc-500">Yurtdışında çalışmak</span>
                </div>
              </SelectItem>
              <SelectItem value="business">
                <div className="flex flex-col items-start">
                  <span className="font-medium">Girişimcilik</span>
                  <span className="text-xs text-zinc-500">Kendi işimi kurmak</span>
                </div>
              </SelectItem>
              <SelectItem value="quality_of_life">
                <div className="flex flex-col items-start">
                  <span className="font-medium">Yaşam Kalitesi</span>
                  <span className="text-xs text-zinc-500">Daha iyi bir yaşam için</span>
                </div>
              </SelectItem>
              <SelectItem value="family_reunification">
                <div className="flex flex-col items-start">
                  <span className="font-medium">Aile Birleşimi</span>
                  <span className="text-xs text-zinc-500">Ailemle birleşmek</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 p-6">
          <h4 className="font-semibold text-blue-900 mb-2">Neredeyse hazırsınız! 🎉</h4>
          <p className="text-sm text-blue-800 mb-4">
            Bir sonraki adımda size özel ülke önerilerimizi göreceğiz. Her ülke için detaylı bilgiler,
            gereksinimler ve tahmini maliyetler hazırladık.
          </p>
          <div className="flex items-center gap-2 text-sm text-blue-700">
            <span className="font-medium">✓</span>
            <span>Kişiselleştirilmiş öneriler</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-blue-700">
            <span className="font-medium">✓</span>
            <span>Gerçekçi maliyet tahminleri</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-blue-700">
            <span className="font-medium">✓</span>
            <span>Adım adım kılavuz</span>
          </div>
        </div>
      </div>
    </div>
  );
}
