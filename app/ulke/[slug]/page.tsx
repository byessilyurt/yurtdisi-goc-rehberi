import { EnhancedCountryDetail } from '@/components/enhanced-country-detail';
import { getAllCountries } from '@/lib/emigration-data';

export function generateStaticParams() {
  const countries = getAllCountries();
  return countries.map((country) => ({
    slug: country.slug,
  }));
}

export default async function CountryDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  return <EnhancedCountryDetail countrySlug={slug} />;
}
