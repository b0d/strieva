import { notFound } from 'next/navigation';
import LocalePageContent from '../components/LocalePageContent';
import { SUPPORTED_LOCALES } from '@/lib/constants';
import { getMessages } from '@/lib/messages';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
	const { locale } = await params;

	if (!SUPPORTED_LOCALES.includes(locale)) {
		notFound();
	}

	return buildMetadata(locale);
}

export default async function LocalePage({ params }) {
	const { locale } = await params;

	if (!SUPPORTED_LOCALES.includes(locale)) {
		notFound();
	}

	return <LocalePageContent locale={locale} messages={getMessages(locale)} />;
}
