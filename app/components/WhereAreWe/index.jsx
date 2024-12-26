"use client";

import { usePathname } from "next/navigation";

export default function WhereAreWe({ currentLanguage }) {
	const pathname = usePathname(); // Отримуємо поточний шлях, наприклад: /vacancies
	const languages = ["en", "uk", "ru"]; // Підтримувані мови
	const defaultLocale = "uk"; // Локаль за замовчуванням
	const baseUrl = "https://strieva.com";

	// Генеруємо canonical URL
	const canonical = `${baseUrl}/${currentLanguage}${pathname.replace(
		`/${currentLanguage}`,
		""
	)}`;

	// Генеруємо hreflang для всіх мов, крім поточної
	const hreflangs = languages
		.filter((lang) => lang !== currentLanguage) // Виключаємо поточну мову
		.map((lang) => ({
			lang,
			url: `${baseUrl}/${lang}${pathname.replace(`/${currentLanguage}`, "")}`,
		}));

	return (
		<>
			{/* Canonical тег */}
			<link rel='canonical' href={canonical} />

			{/* Hreflang теги */}
			{hreflangs.map(({ lang, url }) => (
				<link key={lang} rel='alternate' hrefLang={lang} href={url} />
			))}

			{/* x-default: Вказуємо мову за замовчуванням */}
			<link
				rel='alternate'
				hrefLang='x-default'
				href={`${baseUrl}/${defaultLocale}${pathname.replace(
					`/${currentLanguage}`,
					""
				)}`}
			/>
		</>
	);
}
