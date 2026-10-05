import {
	SITE_URL,
	SITE_NAME,
	OG_IMAGE,
	GEO,
	MAPS_PLACE_URL,
	SOCIAL_LINKS,
	getLocalePath,
} from '@/lib/constants';

export default function StructuredData({ locale, messages = {}, qa = [] }) {
	const home = messages?.HomePage || {};
	const pageUrl = `${SITE_URL}${getLocalePath(locale)}`;

	// Сайт і заклад мають однакові @id в усіх мовних версіях: це одна сутність
	const websiteSchema = {
		'@type': 'WebSite',
		'@id': `${SITE_URL}/#website`,
		url: `${SITE_URL}/`,
		name: SITE_NAME,
		inLanguage: locale,
	};

	const lodgingBusinessSchema = {
		'@type': 'LodgingBusiness',
		'@id': `${SITE_URL}/#lodging`,
		name: SITE_NAME,
		description: home.description || home.h2p1,
		url: pageUrl,
		telephone: '+380970173737',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'вулиця Перемоги, 37',
			addressLocality: 'Стриєва',
			addressRegion: 'Житомирська область',
			postalCode: '11777',
			addressCountry: 'UA',
		},
		geo: {
			'@type': 'GeoCoordinates',
			...GEO,
		},
		hasMap: MAPS_PLACE_URL,
		sameAs: Object.values(SOCIAL_LINKS),
		image: [
			`${SITE_URL}${OG_IMAGE}`,
			`${SITE_URL}/imgs/rent-house-Strieva.webp`,
			`${SITE_URL}/imgs/bg.webp`,
		],
		priceRange: '$$',
		amenityFeature: [
			{
				'@type': 'LocationFeatureSpecification',
				name: 'Hot Tub',
				value: true,
			},
			{
				'@type': 'LocationFeatureSpecification',
				name: 'WiFi',
				value: true,
			},
			{
				'@type': 'LocationFeatureSpecification',
				name: 'Parking',
				value: true,
			},
			{
				'@type': 'LocationFeatureSpecification',
				name: 'Kitchen',
				value: true,
			},
			{
				'@type': 'LocationFeatureSpecification',
				name: 'Air Conditioning',
				value: true,
			},
		],
		numberOfRooms: {
			'@type': 'QuantitativeValue',
			value: 1,
		},
		petsAllowed: true,
		checkinTime: '15:00',
		checkoutTime: '11:00',
		paymentAccepted: 'Cash, Card',
		currenciesAccepted: 'UAH',
	};

	// FAQ будується з того самого списку, що й видимий акордеон
	const faqSchema = {
		'@type': 'FAQPage',
		'@id': `${pageUrl}#faq`,
		inLanguage: locale,
		mainEntity: qa.map(({ question, answer }) => ({
			'@type': 'Question',
			name: question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: answer,
			},
		})),
	};

	const graph = {
		'@context': 'https://schema.org',
		'@graph': [
			websiteSchema,
			lodgingBusinessSchema,
			...(qa.length > 0 ? [faqSchema] : []),
		],
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(graph).replace(/</g, '\\u003c'),
			}}
		/>
	);
}
