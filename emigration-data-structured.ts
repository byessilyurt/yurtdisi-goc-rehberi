// STRUCTURED DATA FOR TURKISH EMIGRATION APP
// 5 Countries: USA, Germany, Ireland, Poland, Canada
// All amounts in TRY (Turkish Lira) - using 1 USD = 32 TRY, 1 EUR = 35 TRY, 1 CAD = 24 TRY

export const countries = [
  {
    slug: "abd",
    name: "Amerika Birleşik Devletleri",
    flagEmoji: "🇺🇸",
    images: [
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=600&fit=crop"
    ],
    description: "Teknoloji ve yenilikçiliğin başkenti. Yüksek maaşlar, kariyer fırsatları ve 350,000 kişilik Türk topluluğu. H-1B vizesi ile Silicon Valley'de çalışma imkanı.",
    popularityScore: 72
  },
  {
    slug: "almanya",
    name: "Almanya",
    flagEmoji: "🇩🇪",
    images: [
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560930950-5cc20e80e392?w=1200&h=600&fit=crop"
    ],
    description: "3+ milyon Türk'ün yaşadığı, ücretsiz üniversite eğitimi sunan AB'nin kalbi. EU Blue Card ile 21 ayda kalıcı oturum. En güçlü Türk diasporası ve topluluk desteği.",
    popularityScore: 95
  },
  {
    slug: "irlanda",
    name: "İrlanda",
    flagEmoji: "🇮🇪",
    images: [
      "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=600&fit=crop"
    ],
    description: "AB'nin İngilizce konuşulan tek ülkesi. Google, Meta, Apple'ın Avrupa merkezleri. Critical Skills İzni ile 21 ayda kalıcı oturum ve canlı teknoloji ekosistemi.",
    popularityScore: 65
  },
  {
    slug: "polonya",
    name: "Polonya",
    flagEmoji: "🇵🇱",
    images: [
      "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1605641495026-d8e2e3e88e04?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1580159287648-d3cb43143b4d?w=1200&h=600&fit=crop"
    ],
    description: "AB'ye en uygun maliyetli giriş kapısı. Varşova'da aylık €1,150-1,600 yaşam bütçesi, yıllık €2,000-6,000 üniversite harçları ve Tip D vizeleri 15-30 günde sonuçlanır. EU Blue Card ile 2 yılda kalıcı oturum, Decision 1/80 sayesinde Türk vatandaşlarına özel iş güvenceleri.",
    popularityScore: 72
  },
  {
    slug: "kanada",
    name: "Kanada",
    flagEmoji: "🇨🇦",
    images: [
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519832979-6fa011b87667?w=1200&h=600&fit=crop"
    ],
    description: "Dünya'nın en şeffaf göç sistemi. Puana dayalı Express Entry ile 6-8 ayda kalıcı oturum. Yüksek yaşam kalitesi, çok kültürlülük ve net vatandaşlık yolu.",
    popularityScore: 35
  }
];

export const visaTypes = [
  // ========================================
  // USA VISA TYPES
  // ========================================
  {
    countrySlug: "abd",
    type: "work",
    name: "H-1B Çalışma Vizesi",
    description: "Üniversite mezunu profesyoneller için temel iş vizesi. Yıllık 85,000 vize için kura sistemi (%25 şans). Teknoloji, mühendislik ve sağlık sektörleri için ideal.",
    minAge: 21,
    maxAge: null,
    educationLevel: ["universite", "yuksek_lisans", "doktora"],
    professions: [
      "yazilim_muhendisi",
      "veri_bilimci",
      "sistem_mimarı",
      "makine_muhendisi",
      "elektrik_muhendisi",
      "insaat_muhendisi",
      "doktor",
      "hemsire",
      "finansal_analist",
      "pazarlama_uzmani"
    ],
    processingTimeMin: 60,
    processingTimeMax: 180,
    estimatedCostMin: 199904, // $6,247 * 32
    estimatedCostMax: 435200, // $13,600 * 32
    demandLevel: "high",
    difficultyLevel: "hard"
  },
  {
    countrySlug: "abd",
    type: "student",
    name: "F-1 Öğrenci Vizesi",
    description: "Amerikan üniversitelerinde lisans veya lisansüstü eğitim için. STEM alanlarında 36 aya kadar çalışma izni (OPT). H-1B kurasına birden fazla girme şansı.",
    minAge: 17,
    maxAge: null,
    educationLevel: ["lise", "universite"],
    professions: ["ogrenci"],
    processingTimeMin: 7,
    processingTimeMax: 90,
    estimatedCostMin: 17120, // $535 * 32
    estimatedCostMax: 17120,
    demandLevel: "high",
    difficultyLevel: "medium"
  },
  {
    countrySlug: "abd",
    type: "business",
    name: "E-2 Yatırımcı Vizesi",
    description: "Türkiye-ABD antlaşması sayesinde kullanılabilen özel yatırımcı vizesi. $150,000-250,000 yatırımla 2 yıllık vize, sınırsız yenileme. İş kurma ve aile geliş hakkı.",
    minAge: 21,
    maxAge: null,
    educationLevel: [],
    professions: ["girisimci", "is_insani", "yatirimci"],
    processingTimeMin: 60,
    processingTimeMax: 150,
    estimatedCostMin: 4960080, // $155,002.5 * 32
    estimatedCostMax: 5290080, // $165,315 * 32
    demandLevel: "medium",
    difficultyLevel: "medium"
  },
  {
    countrySlug: "abd",
    type: "business",
    name: "EB-5 Yatırımcı Green Card",
    description: "Doğrudan kalıcı oturum için yatırım programı. $800,000-1,050,000 yatırım ve 10 iş yaratma şartı. 2-5 yıl işlem süresi, ailece ABD'ye yerleşme.",
    minAge: 21,
    maxAge: null,
    educationLevel: [],
    professions: ["girisimci", "yatirimci"],
    processingTimeMin: 730,
    processingTimeMax: 1825,
    estimatedCostMin: 28055200, // $876,725 * 32
    estimatedCostMax: 37335200, // $1,166,725 * 32
    demandLevel: "low",
    difficultyLevel: "hard"
  },

  // ========================================
  // GERMANY VISA TYPES
  // ========================================
  {
    countrySlug: "almanya",
    type: "work",
    name: "AB Mavi Kart (EU Blue Card)",
    description: "Yüksek vasıflı profesyoneller için hızlı yol. €48,300 yıllık maaş (IT/mühendislik için €43,760). 21 ay sonra kalıcı oturum, aile birleşimi hemen.",
    minAge: 21,
    maxAge: null,
    educationLevel: ["universite", "yuksek_lisans", "doktora"],
    professions: [
      "yazilim_muhendisi",
      "veri_bilimci",
      "sistem_mimarı",
      "makine_muhendisi",
      "elektrik_muhendisi",
      "insaat_muhendisi",
      "doktor",
      "hemsire",
      "muhendis",
      "veri_analisti"
    ],
    processingTimeMin: 28,
    processingTimeMax: 42,
    estimatedCostMin: 4900, // €140 * 35
    estimatedCostMax: 4900,
    demandLevel: "high",
    difficultyLevel: "medium"
  },
  {
    countrySlug: "almanya",
    type: "student",
    name: "Öğrenci Vizesi",
    description: "Ücretsiz devlet üniversitelerinde eğitim! Sadece €200-400 dönem katkı payı. 18 ay iş arama izni sonrası. Alman veya İngilizce program seçenekleri.",
    minAge: 17,
    maxAge: null,
    educationLevel: ["lise", "universite"],
    professions: ["ogrenci"],
    processingTimeMin: 56,
    processingTimeMax: 84,
    estimatedCostMin: 2625, // €75 * 35
    estimatedCostMax: 2625,
    demandLevel: "high",
    difficultyLevel: "medium"
  },
  {
    countrySlug: "almanya",
    type: "work",
    name: "Ausbildung Meslek Eğitimi",
    description: "Maaşlı meslek eğitimi programı (2-3.5 yıl). Hemşirelik, IT, mühendislik alanlarında €850-1,300 aylık ücret. B1 Almanca ve okul diploması gerekli.",
    minAge: 18,
    maxAge: 35,
    educationLevel: ["lise"],
    professions: ["hemsire", "teknisyen", "asci", "otelcilik", "is_yonetimi"],
    processingTimeMin: 42,
    processingTimeMax: 84,
    estimatedCostMin: 2625, // €75 * 35
    estimatedCostMax: 2625,
    demandLevel: "high",
    difficultyLevel: "medium"
  },
  {
    countrySlug: "almanya",
    type: "work",
    name: "Fırsat Kartı (Chancenkarte)",
    description: "2024 yeni iş arama vizesi. Puan sistemiyle 6-12 ay Almanya'da iş arama hakkı. Üniversite mezunu, dil bilgisi ve iş tecrübesi puanlanır.",
    minAge: 21,
    maxAge: null,
    educationLevel: ["universite", "yuksek_lisans", "doktora"],
    professions: [],
    processingTimeMin: 28,
    processingTimeMax: 56,
    estimatedCostMin: 2800, // €80 * 35
    estimatedCostMax: 2800,
    demandLevel: "medium",
    difficultyLevel: "medium"
  },

  // ========================================
  // IRELAND VISA TYPES
  // ========================================
  {
    countrySlug: "irlanda",
    type: "work",
    name: "Critical Skills Employment Permit",
    description: "Kritik meslek listesindeki işler için. €38,000+ yıllık maaş (2025'te €44,000 olacak). 21 ay sonra Stamp 4 kalıcı oturum. Eş çalışma hakkı hemen.",
    minAge: 18,
    maxAge: null,
    educationLevel: ["universite", "yuksek_lisans", "doktora"],
    professions: [
      "yazilim_muhendisi",
      "siber_guvenlik_uzmani",
      "veri_bilimci",
      "bulut_mimarı",
      "muhendis",
      "doktor",
      "hemsire",
      "ebe",
      "insaat_yoneticisi",
      "elektrik_muhendisi"
    ],
    processingTimeMin: 30,
    processingTimeMax: 90,
    estimatedCostMin: 32000, // €1,000 * 32 (90% geri ödenir)
    estimatedCostMax: 32000,
    demandLevel: "high",
    difficultyLevel: "easy"
  },
  {
    countrySlug: "irlanda",
    type: "student",
    name: "Öğrenci İzni (Stamp 2)",
    description: "İrlanda üniversitelerinde eğitim için. Lisans sonrası 12 ay, yüksek lisans sonrası 24 ay çalışma hakkı (Stamp 1G). Dönem içi 20 saat, tatillerde 40 saat çalışma.",
    minAge: 17,
    maxAge: null,
    educationLevel: ["lise", "universite"],
    professions: ["ogrenci"],
    processingTimeMin: 30,
    processingTimeMax: 60,
    estimatedCostMin: 9600, // €300 * 32
    estimatedCostMax: 9600,
    demandLevel: "high",
    difficultyLevel: "medium"
  },
  {
    countrySlug: "irlanda",
    type: "work",
    name: "General Employment Permit",
    description: "Kritik liste dışındaki işler için genel izin. €30,000+ yıllık maaş. İşveren önce AB/EEA'da ilan vermeli. 5 yıl sonra kalıcı oturum hakkı.",
    minAge: 18,
    maxAge: null,
    educationLevel: [],
    professions: [],
    processingTimeMin: 60,
    processingTimeMax: 120,
    estimatedCostMin: 32000, // €1,000 * 32
    estimatedCostMax: 32000,
    demandLevel: "medium",
    difficultyLevel: "medium"
  },
  {
    countrySlug: "irlanda",
    type: "business",
    name: "Start-up Entrepreneur Programme (STEP)",
    description: "Yenilikçi startup için girişimci vizesi. €50,000 sermaye, ölçeklenebilir iş planı. 10 iş yaratma hedefi. 2 yıl Stamp 4, ardından yenilenebilir.",
    minAge: 18,
    maxAge: null,
    educationLevel: [],
    professions: ["girisimci", "startup_kurucu"],
    processingTimeMin: 90,
    processingTimeMax: 180,
    estimatedCostMin: 1600000, // €50,000 * 32
    estimatedCostMax: 1600000,
    demandLevel: "low",
    difficultyLevel: "hard"
  },

  // ========================================
  // POLAND VISA TYPES
  // ========================================
  {
    countrySlug: "polonya",
    type: "work",
    name: "AB Mavi Kart",
    description: "2025 maaş eşiği €2,800 brüt (12,272 PLN) ve dil şartı yok. 12 ay sözleşme ile başvurulabilir; aile birleşimi ve 2 yılda kalıcı oturum imkanı sunar.",
    minAge: 18,
    maxAge: null,
    educationLevel: ["universite", "yuksek_lisans", "doktora"],
    professions: [
      "yazilim_muhendisi",
      "veri_bilimci",
      "muhendis",
      "hemsire",
      "doktor",
      "muhendis"
    ],
    processingTimeMin: 150,
    processingTimeMax: 540,
    estimatedCostMin: 240,
    estimatedCostMax: 350,
    costCurrency: "EUR",
    demandLevel: "high",
    difficultyLevel: "medium"
  },
  {
    countrySlug: "polonya",
    type: "student",
    name: "Tip D Öğrenci Vizesi",
    description: "AB'nin en ucuz eğitimi! Yıllık €2,000-6,000 harç, 15-30 günde sonuçlanan vize ve haftada 20 saat çalışma hakkı. İngilizce programlar yaygın.",
    minAge: 17,
    maxAge: null,
    educationLevel: ["lise", "universite"],
    professions: ["ogrenci"],
    processingTimeMin: 15,
    processingTimeMax: 30,
    estimatedCostMin: 270,
    estimatedCostMax: 430,
    costCurrency: "EUR",
    demandLevel: "high",
    difficultyLevel: "easy"
  },
  {
    countrySlug: "polonya",
    type: "work",
    name: "Tip A Çalışma İzni",
    description: "İşveren sponsorluğu ile genel çalışma izni. Maaş eşiği yok, 1-6 ayda sonuçlanıyor ve Decision 1/80 sayesinde sözleşme uzatmalarında kolaylık var.",
    minAge: 18,
    maxAge: null,
    educationLevel: [],
    professions: [],
    processingTimeMin: 30,
    processingTimeMax: 180,
    estimatedCostMin: 120,
    estimatedCostMax: 160,
    costCurrency: "EUR",
    demandLevel: "medium",
    difficultyLevel: "medium"
  },

  // ========================================
  // CANADA VISA TYPES
  // ========================================
  {
    countrySlug: "kanada",
    type: "skilled_worker",
    name: "Express Entry (Federal Skilled Worker)",
    description: "Puan bazlı göç sistemi (CRS). 520+ puan gerekli (2024-2025). Dil, eğitim, tecrübe puanlanır. 6-8 ay işlem, kalıcı oturum direkt.",
    minAge: 18,
    maxAge: 45, // Puan sistemi 45 sonrası azalıyor
    educationLevel: ["lise", "universite", "yuksek_lisans", "doktora"],
    professions: [],
    processingTimeMin: 180,
    processingTimeMax: 240,
    estimatedCostMin: 46560, // CAD 1,940 * 24
    estimatedCostMax: 72000, // CAD 3,000 * 24 (aile için)
    demandLevel: "high",
    difficultyLevel: "hard"
  },
  {
    countrySlug: "kanada",
    type: "student",
    name: "Öğrenci İzni (Study Permit)",
    description: "Kanada üniversitelerinde eğitim. Mezuniyet sonrası 8 ay-3 yıl çalışma izni (PGWP). Express Entry'ye geçiş kolaylığı. Yüksek yaşam kalitesi.",
    minAge: 17,
    maxAge: null,
    educationLevel: ["lise", "universite"],
    professions: ["ogrenci"],
    processingTimeMin: 60,
    processingTimeMax: 120,
    estimatedCostMin: 3600, // CAD 150 * 24
    estimatedCostMax: 3600,
    demandLevel: "high",
    difficultyLevel: "medium"
  },
  {
    countrySlug: "kanada",
    type: "skilled_worker",
    name: "Provincial Nominee Program (PNP)",
    description: "İl bazlı aday programları. Express Entry'ye +600 puan. Daha düşük gereksinimler. Eyalet iş teklifi veya eğitim gerekebilir. Ontario, BC, Alberta popüler.",
    minAge: 18,
    maxAge: null,
    educationLevel: ["universite", "yuksek_lisans"],
    professions: [],
    processingTimeMin: 180,
    processingTimeMax: 660,
    estimatedCostMin: 52560, // CAD 1,940 + 250 eyalet * 24
    estimatedCostMax: 82560, // CAD 1,940 + 1,500 eyalet * 24
    demandLevel: "high",
    difficultyLevel: "medium"
  },
  {
    countrySlug: "kanada",
    type: "business",
    name: "Start-up Visa",
    description: "Yenilikçi girişimler için. Designated organization desteği gerekli (melek yatırımcı, VC, kuluçka merkezi). Kalıcı oturum direkt, 12-16 ay işlem.",
    minAge: 18,
    maxAge: null,
    educationLevel: [],
    professions: ["girisimci", "startup_kurucu"],
    processingTimeMin: 365,
    processingTimeMax: 480,
    estimatedCostMin: 320000, // Min investment ~CAD 75,000 + fees * 24 (tahmini)
    estimatedCostMax: 480000,
    demandLevel: "low",
    difficultyLevel: "hard"
  },
  {
    countrySlug: "kanada",
    type: "skilled_worker",
    name: "Atlantic Immigration Program",
    description: "Atlantik eyaletleri için (Nova Scotia, New Brunswick, PEI, Newfoundland). CLB 4-5 düşük dil seviyesi. 1 yıl tecrübe. 11-15 ay işlem. Düşük yaşam maliyeti.",
    minAge: 18,
    maxAge: null,
    educationLevel: ["lise", "universite"],
    professions: [],
    processingTimeMin: 330,
    processingTimeMax: 450,
    estimatedCostMin: 46560, // CAD 1,940 * 24
    estimatedCostMax: 46560,
    demandLevel: "medium",
    difficultyLevel: "easy"
  }
];

export const requirements = [
  // ========================================
  // USA H-1B REQUIREMENTS
  // ========================================
  {
    visaTypeCountry: "abd",
    visaTypeName: "H-1B Çalışma Vizesi",
    category: "documents",
    title: "Diploma ve Transkript",
    description: "Üniversite diploması (Bachelor veya üzeri) ve notların İngilizce çevirisi. WES veya ECE kredilendirme raporu (opsiyonel ama tavsiye edilir).",
    isMandatory: true,
    personalizedFor: ["yazilim_muhendisi", "muhendis", "hemsire", "doktor"]
  },
  {
    visaTypeCountry: "abd",
    visaTypeName: "H-1B Çalışma Vizesi",
    category: "qualifications",
    title: "İş Teklifi Mektubu",
    description: "ABD'de sponsorluk yapan işverenden resmi iş teklifi. Pozisyon detayları, maaş bilgisi ve başlangıç tarihi içermeli.",
    isMandatory: true,
    personalizedFor: []
  },
  {
    visaTypeCountry: "abd",
    visaTypeName: "H-1B Çalışma Vizesi",
    category: "qualifications",
    title: "Kura Kayıt (H-1B Lottery)",
    description: "İşveren Mart ayında elektronik kayıt yapmalı ($10 ücret). Kuraya seçilme şansı yaklaşık %25. Sonuçlar Mart sonu açıklanır.",
    isMandatory: true,
    personalizedFor: []
  },
  {
    visaTypeCountry: "abd",
    visaTypeName: "H-1B Çalışma Vizesi",
    category: "language",
    title: "İngilizce Dil Yeterliliği",
    description: "Resmi test gerekmez ama iş görüşmelerinde fonksiyonel İngilizce şart. Üniversite eğitimi İngilizce ise kabul edilir.",
    isMandatory: false,
    personalizedFor: []
  },
  {
    visaTypeCountry: "abd",
    visaTypeName: "H-1B Çalışma Vizesi",
    category: "financial",
    title: "Uygulama Ücretleri",
    description: "$780 başvuru + $750-1,500 ACWIA eğitim ücreti + $500 dolandırıcılık önleme. İşveren öder. Premium processing için +$2,805 opsiyonel.",
    isMandatory: true,
    personalizedFor: []
  },

  // ========================================
  // USA F-1 REQUIREMENTS
  // ========================================
  {
    visaTypeCountry: "abd",
    visaTypeName: "F-1 Öğrenci Vizesi",
    category: "documents",
    title: "I-20 Formu",
    description: "SEVP onaylı okuldan kabul mektubu ve I-20 formu. Okul tam zamanlı kayıt yapıp I-20'yi Federal sisteme işlemelidir.",
    isMandatory: true,
    personalizedFor: ["ogrenci"]
  },
  {
    visaTypeCountry: "abd",
    visaTypeName: "F-1 Öğrenci Vizesi",
    category: "language",
    title: "TOEFL/IELTS Sınavı",
    description: "TOEFL 61-100+ veya IELTS 6.0-7.0+ okula göre değişir. Lisansüstü için genelde TOEFL 80+ veya IELTS 6.5+ gerekir.",
    isMandatory: true,
    personalizedFor: ["ogrenci"]
  },
  {
    visaTypeCountry: "abd",
    visaTypeName: "F-1 Öğrenci Vizesi",
    category: "financial",
    title: "Mali Yeterlilik Belgesi",
    description: "İlk yıl için $40,000-80,000 gösterim (okula göre). Banka ekstresi, burs mektubu veya sponsor belgesi. SEVIS ücret $350 ayrıca.",
    isMandatory: true,
    personalizedFor: ["ogrenci"]
  },
  {
    visaTypeCountry: "abd",
    visaTypeName: "F-1 Öğrenci Vizesi",
    category: "documents",
    title: "Lise/Üniversite Transkriptleri",
    description: "Önceki eğitim belgelerinin İngilizce çevirileri ve notarize edilmiş örnekleri. Diploma denklik belgesi tavsiye edilir.",
    isMandatory: true,
    personalizedFor: ["ogrenci"]
  },

  // ========================================
  // USA E-2 REQUIREMENTS
  // ========================================
  {
    visaTypeCountry: "abd",
    visaTypeName: "E-2 Yatırımcı Vizesi",
    category: "financial",
    title: "Yatırım Sermayesi",
    description: "$150,000-250,000 minimum yatırım. İşletme kurma veya satın alma. İstihdam yaratma hedefi. Fonların meşru kaynaklardan geldiğinin belgesi.",
    isMandatory: true,
    personalizedFor: ["girisimci", "yatirimci"]
  },
  {
    visaTypeCountry: "abd",
    visaTypeName: "E-2 Yatırımcı Vizesi",
    category: "qualifications",
    title: "İş Planı",
    description: "Detaylı iş planı. İstihdam yaratma ve ekonomik etki analizi. 5 yıllık mali projeksiyonlar. Pazar araştırması ve rekabet analizi.",
    isMandatory: true,
    personalizedFor: ["girisimci"]
  },
  {
    visaTypeCountry: "abd",
    visaTypeName: "E-2 Yatırımcı Vizesi",
    category: "qualifications",
    title: "Türk Vatandaşlığı Şartı",
    description: "Başvurucu %50+ hisseye sahip Türk vatandaşı olmalı. Yatırım yoluyla edinilen vatandaşlıklar için 3 yıl ikamet şartı 2024'te getirildi.",
    isMandatory: true,
    personalizedFor: ["girisimci", "yatirimci"]
  },

  // ========================================
  // GERMANY EU BLUE CARD REQUIREMENTS
  // ========================================
  {
    visaTypeCountry: "almanya",
    visaTypeName: "AB Mavi Kart (EU Blue Card)",
    category: "qualifications",
    title: "İş Teklifi",
    description: "Minimum 6 ay süreli iş sözleşmesi. €48,300 yıllık maaş (genel) veya €43,760 (IT, mühendis, doktor için). İş pozisyonu diplomanızla uyumlu olmalı.",
    isMandatory: true,
    personalizedFor: ["yazilim_muhendisi", "muhendis", "doktor"]
  },
  {
    visaTypeCountry: "almanya",
    visaTypeName: "AB Mavi Kart (EU Blue Card)",
    category: "documents",
    title: "Diploma Denkliği (Anabin H+ Statüsü)",
    description: "Üniversiteniz Anabin veritabanında H+ statüsünde olmalı. Boğaziçi, ODTÜ, İTÜ, Bilkent, Koç tanınıyor. ZAB'dan Statement of Comparability alınabilir (€200, 2 ay).",
    isMandatory: true,
    personalizedFor: []
  },
  {
    visaTypeCountry: "almanya",
    visaTypeName: "AB Mavi Kart (EU Blue Card)",
    category: "language",
    title: "Almanca Dil Bilgisi (Opsiyonel)",
    description: "Vize başvurusu için Almanca gerekmez. Ancak B1 seviyesi ile 21 ay, A1 ile 27 ay sonra kalıcı oturum alabilirsiniz (21 ay daha hızlı!).",
    isMandatory: false,
    personalizedFor: []
  },
  {
    visaTypeCountry: "almanya",
    visaTypeName: "AB Mavi Kart (EU Blue Card)",
    category: "financial",
    title: "Sağlık Sigortası",
    description: "Almanya'da geçerli sağlık sigortası şart. Devlet (GKV) veya özel (PKV) sigorta €150-350 aylık. İşveren genelde yarı yarıya karşılar.",
    isMandatory: true,
    personalizedFor: []
  },

  // ========================================
  // GERMANY STUDENT VISA REQUIREMENTS
  // ========================================
  {
    visaTypeCountry: "almanya",
    visaTypeName: "Öğrenci Vizesi",
    category: "documents",
    title: "Üniversite Kabul Mektubu",
    description: "Devlet tanımlı Alman üniversitesinden kabul mektubu (Zulassung) veya koşullu kabul (Studienkolleg). Uni-assist başvurusu çoğu üniversite için gerekli.",
    isMandatory: true,
    personalizedFor: ["ogrenci"]
  },
  {
    visaTypeCountry: "almanya",
    visaTypeName: "Öğrenci Vizesi",
    category: "language",
    title: "Almanca/İngilizce Dil Belgesi",
    description: "Almanca programlar için TestDaF TDN 4, DSH-2 veya Goethe C1. İngilizce programlar için IELTS 6.0+ veya TOEFL 80+. Program diline göre.",
    isMandatory: true,
    personalizedFor: ["ogrenci"]
  },
  {
    visaTypeCountry: "almanya",
    visaTypeName: "Öğrenci Vizesi",
    category: "financial",
    title: "Bloke Hesap (Sperrkonto)",
    description: "€11,904 bloke hesap (2024/2025 için €992/ay). Fintiba veya Deutsche Bank üzerinden açılır. €89 hesap açma ücreti. Aylık €992 çekme hakkı.",
    isMandatory: true,
    personalizedFor: ["ogrenci"]
  },
  {
    visaTypeCountry: "almanya",
    visaTypeName: "Öğrenci Vizesi",
    category: "documents",
    title: "Lise Diploması Denkliği",
    description: "Türk lise diploması Almanya'da tanınır ama üniversite türüne göre değişir. Studienkolleg (hazırlık yılı) gerekebilir. Diploma apostil şart.",
    isMandatory: true,
    personalizedFor: ["ogrenci"]
  },

  // ========================================
  // GERMANY AUSBILDUNG REQUIREMENTS
  // ========================================
  {
    visaTypeCountry: "almanya",
    visaTypeName: "Ausbildung Meslek Eğitimi",
    category: "qualifications",
    title: "Ausbildung Sözleşmesi",
    description: "Alman işverenle imzalanmış Ausbildungsvertrag (eğitim sözleşmesi). 2-3.5 yıl süre. Hemşirelik, IT, mühendislik, otelcilik popüler.",
    isMandatory: true,
    personalizedFor: ["hemsire", "teknisyen", "otelcilik"]
  },
  {
    visaTypeCountry: "almanya",
    visaTypeName: "Ausbildung Meslek Eğitimi",
    category: "language",
    title: "B1 Almanca Seviyesi",
    description: "Minimum B1, tercihen B2 Almanca (Goethe Zertifikat). Meslek okulu dersleri Almanca. 6-12 ay yoğun dil kursu gerekebilir.",
    isMandatory: true,
    personalizedFor: []
  },
  {
    visaTypeCountry: "almanya",
    visaTypeName: "Ausbildung Meslek Eğitimi",
    category: "financial",
    title: "Mali Güvence",
    description: "Eğer aylık maaş €903'ün altındaysa €11,208 bloke hesap. Çoğu Ausbildung €850-1,300 maaş veriyor, bu durumda bloke hesap gerekmeyebilir.",
    isMandatory: false,
    personalizedFor: []
  },
  {
    visaTypeCountry: "almanya",
    visaTypeName: "Ausbildung Meslek Eğitimi",
    category: "documents",
    title: "Lise Diploması",
    description: "Türk lise diploması yeterli. Apostil ve Almanca çeviri gerekli. Bazı meslekler için not ortalaması önemli (hemşirelik gibi).",
    isMandatory: true,
    personalizedFor: []
  },

  // ========================================
  // IRELAND CRITICAL SKILLS REQUIREMENTS
  // ========================================
  {
    visaTypeCountry: "irlanda",
    visaTypeName: "Critical Skills Employment Permit",
    category: "qualifications",
    title: "İş Teklifi",
    description: "Critical Skills listesindeki bir işte €38,000+ (2024) veya €44,000+ (2025) yıllık maaş. Liste dışı işler için €64,000+. 2 yıl minimum sözleşme.",
    isMandatory: true,
    personalizedFor: ["yazilim_muhendisi", "hemsire", "muhendis"]
  },
  {
    visaTypeCountry: "irlanda",
    visaTypeName: "Critical Skills Employment Permit",
    category: "documents",
    title: "Diploma ve Referanslar",
    description: "Üniversite diploması veya ilgili alanda tecrübe. İş pozisyonu ile eşleşmeli. Referans mektupları ve CV.",
    isMandatory: true,
    personalizedFor: []
  },
  {
    visaTypeCountry: "irlanda",
    visaTypeName: "Critical Skills Employment Permit",
    category: "qualifications",
    title: "Labour Market Needs Test YOK",
    description: "İşveren AB/EEA'da ilan vermek zorunda değil. Bu büyük avantaj! Direkt başvuru yapılabilir.",
    isMandatory: false,
    personalizedFor: []
  },
  {
    visaTypeCountry: "irlanda",
    visaTypeName: "Critical Skills Employment Permit",
    category: "financial",
    title: "Sağlık Sigortası",
    description: "Özel sağlık sigortası tavsiye edilir (€50-150 aylık). Kamu sağlık sistemi (HSE) yeterli ama uzun bekleme süreleri olabilir.",
    isMandatory: false,
    personalizedFor: []
  },

  // ========================================
  // IRELAND STUDENT REQUIREMENTS
  // ========================================
  {
    visaTypeCountry: "irlanda",
    visaTypeName: "Öğrenci İzni (Stamp 2)",
    category: "documents",
    title: "Üniversite Kabul Mektubu",
    description: "ILEP listesindeki kurumdan QQI Level 7+ programına kabul. Program minimum 15 saat/hafta olmalı ve INIS onaylı.",
    isMandatory: true,
    personalizedFor: ["ogrenci"]
  },
  {
    visaTypeCountry: "irlanda",
    visaTypeName: "Öğrenci İzni (Stamp 2)",
    category: "language",
    title: "IELTS Sınavı",
    description: "IELTS 6.5+ (lisans) veya 6.0-7.0 (lisansüstü programa göre). Bazı okullar kendi dil testini de kabul eder.",
    isMandatory: true,
    personalizedFor: ["ogrenci"]
  },
  {
    visaTypeCountry: "irlanda",
    visaTypeName: "Öğrenci İzni (Stamp 2)",
    category: "financial",
    title: "Mali Yeterlilik",
    description: "€7,000 harç + €10,000 yaşam masrafı = €17,000 ilk yıl için. Banka ekstresi veya sponsor mektubu. Aylık ~€800-1,000 yaşam masrafı hesaplayın.",
    isMandatory: true,
    personalizedFor: ["ogrenci"]
  },
  {
    visaTypeCountry: "irlanda",
    visaTypeName: "Öğrenci İzni (Stamp 2)",
    category: "documents",
    title: "Özel Sağlık Sigortası",
    description: "€120-300 yıllık özel sağlık sigortası zorunlu. StudentHealth.ie gibi platformlardan alınabilir.",
    isMandatory: true,
    personalizedFor: ["ogrenci"]
  },

  // ========================================
  // POLAND BLUE CARD REQUIREMENTS
  // ========================================
  {
    visaTypeCountry: "polonya",
    visaTypeName: "AB Mavi Kart",
    category: "qualifications",
    title: "İş Sözleşmesi",
    description: "En az 12 aylık iş sözleşmesi ve 2025 için €2.800 brüt (12.272 PLN) maaş eşiği. Pozisyon diplomayla veya deneyimle uyumlu olmalı.",
    isMandatory: true,
    personalizedFor: ["yazilim_muhendisi", "muhendis"]
  },
  {
    visaTypeCountry: "polonya",
    visaTypeName: "AB Mavi Kart",
    category: "documents",
    title: "Diploma Tanınması",
    description: "3+ yıllık üniversite diploması ya da 5 yıl mesleki deneyim kabul ediliyor. Apostil ve yeminli Lehçe/İngilizce çeviri hazırlayın; denkliği 2-4 ay sürebilir.",
    isMandatory: true,
    personalizedFor: []
  },
  {
    visaTypeCountry: "polonya",
    visaTypeName: "AB Mavi Kart",
    category: "language",
    title: "Dil Şartı Yok",
    description: "Resmi Lehçe veya İngilizce sınav zorunlu değil. İş İngilizcesi yeterli, Lehçe bilmek işyerinde ve günlük hayatta avantaj sağlar.",
    isMandatory: false,
    personalizedFor: []
  },
  {
    visaTypeCountry: "polonya",
    visaTypeName: "AB Mavi Kart",
    category: "financial",
    title: "Sağlık Sigortası",
    description: "İşveren ZUS/NFZ kaydını yapana kadar özel sağlık sigortası yaptırın (aylık €25-70). Blue Card onayında sürekli sağlık sigortası kanıtı istenir.",
    isMandatory: true,
    personalizedFor: []
  },

  // ========================================
  // POLAND STUDENT VISA REQUIREMENTS
  // ========================================
  {
    visaTypeCountry: "polonya",
    visaTypeName: "Tip D Öğrenci Vizesi",
    category: "documents",
    title: "Üniversite Kabul Mektubu",
    description: "Polonya devlet veya özel üniversitesinden kabul mektubu. İngilizce programlar yaygın (IT, mühendislik, işletme).",
    isMandatory: true,
    personalizedFor: ["ogrenci"]
  },
  {
    visaTypeCountry: "polonya",
    visaTypeName: "Tip D Öğrenci Vizesi",
    category: "financial",
    title: "Mali Gösterim",
    description: "Aylık €230 (1.018 PLN) yaşam bütçesi x 12 ay + €570 dönüş bileti parası göstermelisiniz. Banka ekstresi, sponsor mektubu veya burs kabul edilir.",
    isMandatory: true,
    personalizedFor: ["ogrenci"]
  },
  {
    visaTypeCountry: "polonya",
    visaTypeName: "Tip D Öğrenci Vizesi",
    category: "documents",
    title: "Apostilli Belgeler",
    description: "Lise diploması ve transkriptler Türkiye'den apostil alınmalı. Lehçe/İngilizce yeminli tercüme gerekli.",
    isMandatory: true,
    personalizedFor: ["ogrenci"]
  },
  {
    visaTypeCountry: "polonya",
    visaTypeName: "Tip D Öğrenci Vizesi",
    category: "financial",
    title: "Sağlık Sigortası",
    description: "€30,000 teminatlı sağlık sigortası zorunlu. Öğrenci poliçeleri yıllık €150-300. Bazı üniversiteler kayıt sırasında paket sunar.",
    isMandatory: true,
    personalizedFor: ["ogrenci"]
  },

  // ========================================
  // CANADA EXPRESS ENTRY REQUIREMENTS
  // ========================================
  {
    visaTypeCountry: "kanada",
    visaTypeName: "Express Entry (Federal Skilled Worker)",
    category: "qualifications",
    title: "Çalışma Tecrübesi",
    description: "Son 10 yılda NOC TEER 0-3 kategorisinde minimum 1 yıl tam zamanlı tecrübe. Yönetici, profesyonel veya teknik/ticari pozisyonlar.",
    isMandatory: true,
    personalizedFor: []
  },
  {
    visaTypeCountry: "kanada",
    visaTypeName: "Express Entry (Federal Skilled Worker)",
    category: "language",
    title: "CLB 7 Dil Seviyesi (IELTS 6.0)",
    description: "Minimum IELTS 6.0 her beceri (reading, writing, listening, speaking). Ancak rekabetçi CRS puanı için IELTS 7.5-8.0+ (CLB 9-10) gerekli.",
    isMandatory: true,
    personalizedFor: []
  },
  {
    visaTypeCountry: "kanada",
    visaTypeName: "Express Entry (Federal Skilled Worker)",
    category: "documents",
    title: "WES Diploma Değerlendirmesi",
    description: "World Education Services (WES) raporu. Türk diplomalarının Kanada karşılığı. CAD $240-256, 35 gün işlem. ECA raporu 5 yıl geçerli.",
    isMandatory: true,
    personalizedFor: []
  },
  {
    visaTypeCountry: "kanada",
    visaTypeName: "Express Entry (Federal Skilled Worker)",
    category: "financial",
    title: "Yerleşme Fonu (Settlement Funds)",
    description: "Tek kişi için CAD $14,690, çift için CAD $18,288, 3 kişi için CAD $22,483. İş teklifi varsa gerekmez. 6 aylık banka ekstresi.",
    isMandatory: true,
    personalizedFor: []
  },
  {
    visaTypeCountry: "kanada",
    visaTypeName: "Express Entry (Federal Skilled Worker)",
    category: "qualifications",
    title: "CRS Puan Skoru",
    description: "520+ puan rekabetçi (2024-2025 genel çekilişler). Yaş, eğitim, dil, tecrübe puanlanır. PNP (+600 puan) veya Kanada tecrübesi büyük avantaj.",
    isMandatory: true,
    personalizedFor: []
  },

  // ========================================
  // CANADA STUDY PERMIT REQUIREMENTS
  // ========================================
  {
    visaTypeCountry: "kanada",
    visaTypeName: "Öğrenci İzni (Study Permit)",
    category: "documents",
    title: "Kabul Mektubu (LOA)",
    description: "DLI listesindeki (Designated Learning Institution) Kanada üniversitesinden kabul mektubu. Program 6+ ay süreli olmalı.",
    isMandatory: true,
    personalizedFor: ["ogrenci"]
  },
  {
    visaTypeCountry: "kanada",
    visaTypeName: "Öğrenci İzni (Study Permit)",
    category: "financial",
    title: "Mali Yeterlilik Gösterimi",
    description: "CAD $20,635 + harç toplamı. İlk yıl için yeterli kaynak gösterimi. Banka ekstresi veya eğitim kredisi kabul edilir.",
    isMandatory: true,
    personalizedFor: ["ogrenci"]
  },
  {
    visaTypeCountry: "kanada",
    visaTypeName: "Öğrenci İzni (Study Permit)",
    category: "language",
    title: "IELTS/TOEFL Sınavı",
    description: "Üniversiteye göre değişir. Genelde IELTS 6.0-6.5 (lisans) veya 6.5-7.0 (lisansüstü). TOEFL 80-90+ alternatif.",
    isMandatory: true,
    personalizedFor: ["ogrenci"]
  },
  {
    visaTypeCountry: "kanada",
    visaTypeName: "Öğrenci İzni (Study Permit)",
    category: "documents",
    title: "Biyometrik ve Sağlık Muayenesi",
    description: "CAD $85 biyometrik ücret. Panel doktordan sağlık raporu (opsiyonel, istenirse). Kanada vize merkezlerinde randevu.",
    isMandatory: true,
    personalizedFor: ["ogrenci"]
  },

  // ========================================
  // CANADA PNP REQUIREMENTS
  // ========================================
  {
    visaTypeCountry: "kanada",
    visaTypeName: "Provincial Nominee Program (PNP)",
    category: "qualifications",
    title: "İl Bazlı İş Teklifi veya Eğitim",
    description: "Eyalete göre değişir. Ontario, BC, Alberta iş teklifi gerektirir. Bazı programlar Kanada eğitimi veya French dili tercih eder.",
    isMandatory: false,
    personalizedFor: []
  },
  {
    visaTypeCountry: "kanada",
    visaTypeName: "Provincial Nominee Program (PNP)",
    category: "qualifications",
    title: "Express Entry Profili",
    description: "Çoğu PNP, Express Entry havuzuna girmiş olmayı şart koşar. Önce Express Entry profile oluşturun, sonra PNP'ye başvurun.",
    isMandatory: true,
    personalizedFor: []
  },
  {
    visaTypeCountry: "kanada",
    visaTypeName: "Provincial Nominee Program (PNP)",
    category: "language",
    title: "Dil Seviyesi (İle Göre Değişir)",
    description: "Bazı PNP'ler CLB 4-5 düşük seviyeleri kabul eder (Atlantic Immigration). Ontario ve BC genelde CLB 7+ ister.",
    isMandatory: true,
    personalizedFor: []
  },
  {
    visaTypeCountry: "kanada",
    visaTypeName: "Provincial Nominee Program (PNP)",
    category: "financial",
    title: "İl Başvuru Ücreti",
    description: "CAD $250-1,500 arası il bazlı başvuru ücreti. Federal Express Entry ücreti (CAD $1,940) ayrı ödenir.",
    isMandatory: true,
    personalizedFor: []
  }
];

export const resources = [
  // ========================================
  // USA RESOURCES
  // ========================================
  {
    countrySlug: "abd",
    category: "job_search",
    title: "LinkedIn Jobs - USA",
    url: "https://www.linkedin.com/jobs/",
    description: "ABD'deki iş ilanları için en popüler platform. H-1B sponsorluğu yapan şirketleri 'sponsorship' filtresi ile bulabilirsiniz.",
    targetAudience: ["employee", "it", "muhendis"]
  },
  {
    countrySlug: "abd",
    category: "job_search",
    title: "myvisajobs.com",
    url: "https://www.myvisajobs.com/",
    description: "H-1B vize sponsorluğu yapan şirketlerin tam listesi. Hangi şirketler kaç vize başvurusu yaptı, maaş bilgileri.",
    targetAudience: ["employee", "it"]
  },
  {
    countrySlug: "abd",
    category: "university_search",
    title: "Study in the USA",
    url: "https://www.studyusa.com/",
    description: "ABD üniversitelerini bulmak için. Program arama, burs imkanları, başvuru rehberi.",
    targetAudience: ["student"]
  },
  {
    countrySlug: "abd",
    category: "university_search",
    title: "College Board BigFuture",
    url: "https://bigfuture.collegeboard.org/",
    description: "Üniversite karşılaştırma, SAT/ACT sınav bilgileri, mali yardım hesaplayıcı.",
    targetAudience: ["student"]
  },
  {
    countrySlug: "abd",
    category: "community",
    title: "Turkish American Community Facebook",
    url: "https://www.facebook.com/groups/turkishamericans",
    description: "20,000+ üyeli Türk Amerikalılar topluluğu. İş, konut, göç sorularına cevap bulabilirsiniz.",
    targetAudience: ["employee", "student", "girisimci"]
  },
  {
    countrySlug: "abd",
    category: "community",
    title: "Assembly of Turkish American Associations (ATAA)",
    url: "https://www.ataa.org/",
    description: "50+ şube ile ABD'nin her yerinde Türk topluluğu desteği. Networking etkinlikleri, kültürel programlar.",
    targetAudience: ["employee", "student", "girisimci"]
  },
  {
    countrySlug: "abd",
    category: "housing",
    title: "Zillow",
    url: "https://www.zillow.com/",
    description: "Konut kiralama ve satın alma platformu. Fiyat karşılaştırma, mahalle incelemeleri.",
    targetAudience: ["employee", "student"]
  },
  {
    countrySlug: "abd",
    category: "housing",
    title: "Apartments.com",
    url: "https://www.apartments.com/",
    description: "Kira dairesi arama. Şehir ve bölgeye göre filtreleme. Sanal turlar mevcut.",
    targetAudience: ["employee", "student"]
  },

  // ========================================
  // GERMANY RESOURCES
  // ========================================
  {
    countrySlug: "almanya",
    category: "job_search",
    title: "Make it in Germany",
    url: "https://www.make-it-in-germany.com/en/",
    description: "Resmi Alman hükümeti iş bulma portalı. İş ilanları, vize bilgileri, dil kursları. Türkçe dil desteği var.",
    targetAudience: ["employee", "it", "muhendis"]
  },
  {
    countrySlug: "almanya",
    category: "job_search",
    title: "StepStone Deutschland",
    url: "https://www.stepstone.de/",
    description: "Almanya'nın en büyük iş arama sitelerinden. 'Visa sponsorship' veya 'EU Blue Card' araması yapabilirsiniz.",
    targetAudience: ["employee", "it", "muhendis"]
  },
  {
    countrySlug: "almanya",
    category: "university_search",
    title: "DAAD (Deutscher Akademischer Austauschdienst)",
    url: "https://www.daad.de/en/",
    description: "Almanya'da üniversite ve program arama. Burs imkanları (yıllık 100,000+ burs). Başvuru rehberi Türkçe mevcut.",
    targetAudience: ["student"]
  },
  {
    countrySlug: "almanya",
    category: "university_search",
    title: "Study in Germany",
    url: "https://www.study-in-germany.de/en/",
    description: "Üniversite programları, başvuru süreçleri, öğrenci vizesi bilgileri. İngilizce ve Türkçe kaynak.",
    targetAudience: ["student"]
  },
  {
    countrySlug: "almanya",
    category: "community",
    title: "Berlin'deki Türkler Facebook Grubu",
    url: "https://www.facebook.com/groups/turklerberlinde",
    description: "50,000+ üyeli Berlin Türk topluluğu. İş, konut, gündelik yaşam paylaşımları. En aktif Türk grubu.",
    targetAudience: ["employee", "student", "girisimci"]
  },
  {
    countrySlug: "almanya",
    category: "community",
    title: "TGD - Türk-Alman İş İnsanları Derneği",
    url: "https://www.tdw-europe.de/",
    description: "İş networking etkinlikleri, girişimcilik desteği, mentorluk programları. Hamburg, Frankfurt, Berlin şubeleri.",
    targetAudience: ["girisimci", "employee"]
  },
  {
    countrySlug: "almanya",
    category: "housing",
    title: "ImmobilienScout24",
    url: "https://www.immobilienscout24.de/",
    description: "Almanya'nın en büyük kiralık konut platformu. 'WG-Gesucht' oda arkadaşı seçeneği öğrenciler için ideal.",
    targetAudience: ["employee", "student"]
  },
  {
    countrySlug: "almanya",
    category: "housing",
    title: "WG-Gesucht",
    url: "https://www.wg-gesucht.de/",
    description: "Paylaşımlı ev (WG) arama. Öğrenciler ve yeni gelenler için uygun fiyatlı seçenekler.",
    targetAudience: ["student"]
  },

  // ========================================
  // IRELAND RESOURCES
  // ========================================
  {
    countrySlug: "irlanda",
    category: "job_search",
    title: "IrishJobs.ie",
    url: "https://www.irishjobs.ie/",
    description: "İrlanda'nın en popüler iş arama sitesi. Tech, healthcare, finance sektörlerinde güçlü. Critical Skills izni yapan şirketler filtrelenebilir.",
    targetAudience: ["employee", "it", "healthcare"]
  },
  {
    countrySlug: "irlanda",
    category: "job_search",
    title: "Jobs.ie",
    url: "https://www.jobs.ie/",
    description: "İrlanda iş ilanları. Multinational şirketler (Google, Meta, Apple) burada ilan veriyor.",
    targetAudience: ["employee", "it"]
  },
  {
    countrySlug: "irlanda",
    category: "university_search",
    title: "Quality and Qualifications Ireland (QQI)",
    url: "https://www.qqi.ie/",
    description: "Resmi akredite eğitim kurumları listesi. Stamp 2 vizesi için okul ILEP listesinde olmalı.",
    targetAudience: ["student"]
  },
  {
    countrySlug: "irlanda",
    category: "university_search",
    title: "Studyinireland.ie",
    url: "https://www.studyinireland.ie/",
    description: "İrlanda üniversiteleri ve programlar. Trinity College Dublin, UCD, UCC gibi top okulların bilgileri.",
    targetAudience: ["student"]
  },
  {
    countrySlug: "irlanda",
    category: "community",
    title: "Turkish Community in Ireland Facebook",
    url: "https://www.facebook.com/groups/turkishcommunityireland",
    description: "İrlanda'daki Türkler için topluluk. Konut, iş, vize deneyimleri paylaşılıyor.",
    targetAudience: ["employee", "student"]
  },
  {
    countrySlug: "irlanda",
    category: "housing",
    title: "Daft.ie",
    url: "https://www.daft.ie/",
    description: "İrlanda'nın en büyük kiralık konut sitesi. Uyarı: Dublin'de konut krizi var, hızlı hareket edin!",
    targetAudience: ["employee", "student"]
  },
  {
    countrySlug: "irlanda",
    category: "housing",
    title: "Rent.ie",
    url: "https://www.rent.ie/",
    description: "Alternatif konut arama platformu. Cork, Galway, Limerick gibi şehirler için iyi seçenekler.",
    targetAudience: ["employee", "student"]
  },

  // ========================================
  // POLAND RESOURCES
  // ========================================
  {
    countrySlug: "polonya",
    category: "job_search",
    title: "No Fluff Jobs",
    url: "https://nofluffjobs.com/",
    description: "Polonya IT iş ilanları. Maaş bilgileri şeffaf. İngilizce konuşulan pozisyonlar filtrelenebilir.",
    targetAudience: ["employee", "it"]
  },
  {
    countrySlug: "polonya",
    category: "job_search",
    title: "Just Join IT",
    url: "https://justjoin.it/",
    description: "Polonya'nın en popüler tech iş platformu. Startup'lar ve büyük şirketler. Relocation desteği filtresi var.",
    targetAudience: ["employee", "it"]
  },
  {
    countrySlug: "polonya",
    category: "job_search",
    title: "Pracuj.pl",
    url: "https://www.pracuj.pl/",
    description: "Mühendislik, finans ve kurumsal pozisyonlar için ulusal iş arama portalı. Blue Card maaş aralıklarını filtreleyin.",
    targetAudience: ["employee", "muhendis", "it"]
  },
  {
    countrySlug: "polonya",
    category: "university_search",
    title: "Study in Poland",
    url: "https://www.study.gov.pl/",
    description: "Resmi Polonya hükümeti eğitim portalı. Üniversite arama, burs programları, vize bilgileri.",
    targetAudience: ["student"]
  },
  {
    countrySlug: "polonya",
    category: "university_search",
    title: "Study in Poland - Universities List",
    url: "https://www.studyinpoland.pl/",
    description: "390+ üniversite ve program rehberi. İngilizce programlar filtrelenebilir. €2,000-6,000 yıllık harçlar.",
    targetAudience: ["student"]
  },
  {
    countrySlug: "polonya",
    category: "community",
    title: "Turks in Poland Facebook",
    url: "https://www.facebook.com/groups/turksinpoland",
    description: "Polonya'daki Türk topluluğu. Varşova, Krakow, Wroclaw'daki deneyimler paylaşılıyor.",
    targetAudience: ["employee", "student"]
  },
  {
    countrySlug: "polonya",
    category: "community",
    title: "Gov.pl Türkçe Portal",
    url: "https://www.gov.pl/web/turkiye",
    description: "Resmi Türkçe portal: vizeler, e-Konsulat randevuları, karar 1/80 hakları ve iletişim bilgileri.",
    targetAudience: ["employee", "student"]
  },
  {
    countrySlug: "polonya",
    category: "housing",
    title: "Otodom.pl",
    url: "https://www.otodom.pl/",
    description: "Polonya'nın en büyük emlak sitesi. Kiralık daireler €400-800 Varşova merkezde.",
    targetAudience: ["employee", "student"]
  },
  {
    countrySlug: "polonya",
    category: "housing",
    title: "Olx.pl - Nieruchomości",
    url: "https://www.olx.pl/nieruchomosci/",
    description: "İlan sitesi konut bölümü. Daha uygun fiyatlı ilan bulma şansı. Dikkatli olun, dolandırıcılık riski var.",
    targetAudience: ["employee", "student"]
  },

  // ========================================
  // CANADA RESOURCES
  // ========================================
  {
    countrySlug: "kanada",
    category: "job_search",
    title: "Job Bank Canada",
    url: "https://www.jobbank.gc.ca/",
    description: "Resmi Kanada hükümeti iş portalı. NOC kodu ile arama. LMIA/PNP yapan işverenler filtrelenebilir.",
    targetAudience: ["employee", "it", "muhendis"]
  },
  {
    countrySlug: "kanada",
    category: "job_search",
    title: "Indeed Canada",
    url: "https://ca.indeed.com/",
    description: "Kanada iş ilanları. 'LMIA' veya 'willing to sponsor' kelimelerini arayın.",
    targetAudience: ["employee", "it"]
  },
  {
    countrySlug: "kanada",
    category: "university_search",
    title: "EduCanada",
    url: "https://www.educanada.ca/",
    description: "Resmi Kanada eğitim portalı. DLI listesi, program arama, burs bilgileri.",
    targetAudience: ["student"]
  },
  {
    countrySlug: "kanada",
    category: "university_search",
    title: "Universities Canada",
    url: "https://www.univcan.ca/",
    description: "Tüm Kanada üniversiteleri listesi ve programlar. Karşılaştırma araçları mevcut.",
    targetAudience: ["student"]
  },
  {
    countrySlug: "kanada",
    category: "community",
    title: "Turkish Canadians Facebook",
    url: "https://www.facebook.com/groups/turkishcanadians",
    description: "Toronto, Vancouver, Montreal'deki Türk toplulukları. 10,000+ üye. İş, konut, göç deneyimleri.",
    targetAudience: ["employee", "student", "girisimci"]
  },
  {
    countrySlug: "kanada",
    category: "community",
    title: "Canadian Turkish Association",
    url: "https://www.canadianturkish.org/",
    description: "Resmi Türk-Kanada derneği. Kültürel etkinlikler, iş ağı, yeni göçmenlere destek programları.",
    targetAudience: ["employee", "student"]
  },
  {
    countrySlug: "kanada",
    category: "housing",
    title: "Rentals.ca",
    url: "https://rentals.ca/",
    description: "Kanada geneli kiralık konut. Toronto, Vancouver, Montreal filtreleme. Fiyat aralıkları şeffaf.",
    targetAudience: ["employee", "student"]
  },
  {
    countrySlug: "kanada",
    category: "housing",
    title: "PadMapper Canada",
    url: "https://www.padmapper.com/",
    description: "Harita bazlı kiralık konut arama. Mahalle karşılaştırmaları, toplu taşıma erişimi filtreleri.",
    targetAudience: ["employee", "student"]
  }
];

export const costs = [
  // ========================================
  // USA COSTS
  // ========================================
  {
    countrySlug: "abd",
    category: "visa_fees",
    item: "H-1B Vize Başvuru Ücreti",
    amountMin: 199904,
    amountMax: 435200,
    period: "one_time"
  },
  {
    countrySlug: "abd",
    category: "visa_fees",
    item: "F-1 Öğrenci Vizesi",
    amountMin: 17120,
    amountMax: 17120,
    period: "one_time"
  },
  {
    countrySlug: "abd",
    category: "visa_fees",
    item: "E-2 Yatırımcı Vizesi (toplam yatırım dahil)",
    amountMin: 4960080,
    amountMax: 5290080,
    period: "one_time"
  },
  {
    countrySlug: "abd",
    category: "living_cost",
    item: "New York City Aylık Yaşam (kira dahil)",
    amountMin: 133824,
    amountMax: 175424,
    period: "monthly"
  },
  {
    countrySlug: "abd",
    category: "living_cost",
    item: "San Francisco Aylık Yaşam (kira dahil)",
    amountMin: 112000,
    amountMax: 153600,
    period: "monthly"
  },
  {
    countrySlug: "abd",
    category: "living_cost",
    item: "Houston/Dallas Aylık Yaşam (kira dahil)",
    amountMin: 57600,
    amountMax: 86400,
    period: "monthly"
  },
  {
    countrySlug: "abd",
    category: "education",
    item: "Devlet Üniversitesi Yıllık Harç",
    amountMin: 640000,
    amountMax: 1440000,
    period: "yearly"
  },
  {
    countrySlug: "abd",
    category: "education",
    item: "Özel Üniversite Yıllık Harç",
    amountMin: 1120000,
    amountMax: 2240000,
    period: "yearly"
  },
  {
    countrySlug: "abd",
    category: "healthcare",
    item: "Sağlık Sigortası (bireysel)",
    amountMin: 183168,
    amountMax: 238464,
    period: "yearly"
  },
  {
    countrySlug: "abd",
    category: "healthcare",
    item: "Sağlık Sigortası (aile)",
    amountMin: 818304,
    amountMax: 818304,
    period: "yearly"
  },

  // ========================================
  // GERMANY COSTS
  // ========================================
  {
    countrySlug: "almanya",
    category: "visa_fees",
    item: "EU Blue Card Başvuru",
    amountMin: 4900,
    amountMax: 4900,
    period: "one_time"
  },
  {
    countrySlug: "almanya",
    category: "visa_fees",
    item: "Öğrenci Vizesi",
    amountMin: 2625,
    amountMax: 2625,
    period: "one_time"
  },
  {
    countrySlug: "almanya",
    category: "visa_fees",
    item: "Ausbildung Vizesi",
    amountMin: 2625,
    amountMax: 2625,
    period: "one_time"
  },
  {
    countrySlug: "almanya",
    category: "living_cost",
    item: "Berlin Aylık Yaşam (kira dahil)",
    amountMin: 73500,
    amountMax: 101500,
    period: "monthly"
  },
  {
    countrySlug: "almanya",
    category: "living_cost",
    item: "Münih Aylık Yaşam (kira dahil)",
    amountMin: 84000,
    amountMax: 112000,
    period: "monthly"
  },
  {
    countrySlug: "almanya",
    category: "living_cost",
    item: "Küçük Şehirler Aylık Yaşam",
    amountMin: 59500,
    amountMax: 80500,
    period: "monthly"
  },
  {
    countrySlug: "almanya",
    category: "education",
    item: "Devlet Üniversitesi Harç (ÜCRETSİZ!)",
    amountMin: 0,
    amountMax: 0,
    period: "yearly"
  },
  {
    countrySlug: "almanya",
    category: "education",
    item: "Dönemlik Katkı Payı (öğrenci servisleri)",
    amountMin: 7000,
    amountMax: 14000,
    period: "yearly"
  },
  {
    countrySlug: "almanya",
    category: "education",
    item: "Bloke Hesap (öğrenci için zorunlu)",
    amountMin: 416640,
    amountMax: 416640,
    period: "yearly"
  },
  {
    countrySlug: "almanya",
    category: "healthcare",
    item: "Devlet Sağlık Sigortası (öğrenci)",
    amountMin: 3780,
    amountMax: 3780,
    period: "monthly"
  },
  {
    countrySlug: "almanya",
    category: "healthcare",
    item: "Sağlık Sigortası (çalışan - işveren paylaşır)",
    amountMin: 5250,
    amountMax: 12250,
    period: "monthly"
  },

  // ========================================
  // IRELAND COSTS
  // ========================================
  {
    countrySlug: "irlanda",
    category: "visa_fees",
    item: "Critical Skills Employment Permit",
    amountMin: 32000,
    amountMax: 32000,
    period: "one_time"
  },
  {
    countrySlug: "irlanda",
    category: "visa_fees",
    item: "Öğrenci Kayıt Ücreti (Stamp 2)",
    amountMin: 9600,
    amountMax: 9600,
    period: "one_time"
  },
  {
    countrySlug: "irlanda",
    category: "living_cost",
    item: "Dublin Aylık Yaşam (kira dahil)",
    amountMin: 80000,
    amountMax: 96000,
    period: "monthly"
  },
  {
    countrySlug: "irlanda",
    category: "living_cost",
    item: "Cork/Galway Aylık Yaşam",
    amountMin: 57600,
    amountMax: 70400,
    period: "monthly"
  },
  {
    countrySlug: "irlanda",
    category: "living_cost",
    item: "Dublin Kira (1 yatak odası merkez)",
    amountMin: 67200,
    amountMax: 76480,
    period: "monthly"
  },
  {
    countrySlug: "irlanda",
    category: "education",
    item: "Üniversite Yıllık Harç (non-EU)",
    amountMin: 320000,
    amountMax: 800000,
    period: "yearly"
  },
  {
    countrySlug: "irlanda",
    category: "education",
    item: "Öğrenci Katkı Payı",
    amountMin: 96000,
    amountMax: 96000,
    period: "yearly"
  },
  {
    countrySlug: "irlanda",
    category: "healthcare",
    item: "Özel Sağlık Sigortası (öğrenci)",
    amountMin: 3840,
    amountMax: 9600,
    period: "yearly"
  },
  {
    countrySlug: "irlanda",
    category: "healthcare",
    item: "GP Ziyareti (genel hekim)",
    amountMin: 1920,
    amountMax: 2560,
    period: "one_time"
  },

  // ========================================
  // POLAND COSTS
  // ========================================
  {
    countrySlug: "polonya",
    category: "visa_fees",
    item: "EU Blue Card Başvuru",
    amountMin: 120,
    amountMax: 350,
    period: "one_time",
    currency: "EUR"
  },
  {
    countrySlug: "polonya",
    category: "visa_fees",
    item: "Tip D Öğrenci Vizesi",
    amountMin: 270,
    amountMax: 430,
    period: "one_time",
    currency: "EUR"
  },
  {
    countrySlug: "polonya",
    category: "living_cost",
    item: "Varşova Aylık Yaşam (kira dahil)",
    amountMin: 1150,
    amountMax: 1600,
    period: "monthly",
    currency: "EUR"
  },
  {
    countrySlug: "polonya",
    category: "living_cost",
    item: "Krakow Aylık Yaşam",
    amountMin: 1030,
    amountMax: 1370,
    period: "monthly",
    currency: "EUR"
  },
  {
    countrySlug: "polonya",
    category: "living_cost",
    item: "Küçük Şehirler Aylık Yaşam",
    amountMin: 910,
    amountMax: 1260,
    period: "monthly",
    currency: "EUR"
  },
  {
    countrySlug: "polonya",
    category: "education",
    item: "Devlet Üniversitesi Yıllık Harç",
    amountMin: 2000,
    amountMax: 6000,
    period: "yearly",
    currency: "EUR"
  },
  {
    countrySlug: "polonya",
    category: "education",
    item: "Özel Üniversite Yıllık Harç",
    amountMin: 4000,
    amountMax: 8000,
    period: "yearly",
    currency: "EUR"
  },
  {
    countrySlug: "polonya",
    category: "education",
    item: "Tıp Fakültesi Yıllık Harç",
    amountMin: 12000,
    amountMax: 15000,
    period: "yearly",
    currency: "EUR"
  },
  {
    countrySlug: "polonya",
    category: "healthcare",
    item: "Öğrenci Sağlık Sigortası",
    amountMin: 140,
    amountMax: 275,
    period: "yearly",
    currency: "EUR"
  },
  {
    countrySlug: "polonya",
    category: "healthcare",
    item: "Özel Sağlık Sigortası (çalışan)",
    amountMin: 25,
    amountMax: 95,
    period: "monthly",
    currency: "EUR"
  },

  // ========================================
  // CANADA COSTS
  // ========================================
  {
    countrySlug: "kanada",
    category: "visa_fees",
    item: "Express Entry Başvuru (tek kişi)",
    amountMin: 46560,
    amountMax: 46560,
    period: "one_time"
  },
  {
    countrySlug: "kanada",
    category: "visa_fees",
    item: "Express Entry (çift)",
    amountMin: 72000,
    amountMax: 72000,
    period: "one_time"
  },
  {
    countrySlug: "kanada",
    category: "visa_fees",
    item: "Öğrenci İzni",
    amountMin: 3600,
    amountMax: 3600,
    period: "one_time"
  },
  {
    countrySlug: "kanada",
    category: "visa_fees",
    item: "WES Diploma Değerlendirme",
    amountMin: 5760,
    amountMax: 6144,
    period: "one_time"
  },
  {
    countrySlug: "kanada",
    category: "living_cost",
    item: "Toronto Aylık Yaşam (kira dahil)",
    amountMin: 72000,
    amountMax: 84000,
    period: "monthly"
  },
  {
    countrySlug: "kanada",
    category: "living_cost",
    item: "Vancouver Aylık Yaşam",
    amountMin: 76800,
    amountMax: 86400,
    period: "monthly"
  },
  {
    countrySlug: "kanada",
    category: "living_cost",
    item: "Montreal Aylık Yaşam",
    amountMin: 43200,
    amountMax: 57600,
    period: "monthly"
  },
  {
    countrySlug: "kanada",
    category: "living_cost",
    item: "Calgary Aylık Yaşam",
    amountMin: 48000,
    amountMax: 60000,
    period: "monthly"
  },
  {
    countrySlug: "kanada",
    category: "education",
    item: "Lisans Programı Yıllık Harç (uluslararası)",
    amountMin: 866400,
    amountMax: 866400,
    period: "yearly"
  },
  {
    countrySlug: "kanada",
    category: "education",
    item: "Yüksek Lisans Yıllık Harç",
    amountMin: 506400,
    amountMax: 506400,
    period: "yearly"
  },
  {
    countrySlug: "kanada",
    category: "healthcare",
    item: "Sağlık Sistemi (kalıcı oturum sahipleri için ÜCRETSİZ)",
    amountMin: 0,
    amountMax: 0,
    period: "yearly"
  },
  {
    countrySlug: "kanada",
    category: "healthcare",
    item: "Özel Diş/Göz Sigortası",
    amountMin: 14400,
    amountMax: 28800,
    period: "yearly"
  }
];
