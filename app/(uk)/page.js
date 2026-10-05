import LocalePageContent from '../components/LocalePageContent';
import { DEFAULT_LOCALE } from '@/lib/constants';
import { getMessages } from '@/lib/messages';
import { buildMetadata } from '@/lib/metadata';

export function generateMetadata() {
	return buildMetadata(DEFAULT_LOCALE);
}

export default function RootPage() {
	return (
		<LocalePageContent
			locale={DEFAULT_LOCALE}
			messages={getMessages(DEFAULT_LOCALE)}
		/>
	);
}
