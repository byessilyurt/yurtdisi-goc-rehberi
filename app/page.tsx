'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAppStore } from '@/lib/store';
import { CATEGORY_LISTS } from '@/lib/real-data';
import { Globe, Sparkles, CheckCircle, ArrowRight, MapPin, GraduationCap, Briefcase, Heart } from 'lucide-react';

export default function HomePage() {
  const { openModal, hasCompletedForm } = useAppStore();

  useEffect(() => {
    // Open modal automatically on first visit
    if (!hasCompletedForm) {
      const timer = setTimeout(() => {
        openModal();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [hasCompletedForm, openModal]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold text-zinc-900">Göç Rehberi</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/kategoriler" className="text-sm text-zinc-600 hover:text-zinc-900">
                Kategoriler
              </Link>
              <Link href="/ulkeler" className="text-sm text-zinc-600 hover:text-zinc-900">
                Ülkeler
              </Link>
              <Button onClick={openModal} size="sm">
                Başla
              </Button>
            </nav>
            <Button onClick={openModal} size="sm" className="md:hidden">
              Başla
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Yapay zeka destekli öneriler
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6 leading-tight">
              Hayalinizdeki Ülkeye
              <br />
              <span className="text-blue-600">Gitmenin Yolu</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 mb-8 max-w-2xl mx-auto">
              Yurtdışına göç etmek istiyorsunuz ama nereden başlayacağınızı bilmiyor musunuz?
              Size özel ülke önerilerimizle, adım adım kılavuzunuza ulaşın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={openModal}
                className="text-lg px-8 py-6 gap-2"
              >
                Ücretsiz Analiz Başlat
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-lg px-8 py-6"
              >
                Nasıl Çalışır?
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600">5</div>
              <div className="text-sm text-zinc-600 mt-1">Popüler Ülke</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600">5 dk</div>
              <div className="text-sm text-zinc-600 mt-1">Hızlı Analiz</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600">%100</div>
              <div className="text-sm text-zinc-600 mt-1">Ücretsiz</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 mb-12">
              3 Adımda Size Özel Plan
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">Formu Doldurun</h3>
                  <p className="text-zinc-600">
                    Birkaç basit soruyla kendinizi tanıtın. Sadece 5 dakika sürer.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">Önerilerinizi Görün</h3>
                  <p className="text-zinc-600">
                    Size en uygun ülkeleri, gerçekçi maliyetler ve sürelerle keşfedin.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-2">Harekete Geçin</h3>
                  <p className="text-zinc-600">
                    Adım adım kılavuzla hayalinize bir adım daha yaklaşın.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Durumunuza Göre Keşfedin
              </h2>
              <p className="text-lg text-zinc-600">
                Kendi durumunuza en uygun ülkeleri hızlıca görün
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CATEGORY_LISTS.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/kategori/${category.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                      <CardContent className="p-6">
                        <div className="text-4xl mb-4">{category.icon}</div>
                        <h3 className="text-lg font-semibold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-sm text-zinc-600">{category.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 mb-12">
              Neden Göç Rehberi?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-2">Kişiselleştirilmiş Öneriler</h3>
                  <p className="text-zinc-600">
                    Profilinize özel, gerçekçi ve ulaşılabilir ülke önerileri.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-2">Gerçekçi Maliyetler</h3>
                  <p className="text-zinc-600">
                    Vize ücretlerinden yaşam maliyetlerine kadar tüm detaylar.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-2">Adım Adım Kılavuz</h3>
                  <p className="text-zinc-600">
                    Vize başvurusundan yerleşime kadar her şey için rehber.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 mb-2">Güncel Bilgiler</h3>
                  <p className="text-zinc-600">
                    Sürekli güncellenen vize kuralları ve gereksinimler.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-600 to-indigo-600 border-0">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Hayalinize İlk Adımı Atın
                </h2>
                <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                  5 dakikada size özel ülke önerilerinizi alın ve yurtdışı maceranıza başlayın.
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={openModal}
                  className="text-lg px-8 py-6 gap-2"
                >
                  Hemen Başla
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-300 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="font-bold text-white">Göç Rehberi</span>
                </div>
                <p className="text-sm text-zinc-400">
                  Yurtdışı göç hayalinizi gerçeğe dönüştürmeniz için rehberiniz.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Hızlı Linkler</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/kategoriler" className="hover:text-white transition-colors">
                      Kategoriler
                    </Link>
                  </li>
                  <li>
                    <Link href="/ulkeler" className="hover:text-white transition-colors">
                      Ülkeler
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Destek</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      SSS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      İletişim
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Yasal</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Gizlilik Politikası
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Kullanım Koşulları
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
              <p>&copy; 2024 Göç Rehberi. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
