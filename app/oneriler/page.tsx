'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAppStore } from '@/lib/store';
import { MOCK_COUNTRIES } from '@/lib/mock-data';
import { getMatchReasons, getUserType } from '@/lib/recommendation-engine';
import { ArrowRight, Sparkles, Clock, DollarSign, TrendingUp, Home } from 'lucide-react';

export default function RecommendationsPage() {
  const router = useRouter();
  const { recommendedCountries, userProfile, hasCompletedForm } = useAppStore();

  useEffect(() => {
    if (!hasCompletedForm || recommendedCountries.length === 0) {
      router.push('/');
    }
  }, [hasCompletedForm, recommendedCountries, router]);

  if (!hasCompletedForm || recommendedCountries.length === 0) {
    return null;
  }

  const userType = getUserType(userProfile);
  const countries = MOCK_COUNTRIES.filter(c => recommendedCountries.includes(c.slug));

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold text-zinc-900">Göç Rehberi</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Size özel analiz tamamlandı
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
            Sizin İçin Seçtiğimiz <span className="text-blue-600">Top {countries.length} Ülke</span>
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Profilinize ve hedeflerinize göre en uygun ülkeleri sıraladık. Her ülke için detaylı bilgilere ulaşabilirsiniz.
          </p>
        </motion.div>
      </section>

      {/* Country Cards */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-5xl mx-auto space-y-6">
          {countries.map((country, index) => {
            const matchReasons = getMatchReasons(country.slug, userProfile);

            return (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="relative w-full md:w-1/3 h-64 md:h-auto">
                      <Image
                        src={country.images[0]}
                        alt={country.name}
                        fill
                        className="object-cover"
                      />
                      {index === 0 && (
                        <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                          <Sparkles className="w-4 h-4" />
                          En Uygun
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4 text-5xl">
                        {country.flagEmoji}
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h2 className="text-2xl font-bold text-zinc-900 mb-2">
                            {index + 1}. {country.name}
                          </h2>
                          <p className="text-zinc-600">{country.description}</p>
                        </div>
                        <Badge variant="secondary" className="ml-4">
                          {country.popularityScore}/100
                        </Badge>
                      </div>

                      {/* Match Reasons */}
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          Size Neden Uygun?
                        </h4>
                        <ul className="space-y-1">
                          {matchReasons.map((reason, i) => (
                            <li key={i} className="text-sm text-blue-800 flex items-start gap-2">
                              <span className="text-blue-600 mt-0.5">✓</span>
                              <span>{reason}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Quick Info */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-zinc-500" />
                          <div>
                            <div className="text-xs text-zinc-500">Vize Süreci</div>
                            <div className="font-semibold text-zinc-900">4-12 hafta</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <DollarSign className="w-4 h-4 text-zinc-500" />
                          <div>
                            <div className="text-xs text-zinc-500">Tahmini Maliyet</div>
                            <div className="font-semibold text-zinc-900">₺10K-50K</div>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <Link href={`/ulke/${country.slug}`}>
                        <Button className="w-full gap-2">
                          Detaylı İncele
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-indigo-600 to-purple-600 border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Bir Sonraki Adımda Ne Yapmalısınız?
              </h2>
              <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                Her ülke için detaylı vize gereksinimleri, maliyetler ve adım adım kılavuzları inceleyin.
                Eğer profesyonel yardım isterseniz, uzmanlarımızla iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link href={`/ulke/${countries[0].slug}`}>
                    En Uygun Ülkeyi İncele
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Uzmanla Görüş
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
