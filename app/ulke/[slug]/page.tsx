import { EnhancedCountryDetail } from '@/components/enhanced-country-detail';
import { getAllCountries } from '@/lib/emigration-data';

export function generateStaticParams() {
  const countries = getAllCountries();
  return countries.map((country) => ({
    slug: country.slug,
  }));
}

export default function CountryDetailPage({ params }: { params: { slug: string } }) {
  return <EnhancedCountryDetail countrySlug={params.slug} />;
}
