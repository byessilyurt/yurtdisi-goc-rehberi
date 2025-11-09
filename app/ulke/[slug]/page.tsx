'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  MOCK_COUNTRIES,
  MOCK_VISA_TYPES,
  MOCK_REQUIREMENTS,
  MOCK_RESOURCES,
  type CountryResources,
  type ResourceItem,
} from '@/lib/real-data';
import {
  ArrowLeft,
  FileText,
  DollarSign,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Clock,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Building2,
  Globe,
  ThumbsUp,
} from 'lucide-react';

export default function CountryDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const country = MOCK_COUNTRIES.find((c) => c.slug === slug);

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-zinc-900">Ülke bulunamadı</h1>
          <Button asChild>
            <Link href="/">Ana Sayfaya Dön</Link>
          </Button>
        </div>
      </div>
    );
  }

  const visaTypes = MOCK_VISA_TYPES[slug as keyof typeof MOCK_VISA_TYPES] || [];
  const resources: CountryResources = MOCK_RESOURCES[slug as keyof typeof MOCK_RESOURCES] || {};

  // Get requirements for first visa type as example
  const firstVisaKey = visaTypes.length > 0 ? `${slug}_${visaTypes[0].name.toLowerCase().replace(/\s+/g, '_')}` : '';
  const requirements = MOCK_REQUIREMENTS[firstVisaKey as keyof typeof MOCK_REQUIREMENTS] || [];
  const categorizedResources = Object.entries(resources).filter(
    (entry): entry is [string, ResourceItem[]] => Array.isArray(entry[1]) && entry[1].length > 0
  );

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-zinc-900 hover:text-blue-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Geri</span>
            </Link>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              <span className="font-bold text-zinc-900">Göç Rehberi</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="relative h-80">
          <Image
            src={country.images[0]}
            alt={country.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Country Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="container mx-auto px-4 pb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-end gap-4 mb-4">
                  <span className="text-6xl drop-shadow-lg">{country.flagEmoji}</span>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">
                      {country.name}
                    </h1>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-white text-zinc-900 hover:bg-white/90 font-semibold">
                        <ThumbsUp className="w-3 h-3 mr-1" />
                        {country.popularityScore} Puan
                      </Badge>
                      <Badge className="bg-blue-600 text-white hover:bg-blue-700 font-semibold">
                        <Briefcase className="w-3 h-3 mr-1" />
                        {visaTypes.length} Vize Türü
                      </Badge>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Description Bar */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-6">
            <p className="text-lg text-zinc-700 max-w-4xl">
              {country.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="visa" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 bg-white shadow-sm">
              <TabsTrigger value="visa" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Vize Türleri
              </TabsTrigger>
              <TabsTrigger value="requirements" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Gereksinimler
              </TabsTrigger>
              <TabsTrigger value="resources" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Kaynaklar
              </TabsTrigger>
            </TabsList>

            {/* Visa Types Tab */}
            <TabsContent value="visa" className="space-y-4">
              {visaTypes.map((visa, index) => (
                <Card key={index} className="overflow-hidden border-2 border-zinc-100 hover:border-blue-200 transition-colors">
                  <CardHeader className="bg-gradient-to-r from-zinc-50 to-white">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {visa.type === 'student' && <GraduationCap className="w-5 h-5 text-blue-600" />}
                          {visa.type === 'work' && <Briefcase className="w-5 h-5 text-green-600" />}
                          {visa.type === 'skilled_worker' && <Briefcase className="w-5 h-5 text-purple-600" />}
                          {visa.type === 'business' && <Building2 className="w-5 h-5 text-orange-600" />}
                          <CardTitle className="text-xl text-zinc-900">{visa.name}</CardTitle>
                        </div>
                        <p className="text-zinc-600">{visa.description}</p>
                      </div>
                      <Badge
                        variant={visa.difficulty === 'Kolay' ? 'default' : 'secondary'}
                        className="ml-4"
                      >
                        {visa.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                        <Clock className="w-5 h-5 text-blue-600 mb-2" />
                        <div className="text-sm font-medium text-zinc-700 mb-1">İşlem Süresi</div>
                        <div className="text-lg font-bold text-zinc-900">{visa.processingTime}</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                        <DollarSign className="w-5 h-5 text-green-600 mb-2" />
                        <div className="text-sm font-medium text-zinc-700 mb-1">Tahmini Maliyet</div>
                        <div className="text-lg font-bold text-zinc-900">{visa.estimatedCost}</div>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                        <TrendingUp className="w-5 h-5 text-orange-600 mb-2" />
                        <div className="text-sm font-medium text-zinc-700 mb-1">Talep Seviyesi</div>
                        <div className="text-lg font-bold text-zinc-900">{visa.demandLevel}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Requirements Tab */}
            <TabsContent value="requirements" className="space-y-4">
              <Card>
                <CardHeader className="bg-zinc-50">
                  <CardTitle className="text-zinc-900">Vize Başvurusu İçin Gerekenler</CardTitle>
                  <p className="text-sm text-zinc-600 mt-2">
                    Başvuru sürecinde ihtiyaç duyacağınız belgeler ve koşullar
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {requirements.length > 0 ? (
                      requirements.map((req, index) => (
                        <div key={index} className="flex gap-4 p-4 rounded-lg bg-zinc-50 border border-zinc-200">
                          <div className="flex-shrink-0 mt-1">
                            {req.mandatory ? (
                              <CheckCircle2 className="w-6 h-6 text-green-600" />
                            ) : (
                              <AlertCircle className="w-6 h-6 text-blue-600" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-semibold text-zinc-900 text-lg">{req.title}</h4>
                              {req.mandatory && (
                                <Badge variant="destructive" className="text-xs">
                                  Zorunlu
                                </Badge>
                              )}
                            </div>
                            <p className="text-zinc-700">{req.description}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-zinc-500">
                        <FileText className="w-12 h-12 mx-auto mb-3 text-zinc-300" />
                        <p>Bu vize türü için gereksinimler yükleniyor...</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Resources Tab */}
            <TabsContent value="resources" className="space-y-4">
              {categorizedResources.length > 0 ? (
                categorizedResources.map(([category, items]) => (
                  <Card key={category}>
                    <CardHeader className="bg-zinc-50">
                      <CardTitle className="capitalize text-zinc-900">
                        {category === 'student' && '🎓 Öğrenciler İçin Kaynaklar'}
                        {category === 'job_search' && '💼 İş Arama Platformları'}
                        {category === 'university_search' && '🏫 Üniversite Arama'}
                        {category === 'community' && '👥 Topluluk ve Destek'}
                        {category === 'housing' && '🏠 Konut Arama'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        {items.map((resource, index: number) => (
                          <a
                            key={index}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-4 p-4 rounded-lg bg-zinc-50 hover:bg-blue-50 border border-zinc-200 hover:border-blue-300 transition-all group"
                          >
                            <ExternalLink className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            <div className="flex-1">
                              <h4 className="font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors mb-1">
                                {resource.title}
                              </h4>
                              <p className="text-sm text-zinc-600">{resource.description}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="p-6 text-center text-zinc-600">
                    <p>Bu ülke için kaynak listesi yakında eklenecek.</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>

          {/* CTA Card */}
          <Card className="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-3">
                {country.name}&rsquo;ya Gitmek İçin Hazır mısınız?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
                Profesyonel danışmanlarımız vize sürecinde size yardımcı olabilir.
                Ücretsiz ön görüşme için iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="text-base">
                  Ücretsiz Danışmanlık Al
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/40 text-base"
                  asChild
                >
                  <Link href="/">Diğer Ülkeleri İncele</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
