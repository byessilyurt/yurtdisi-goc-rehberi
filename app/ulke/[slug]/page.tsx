'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useAppStore } from '@/lib/store';
import { MOCK_COUNTRIES, MOCK_VISA_TYPES, MOCK_REQUIREMENTS, MOCK_RESOURCES } from '@/lib/mock-data';
import { getUserType } from '@/lib/recommendation-engine';
import {
  Home,
  FileText,
  DollarSign,
  Users,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Clock,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Building2,
} from 'lucide-react';

export default function CountryDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { userProfile } = useAppStore();

  const country = MOCK_COUNTRIES.find((c) => c.slug === slug);

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Ülke bulunamadı</h1>
          <Button asChild>
            <Link href="/">Ana Sayfaya Dön</Link>
          </Button>
        </div>
      </div>
    );
  }

  const userType = getUserType(userProfile);
  const visaTypes = MOCK_VISA_TYPES[slug as keyof typeof MOCK_VISA_TYPES] || [];
  const requirements = MOCK_REQUIREMENTS[`${slug}_student` as keyof typeof MOCK_REQUIREMENTS] || [];
  const resources = MOCK_RESOURCES[slug as keyof typeof MOCK_RESOURCES] || {};

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
            <Button variant="outline" size="sm" asChild>
              <Link href="/oneriler">Önerilerime Dön</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Image */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src={country.images[0]}
          alt={country.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl">{country.flagEmoji}</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {country.name}
                  </h1>
                  <p className="text-xl text-zinc-200">{country.description}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Badge className="bg-white/20 text-white backdrop-blur-sm">
                  Popülerlik: {country.popularityScore}/100
                </Badge>
                <Badge className="bg-white/20 text-white backdrop-blur-sm">
                  {visaTypes.length} Vize Türü
                </Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
              <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
              <TabsTrigger value="visa">Vize Türleri</TabsTrigger>
              <TabsTrigger value="requirements">Gereksinimler</TabsTrigger>
              <TabsTrigger value="resources">Kaynaklar</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Neden {country.name}?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-zinc-700 leading-relaxed">
                    {country.name}, yurtdışına göç etmek isteyen Türk vatandaşları için en popüler destinasyonlardan biri.
                    Güçlü ekonomisi, yüksek yaşam kalitesi ve göçmenlere açık politikaları ile öne çıkıyor.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <TrendingUp className="w-8 h-8 text-blue-600 mb-2" />
                      <h3 className="font-semibold text-zinc-900 mb-1">Ekonomik Fırsatlar</h3>
                      <p className="text-sm text-zinc-600">
                        Güçlü iş piyasası ve yüksek maaşlar
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <Users className="w-8 h-8 text-green-600 mb-2" />
                      <h3 className="font-semibold text-zinc-900 mb-1">Çok Kültürlü</h3>
                      <p className="text-sm text-zinc-600">
                        Göçmenlere açık toplum ve kolayuyum
                      </p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <GraduationCap className="w-8 h-8 text-purple-600 mb-2" />
                      <h3 className="font-semibold text-zinc-900 mb-1">Kaliteli Eğitim</h3>
                      <p className="text-sm text-zinc-600">
                        Dünya çapında tanınan üniversiteler
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Tahmini Süreç
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-600">Vize Başvurusu</span>
                        <span className="font-semibold">4-12 hafta</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-600">İlk Yerleşim</span>
                        <span className="font-semibold">2-4 hafta</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-600">Toplam</span>
                        <span className="font-semibold text-blue-600">2-4 ay</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      Tahmini Maliyetler
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-600">Vize Ücretleri</span>
                        <span className="font-semibold">₺5,000 - ₺15,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-600">Uçak Bileti</span>
                        <span className="font-semibold">₺15,000 - ₺30,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zinc-600">İlk Yerleşim</span>
                        <span className="font-semibold">₺30,000 - ₺80,000</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t">
                        <span className="text-zinc-600 font-semibold">Toplam</span>
                        <span className="font-bold text-blue-600">₺50,000 - ₺125,000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Visa Types Tab */}
            <TabsContent value="visa" className="space-y-6">
              {visaTypes.map((visa, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {visa.type === 'student' && <GraduationCap className="w-5 h-5" />}
                          {visa.type === 'work' && <Briefcase className="w-5 h-5" />}
                          {visa.type === 'business' && <Building2 className="w-5 h-5" />}
                          {visa.name}
                        </CardTitle>
                        <p className="text-sm text-zinc-600 mt-2">{visa.description}</p>
                      </div>
                      <Badge
                        variant={visa.difficulty === 'Kolay-Orta' ? 'default' : 'secondary'}
                      >
                        {visa.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm text-zinc-600 mb-1">İşlem Süresi</div>
                        <div className="font-semibold text-zinc-900">{visa.processingTime}</div>
                      </div>
                      <div>
                        <div className="text-sm text-zinc-600 mb-1">Tahmini Maliyet</div>
                        <div className="font-semibold text-zinc-900">{visa.estimatedCost}</div>
                      </div>
                      <div>
                        <div className="text-sm text-zinc-600 mb-1">Talep Seviyesi</div>
                        <div className="font-semibold text-green-600">{visa.demandLevel}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Requirements Tab */}
            <TabsContent value="requirements" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Vize Gereksinimleri</CardTitle>
                  <p className="text-sm text-zinc-600">
                    Vize başvurusu için ihtiyaç duyacağınız belgeler
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {requirements.map((req, index) => (
                      <div key={index} className="flex gap-3 p-4 rounded-lg bg-zinc-50">
                        <div className="flex-shrink-0 mt-1">
                          {req.mandatory ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-blue-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-zinc-900">{req.title}</h4>
                            {req.mandatory && (
                              <Badge variant="destructive" className="text-xs">
                                Zorunlu
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-zinc-600">{req.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-6">
              {Object.entries(resources).map(([category, items]: [string, any]) => (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle className="capitalize">
                      {category === 'student' && 'Öğrenciler İçin Kaynaklar'}
                      {category === 'job_search' && 'İş Arama Platformları'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {items.map((resource: any, index: number) => (
                        <a
                          key={index}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-3 p-4 rounded-lg bg-zinc-50 hover:bg-zinc-100 transition-colors group"
                        >
                          <ExternalLink className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                              {resource.title}
                            </h4>
                            <p className="text-sm text-zinc-600 mt-1">{resource.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>

          {/* CTA at bottom */}
          <Card className="mt-8 bg-gradient-to-br from-blue-600 to-indigo-600 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                {country.name}'ya Gitmek İçin Hazır mısınız?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Profesyonel danışmanlarımız vize sürecinde size yardımcı olabilir.
                Ücretsiz ön görüşme için iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Ücretsiz Danışmanlık Al
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  asChild
                >
                  <Link href="/oneriler">Diğer Ülkeleri İncele</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
