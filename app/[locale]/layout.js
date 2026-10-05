import { notFound } from 'next/navigation';
import { GoogleAnalytics } from '@next/third-parties/google';
import { SUPPORTED_LOCALES, SITE_URL } from '@/lib/constants';

export function generateStaticParams() {
	return SUPPORTED_LOCALES.filter(locale => locale !== 'uk').map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
	const resolvedParams = await params;
	const locale = resolvedParams?.locale;

	if (!SUPPORTED_LOCALES.includes(locale)) {
		notFound();
	}

	return {
		metadataBase: new URL(SITE_URL),
		alternates: {
			canonical: `/${locale}`,
			languages: {
				uk: '/',
				en: '/en',
				ru: '/ru',
				'x-default': '/',
			},
		},
	};
}

export default async function LocaleLayout({ children, params }) {
	const resolvedParams = await params;
	const locale = resolvedParams?.locale;

	if (!SUPPORTED_LOCALES.includes(locale)) {
		notFound();
	}

	return (
		<>
			<GoogleAnalytics gaId='G-LQWCGN68EM' />
			{children}
		</>
	);
}
