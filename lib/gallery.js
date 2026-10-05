// Фото галереї: шлях і справжні розміри файлів. Alt-тексти — у locales/*.json (imgs{i}alt).
const portrait = { width: 800, height: 1200 };
const landscape = { width: 800, height: 533 };

export const GALLERY_IMAGES = [
	...Array.from({ length: 15 }, (_, i) => ({
		src: `/imgs/Gallery/${i}.webp`,
		...portrait,
	})),
	...Array.from({ length: 4 }, (_, i) => ({
		src: `/imgs/Gallery/${i + 15}.webp`,
		...landscape,
	})),
];
