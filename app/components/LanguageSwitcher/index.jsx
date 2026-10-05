"use client";
import { usePathname } from 'next/navigation';
import { SUPPORTED_LOCALES } from '@/lib/constants';
import './index.css';

const langNames = {
	uk: 'УКР',
	en: 'ENG',
	ru: 'РУС',
};

export default function LanguageSwitcher({ currentLocale }) {
	const pathname = usePathname();

	const getPathForLocale = (locale) => {
		const segments = pathname.split('/').filter(Boolean);
		const [maybeLocale, ...restSegments] = segments;
		const isLocalizedPath = SUPPORTED_LOCALES.includes(maybeLocale);
		const pureSegments = isLocalizedPath ? restSegments : segments;
		const purePath =
			pureSegments.length > 0 ? `/${pureSegments.join('/')}/` : '/';

		if (locale === 'uk') {
			return purePath;
		}

		const nextPath =
			pureSegments.length > 0
				? `/${locale}/${pureSegments.join('/')}/`
				: `/${locale}/`;

		return nextPath.replace(/\/{2,}/g, '/');
	};

	return (
		<nav className="language-switcher" aria-label="Select language">
			<ul>
				{SUPPORTED_LOCALES.map((locale) => {
					const isActive = currentLocale === locale;
					const href = getPathForLocale(locale);

					return (
						<li key={locale}>
							<a
								href={href}
								className={`lang-link ${isActive ? 'active' : ''}`}
								aria-current={isActive ? 'page' : undefined}
								aria-label={`Switch to ${langNames[locale]} language`}
							>
								<span>{langNames[locale]}</span>
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}