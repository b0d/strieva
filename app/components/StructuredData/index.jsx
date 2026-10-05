import { SITE_URL } from '@/lib/constants';

export default function StructuredData({ locale, messages = {} }) {
	const home = messages?.HomePage || {};
	const BASE_URL = SITE_URL;
	const localePath = locale === 'uk' ? '' : `/${locale}`;
	const pageUrl = `${BASE_URL}${localePath}`;

	// Структуровані дані для LodgingBusiness
	const lodgingBusinessSchema = {
		'@context': 'https://schema.org',
		'@type': 'LodgingBusiness',
		'@id': `${pageUrl}#lodging`,
		name: 'EcoHouse Strieva',
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
			latitude: 50.5198398,
			longitude: 27.6271339,
		},
		image: [
			`${BASE_URL}/imgs/rent-house-Strieva.webp`,
			`${BASE_URL}/imgs/first-screen.webp`,
			`${BASE_URL}/imgs/strieva-ecoHouse.webp`,
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
		occupancy: {
			'@type': 'QuantitativeValue',
			maxValue: 4,
			minValue: 2,
		},
		checkinTime: '15:00',
		checkoutTime: '11:00',
		paymentAccepted: 'Cash, Card',
		currenciesAccepted: 'UAH',
	};

	// Структуровані дані для FAQPage
	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: Array.from({ length: 10 }, (_, i) => {
			const q = messages?.questions?.[`q${i}`];
			const a = messages?.questions?.[`a${i}`];
			if (!q || !a) return null;
			return {
				'@type': 'Question',
				name: q,
				acceptedAnswer: {
					'@type': 'Answer',
					text: a,
				},
			};
		}).filter(Boolean),
	};

	// Структуровані дані для BreadcrumbList
	const breadcrumbSchema = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Home',
				item: BASE_URL,
			},
		],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingBusinessSchema) }}
			/>
			{faqSchema.mainEntity.length > 0 && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
				/>
			)}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>
		</>
	);
}


