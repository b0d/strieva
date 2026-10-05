import {
	SUPPORTED_LOCALES,
	SITE_URL,
	SITE_NAME,
	OG_LOCALES,
	OG_IMAGE,
	getLocalePath,
} from '@/lib/constants';
import { getMessages } from '@/lib/messages';

const languages = {
	...Object.fromEntries(
		SUPPORTED_LOCALES.map((locale) => [locale, getLocalePath(locale)]),
	),
	'x-default': '/',
};

export function buildMetadata(locale) {
	const t = getMessages(locale).HomePage;
	const path = getLocalePath(locale);

	return {
		metadataBase: new URL(SITE_URL),
		title: t.title,
		description: t.description,
		alternates: {
			canonical: path,
			languages,
		},
		manifest: '/site.webmanifest',
		icons: {
			icon: [
				{ url: '/favicon.ico' },
				{ url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
				{ url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
			],
			apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
		},
		// openGraph не успадковується частинами, тому тут завжди повний набір полів
		openGraph: {
			type: 'website',
			url: path,
			siteName: SITE_NAME,
			locale: OG_LOCALES[locale],
			alternateLocale: SUPPORTED_LOCALES.filter((l) => l !== locale).map(
				(l) => OG_LOCALES[l],
			),
			title: t.title,
			description: t.description,
			images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: t.ogImageAlt }],
		},
		twitter: {
			card: 'summary_large_image',
			title: t.title,
			description: t.description,
			images: [OG_IMAGE],
		},
	};
}
