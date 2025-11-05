'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CATEGORY_LISTS, MOCK_COUNTRIES } from '@/lib/real-data';
import { Home, ArrowRight, Sparkles } from 'lucide-react';

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;

  const category = CATEGORY_LISTS.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Kategori bulunamadı</h1>
          <Button asChild>
            <Link href="/">Ana Sayfaya Dön</Link>
          </Button>
        </div>
      </div>
    );
  }

  const countries = MOCK_COUNTRIES.filter((c) => category.countries.includes(c.slug));

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
          <div className="text-6xl mb-4">{category.icon}</div>
          <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
            {category.title}
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            {category.description}
          </p>
        </motion.div>
      </section>

      {/* Info Banner */}
      <section className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">
                    Daha Kişisel Öneriler İster misiniz?
                  </h3>
                  <p className="text-sm text-blue-800 mb-3">
                    Kısa bir form doldurarak size özel ülke önerilerimizi alabilir,
                    bütçenize ve profilinize en uygun seçenekleri görebilirsiniz.
                  </p>
                  <Button size="sm" asChild>
                    <Link href="/">Kişisel Analiz Yap</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Country Cards */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow group">
                  <div className="relative h-64">
                    <Image
                      src={country.images[0]}
                      alt={country.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-4xl">{country.flagEmoji}</span>
                        <h2 className="text-2xl font-bold text-white">
                          {country.name}
                        </h2>
                      </div>
                      <p className="text-zinc-200 text-sm mb-3">
                        {country.description}
                      </p>
                      <Badge className="bg-white/20 backdrop-blur-sm text-white">
                        Popülerlik: {country.popularityScore}/100
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h4 className="font-semibold text-zinc-900 mb-2">
                        Bu Kategori İçin Avantajları:
                      </h4>
                      <p className="text-sm text-zinc-600">
                        {country.matchReasons[slug.replace(/-/g, '_') as keyof typeof country.matchReasons] ||
                         country.matchReasons.default}
                      </p>
                    </div>
                    <Link href={`/ulke/${country.slug}`}>
                      <Button className="w-full gap-2">
                        Detaylı İncele
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="bg-zinc-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-zinc-900 mb-8">
              Diğer Kategoriler
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {CATEGORY_LISTS.filter((c) => c.slug !== slug).map((cat) => (
                <Link key={cat.id} href={`/kategori/${cat.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-4">{cat.icon}</div>
                      <h3 className="text-lg font-semibold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-zinc-600">{cat.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-indigo-600 to-purple-600 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Size Tam Uygun Ülkeyi Bulalım
              </h3>
              <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                5 dakikalık formu doldurun, size özel ülke önerilerimizi, gerçekçi maliyetleri
                ve adım adım kılavuzu hemen alın.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/">Kişisel Analiz Başlat</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
