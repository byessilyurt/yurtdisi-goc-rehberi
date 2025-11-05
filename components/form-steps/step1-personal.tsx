'use client';

import { useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAppStore } from '@/lib/store';

interface StepProps {
  onValidChange: (isValid: boolean) => void;
}

export function Step1Personal({ onValidChange }: StepProps) {
  const { userProfile, updateProfile } = useAppStore();

  useEffect(() => {
    const isValid = !!(userProfile.ageRange && userProfile.educationLevel);
    onValidChange(isValid);
  }, [userProfile.ageRange, userProfile.educationLevel, onValidChange]);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-2">Sizi Tanıyalım</h3>
        <p className="text-sm text-zinc-600">
          Size en uygun ülkeleri önermek için birkaç kişisel bilgiye ihtiyacımız var.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="ageRange">Yaş Aralığınız *</Label>
          <Select
            value={userProfile.ageRange}
            onValueChange={(value) => updateProfile({ ageRange: value })}
          >
            <SelectTrigger id="ageRange">
              <SelectValue placeholder="Yaş aralığınızı seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="18-25">18-25</SelectItem>
              <SelectItem value="26-35">26-35</SelectItem>
              <SelectItem value="36-45">36-45</SelectItem>
              <SelectItem value="46-55">46-55</SelectItem>
              <SelectItem value="55+">55+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="educationLevel">Eğitim Durumunuz *</Label>
          <Select
            value={userProfile.educationLevel}
            onValueChange={(value) => updateProfile({ educationLevel: value })}
          >
            <SelectTrigger id="educationLevel">
              <SelectValue placeholder="Eğitim durumunuzu seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lise">Lise</SelectItem>
              <SelectItem value="onlisans">Önlisans</SelectItem>
              <SelectItem value="lisans">Lisans</SelectItem>
              <SelectItem value="yuksek_lisans">Yüksek Lisans</SelectItem>
              <SelectItem value="doktora">Doktora</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="hasFamily">Aile Durumu</Label>
          <Select
            value={userProfile.hasFamily?.toString()}
            onValueChange={(value) => updateProfile({ hasFamily: value === 'true' })}
          >
            <SelectTrigger id="hasFamily">
              <SelectValue placeholder="Ailenizle birlikte mi göç etmek istiyorsunuz?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="false">Tek başıma</SelectItem>
              <SelectItem value="true">Ailemle birlikte</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-zinc-500">
            Bu, aile dostu ülkeleri önermemize yardımcı olur
          </p>
        </div>
      </div>
    </div>
  );
}
