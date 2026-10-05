import { PHASE_PRODUCTION_BUILD } from "next/constants.js";

const rawBasePath = process.env.NEXT_BASE_PATH?.trim() || "";
const normalizedBasePath =
	rawBasePath && rawBasePath !== "/" ? rawBasePath : "";
const hasBasePath = Boolean(normalizedBasePath);
const trailingSlash = true;

export default function nextConfig(phase) {
	// Без цієї змінної форма заявки збирається неробочою (так сайт провисів з 01.2026)
	if (
		phase === PHASE_PRODUCTION_BUILD &&
		!process.env.NEXT_PUBLIC_TELEGRAM_FUNCTION_URL?.trim()
	) {
		throw new Error(
			"NEXT_PUBLIC_TELEGRAM_FUNCTION_URL is not set: the lead form would not work. Add it to .env.local (see README).",
		);
	}

	return {
		output: "export",
		reactStrictMode: true,
		trailingSlash,
		basePath: hasBasePath ? normalizedBasePath : undefined,
		assetPrefix: hasBasePath ? `${normalizedBasePath}/` : undefined,
		images: {
			unoptimized: true,
		},
	};
}
