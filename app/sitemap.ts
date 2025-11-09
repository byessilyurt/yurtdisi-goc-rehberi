import { MetadataRoute } from 'next';
import { MOCK_COUNTRIES } from '@/lib/real-data';
import { CATEGORY_LISTS } from '@/lib/real-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yurtdisi-goc-rehberi.vercel.app';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/oneriler`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Country pages
  const countryPages: MetadataRoute.Sitemap = MOCK_COUNTRIES.map((country) => ({
    url: `${baseUrl}/ulke/${country.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = CATEGORY_LISTS.map((category) => ({
    url: `${baseUrl}/kategori/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...countryPages, ...categoryPages];
}
