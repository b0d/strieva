import uk from '../locales/uk.json';
import { SITE_URL } from '@/lib/constants';
import { GoogleTagManager } from '@next/third-parties/google';

const defaultTitle = uk?.HomePage?.title || 'EcoHouse Strieva';
const defaultDescription =
	uk?.HomePage?.description ||
	'A-frame будинок EcoHouse Strieva для відпочинку біля озера.';

export const metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: defaultTitle,
		template: '%s | EcoHouse Strieva',
	},
	description: defaultDescription,
	alternates: {
		canonical: '/',
		languages: {
			uk: '/',
			en: '/en',
			ru: '/ru',
			'x-default': '/',
		},
	},
	manifest: '/site.webmanifest',
	icons: {
		icon: [
			{ url: '/favicon.ico' },
			{ url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
			{ url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
		],
		apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
		other: [{ rel: 'mask-icon', url: '/favicon.svg' }],
	},
	openGraph: {
		type: 'website',
		locale: 'uk_UA',
		url: SITE_URL,
		siteName: 'EcoHouse Strieva',
		title: defaultTitle,
		description: defaultDescription,
		images: [
			{
				url: `${SITE_URL}/imgs/first-screen.webp`,
				width: 1200,
				height: 630,
				alt: 'EcoHouse Strieva - A-frame будинок з закарпатським чаном',
			},
			{
				url: `${SITE_URL}/imgs/rent-house-Strieva.webp`,
				width: 1200,
				height: 630,
				alt: 'EcoHouse Strieva - Оренда будинку з чаном',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: defaultTitle,
		description: defaultDescription,
		images: [`${SITE_URL}/imgs/first-screen.webp`],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='uk'>
			<head>
				<link rel="preconnect" href="https://www.googletagmanager.com" />
				<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
				<link rel="preconnect" href="https://maps.googleapis.com" />
				<link rel="dns-prefetch" href="https://maps.googleapis.com" />
			</head>
			<body>{children}</body>
		</html>
	);
}
