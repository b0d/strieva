import { GoogleAnalytics } from '@next/third-parties/google';
import { GA_ID } from '@/lib/constants';
import ContactClickTracker from './ContactClickTracker';
import '../global.css';

// Спільна обгортка для обох кореневих layout-ів: відрізняється лише мова документа
export default function SiteShell({ lang, children }) {
	return (
		<html lang={lang}>
			<head>
				{/* Шрифти навмисно не передзавантажуються: на повільному мобільному інтернеті
				    вони відбирають канал у CSS і перший текст з'являється на ~0,5 с пізніше */}
				<link
					rel='preload'
					as='image'
					href='/imgs/Gallery/0.webp'
					media='(max-width: 991.98px)'
					fetchPriority='high'
				/>
				<link
					rel='preload'
					as='image'
					href='/imgs/bg.webp'
					media='(min-width: 992px)'
					fetchPriority='high'
				/>
			</head>
			<body>
				{children}
				<ContactClickTracker />
				<GoogleAnalytics gaId={GA_ID} />
			</body>
		</html>
	);
}
