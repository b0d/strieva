import uk from '@/locales/uk.json';
import en from '@/locales/en.json';
import ru from '@/locales/ru.json';
import { DEFAULT_LOCALE } from '@/lib/constants';

const messagesMap = { uk, en, ru };

export function getMessages(locale) {
	return messagesMap[locale] || messagesMap[DEFAULT_LOCALE];
}
