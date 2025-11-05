'use client';

import { useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAppStore } from '@/lib/store';

interface StepProps {
  onValidChange: (isValid: boolean) => void;
}

export function Step2Professional({ onValidChange }: StepProps) {
  const { userProfile, updateProfile } = useAppStore();

  useEffect(() => {
    const isValid = !!(userProfile.employmentStatus && userProfile.profession);
    onValidChange(isValid);
  }, [userProfile.employmentStatus, userProfile.profession, onValidChange]);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-2">Profesyonel Durumunuz</h3>
        <p className="text-sm text-zinc-600">
          Mesleğiniz ve deneyiminiz, hangi ülkelerde daha kolay vize alabileceğinizi belirler.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="employmentStatus">Çalışma Durumunuz *</Label>
          <Select
            value={userProfile.employmentStatus}
            onValueChange={(value) => updateProfile({ employmentStatus: value })}
          >
            <SelectTrigger id="employmentStatus">
              <SelectValue placeholder="Durumunuzu seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="employed">Çalışıyorum</SelectItem>
              <SelectItem value="student">Öğrenciyim</SelectItem>
              <SelectItem value="unemployed">İş arıyorum</SelectItem>
              <SelectItem value="self_employed">Serbest meslek</SelectItem>
              <SelectItem value="entrepreneur">Girişimci</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="profession">Mesleğiniz *</Label>
          <Input
            id="profession"
            placeholder="Örn: Yazılım Geliştirici, Hemşire, Mimar"
            value={userProfile.profession || ''}
            onChange={(e) => updateProfile({ profession: e.target.value })}
          />
        </div>

        {userProfile.employmentStatus && userProfile.employmentStatus !== 'student' && (
          <>
            <div className="space-y-2">
              <Label htmlFor="industry">Sektör</Label>
              <Select
                value={userProfile.industry}
                onValueChange={(value) => updateProfile({ industry: value })}
              >
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Sektörünüzü seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="teknoloji">Teknoloji / IT</SelectItem>
                  <SelectItem value="saglik">Sağlık</SelectItem>
                  <SelectItem value="muhendislik">Mühendislik</SelectItem>
                  <SelectItem value="egitim">Eğitim</SelectItem>
                  <SelectItem value="finans">Finans</SelectItem>
                  <SelectItem value="insaat">İnşaat</SelectItem>
                  <SelectItem value="turizm">Turizm</SelectItem>
                  <SelectItem value="diger">Diğer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="yearsExperience">Tecrübe (Yıl)</Label>
              <Input
                id="yearsExperience"
                type="number"
                min="0"
                max="50"
                placeholder="0"
                value={userProfile.yearsExperience || ''}
                onChange={(e) => updateProfile({ yearsExperience: parseInt(e.target.value) || 0 })}
              />
              <p className="text-xs text-zinc-500">
                Deneyim yılınız vize başvurularında önemli bir faktördür
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
