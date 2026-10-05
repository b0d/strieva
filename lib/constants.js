export const SUPPORTED_LOCALES = ['uk', 'en', 'ru'];
export const DEFAULT_LOCALE = 'uk';
export const SITE_URL = 'https://strieva.com';
export const SITE_NAME = 'EcoHouse Strieva';
export const BASE_PATH = process.env.NEXT_BASE_PATH?.trim() || '';

export const GA_ID = 'G-LQWCGN68EM';

export const OG_LOCALES = { uk: 'uk_UA', en: 'en_US', ru: 'ru_UA' };
export const OG_IMAGE = '/imgs/og-image.jpg';

export const GEO = { latitude: 50.5198398, longitude: 27.6271339 };

// Картка закладу в Google Maps, маршрут до нього та вбудована карта (без API-ключа)
export const MAPS_PLACE_URL =
	'https://www.google.com/maps/search/?api=1&query=Eco+House+Strieva';
export const MAPS_ROUTE_URL = `https://www.google.com/maps/dir/?api=1&destination=${GEO.latitude},${GEO.longitude}`;
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=Eco+House+Strieva&ll=${GEO.latitude},${GEO.longitude}&z=14&output=embed`;
export const GOOGLE_REVIEWS_URL = 'https://g.co/kgs/bCGmF1Y';

export const SOCIAL_LINKS = {
	tiktok: 'https://www.tiktok.com/@eco_house_strieva',
	youtube: 'https://www.youtube.com/@EcoHouse-Strieva',
	instagram: 'https://www.instagram.com/Eco_house_strieva',
	telegram: 'https://t.me/Eco_House_Strieva',
};

// Шлях мовної версії: українська живе в корені, решта — у підтеках
export function getLocalePath(locale) {
	return locale === DEFAULT_LOCALE ? '/' : `/${locale}/`;
}
