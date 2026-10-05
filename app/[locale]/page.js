import { notFound } from 'next/navigation';
import uk from '../../locales/uk.json';
import en from '../../locales/en.json';
import ru from '../../locales/ru.json';
import LocalePageContent from '../components/LocalePageContent';
import { SUPPORTED_LOCALES, SITE_URL } from '@/lib/constants';
import './global.css';

const messagesMap = { uk, en, ru };

export function generateStaticParams() {
	return SUPPORTED_LOCALES.filter(locale => locale !== 'uk').map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
	const resolvedParams = await params;
	const locale = resolvedParams?.locale;

	if (!SUPPORTED_LOCALES.includes(locale)) {
		notFound();
	}

	const t = (messagesMap[locale] || messagesMap.uk).HomePage;

	return {
		title: t.title,
		description: t.description,
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

export default async function LocalePage({ params }) {
	const resolvedParams = await params;
	const locale = resolvedParams?.locale;

	if (!SUPPORTED_LOCALES.includes(locale)) {
		notFound();
	}

	const messages = messagesMap[locale] || messagesMap.uk;

	return <LocalePageContent locale={locale} messages={messages} />;
}
