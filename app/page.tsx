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
import { getAllCountries, getCountryStats } from '@/lib/emigration-data';
import { CATEGORY_LISTS } from '@/lib/real-data';
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
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export default function EnhancedHomePage() {
  const { openModal } = useAppStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<'popularity' | 'cost' | 'processing'>('popularity');

  const countries = getAllCountries();

  // Filter and sort countries
  const filteredCountries = useMemo(() => {
    let filtered = countries;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (country) =>
          country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          country.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory) {
      const category = CATEGORY_LISTS.find((c) => c.slug === selectedCategory);
      if (category) {
        filtered = filtered.filter((country) => category.countries.includes(country.slug));
      }
    }

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'popularity') {
        return b.popularityScore - a.popularityScore;
      }
      if (sortBy === 'cost') {
        const statsA = getCountryStats(a.slug);
        const statsB = getCountryStats(b.slug);
        const costA = parseInt(statsA.lowestCost.replace(/[^0-9]/g, '')) || 999999;
        const costB = parseInt(statsB.lowestCost.replace(/[^0-9]/g, '')) || 999999;
        return costA - costB;
      }
      if (sortBy === 'processing') {
        const statsA = getCountryStats(a.slug);
        const statsB = getCountryStats(b.slug);
        const timeA = parseInt(statsA.fastestProcessing.replace(/[^0-9]/g, '')) || 999;
        const timeB = parseInt(statsB.fastestProcessing.replace(/[^0-9]/g, '')) || 999;
        return timeA - timeB;
      }
      return 0;
    });

    return sorted;
  }, [searchQuery, selectedCategory, sortBy, countries]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-blue-50/30 to-zinc-50">
      {/* Header with Enhanced Styling */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Globe className="w-8 h-8 text-blue-600" />
                <Sparkles className="w-3 h-3 text-yellow-500 absolute -top-1 -right-1" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Yurtdışı Göç Rehberi
                </h1>
                <p className="text-xs text-zinc-500">Hayalinizdeki ülkeyi bulun - 2025 Güncel</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400"
                aria-hidden="true"
              />
              <Input
                type="text"
                placeholder="Ülke veya vize türü ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 border-zinc-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                aria-label="Ülke ara"
              />
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300"
                aria-label="Filtreleri aç"
                aria-expanded={showFilters}
              >
                <Sliders className="w-4 h-4" aria-hidden="true" />
                Filtrele
              </Button>
              <Button
                onClick={openModal}
                size="sm"
                className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                aria-label="Kişisel analiz formunu aç"
              >
                <Zap className="w-4 h-4" aria-hidden="true" />
                Kişisel Analiz
              </Button>
            </div>
          </div>

          {/* Category Pills with Better Styling */}
          <div
            className="flex items-center gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide"
            role="navigation"
            aria-label="Kategori filtreleri"
          >
            <Button
              variant={selectedCategory === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="rounded-full whitespace-nowrap"
              aria-pressed={selectedCategory === null}
            >
              Tüm Ülkeler ({countries.length})
            </Button>
            {CATEGORY_LISTS.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.slug ? 'default' : 'outline'}
                size="sm"
                onClick={() =>
                  setSelectedCategory(selectedCategory === category.slug ? null : category.slug)
                }
                className="rounded-full gap-2 whitespace-nowrap hover:bg-blue-50 hover:border-blue-300"
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
              <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-zinc-700 mb-3 block">Sırala</label>
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
                    Maliyet (Düşük → Yüksek)
                  </Button>
                  <Button
                    variant={sortBy === 'processing' ? 'default' : 'outline'}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => setSortBy('processing')}
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    İşlem Hızı (Hızlı → Yavaş)
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Results Count with Better Design */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-2">
              {filteredCountries.length} Ülke
              {searchQuery && ` "${searchQuery}" için`}
            </h2>
            <p className="text-zinc-600">
              Türk vatandaşları için kapsamlı göç rehberi • 2025 güncel bilgiler
            </p>
          </div>

          {filteredCountries.length > 0 && (
            <div className="hidden md:flex items-center gap-2 text-sm text-zinc-600">
              <span className="font-medium">Sıralama:</span>
              <Badge variant="secondary" className="gap-1">
                {sortBy === 'popularity' && (
                  <>
                    <TrendingUp className="w-3 h-3" />
                    Popülerlik
                  </>
                )}
                {sortBy === 'cost' && (
                  <>
                    <DollarSign className="w-3 h-3" />
                    Maliyet
                  </>
                )}
                {sortBy === 'processing' && (
                  <>
                    <Clock className="w-3 h-3" />
                    Hız
                  </>
                )}
              </Badge>
            </div>
          )}
        </div>

        {/* Country Grid with Enhanced Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries.map((country, index) => {
            const stats = getCountryStats(country.slug);

            return (
              <motion.div
                key={country.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link href={`/ulke/${country.slug}`}>
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group h-full border-2 hover:border-blue-300">
                    {/* Image Header with Gradient */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={country.images[0]}
                        alt={country.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                      {/* Flag & Name */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-4xl drop-shadow-2xl">{country.flagEmoji}</span>
                          <div>
                            <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                              {country.name}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Score Badge */}
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-white text-zinc-900 font-bold px-3 py-1.5 text-sm shadow-lg">
                          <ThumbsUp className="w-3 h-3 mr-1 inline" />
                          {country.popularityScore}
                        </Badge>
                      </div>

                      {/* NEW Badge for updated countries */}
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-blue-600 text-white font-bold px-3 py-1.5 text-xs shadow-lg">
                          <Sparkles className="w-3 h-3 mr-1 inline" />
                          2025 Güncel
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-5">
                      {/* Description */}
                      <p className="text-sm text-zinc-600 mb-4 line-clamp-2">
                        {country.description}
                      </p>

                      {/* Metrics Grid with Icons */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-100">
                          <Briefcase className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                          <div className="text-xs font-semibold text-blue-900">
                            {stats.totalVisas}
                          </div>
                          <div className="text-xs text-blue-600">Vize</div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3 text-center border border-green-100">
                          <Clock className="w-4 h-4 text-green-600 mx-auto mb-1" />
                          <div className="text-xs font-semibold text-green-900">
                            {stats.fastestProcessing.split('+')[0]}
                          </div>
                          <div className="text-xs text-green-600">Hızlı</div>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-3 text-center border border-orange-100">
                          <DollarSign className="w-4 h-4 text-orange-600 mx-auto mb-1" />
                          <div className="text-xs font-semibold text-orange-900">
                            {stats.lowestCost.replace('€', '').split('+')[0]}
                          </div>
                          <div className="text-xs text-orange-600">Min</div>
                        </div>
                      </div>

                      {/* Key Highlights */}
                      <div className="space-y-1.5 mb-4">
                        {country.highlights.slice(0, 3).map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-zinc-700 line-clamp-1">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Category Tags */}
                      <div className="flex flex-wrap gap-1">
                        {CATEGORY_LISTS.filter((cat) => cat.countries.includes(country.slug))
                          .slice(0, 3)
                          .map((cat) => (
                            <Badge
                              key={cat.id}
                              variant="secondary"
                              className="text-xs hover:bg-blue-100"
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
            <h3 className="text-xl font-semibold text-zinc-900 mb-2">Sonuç bulunamadı</h3>
            <p className="text-zinc-600 mb-6">
              {searchQuery
                ? `"${searchQuery}" için sonuç bulunamadı.`
                : 'Farklı filtreler deneyin.'}
            </p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory(null);
              }}
            >
              Filtreleri Temizle
            </Button>
          </div>
        )}

        {/* Enhanced CTA Banner */}
        <Card className="mt-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 border-0 overflow-hidden relative">
          <CardContent className="p-8 md:p-12 text-center relative">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 animate-pulse delay-1000" />
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Size Tam Uygun Ülkeyi Bulalım
                </h2>
                <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                  5 dakikalık kişisel analiz ile bütçenize, profilinize ve hedeflerinize en uygun
                  ülkeleri keşfedin. Yapay zeka destekli eşleştirme sistemi!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={openModal}
                    className="text-lg px-8 py-6 gap-2 bg-white hover:bg-zinc-50 text-blue-600 font-semibold shadow-xl"
                  >
                    <Zap className="w-5 h-5" />
                    Kişisel Analiz Başlat
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10"
                  >
                    <Globe className="w-5 h-5" />
                    Tüm Ülkeleri Karşılaştır
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/90 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>2025 Güncel Bilgiler</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Resmi Kaynaklardan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Türkçe İçerik</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <Globe className="w-4 h-4" />
              <span>© 2024 Yurtdışı Göç Rehberi • 2025 Güncel Veriler</span>
            </div>
            <div className="flex gap-4 text-sm text-zinc-600">
              <Link href="#" className="hover:text-blue-600 transition-colors">
                Hakkımızda
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                İletişim
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                Gizlilik
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                Kullanım Koşulları
              </Link>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t text-center text-xs text-zinc-500">
            <p>
              Bu site yalnızca bilgilendirme amaçlıdır. Vize başvuruları için resmi hükümet
              kaynaklarını kontrol edin.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
