'use client';

import { useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAppStore } from '@/lib/store';

interface StepProps {
  onValidChange: (isValid: boolean) => void;
}

export function Step3Languages({ onValidChange }: StepProps) {
  const { userProfile, updateProfile } = useAppStore();

  useEffect(() => {
    const hasLanguage = userProfile.languageSkills &&
      (userProfile.languageSkills.english ||
       userProfile.languageSkills.german ||
       userProfile.languageSkills.french);
    onValidChange(!!hasLanguage);
  }, [userProfile.languageSkills, onValidChange]);

  const updateLanguage = (lang: 'english' | 'german' | 'french', level: string) => {
    updateProfile({
      languageSkills: {
        ...userProfile.languageSkills,
        [lang]: level,
      },
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-2">Dil Becerileri</h3>
        <p className="text-sm text-zinc-600">
          Yabancı dil bilgisi, göç sürecinizde en önemli faktörlerden biridir.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="english">İngilizce Seviyeniz *</Label>
          <Select
            value={userProfile.languageSkills?.english}
            onValueChange={(value) => updateLanguage('english', value)}
          >
            <SelectTrigger id="english">
              <SelectValue placeholder="Seviyenizi seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">Bilmiyorum</SelectItem>
              <SelectItem value="basic">Temel (A1-A2)</SelectItem>
              <SelectItem value="intermediate">Orta (B1-B2)</SelectItem>
              <SelectItem value="fluent">İleri (C1-C2)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="german">Almanca Seviyeniz</Label>
          <Select
            value={userProfile.languageSkills?.german}
            onValueChange={(value) => updateLanguage('german', value)}
          >
            <SelectTrigger id="german">
              <SelectValue placeholder="Seviyenizi seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">Bilmiyorum</SelectItem>
              <SelectItem value="basic">Temel (A1-A2)</SelectItem>
              <SelectItem value="intermediate">Orta (B1-B2)</SelectItem>
              <SelectItem value="fluent">İleri (C1-C2)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="french">Fransızca Seviyeniz</Label>
          <Select
            value={userProfile.languageSkills?.french}
            onValueChange={(value) => updateLanguage('french', value)}
          >
            <SelectTrigger id="french">
              <SelectValue placeholder="Seviyenizi seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">Bilmiyorum</SelectItem>
              <SelectItem value="basic">Temel (A1-A2)</SelectItem>
              <SelectItem value="intermediate">Orta (B1-B2)</SelectItem>
              <SelectItem value="fluent">İleri (C1-C2)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="preferredClimate">Tercih Ettiğiniz İklim</Label>
          <Select
            value={userProfile.preferredClimate}
            onValueChange={(value) => updateProfile({ preferredClimate: value })}
          >
            <SelectTrigger id="preferredClimate">
              <SelectValue placeholder="İklim tercihiniz" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sicak">Sıcak (Akdeniz, Tropikal)</SelectItem>
              <SelectItem value="ilik">Ilıman (Dört mevsim)</SelectItem>
              <SelectItem value="soguk">Soğuk (Kuzey ülkeleri)</SelectItem>
              <SelectItem value="fark_etmez">Farketmez</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-zinc-500">
            İklim tercihiniz yaşam kalitenizi etkiler
          </p>
        </div>
      </div>
    </div>
  );
}
