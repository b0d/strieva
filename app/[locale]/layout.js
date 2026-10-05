import { notFound } from 'next/navigation';
import SiteShell from '../components/SiteShell';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/lib/constants';

export const dynamicParams = false;

export function generateStaticParams() {
	return SUPPORTED_LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).map(
		(locale) => ({ locale }),
	);
}

export default async function LocaleLayout({ children, params }) {
	const { locale } = await params;

	if (!SUPPORTED_LOCALES.includes(locale)) {
		notFound();
	}

	return <SiteShell lang={locale}>{children}</SiteShell>;
}
