// Mock data for the application
// This will be replaced with actual database queries later

export const MOCK_COUNTRIES = [
  {
    id: '1',
    slug: 'kanada',
    name: 'Kanada',
    flagEmoji: '🇨🇦',
    images: [
      'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200&h=600&fit=crop',
    ],
    description: 'Yüksek yaşam kalitesi, çok kültürlü toplum ve güçlü ekonomi ile öne çıkıyor.',
    popularityScore: 95,
    matchReasons: {
      student: 'Dünya çapında tanınan üniversiteler ve mezuniyet sonrası çalışma izni',
      it: 'Teknoloji sektöründe yüksek maaşlar ve Express Entry sistemi',
      healthcare: 'Sağlık profesyonellerine büyük talep ve hızlı göç süreci',
      default: 'Göçmenlere açık politikalar ve kolay uyum sağlama imkanı',
    },
  },
  {
    id: '2',
    slug: 'almanya',
    name: 'Almanya',
    flagEmoji: '🇩🇪',
    images: [
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=1200&h=600&fit=crop',
    ],
    description: 'Avrupa\'nın ekonomik lideri, ücretsiz eğitim ve güçlü iş imkanları.',
    popularityScore: 92,
    matchReasons: {
      student: 'Çoğu üniversitede ücretsiz eğitim ve kaliteli yaşam',
      engineer: 'Mühendislik ve otomotiv sektöründe mükemmel fırsatlar',
      healthcare: 'Sağlık sektöründe personel açığı ve iyi maaşlar',
      default: 'AB üyeliği sayesinde seyahat özgürlüğü ve güçlü ekonomi',
    },
  },
  {
    id: '3',
    slug: 'hollanda',
    name: 'Hollanda',
    flagEmoji: '🇳🇱',
    images: [
      'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=1200&h=600&fit=crop',
    ],
    description: 'İngilizce konuşan nüfus, yüksek yaşam kalitesi ve girişimcilik fırsatları.',
    popularityScore: 88,
    matchReasons: {
      student: 'İngilizce programlar ve uluslararası ortam',
      it: 'Startup ekosistemi ve teknoloji şirketleri',
      business: 'Girişimciler için özel vize programları',
      default: 'Dengeli iş-yaşam dengesi ve bisiklet dostu şehirler',
    },
  },
  {
    id: '4',
    slug: 'avustralya',
    name: 'Avustralya',
    flagEmoji: '🇦🇺',
    images: [
      'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&h=600&fit=crop',
    ],
    description: 'Güneşli iklim, yüksek maaşlar ve mükemmel yaşam kalitesi.',
    popularityScore: 85,
    matchReasons: {
      student: 'Yüksek kaliteli eğitim ve çalışma hakları',
      healthcare: 'Sağlık çalışanlarına acil ihtiyaç',
      trades: 'Usta meslek sahipleri için özel vize programları',
      default: 'Sıcak iklim ve açık hava yaşam tarzı',
    },
  },
  {
    id: '5',
    slug: 'ispanya',
    name: 'İspanya',
    flagEmoji: '🇪🇸',
    images: [
      'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1200&h=600&fit=crop',
    ],
    description: 'Sıcak iklim, düşük yaşam maliyeti ve rahat yaşam tarzı.',
    popularityScore: 82,
    matchReasons: {
      student: 'Uygun eğitim maliyetleri ve zengin kültür',
      remote_worker: 'Dijital göçebe vizesi ve güzel sahiller',
      retiree: 'Emekliler için özel vize ve düşük maliyetler',
      default: 'Akdeniz yaşam tarzı ve lezzetli mutfak',
    },
  },
  {
    id: '6',
    slug: 'portekiz',
    name: 'Portekiz',
    flagEmoji: '🇵🇹',
    images: [
      'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&h=600&fit=crop',
      'https://images.unsplash.com/photo-1562082508-ab05e08bfe99?w=1200&h=600&fit=crop',
    ],
    description: 'Uygun yaşam maliyeti, güvenli ortam ve Golden Visa programı.',
    popularityScore: 80,
    matchReasons: {
      student: 'Uygun fiyatlı eğitim ve güvenli şehirler',
      remote_worker: 'Dijital göçebeler için cazip ortam',
      investor: 'Golden Visa programı ile oturum hakkı',
      default: 'Rahat yaşam temposu ve sıcak insanlar',
    },
  },
];

export const MOCK_VISA_TYPES = {
  kanada: [
    {
      type: 'student',
      name: 'Öğrenci Vizesi',
      description: 'Kanada\'da lisans, yüksek lisans veya doktora yapmanız için.',
      processingTime: '4-12 hafta',
      estimatedCost: '5,000-15,000 TL',
      difficulty: 'Orta',
      demandLevel: 'Yüksek',
    },
    {
      type: 'work',
      name: 'Express Entry (Çalışma)',
      description: 'Nitelikli profesyoneller için puan bazlı göç sistemi.',
      processingTime: '6-12 ay',
      estimatedCost: '20,000-40,000 TL',
      difficulty: 'Orta-Zor',
      demandLevel: 'Çok Yüksek',
    },
  ],
  almanya: [
    {
      type: 'student',
      name: 'Öğrenci Vizesi',
      description: 'Almanya\'da ücretsiz üniversite eğitimi almanız için.',
      processingTime: '6-12 hafta',
      estimatedCost: '3,000-8,000 TL',
      difficulty: 'Kolay-Orta',
      demandLevel: 'Yüksek',
    },
    {
      type: 'work',
      name: 'AB Mavi Kart',
      description: 'Yüksek nitelikli profesyoneller için çalışma ve oturum izni.',
      processingTime: '2-4 ay',
      estimatedCost: '10,000-25,000 TL',
      difficulty: 'Orta',
      demandLevel: 'Çok Yüksek',
    },
  ],
};

export const CATEGORY_LISTS = [
  {
    id: '1',
    slug: 'ogrenciler',
    title: 'Öğrenciler İçin En İyi Ülkeler',
    description: 'Kaliteli eğitim, uygun maliyetler ve mezuniyet sonrası fırsatlar',
    icon: '🎓',
    countries: ['kanada', 'almanya', 'hollanda'],
  },
  {
    id: '2',
    slug: 'it-profesyonelleri',
    title: 'IT Profesyonelleri İçin',
    description: 'Yüksek maaşlar, startup ekosistemi ve teknoloji fırsatları',
    icon: '💻',
    countries: ['kanada', 'hollanda', 'almanya'],
  },
  {
    id: '3',
    slug: 'saglik-calisanlari',
    title: 'Sağlık Çalışanları İçin',
    description: 'Yüksek talep, iyi maaşlar ve hızlı göç süreçleri',
    icon: '⚕️',
    countries: ['kanada', 'almanya', 'avustralya'],
  },
  {
    id: '4',
    slug: 'girisimciler',
    title: 'Girişimciler İçin',
    description: 'Startup ekosistemi ve girişimci vize programları',
    icon: '🚀',
    countries: ['hollanda', 'kanada', 'portekiz'],
  },
];

export const MOCK_REQUIREMENTS = {
  kanada_student: [
    { category: 'documents', title: 'Kabul Mektubu', description: 'Kanadalı bir eğitim kurumundan kabul mektubu', mandatory: true },
    { category: 'financial', title: 'Mali Yeterlilik', description: 'Yıllık en az 10,000 CAD gösterebilmeniz gerekiyor', mandatory: true },
    { category: 'language', title: 'İngilizce Belgesi', description: 'IELTS (min. 6.0) veya TOEFL', mandatory: true },
    { category: 'documents', title: 'Pasaport', description: 'En az 6 ay geçerli pasaport', mandatory: true },
  ],
  almanya_student: [
    { category: 'documents', title: 'Kabul Mektubu / Başvuru Belgesi', description: 'Almanya\'dan üniversite kabulü veya başvuru belgesi', mandatory: true },
    { category: 'financial', title: 'Bloke Hesap', description: '11,208 € yıllık yaşam masrafı için bloke hesap', mandatory: true },
    { category: 'language', title: 'Dil Belgesi', description: 'Almanca (TestDaF/DSH) veya İngilizce (IELTS/TOEFL)', mandatory: true },
    { category: 'documents', title: 'Sağlık Sigortası', description: 'Almanya\'da geçerli sağlık sigortası', mandatory: true },
  ],
};

export const MOCK_RESOURCES = {
  kanada: {
    student: [
      { title: 'EduCanada', url: 'https://educanada.ca', description: 'Resmi Kanada eğitim portalı' },
      { title: 'Study Permit Başvuru', url: 'https://ircc.gc.ca', description: 'Resmi göçmenlik başvuru sitesi' },
    ],
    job_search: [
      { title: 'Indeed Canada', url: 'https://indeed.ca', description: 'İş arama platformu' },
      { title: 'Job Bank', url: 'https://jobbank.gc.ca', description: 'Resmi devlet iş sitesi' },
    ],
  },
  almanya: {
    student: [
      { title: 'DAAD', url: 'https://daad.de', description: 'Alman Akademik Değişim Servisi' },
      { title: 'Uni-Assist', url: 'https://uni-assist.de', description: 'Üniversite başvuru platformu' },
    ],
    job_search: [
      { title: 'Make it in Germany', url: 'https://make-it-in-germany.com', description: 'Resmi iş bulma portalı' },
      { title: 'StepStone', url: 'https://stepstone.de', description: 'İş arama platformu' },
    ],
  },
};
