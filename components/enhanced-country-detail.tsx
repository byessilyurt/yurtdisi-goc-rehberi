'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  ArrowLeft,
  Check,
  Clock,
  DollarSign,
  Globe,
  ThumbsUp,
  TrendingUp,
  Users,
  Briefcase,
  GraduationCap,
  Building2,
  Heart,
  Rocket,
  ChevronDown,
  ChevronRight,
  AlertCircle,
  Info,
  ExternalLink,
  Calculator,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import {
  type EmigrationData,
  type VisaProgram,
  getCountryData,
  getCountryMetadata,
  getCountryStats,
} from '@/lib/emigration-data';

interface EnhancedCountryDetailProps {
  countrySlug: string;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'work':
      return <Briefcase className="w-5 h-5" />;
    case 'student':
      return <GraduationCap className="w-5 h-5" />;
    case 'business':
    case 'entrepreneur':
      return <Building2 className="w-5 h-5" />;
    case 'family':
      return <Heart className="w-5 h-5" />;
    case 'investor':
      return <TrendingUp className="w-5 h-5" />;
    default:
      return <Globe className="w-5 h-5" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'work':
      return 'bg-blue-50 text-blue-700 border-blue-200';
    case 'student':
      return 'bg-purple-50 text-purple-700 border-purple-200';
    case 'business':
    case 'entrepreneur':
      return 'bg-orange-50 text-orange-700 border-orange-200';
    case 'family':
      return 'bg-pink-50 text-pink-700 border-pink-200';
    case 'investor':
      return 'bg-green-50 text-green-700 border-green-200';
    default:
      return 'bg-gray-50 text-gray-700 border-gray-200';
  }
};

export function EnhancedCountryDetail({ countrySlug }: EnhancedCountryDetailProps) {
  const [selectedVisa, setSelectedVisa] = useState<VisaProgram | null>(null);
  const [showCostCalculator, setShowCostCalculator] = useState(false);
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set([1]));

  const countryMeta = getCountryMetadata(countrySlug);
  const countryData = getCountryData(countrySlug);
  const stats = getCountryStats(countrySlug);

  if (!countryMeta || !countryData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Ülke bulunamadı</h1>
          <Button asChild>
            <Link href="/">Ana Sayfaya Dön</Link>
          </Button>
        </div>
      </div>
    );
  }

  const visaPrograms = countryData.visaPrograms || [];

  const toggleStep = (stepNumber: number) => {
    const newExpanded = new Set(expandedSteps);
    if (newExpanded.has(stepNumber)) {
      newExpanded.delete(stepNumber);
    } else {
      newExpanded.add(stepNumber);
    }
    setExpandedSteps(newExpanded);
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-zinc-900 hover:text-blue-600 transition-colors"
            >
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

      {/* Hero Section with Gradient Overlay */}
      <section className="relative">
        <div className="relative h-96">
          <Image
            src={countryMeta.images[0]}
            alt={countryMeta.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Floating Stats Cards */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="container mx-auto px-4 pb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-end gap-4 mb-6">
                  <span className="text-7xl drop-shadow-2xl">{countryMeta.flagEmoji}</span>
                  <div className="flex-1">
                    <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-3">
                      {countryMeta.name}
                    </h1>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-white text-zinc-900 hover:bg-white/90 font-semibold px-3 py-1">
                        <ThumbsUp className="w-3 h-3 mr-1" />
                        {countryMeta.popularityScore} Puan
                      </Badge>
                      <Badge className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-3 py-1">
                        <Briefcase className="w-3 h-3 mr-1" />
                        {stats.totalVisas} Vize Seçeneği
                      </Badge>
                      {countryData.country.euMember && (
                        <Badge className="bg-yellow-500 text-white hover:bg-yellow-600 font-semibold px-3 py-1">
                          🇪🇺 AB Üyesi
                        </Badge>
                      )}
                      {countryData.country.schengenMember && (
                        <Badge className="bg-green-600 text-white hover:bg-green-700 font-semibold px-3 py-1">
                          Schengen
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Quick Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white/95 backdrop-blur-sm rounded-lg p-4 border border-white/50 shadow-xl"
                  >
                    <Clock className="w-5 h-5 text-blue-600 mb-2" />
                    <div className="text-xs text-zinc-600 mb-1">En Hızlı İşlem</div>
                    <div className="text-lg font-bold text-zinc-900">{stats.fastestProcessing}</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/95 backdrop-blur-sm rounded-lg p-4 border border-white/50 shadow-xl"
                  >
                    <DollarSign className="w-5 h-5 text-green-600 mb-2" />
                    <div className="text-xs text-zinc-600 mb-1">En Düşük Maliyet</div>
                    <div className="text-lg font-bold text-zinc-900">{stats.lowestCost}</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/95 backdrop-blur-sm rounded-lg p-4 border border-white/50 shadow-xl"
                  >
                    <Users className="w-5 h-5 text-purple-600 mb-2" />
                    <div className="text-xs text-zinc-600 mb-1">Nüfus</div>
                    <div className="text-lg font-bold text-zinc-900">
                      {countryData.country.population}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white/95 backdrop-blur-sm rounded-lg p-4 border border-white/50 shadow-xl"
                  >
                    <Globe className="w-5 h-5 text-orange-600 mb-2" />
                    <div className="text-xs text-zinc-600 mb-1">Para Birimi</div>
                    <div className="text-lg font-bold text-zinc-900">
                      {countryData.country.currency.split(' ')[0]}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Description Bar with Highlights */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-8">
            <p className="text-lg text-zinc-700 max-w-4xl mb-6">{countryMeta.description}</p>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {countryMeta.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-900 font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Visa Programs Grid */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-zinc-900 mb-2">Vize Programları</h2>
                <p className="text-zinc-600">
                  Size en uygun vize türünü seçin ve detayları inceleyin
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowCostCalculator(!showCostCalculator)}
                className="gap-2"
              >
                <Calculator className="w-4 h-4" />
                Maliyet Hesapla
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visaPrograms.map((visa, index) => {
                const colorClass = getCategoryColor(visa.category);
                const icon = getCategoryIcon(visa.category);

                return (
                  <motion.div
                    key={visa.visaId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      className="cursor-pointer h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-300"
                      onClick={() => setSelectedVisa(visa)}
                    >
                      <CardHeader className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div className={`p-3 rounded-lg ${colorClass}`}>{icon}</div>
                          {visa.popularity && (
                            <Badge variant="secondary" className="text-xs">
                              {visa.popularity}
                            </Badge>
                          )}
                        </div>

                        <div>
                          <CardTitle className="text-xl mb-2 line-clamp-2">
                            {visa.nameInTurkish || visa.officialName}
                          </CardTitle>
                          <p className="text-sm text-zinc-600 line-clamp-3">
                            {visa.overview.description}
                          </p>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-zinc-50 rounded-lg p-3">
                            <Clock className="w-4 h-4 text-zinc-600 mb-1" />
                            <div className="text-xs text-zinc-600">İşlem Süresi</div>
                            <div className="text-sm font-bold text-zinc-900">
                              {visa.applicationProcess.estimatedTotalDuration}
                            </div>
                          </div>

                          <div className="bg-zinc-50 rounded-lg p-3">
                            <DollarSign className="w-4 h-4 text-zinc-600 mb-1" />
                            <div className="text-xs text-zinc-600">Min Maliyet</div>
                            <div className="text-sm font-bold text-zinc-900">
                              €{visa.applicationProcess.totalCosts.totalEstimate.minimum.toLocaleString()}
                            </div>
                          </div>
                        </div>

                        {/* Key Benefits Preview */}
                        <div className="space-y-2">
                          {visa.overview.keyBenefits.slice(0, 2).map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-xs text-zinc-700 line-clamp-2">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        <Button className="w-full gap-2" size="sm">
                          Detayları İncele
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Turkish Citizen Specific Info */}
          {countryData.turkishCitizenSpecificInfo && (
            <Card className="mb-12 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <Info className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">🇹🇷 Türk Vatandaşları İçin Özel</CardTitle>
                    <p className="text-sm text-zinc-600 mt-1">
                      Bu ülkeye özel avantajlar ve kolaylıklar
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Visa-free travel info */}
                {countryData.turkishCitizenSpecificInfo.visaFreeTravel?.allowed && (
                  <div className="bg-white rounded-lg p-4 border border-blue-100 mb-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-zinc-900 mb-1">Vizesiz Seyahat</h4>
                        <p className="text-sm text-zinc-700">
                          {countryData.turkishCitizenSpecificInfo.visaFreeTravel.duration} süreyle
                          vizesiz ziyaret edebilirsiniz
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Special agreements */}
                {countryData.turkishCitizenSpecificInfo.specialAgreements && (
                  <div className="space-y-3">
                    {Object.entries(countryData.turkishCitizenSpecificInfo.specialAgreements).map(
                      ([key, agreement]: [string, any]) => (
                        <div key={key} className="bg-white rounded-lg p-4 border border-blue-100">
                          <h4 className="font-semibold text-zinc-900 mb-2">{agreement.name}</h4>
                          <ul className="space-y-2">
                            {agreement.benefits?.map((benefit: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700">
                                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Visa Detail Modal */}
      <AnimatePresence>
        {selectedVisa && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedVisa(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b px-6 py-4 z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${getCategoryColor(selectedVisa.category)}`}>
                      {getCategoryIcon(selectedVisa.category)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-zinc-900">
                        {selectedVisa.nameInTurkish || selectedVisa.officialName}
                      </h3>
                      <p className="text-sm text-zinc-600">{selectedVisa.visaCode}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedVisa(null)}>
                    ✕
                  </Button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Overview */}
                <div>
                  <p className="text-lg text-zinc-700 mb-4">{selectedVisa.overview.description}</p>

                  {/* Key Benefits */}
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <h4 className="font-semibold text-zinc-900 mb-3">✨ Temel Avantajlar</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {selectedVisa.overview.keyBenefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-zinc-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Application Process Steps */}
                <div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-4">
                    📋 Başvuru Süreci Adımları
                  </h4>
                  <div className="space-y-3">
                    {selectedVisa.applicationProcess.steps.slice(0, 8).map((step) => {
                      const isExpanded = expandedSteps.has(step.stepNumber);

                      return (
                        <div key={step.stepNumber} className="border border-zinc-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleStep(step.stepNumber)}
                            className="w-full flex items-center justify-between p-4 hover:bg-zinc-50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                                {step.stepNumber}
                              </div>
                              <div className="text-left">
                                <div className="font-semibold text-zinc-900">{step.stepName}</div>
                                <div className="text-xs text-zinc-600">{step.duration}</div>
                              </div>
                            </div>
                            {isExpanded ? (
                              <ChevronDown className="w-5 h-5 text-zinc-400" />
                            ) : (
                              <ChevronRight className="w-5 h-5 text-zinc-400" />
                            )}
                          </button>

                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="px-4 pb-4 bg-zinc-50"
                            >
                              <p className="text-sm text-zinc-700 mb-3">{step.description}</p>

                              {step.tips && step.tips.length > 0 && (
                                <div className="bg-white rounded p-3 mb-3">
                                  <div className="text-xs font-semibold text-zinc-700 mb-2">
                                    💡 İpuçları:
                                  </div>
                                  <ul className="space-y-1">
                                    {step.tips.map((tip, idx) => (
                                      <li key={idx} className="text-xs text-zinc-600 flex items-start gap-2">
                                        <span>•</span>
                                        <span>{tip}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {step.costs && step.costs.length > 0 && (
                                <div className="bg-green-50 rounded p-3">
                                  <div className="text-xs font-semibold text-zinc-700 mb-2">
                                    💰 Maliyetler:
                                  </div>
                                  <div className="space-y-1">
                                    {step.costs.map((cost, idx) => (
                                      <div key={idx} className="flex justify-between text-xs">
                                        <span className="text-zinc-600">{cost.item}</span>
                                        <span className="font-semibold text-zinc-900">
                                          {cost.currency} {cost.amount.toLocaleString()}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Total Cost Summary */}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 border-2 border-green-200">
                  <h4 className="text-xl font-bold text-zinc-900 mb-4">💰 Toplam Maliyet</h4>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-xs text-zinc-600 mb-1">Minimum</div>
                      <div className="text-2xl font-bold text-zinc-900">
                        €{selectedVisa.applicationProcess.totalCosts.totalEstimate.minimum.toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-xs text-zinc-600 mb-1">Ortalama</div>
                      <div className="text-2xl font-bold text-blue-600">
                        €{selectedVisa.applicationProcess.totalCosts.totalEstimate.typical.toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-xs text-zinc-600 mb-1">Maksimum</div>
                      <div className="text-2xl font-bold text-zinc-900">
                        €{selectedVisa.applicationProcess.totalCosts.totalEstimate.maximum.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-zinc-600 bg-white/50 rounded p-3">
                    ℹ️ Bu maliyetler sadece vize başvuru sürecini kapsar. Yaşam masrafları, eğitim
                    ücretleri ve diğer kişisel giderler dahil değildir.
                  </div>
                </div>

                {/* Eligibility Quick Check */}
                <div>
                  <h4 className="text-xl font-bold text-zinc-900 mb-4">✅ Uygunluk Kriterleri</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Age */}
                    <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                      <div className="font-semibold text-zinc-900 mb-2">Yaş</div>
                      <div className="text-sm text-zinc-700">
                        {selectedVisa.eligibilityCriteria.ageRequirements.minimumAge || 'Sınır yok'} -{' '}
                        {selectedVisa.eligibilityCriteria.ageRequirements.maximumAge || 'Sınır yok'}
                      </div>
                    </div>

                    {/* Financial */}
                    {selectedVisa.eligibilityCriteria.financialRequirements?.proofOfFundsRequired && (
                      <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200">
                        <div className="font-semibold text-zinc-900 mb-2">Finansal</div>
                        <div className="text-sm text-zinc-700">
                          {selectedVisa.eligibilityCriteria.financialRequirements.minimumSalary
                            ? `Min: €${selectedVisa.eligibilityCriteria.financialRequirements.minimumSalary.amount}`
                            : 'Finansal kanıt gerekli'}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3 pt-4 border-t">
                  <Button className="flex-1 gap-2" size="lg">
                    <Rocket className="w-5 h-5" />
                    Başvuru Sürecini Başlat
                  </Button>
                  <Button variant="outline" size="lg">
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
