import LocalePageContent from './components/LocalePageContent';
import uk from '../locales/uk.json';
import { SITE_URL } from '@/lib/constants';
import './[locale]/global.css';

export function generateMetadata() {
	const t = uk?.HomePage || {};

	return {
		title: t.title,
		description: t.description,
		alternates: {
			canonical: '/',
			languages: {
				uk: '/',
				en: '/en',
				ru: '/ru',
				'x-default': '/',
			},
		},
		openGraph: {
			title: t.title,
			description: t.description,
			images: [
				{
					url: `${SITE_URL}/imgs/first-screen.webp`,
					width: 1200,
					height: 630,
					alt: 'EcoHouse Strieva - A-frame будинок з закарпатським чаном',
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: t.title,
			description: t.description,
			images: [`${SITE_URL}/imgs/first-screen.webp`],
		},
	};
}

export default function RootPage() {
	return <LocalePageContent locale='uk' messages={uk} />;
}
