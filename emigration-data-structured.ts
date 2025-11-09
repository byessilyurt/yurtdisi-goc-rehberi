// YAPILANDIRILMIŞ VERİ - TÜRK VATANDAŞLARI İÇİN GÖÇ REHBERİ
// 5 Ülke: ABD, Almanya, İrlanda, Polonya, Kanada
// Tüm tutarlar EUR (Euro) cinsinden - 2025 Ocak güncel verileri
// Dönüşüm oranları: 1 USD ≈ 0.91 EUR, 1 PLN ≈ 0.23 EUR, 1 CAD ≈ 0.68 EUR

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
    description: "Dünyanın en yüksek maaşlarını sunan teknoloji merkezi. STEM mezunları için 36 ay OPT çalışma izni. 350,000 kişilik Türk topluluğu ve Silicon Valley'de kariyer fırsatları. UYARI: 2025 Eylül'den itibaren H-1B vizesi €91,000 ek ücret gerektiriyor - öğrenci yolu öneriliyor.",
    popularityScore: 75
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
    description: "Avrupa'nın en güçlü ekonomisi ve 3-3.5 milyon kişilik Türk diasporası. ÜCRETSİZ üniversite eğitimi! EU Blue Card ile 21-33 ayda kalıcı oturum. YENİ 2024: Çifte vatandaşlık artık mümkün - Türk pasaportunuzu koruyabilirsiniz. Berlin, Münih, Frankfurt'ta güçlü iş piyasası.",
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
    description: "AB'nin tek İngilizce konuşan ülkesi. Google, Meta, Apple'ın Avrupa genel merkezleri. Critical Skills İzni ile 21 ayda kalıcı oturum. Dublin'de canlı teknoloji ekosistemi ve yüksek maaşlar.",
    popularityScore: 68
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
    description: "AB'ye en uygun maliyetli giriş! Varşova'da aylık €1,000-1,400 yaşam maliyeti. Üniversite yıllık €2,000-6,000, ÜCRETSİZ tıp programları. Öğrenci vizesi 15-30 günde! Decision 1/80 ile Türk vatandaşlarına özel iş güvenceleri. EU Blue Card ile 2 yılda kalıcı oturum.",
    popularityScore: 82
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
    description: "Dünyanın en şeffaf göç sistemi. Express Entry puan sistemiyle 6-8 ayda kalıcı oturum. Post-graduation 3 yıla kadar çalışma izni. Yüksek yaşam kalitesi ve çokkültürlü toplum. Toronto, Vancouver'da güçlü iş fırsatları.",
    popularityScore: 70
  }
];

export const visaTypes = [
  // ========================================
  // ABD VİZELERİ
  // ========================================
  {
    countrySlug: "abd",
    type: "student",
    name: "F-1 Öğrenci Vizesi",
    description: "STEM alanlarında 36 ay OPT çalışma izni! ABD üniversitelerinde lisans/yüksek lisans. Türk topluluğu desteği büyük şehirlerde. Green Card'a geçiş yolu. ÖNERİLEN: H-1B €91,000 ücret nedeniyle öğrenci yolu en güvenli seçenek.",
    minAge: 16,
    maxAge: null,
    educationLevel: ["lise", "universite", "yuksek_lisans"],
    professions: ["ogrenci"],
    processingTimeMin: 7,
    processingTimeMax: 90,
    estimatedCostMin: 487, // $535 * 0.91
    estimatedCostMax: 487,
    costCurrency: "EUR",
    demandLevel: "high",
    difficultyLevel: "medium",
    keyBenefits: [
      "STEM mezunları için 36 ay OPT (Optional Practical Training)",
      "Çalışarak tecrübe kazanma ve Green Card başvurusu yapma şansı",
      "Dünyanın en iyi üniversitelerine erişim",
      "NYC, LA, Chicago'da 350,000 kişilik Türk topluluğu desteği"
    ],
    estimatedTotalCost: {
      tuitionPerYear: "22,750-77,350 EUR (kamu-özel üniversite farkı)",
      livingCostPerYear: "13,650-31,850 EUR (şehre göre değişir)",
      healthInsurance: "1,365-2,275 EUR/yıl",
      note: "4 yıllık lisans toplam: €145,000-445,000"
    }
  },
  {
    countrySlug: "abd",
    type: "work",
    name: "H-1B Çalışma Vizesi",
    description: "⚠️ KRİTİK GÜNCELLEME 2025: Eylül 2025'ten itibaren yeni başvurular için €91,000 ek ücret! Yıllık 85,000 kişilik kura. Artık sadece çok büyük şirketler ve özel durumlar için uygun. ALTERNATİF: F-1→OPT→Doğrudan Green Card yolunu tercih edin.",
    minAge: 21,
    maxAge: null,
    educationLevel: ["universite", "yuksek_lisans", "doktora"],
    professions: [
      "yazilim_muhendisi",
      "veri_bilimci",
      "sistem_mimarı",
      "makine_muhendisi",
      "elektrik_muhendisi",
      "doktor",
      "hemsire"
    ],
    processingTimeMin: 60,
    processingTimeMax: 180,
    estimatedCostMin: 91000, // YENİ: €100,000 * 0.91 + normal ücretler
    estimatedCostMax: 97000,
    costCurrency: "EUR",
    demandLevel: "low", // Artık düşük, yeni ücret nedeniyle
    difficultyLevel: "very_hard",
    note: "EYLÜL 2025 GÜNCELLEMESİ: Başkanlık kararıyla €91,000 dilekçe ücreti eklendi. Pratik olarak artık uygulanabilir değil. L-1 veya O-1 vizelerini düşünün."
  },
  {
    countrySlug: "abd",
    type: "work",
    name: "L-1 Şirket İçi Transfer",
    description: "Çok uluslu şirkette 1+ yıl çalıştıktan sonra ABD ofisine transfer. KURA YOK, EK ÜCRET YOK! L-1A ile 7 yıl, EB-1C Green Card'a hızlı geçiş. H-1B alternatifinin en iyisi.",
    minAge: 21,
    maxAge: null,
    educationLevel: [],
    professions: ["yonetici", "uzman", "muhendis"],
    processingTimeMin: 60,
    processingTimeMax: 120,
    estimatedCostMin: 875, // $960 * 0.91
    estimatedCostMax: 4970, // $5,460 * 0.91
    costCurrency: "EUR",
    demandLevel: "high",
    difficultyLevel: "medium",
    note: "YENİ 2025: €228 vize bütünlük ücreti eklendi. Yine de H-1B'den çok daha uygun!"
  },
  {
    countrySlug: "abd",
    type: "work",
    name: "O-1 Olağanüstü Yetenek",
    description: "Alanınızda üst %1'desiniz? Ödüller, yayınlar, tanınma. KURA YOK, EK ÜCRET YOK! Araştırmacılar, teknoloji liderleri, sanatçılar için. Doğrudan EB-1A Green Card'a başvuru şansı.",
    minAge: 21,
    maxAge: null,
    educationLevel: ["universite", "yuksek_lisans", "doktora"],
    professions: ["arastirmaci", "profesör", "sanatci", "girisimci"],
    processingTimeMin: 90,
    processingTimeMax: 180,
    estimatedCostMin: 592, // $650 * 0.91
    estimatedCostMax: 2867, // $3,150 * 0.91
    costCurrency: "EUR",
    demandLevel: "medium",
    difficultyLevel: "hard",
    note: "Avukat ücreti €2,730-7,280 eklenebilir. Ancak işveren sponsorluğu gerekmeden self-petition EB-1A'ya geçiş mümkün."
  },
  {
    countrySlug: "abd",
    type: "business",
    name: "E-2 Türkiye Antlaşma Yatırımcısı",
    description: "Türkiye'nin özel antlaşması! €136,500-227,500 yatırımla 2 yıl vize, SINIRS YENILEME. İş kurma, aile getirme hakkı. Green Card'a geçiş yok ama uzun vadeli kalış mümkün.",
    minAge: 21,
    maxAge: null,
    educationLevel: [],
    professions: ["girisimci", "yatirimci"],
    processingTimeMin: 60,
    processingTimeMax: 150,
    estimatedCostMin: 141000, // $155,000 * 0.91
    estimatedCostMax: 150000,
    costCurrency: "EUR",
    demandLevel: "medium",
    difficultyLevel: "medium"
  },

  // ========================================
  // ALMANYA VİZELERİ
  // ========================================
  {
    countrySlug: "almanya",
    type: "student",
    name: "Öğrenci Vizesi (Studienbewerber/Studium)",
    description: "ÜCRETSİZ devlet üniversiteleri (Baden-Württemberg hariç €1,500/dönem)! Sadece €250-350 dönem katkı payı. 18 ay iş arama izni mezuniyet sonrası. Almanca veya İngilizce programlar. Bloke hesap: €11,904 (2025).",
    minAge: 16,
    maxAge: null,
    educationLevel: ["lise", "universite"],
    professions: ["ogrenci"],
    processingTimeMin: 42,
    processingTimeMax: 84,
    estimatedCostMin: 75, // Vize ücreti
    estimatedCostMax: 75,
    costCurrency: "EUR",
    demandLevel: "high",
    difficultyLevel: "medium",
    keyBenefits: [
      "ÜCRETSİZ eğitim (çoğu eyalette)",
      "18 ay iş arama izni mezuniyet sonrası",
      "Haftada 120 tam gün veya 240 yarım gün çalışma",
      "3.5 milyon Türk - en büyük diaspora desteği"
    ],
    estimatedTotalCost: {
      tuition: "€0-3,000/yıl (çoğu eyalette ücretsiz)",
      blockedAccount: "€11,904/yıl (zorunlu)",
      healthInsurance: "€110/ay (€1,320/yıl)",
      note: "Yıllık toplam: €13,000-16,000 (eğitim DAHİL!)"
    }
  },
  {
    countrySlug: "almanya",
    type: "work",
    name: "AB Mavi Kart (EU Blue Card)",
    description: "EN HIZLI kalıcı oturum yolu! €48,300/yıl (IT/mühendislik €43,760). C1 Almanca ile 21 ay, B1 ile 33 ayda PR. Aile birleşimi ANINDA. YENİ 2024: Dil şartı KALDIRILDI başvuru için!",
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
      "muhendis"
    ],
    processingTimeMin: 28,
    processingTimeMax: 42,
    estimatedCostMin: 140,
    estimatedCostMax: 140,
    costCurrency: "EUR",
    demandLevel: "high",
    difficultyLevel: "medium",
    keyBenefits: [
      "Dünyanın EN HIZLI PR yolu: 21-33 ay!",
      "Maaş eşiği: €48,300 (IT: €43,760)",
      "YENİ 2024: Başvuru için dil şartı yok",
      "YENİ 2024: Çifte vatandaşlık mümkün!"
    ],
    salaryThreshold2025: {
      general: "€48,300/yıl (€4,025/ay brüt)",
      shortage: "€43,759.80/yıl (IT, mühendislik, doktor)",
      note: "Türk vatandaşları için rekabetçi ve erişilebilir"
    }
  },
  {
    countrySlug: "almanya",
    type: "work",
    name: "Ausbildung Meslek Eğitimi",
    description: "MAAŞLI meslek eğitimi (2-3.5 yıl)! Hemşirelik, IT, bakım, mekanik. Aylık €850-1,300 ÜCRETLİ eğitim. B1 Almanca + lise diploması yeterli. Türk gençler için harika fırsat!",
    minAge: 18,
    maxAge: 35,
    educationLevel: ["lise"],
    professions: ["hemsire", "bakim_elemani", "teknisyen", "asci"],
    processingTimeMin: 42,
    processingTimeMax: 84,
    estimatedCostMin: 75,
    estimatedCostMax: 75,
    costCurrency: "EUR",
    demandLevel: "high",
    difficultyLevel: "medium",
    note: "Eğitim sırasında MAAŞ alırsınız! Kalıcı oturuma yol açar."
  },
  {
    countrySlug: "almanya",
    type: "work",
    name: "Fırsat Kartı (Chancenkarte)",
    description: "YENİ 2024 iş arama vizesi! Puan sistemi: eğitim, dil, tecrübe. 6-12 ay Almanya'da iş arama hakkı. Haftada 20 saat, deneme çalışması 2 hafta tam zamanlı. Üniversite mezunları için ideal.",
    minAge: 21,
    maxAge: null,
    educationLevel: ["universite", "yuksek_lisans", "doktora"],
    professions: [],
    processingTimeMin: 28,
    processingTimeMax: 56,
    estimatedCostMin: 80,
    estimatedCostMax: 80,
    costCurrency: "EUR",
    demandLevel: "high",
    difficultyLevel: "medium"
  },

  // ========================================
  // İRLANDA VİZELERİ
  // ========================================
  {
    countrySlug: "irlanda",
    type: "work",
    name: "Critical Skills Employment Permit",
    description: "Kritik beceri listesi işler için hızlı yol. €38,000+ (2025'te €44,000). 21 ay sonra Stamp 4 PR. Eş ANINDA çalışabilir. Google, Meta, Apple Avrupa merkezleri İrlanda'da!",
    minAge: 18,
    maxAge: null,
    educationLevel: ["universite", "yuksek_lisans", "doktora"],
    professions: [
      "yazilim_muhendisi",
      "siber_guvenlik",
      "veri_bilimci",
      "bulut_mimari",
      "doktor",
      "hemsire",
      "ebe",
      "elektrik_muhendisi"
    ],
    processingTimeMin: 30,
    processingTimeMax: 90,
    estimatedCostMin: 1000, // %90 geri ödenir
    estimatedCostMax: 1000,
    costCurrency: "EUR",
    demandLevel: "high",
    difficultyLevel: "easy"
  },
  {
    countrySlug: "irlanda",
    type: "student",
    name: "Öğrenci İzni (Stamp 2)",
    description: "İngilizce eğitim! Lisans sonrası 12 ay, master sonrası 24 ay çalışma (Stamp 1G). Dönem içi 20 saat, tatil 40 saat. Dublin'de teknoloji hub'ı.",
    minAge: 17,
    maxAge: null,
    educationLevel: ["lise", "universite"],
    professions: ["ogrenci"],
    processingTimeMin: 30,
    processingTimeMax: 60,
    estimatedCostMin: 300,
    estimatedCostMax: 300,
    costCurrency: "EUR",
    demandLevel: "high",
    difficultyLevel: "medium"
  },

  // ========================================
  // POLONYA VİZELERİ
  // ========================================
  {
    countrySlug: "polonya",
    type: "student",
    name: "Tip D Öğrenci Vizesi",
    description: "AB'nin EN UCUZ eğitimi! Yıllık €2,000-6,000 harç, TIP FAKÜLTESİ ÜCRETSİZ (kamu)! 15-30 günde vize sonucu. Haftada 20 saat çalışma. İngilizce programlar yaygın. Schengen gezme özgürlüğü.",
    minAge: 16,
    maxAge: null,
    educationLevel: ["lise", "universite"],
    professions: ["ogrenci"],
    processingTimeMin: 15,
    processingTimeMax: 30,
    estimatedCostMin: 62, // 270 PLN * 0.23
    estimatedCostMax: 99, // 430 PLN * 0.23
    costCurrency: "EUR",
    demandLevel: "high",
    difficultyLevel: "easy",
    keyBenefits: [
      "EN HIZLI vize: 15-30 gün!",
      "EN UCUZ eğitim: €2,000-6,000/yıl",
      "TIP ÜCRETSİZ: Kamu tıp fakülteleri",
      "Schengen seyahat özgürlüğü",
      "Yaşam maliyeti düşük: €1,000-1,400/ay"
    ],
    estimatedTotalCost: {
      tuitionPerYear: "€2,000-6,000 (tıp ücretsiz!)",
      livingCostPerMonth: "€1,000-1,400 (Varşova)",
      healthInsurance: "€13-69/ay",
      note: "Yıllık toplam: €14,000-23,000 (tıp: €12,000-17,000)"
    }
  },
  {
    countrySlug: "polonya",
    type: "work",
    name: "AB Mavi Kart (EU Blue Card)",
    description: "2025 maaş eşiği: €2,830/ay brüt (12,272 PLN). DİL ŞARTI YOK! 12 ay sözleşme yeterli. 2 yılda kalıcı oturum. Aile birleşimi hemen. Türk vatandaşlarına Decision 1/80 avantajı.",
    minAge: 18,
    maxAge: null,
    educationLevel: ["universite", "yuksek_lisans", "doktora"],
    professions: [
      "yazilim_muhendisi",
      "veri_bilimci",
      "muhendis",
      "doktor",
      "hemsire"
    ],
    processingTimeMin: 150,
    processingTimeMax: 540,
    estimatedCostMin: 240,
    estimatedCostMax: 350,
    costCurrency: "EUR",
    demandLevel: "high",
    difficultyLevel: "medium",
    salaryThreshold2025: {
      monthly: "€2,830 brüt (12,272 PLN)",
      annual: "€33,960 (147,264 PLN)",
      note: "AB'nin EN DÜŞÜK Blue Card eşiği! Türkler için erişilebilir."
    },
    turkishCitizenBonus: {
      decision1_80: "1 yıl çalışma sonrası sözleşme yenileme garantisi, 3 yıl sonrası sektörde işveren değiştirme özgürlüğü"
    }
  },
  {
    countrySlug: "polonya",
    type: "work",
    name: "Tip A Çalışma İzni",
    description: "Genel çalışma izni, işveren sponsorluğu ile. Maaş eşiği YOK! 1-6 ayda sonuçlanır. Decision 1/80 Türk vatandaşlarına özel güvenceler. Tüm sektörlerde geçerli.",
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
  // KANADA VİZELERİ
  // ========================================
  {
    countrySlug: "kanada",
    type: "skilled_worker",
    name: "Express Entry (Federal Skilled Worker)",
    description: "Puan bazlı sistem (CRS). 470-520+ puan gerekli (2024-2025). Dil (IELTS/CELPIP), eğitim, tecrübe puanlanır. 6-8 ay direkt kalıcı oturum! Şeffaf ve öngörülebilir sistem.",
    minAge: 18,
    maxAge: 45,
    educationLevel: ["lise", "universite", "yuksek_lisans", "doktora"],
    professions: [],
    processingTimeMin: 180,
    processingTimeMax: 240,
    estimatedCostMin: 1320, // CAD 1,940 * 0.68
    estimatedCostMax: 2040, // CAD 3,000 * 0.68
    costCurrency: "EUR",
    demandLevel: "high",
    difficultyLevel: "hard"
  },
  {
    countrySlug: "kanada",
    type: "student",
    name: "Öğrenci İzni (Study Permit)",
    description: "Kanada üniversitelerinde eğitim. Post-Graduation 8 ay-3 YIL çalışma izni! Express Entry'ye avantajlı geçiş. Yüksek yaşam kalitesi, güvenli şehirler.",
    minAge: 17,
    maxAge: null,
    educationLevel: ["lise", "universite"],
    professions: ["ogrenci"],
    processingTimeMin: 60,
    processingTimeMax: 120,
    estimatedCostMin: 102, // CAD 150 * 0.68
    estimatedCostMax: 102,
    costCurrency: "EUR",
    demandLevel: "high",
    difficultyLevel: "medium"
  }
];

export const requirements = [
  // ABD F-1 GEREKLİLİKLERİ
  {
    visaTypeCountry: "abd",
    visaTypeName: "F-1 Öğrenci Vizesi",
    category: "documents",
    title: "I-20 Formu",
    description: "SEVIS onaylı okuldan I-20 Certificate of Eligibility. EN ÖNEMLİ belge - bu olmadan başvuru yapılamaz!",
    isMandatory: true,
    personalizedFor: ["student"]
  },
  {
    visaTypeCountry: "abd",
    visaTypeName: "F-1 Öğrenci Vizesi",
    category: "financial",
    title: "SEVIS I-901 Ücreti",
    description: "€318 ($$350) SEVIS ücreti, vize görüşmesinden en az 3 gün önce ödenmeli. Makbuz zorunlu.",
    isMandatory: true,
    personalizedFor: ["student"]
  },
  {
    visaTypeCountry: "abd",
    visaTypeName: "F-1 Öğrenci Vizesi",
    category: "financial",
    title: "Mali Yeterlilik",
    description: "1 yıllık eğitim + yaşam masrafı kanıtı: €31,850-109,200 (okul ve şehre göre). Banka hesap özeti, sponsor mektubu veya burs belgesi.",
    isMandatory: true,
    personalizedFor: ["student"]
  },
  {
    visaTypeCountry: "abd",
    visaTypeName: "F-1 Öğrenci Vizesi",
    category: "language",
    title: "İngilizce Yeterlilik",
    description: "TOEFL iBT 60-100 veya IELTS 6.0-7.5 (üniversiteye göre). Bazı okullar Duolingo kabul eder (90-120).",
    isMandatory: true,
    personalizedFor: ["student"]
  },
  {
    visaTypeCountry: "abd",
    visaTypeName: "F-1 Öğrenci Vizesi",
    category: "documents",
    title: "DS-160 Formu",
    description: "Online vize başvuru formu, fotoğraf yüklemeli. Onay sayfası çıktısı görüşmeye getirilmeli.",
    isMandatory: true,
    personalizedFor: ["student"]
  },

  // ALMANYA ÖĞRENCİ GEREKLİLİKLERİ
  {
    visaTypeCountry: "almanya",
    visaTypeName: "Öğrenci Vizesi",
    category: "documents",
    title: "Kabul Mektubu veya Başvuru Belgesi (Zulassung/Bewerbung)",
    description: "Almanya'dan üniversite kabulü (Zulassung) veya koşullu kabul/başvuru belgesi (Bewerbung).",
    isMandatory: true,
    personalizedFor: ["student"]
  },
  {
    visaTypeCountry: "almanya",
    visaTypeName: "Öğrenci Vizesi",
    category: "financial",
    title: "Bloke Hesap (Sperrkonto)",
    description: "€11,904 (2025) yıllık yaşam masrafı için özel bloke hesap. Fintiba, Deutsche Bank veya Expatrio ile açılabilir.",
    isMandatory: true,
    personalizedFor: ["student"]
  },
  {
    visaTypeCountry: "almanya",
    visaTypeName: "Öğrenci Vizesi",
    category: "language",
    title: "Dil Belgesi",
    description: "Almanca programlar için TestDaF/DSH (B2-C1), İngilizce programlar için IELTS/TOEFL. Seviye program şartlarına göre değişir.",
    isMandatory: true,
    personalizedFor: ["student"]
  },
  {
    visaTypeCountry: "almanya",
    visaTypeName: "Öğrenci Vizesi",
    category: "documents",
    title: "Sağlık Sigortası",
    description: "Almanya'da geçerli sağlık sigortası sözleşmesi veya başlangıç sigortası. Aylık €110 civarı.",
    isMandatory: true,
    personalizedFor: ["student"]
  },

  // ALMANYA BLUE CARD GEREKLİLİKLERİ
  {
    visaTypeCountry: "almanya",
    visaTypeName: "AB Mavi Kart",
    category: "education",
    title: "Üniversite Diploması",
    description: "Türkiye'den tanınmış üniversite diploması veya denk diploma (Anabin veritabanında kontrol). Gerekirse denklik belgesi.",
    isMandatory: true,
    personalizedFor: ["it", "engineer", "healthcare"]
  },
  {
    visaTypeCountry: "almanya",
    visaTypeName: "AB Mavi Kart",
    category: "employment",
    title: "İş Sözleşmesi",
    description: "€48,300/yıl (IT/mühendislik €43,760) brüt maaşlı iş sözleşmesi. Tam zamanlı, belirsiz veya en az 12 ay süreli.",
    isMandatory: true,
    personalizedFor: ["it", "engineer", "healthcare"]
  },
  {
    visaTypeCountry: "almanya",
    visaTypeName: "AB Mavi Kart",
    category: "language",
    title: "Almanca Dil Belgesi",
    description: "YENİ 2024: BAŞVURU İÇİN ŞART DEĞİL! Ama PR için B1 (33 ay) veya C1 (21 ay) gerekli. Öğrenmeye erken başlayın!",
    isMandatory: false,
    personalizedFor: ["it", "engineer"]
  },

  // POLONYA ÖĞRENCİ GEREKLİLİKLERİ
  {
    visaTypeCountry: "polonya",
    visaTypeName: "Tip D Öğrenci Vizesi",
    category: "documents",
    title: "Kabul Mektubu",
    description: "Polonya üniversitesinden kabul mektubu. İngilizce programlar yaygın - Varşova, Kraków, Wrocław'da çok seçenek.",
    isMandatory: true,
    personalizedFor: ["student"]
  },
  {
    visaTypeCountry: "polonya",
    visaTypeName: "Tip D Öğrenci Vizesi",
    category: "financial",
    title: "Mali Yeterlilik",
    description: "Aylık ~€600 (2,600 PLN) yaşam masrafı kanıtı. Banka hesabı, sponsor mektubu veya burs belgesi.",
    isMandatory: true,
    personalizedFor: ["student"]
  },
  {
    visaTypeCountry: "polonya",
    visaTypeName: "Tip D Öğrenci Vizesi",
    category: "documents",
    title: "Sağlık Sigortası",
    description: "Polonya'da geçerli sağlık sigortası. NFZ kamu sigortası veya özel sigorta (€13-69/ay).",
    isMandatory: true,
    personalizedFor: ["student"]
  },
  {
    visaTypeCountry: "polonya",
    visaTypeName: "Tip D Öğrenci Vizesi",
    category: "documents",
    title: "Konaklama Belgesi",
    description: "Yurt rezervasyonu veya kira sözleşmesi. İlk dönem için yurt genelde €150-300/ay.",
    isMandatory: true,
    personalizedFor: ["student"]
  },

  // POLONYA BLUE CARD GEREKLİLİKLERİ
  {
    visaTypeCountry: "polonya",
    visaTypeName: "AB Mavi Kart",
    category: "education",
    title: "Yüksek Öğrenim Diploması",
    description: "En az 3 yıllık üniversite eğitimi diploması. Türkiye diplomaları genelde kabul edilir, denklik şart değil.",
    isMandatory: true,
    personalizedFor: ["it", "engineer", "healthcare"]
  },
  {
    visaTypeCountry: "polonya",
    visaTypeName: "AB Mavi Kart",
    category: "employment",
    title: "İş Sözleşmesi",
    description: "Aylık €2,830 brüt (12,272 PLN) maaşlı, en az 12 ay süreli iş sözleşmesi. AB'nin EN DÜŞÜK eşiği!",
    isMandatory: true,
    personalizedFor: ["it", "engineer"]
  },
  {
    visaTypeCountry: "polonya",
    visaTypeName: "AB Mavi Kart",
    category: "language",
    title: "Dil Belgesi",
    description: "DİL ŞARTI YOK! İngilizce bilen IT profesyonelleri için ideal. Lehçe öğrenmek uzun vadede faydalı.",
    isMandatory: false,
    personalizedFor: ["it", "engineer"]
  }
];

export const resources = [
  // ABD KAYNAKLARI
  {
    countrySlug: "abd",
    category: "student",
    title: "EducationUSA Türkiye",
    url: "https://www.taa-ankara.org.tr/en/taa-american-space/educationusa",
    description: "Resmi ABD eğitim danışmanlığı. ÜCRETSİZ seminerler ve başvuru desteği.",
    targetAudience: ["student"]
  },
  {
    countrySlug: "abd",
    category: "student",
    title: "SEVP Onaylı Okullar",
    url: "https://studyinthestates.dhs.gov/school-search",
    description: "F-1 vizesi için onaylı okulların resmi listesi. Mutlaka bu listeden seçin!",
    targetAudience: ["student"]
  },
  {
    countrySlug: "abd",
    category: "community",
    title: "ATAA - Türk Amerikan Dernekleri",
    url: "https://www.ataa.org/",
    description: "350,000 Türk Amerikalının çatı örgütü. Networking, mentorluk, kültürel etkinlikler.",
    targetAudience: ["all"]
  },
  {
    countrySlug: "abd",
    category: "job_search",
    title: "LinkedIn USA",
    url: "https://linkedin.com",
    description: "ABD'de iş bulmanın #1 yolu. Networking ABD'de çok kritik!",
    targetAudience: ["it", "engineer", "business"]
  },

  // ALMANYA KAYNAKLARI
  {
    countrySlug: "almanya",
    category: "student",
    title: "DAAD Türkiye",
    url: "https://www.daad.org.tr/",
    description: "Alman Akademik Değişim Servisi. Burs imkanları, üniversite arama, başvuru desteği.",
    targetAudience: ["student"]
  },
  {
    countrySlug: "almanya",
    category: "student",
    title: "Uni-Assist",
    url: "https://www.uni-assist.de/",
    description: "Merkezi üniversite başvuru platformu. Çoğu üniversite bu sistemden başvuru alır.",
    targetAudience: ["student"]
  },
  {
    countrySlug: "almanya",
    category: "job_search",
    title: "Make it in Germany",
    url: "https://www.make-it-in-germany.com/",
    description: "Resmi iş bulma ve göç portalı. Vize bilgileri, iş ilanları, yerleşim rehberi.",
    targetAudience: ["it", "engineer", "healthcare"]
  },
  {
    countrySlug: "almanya",
    category: "community",
    title: "TGD - Almanya Türk Toplumu",
    url: "https://tgd.de/",
    description: "3.5 milyon Türk'ün dernekleri. Berlin, Münih, Frankfurt'ta aktif topluluklar.",
    targetAudience: ["all"]
  },
  {
    countrySlug: "almanya",
    category: "job_search",
    title: "StepStone",
    url: "https://www.stepstone.de/",
    description: "Almanya'nın en büyük iş arama platformlarından. IT, mühendislik ilanları çok.",
    targetAudience: ["it", "engineer"]
  },

  // POLONYA KAYNAKLARI
  {
    countrySlug: "polonya",
    category: "student",
    title: "Study in Poland",
    url: "https://www.studyinpoland.pl/",
    description: "Resmi eğitim portalı. İngilizce programlar, başvuru süreci, burs fırsatları.",
    targetAudience: ["student"]
  },
  {
    countrySlug: "polonya",
    category: "student",
    title: "POL-on Başvuru Sistemi",
    url: "https://www.polon.nauka.gov.pl/",
    description: "Merkezi üniversite başvuru sistemi. Birçok üniversiteye tek başvuruyla ulaşın.",
    targetAudience: ["student"]
  },
  {
    countrySlug: "polonya",
    category: "job_search",
    title: "Pracuj.pl",
    url: "https://www.pracuj.pl/",
    description: "Polonya'nın en büyük iş sitesi. İngilizce filtresi var, IT ilanları çok.",
    targetAudience: ["it", "engineer"]
  },
  {
    countrySlug: "polonya",
    category: "community",
    title: "Türkler Polonya Facebook Grupları",
    url: "https://www.facebook.com/groups/turklervarsova",
    description: "Varşova, Kraków'da aktif Türk grupları. Pratik bilgi paylaşımı, arkadaş bulma.",
    targetAudience: ["all"]
  },
  {
    countrySlug: "polonya",
    category: "housing",
    title: "Otodom.pl",
    url: "https://www.otodom.pl/",
    description: "Polonya'nın en büyük emlak sitesi. Kiralık daire araması, fiyat karşılaştırma.",
    targetAudience: ["all"]
  },

  // İRLANDA KAYNAKLARI
  {
    countrySlug: "irlanda",
    category: "job_search",
    title: "IrishJobs.ie",
    url: "https://www.irishjobs.ie/",
    description: "İrlanda'nın lider iş sitesi. Teknoloji, sağlık, mühendislik ilanları.",
    targetAudience: ["it", "engineer", "healthcare"]
  },
  {
    countrySlug: "irlanda",
    category: "student",
    title: "Educationin Ireland",
    url: "https://www.educationinireland.com/",
    description: "Resmi eğitim portalı. Üniversite arama, burs fırsatları, başvuru rehberi.",
    targetAudience: ["student"]
  },

  // KANADA KAYNAKLARI
  {
    countrySlug: "kanada",
    category: "skilled_worker",
    title: "IRCC Resmi Portal",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
    description: "Kanada Göçmenlik resmi sitesi. Express Entry, puan hesaplama, başvuru takibi.",
    targetAudience: ["it", "engineer", "healthcare"]
  },
  {
    countrySlug: "kanada",
    category: "student",
    title: "EduCanada",
    url: "https://www.educanada.ca/",
    description: "Resmi Kanada eğitim portalı. Üniversite arama, burs, öğrenci vizesi bilgileri.",
    targetAudience: ["student"]
  },
  {
    countrySlug: "kanada",
    category: "job_search",
    title: "Job Bank Canada",
    url: "https://www.jobbank.gc.ca/",
    description: "Devlet iş sitesi. Maaş bilgileri, meslek talepleri, Express Entry için puan artırır.",
    targetAudience: ["it", "engineer"]
  }
];

export const costs = [
  // ABD MALİYETLERİ
  {
    countrySlug: "abd",
    category: "education",
    subcategory: "tuition",
    itemName: "Devlet Üniversitesi (Eyalet Dışı)",
    minCost: 22750, // $25,000 * 0.91
    maxCost: 45500, // $50,000 * 0.91
    currency: "EUR",
    frequency: "yearly",
    notes: "Uluslararası öğrenciler eyalet dışı ücreti öder. Texas, Florida nispeten ucuz.",
    targetAudience: ["student"]
  },
  {
    countrySlug: "abd",
    category: "education",
    subcategory: "tuition",
    itemName: "Özel Üniversite",
    minCost: 27300, // $30,000 * 0.91
    maxCost: 77350, // $85,000 * 0.91
    currency: "EUR",
    frequency: "yearly",
    notes: "Harvard, MIT, Stanford gibi top okullar €55,000-77,000/yıl",
    targetAudience: ["student"]
  },
  {
    countrySlug: "abd",
    category: "living",
    subcategory: "rent",
    itemName: "New York 1BR (Merkez)",
    minCost: 3185, // $3,500 * 0.91
    maxCost: 4550, // $5,000 * 0.91
    currency: "EUR",
    frequency: "monthly",
    notes: "En büyük Türk topluluğu (75,000-85,000) ama en pahalı şehir",
    targetAudience: ["all"]
  },
  {
    countrySlug: "abd",
    category: "living",
    subcategory: "rent",
    itemName: "Houston 1BR (Merkez)",
    minCost: 1092, // $1,200 * 0.91
    maxCost: 1638, // $1,800 * 0.91
    currency: "EUR",
    frequency: "monthly",
    notes: "20,000+ Türk, eyalet vergisi YOK, çok daha uygun fiyatlı",
    targetAudience: ["all"]
  },
  {
    countrySlug: "abd",
    category: "living",
    subcategory: "health_insurance",
    itemName: "Öğrenci Sağlık Sigortası",
    minCost: 1365, // $1,500 * 0.91
    maxCost: 2275, // $2,500 * 0.91
    currency: "EUR",
    frequency: "yearly",
    notes: "ZORUNLU! Sigortasız kalmak çok riskli - acil servis €910-9,100 olabilir",
    targetAudience: ["student"]
  },

  // ALMANYA MALİYETLERİ
  {
    countrySlug: "almanya",
    category: "education",
    subcategory: "tuition",
    itemName: "Devlet Üniversitesi",
    minCost: 0,
    maxCost: 0,
    currency: "EUR",
    frequency: "yearly",
    notes: "ÜCRETSİZ! Sadece €250-350 dönem katkı payı. Baden-Württemberg istisna (€1,500/dönem).",
    targetAudience: ["student"]
  },
  {
    countrySlug: "almanya",
    category: "education",
    subcategory: "semester_fee",
    itemName: "Dönem Katkı Payı",
    minCost: 250,
    maxCost: 350,
    currency: "EUR",
    frequency: "semester",
    notes: "Toplu taşıma kartı DAHİL! 6 ay sınırsız ulaşım.",
    targetAudience: ["student"]
  },
  {
    countrySlug: "almanya",
    category: "living",
    subcategory: "blocked_account",
    itemName: "Bloke Hesap (Sperrkonto)",
    minCost: 11904,
    maxCost: 11904,
    currency: "EUR",
    frequency: "yearly",
    notes: "2025 zorunlu tutarı. Aylık €992 çekilebilir. Yaşam masrafı kanıtı.",
    targetAudience: ["student"]
  },
  {
    countrySlug: "almanya",
    category: "living",
    subcategory: "rent",
    itemName: "Münih 1BR (Merkez)",
    minCost: 1000,
    maxCost: 1500,
    currency: "EUR",
    frequency: "monthly",
    notes: "En pahalı şehir. Berlin, Leipzig daha ucuz (€600-900)",
    targetAudience: ["all"]
  },
  {
    countrySlug: "almanya",
    category: "living",
    subcategory: "health_insurance",
    itemName: "Kamu Sağlık Sigortası (Öğrenci)",
    minCost: 110,
    maxCost: 110,
    currency: "EUR",
    frequency: "monthly",
    notes: "30 yaş altı öğrenciler için. Kapsamlı kapsam, Türkiye'den çok iyi.",
    targetAudience: ["student"]
  },

  // POLONYA MALİYETLERİ
  {
    countrySlug: "polonya",
    category: "education",
    subcategory: "tuition",
    itemName: "Devlet Üniversitesi (İngilizce Program)",
    minCost: 2000,
    maxCost: 6000,
    currency: "EUR",
    frequency: "yearly",
    notes: "AB'nin EN UCUZ eğitimi! Business/IT €2,000-3,500, Mühendislik €3,000-4,500",
    targetAudience: ["student"]
  },
  {
    countrySlug: "polonya",
    category: "education",
    subcategory: "tuition",
    itemName: "Tıp Fakültesi (Devlet, İngilizce)",
    minCost: 0,
    maxCost: 0,
    currency: "EUR",
    frequency: "yearly",
    notes: "KAMU TIP ÜCRETSİZ! Özel tıp fakülteleri €10,000-15,000/yıl ama kamu seçeneği var.",
    targetAudience: ["student"]
  },
  {
    countrySlug: "polonya",
    category: "living",
    subcategory: "rent",
    itemName: "Varşova 1BR (Merkez)",
    minCost: 600,
    maxCost: 900,
    currency: "EUR",
    frequency: "monthly",
    notes: "Başkent bile uygun fiyatlı! Kraków, Wrocław benzer.",
    targetAudience: ["all"]
  },
  {
    countrySlug: "polonya",
    category: "living",
    subcategory: "total_monthly",
    itemName: "Aylık Toplam Yaşam Maliyeti (Öğrenci)",
    minCost: 1000,
    maxCost: 1400,
    currency: "EUR",
    frequency: "monthly",
    notes: "Kira, yemek, ulaşım, eğlence DAHİL. AB'nin EN UCUZ yaşam maliyeti!",
    targetAudience: ["student"]
  },
  {
    countrySlug: "polonya",
    category: "living",
    subcategory: "health_insurance",
    itemName: "NFZ Kamu Sigortası (Öğrenci)",
    minCost: 13,
    maxCost: 13,
    currency: "EUR",
    frequency: "monthly",
    notes: "60 PLN/ay öğrenciler için. Kapsamlı kamu sağlık hizmetleri.",
    targetAudience: ["student"]
  },

  // İRLANDA MALİYETLERİ
  {
    countrySlug: "irlanda",
    category: "education",
    subcategory: "tuition",
    itemName: "Üniversite (Uluslararası Öğrenci)",
    minCost: 10000,
    maxCost: 25000,
    currency: "EUR",
    frequency: "yearly",
    notes: "İngilizce eğitim avantajı. Dublin'de teknoloji hub'ı.",
    targetAudience: ["student"]
  },
  {
    countrySlug: "irlanda",
    category: "living",
    subcategory: "rent",
    itemName: "Dublin 1BR (Merkez)",
    minCost: 1500,
    maxCost: 2200,
    currency: "EUR",
    frequency: "monthly",
    notes: "Pahalı ama maaşlar da yüksek. Cork, Galway daha ucuz.",
    targetAudience: ["all"]
  },

  // KANADA MALİYETLERİ
  {
    countrySlug: "kanada",
    category: "education",
    subcategory: "tuition",
    itemName: "Üniversite (Uluslararası Öğrenci)",
    minCost: 13600, // CAD 20,000 * 0.68
    maxCost: 27200, // CAD 40,000 * 0.68
    currency: "EUR",
    frequency: "yearly",
    notes: "3 yıla kadar PGWP çalışma izni - büyük avantaj!",
    targetAudience: ["student"]
  },
  {
    countrySlug: "kanada",
    category: "living",
    subcategory: "rent",
    itemName: "Toronto 1BR (Merkez)",
    minCost: 1360, // CAD 2,000 * 0.68
    maxCost: 2040, // CAD 3,000 * 0.68
    currency: "EUR",
    frequency: "monthly",
    notes: "En pahalı şehir. Calgary, Winnipeg çok daha ucuz.",
    targetAudience: ["all"]
  }
];
