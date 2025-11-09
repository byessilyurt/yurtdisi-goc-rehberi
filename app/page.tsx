'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useAppStore } from '@/lib/store';
import { MOCK_COUNTRIES, CATEGORY_LISTS, MOCK_VISA_TYPES } from '@/lib/real-data';
import {
  Globe,
  Search,
  Sliders,
  DollarSign,
  Clock,
  TrendingUp,
  Briefcase,
  Zap,
  ThumbsUp,
  ArrowRight,
  X,
} from 'lucide-react';

export default function HomePage() {
  const { openModal } = useAppStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<'popularity' | 'cost' | 'processing'>('popularity');

  // Filter and sort countries
  const filteredCountries = useMemo(() => {
    let filtered = MOCK_COUNTRIES;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter((country) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory) {
      const category = CATEGORY_LISTS.find((c) => c.slug === selectedCategory);
      if (category) {
        filtered = filtered.filter((country) =>
          category.countries.includes(country.slug)
        );
      }
    }

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'popularity') {
        return b.popularityScore - a.popularityScore;
      }
      // For cost and processing, we'd need to calculate from visa data
      return 0;
    });

    return sorted;
  }, [searchQuery, selectedCategory, sortBy]);

  const getCountryMetrics = (countrySlug: string) => {
    const visaTypes = MOCK_VISA_TYPES[countrySlug] || [];
    if (visaTypes.length === 0) return null;

    // Get fastest processing time
    const fastestVisa = visaTypes.reduce((fastest, visa) => {
      const timeStr = visa.processingTime.toLowerCase();
      return timeStr < fastest ? timeStr : fastest;
    }, '999 ay');

    // Get cheapest visa
    const cheapestVisa = visaTypes.reduce((cheapest, visa) => {
      return visa.estimatedCost < cheapest ? visa.estimatedCost : cheapest;
    }, '999K TL');

    return {
      visaCount: visaTypes.length,
      fastestProcessing: fastestVisa,
      cheapestCost: cheapestVisa,
    };
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Globe className="w-7 h-7 text-blue-600" />
              <div>
                <h1 className="text-lg font-bold text-zinc-900">Göç Rehberi</h1>
                <p className="text-xs text-zinc-500">Hayalinizdeki ülkeyi bulun</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" aria-hidden="true" />
              <Input
                type="text"
                placeholder="Ülke ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4"
                aria-label="Ülke ara"
              />
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
                aria-label="Filtreleri aç"
                aria-expanded={showFilters}
              >
                <Sliders className="w-4 h-4" aria-hidden="true" />
                Filtrele
              </Button>
              <Button
                onClick={openModal}
                size="sm"
                className="gap-2"
                aria-label="Kişisel analiz formunu aç"
              >
                <Zap className="w-4 h-4" aria-hidden="true" />
                Kişisel Analiz
              </Button>
            </div>
          </div>

          {/* Category Pills */}
          <div
            className="flex items-center gap-2 mt-4 overflow-x-auto pb-2"
            role="navigation"
            aria-label="Kategori filtreleri"
          >
            <Button
              variant={selectedCategory === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="rounded-full"
              aria-pressed={selectedCategory === null}
            >
              Tüm Ülkeler
            </Button>
            {CATEGORY_LISTS.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.slug ? 'default' : 'outline'}
                size="sm"
                onClick={() =>
                  setSelectedCategory(selectedCategory === category.slug ? null : category.slug)
                }
                className="rounded-full gap-2 whitespace-nowrap"
                aria-pressed={selectedCategory === category.slug}
                aria-label={`${category.title} kategorisi`}
              >
                <span aria-hidden="true">{category.icon}</span>
                {category.title.replace('İçin', '').replace('En İyi Ülkeler', '').trim()}
              </Button>
            ))}
          </div>
        </div>
      </header>

      {/* Filters Sidebar */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setShowFilters(false)}
        >
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Filtreler</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFilters(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-zinc-700 mb-3 block">
                  Sırala
                </label>
                <div className="space-y-2">
                  <Button
                    variant={sortBy === 'popularity' ? 'default' : 'outline'}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => setSortBy('popularity')}
                  >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Popülerlik
                  </Button>
                  <Button
                    variant={sortBy === 'cost' ? 'default' : 'outline'}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => setSortBy('cost')}
                  >
                    <DollarSign className="w-4 h-4 mr-2" />
                    Maliyet
                  </Button>
                  <Button
                    variant={sortBy === 'processing' ? 'default' : 'outline'}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => setSortBy('processing')}
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    İşlem Hızı
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900">
              {filteredCountries.length} Ülke Bulundu
            </h2>
            <p className="text-sm text-zinc-600 mt-1">
              Size en uygun ülkeyi bulmak için kişisel analiz yapın
            </p>
          </div>
        </div>

        {/* Country Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries.map((country, index) => {
            const metrics = getCountryMetrics(country.slug);

            return (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link href={`/ulke/${country.slug}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group h-full">
                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={country.images[0]}
                        alt={country.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Flag & Name */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-3xl">{country.flagEmoji}</span>
                          <h3 className="text-xl font-bold text-white">
                            {country.name}
                          </h3>
                        </div>
                      </div>

                      {/* Score Badge */}
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-blue-600 text-white font-bold px-3 py-1 text-sm">
                          <ThumbsUp className="w-3 h-3 mr-1 inline" />
                          {country.popularityScore}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      {/* Description */}
                      <p className="text-sm text-zinc-600 mb-4 line-clamp-2">
                        {country.description}
                      </p>

                      {/* Metrics Grid */}
                      {metrics && (
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          <div className="bg-blue-50 rounded-lg p-2 text-center">
                            <Briefcase className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                            <div className="text-xs font-semibold text-blue-900">
                              {metrics.visaCount}
                            </div>
                            <div className="text-xs text-blue-600">Vize</div>
                          </div>
                          <div className="bg-green-50 rounded-lg p-2 text-center">
                            <Clock className="w-4 h-4 text-green-600 mx-auto mb-1" />
                            <div className="text-xs font-semibold text-green-900">
                              {metrics.fastestProcessing.split('-')[0]}
                            </div>
                            <div className="text-xs text-green-600">En Hızlı</div>
                          </div>
                          <div className="bg-orange-50 rounded-lg p-2 text-center">
                            <DollarSign className="w-4 h-4 text-orange-600 mx-auto mb-1" />
                            <div className="text-xs font-semibold text-orange-900">
                              {metrics.cheapestCost.split('-')[0]}
                            </div>
                            <div className="text-xs text-orange-600">Min</div>
                          </div>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {CATEGORY_LISTS.filter((cat) =>
                          cat.countries.includes(country.slug)
                        )
                          .slice(0, 3)
                          .map((cat) => (
                            <Badge
                              key={cat.id}
                              variant="secondary"
                              className="text-xs"
                            >
                              {cat.icon}
                            </Badge>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredCountries.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-zinc-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-zinc-900 mb-2">
              Sonuç bulunamadı
            </h3>
            <p className="text-zinc-600 mb-6">
              Farklı filtreler deneyin veya arama yapın
            </p>
            <Button onClick={() => setSearchQuery('')}>Filtreleri Temizle</Button>
          </div>
        )}

        {/* CTA Banner */}
        <Card className="mt-12 bg-gradient-to-br from-blue-600 to-indigo-700 border-0 overflow-hidden">
          <CardContent className="p-8 md:p-12 text-center relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Size Tam Uygun Ülkeyi Bulalım
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                5 dakikalık kişisel analiz ile bütçenize, profilinize ve hedeflerinize
                en uygun ülkeleri keşfedin
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={openModal}
                className="text-lg px-8 py-6 gap-2"
              >
                <Zap className="w-5 h-5" />
                Kişisel Analiz Başlat
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <Globe className="w-4 h-4" />
              <span>© 2024 Göç Rehberi</span>
            </div>
            <div className="flex gap-4 text-sm text-zinc-600">
              <Link href="#" className="hover:text-blue-600">
                Hakkımızda
              </Link>
              <Link href="#" className="hover:text-blue-600">
                İletişim
              </Link>
              <Link href="#" className="hover:text-blue-600">
                Gizlilik
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
