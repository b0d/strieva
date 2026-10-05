const TELEGRAM_API_BASE = "https://api.telegram.org";
const MAX_BODY_BYTES = 2000;
const PHONE_PATTERN = /^[\d\s\-+()]+$/;

function isAllowedOrigin(origin, env) {
	return (env.ALLOWED_ORIGINS || "")
		.split(",")
		.map((item) => item.trim())
		.includes(origin);
}

function json(body, status, headers) {
	return new Response(JSON.stringify(body), {
		status,
		headers: { "Content-Type": "application/json", ...headers },
	});
}

function isValidPhone(tel) {
	const digits = tel.replace(/\D/g, "");
	return PHONE_PATTERN.test(tel) && digits.length >= 10 && digits.length <= 15;
}

async function sendTelegramMessage({ text, env }) {
	const response = await fetch(
		`${TELEGRAM_API_BASE}/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text }),
		},
	);

	if (!response.ok) {
		// Адресу запиту не логуємо: у ній токен бота
		throw new Error(
			`Telegram API responded with ${response.status}: ${await response.text()}`,
		);
	}
}

/**
 * Приймає номер телефону з форми сайту та пересилає його в Telegram.
 * Працює лише для запитів зі сторінок, перелічених в ALLOWED_ORIGINS.
 */
export default {
	async fetch(request, env) {
		const origin = request.headers.get("Origin") || "";
		const allowed = isAllowedOrigin(origin, env);
		const cors = allowed
			? {
					"Access-Control-Allow-Origin": origin,
					"Access-Control-Allow-Methods": "POST, OPTIONS",
					"Access-Control-Allow-Headers": "Content-Type",
					"Access-Control-Max-Age": "86400",
					Vary: "Origin",
				}
			: {};

		if (request.method === "OPTIONS") {
			return new Response(null, { status: allowed ? 204 : 403, headers: cors });
		}

		if (request.method !== "POST") {
			return json({ success: false, message: "Method not allowed" }, 405, cors);
		}

		if (!allowed) {
			return json({ success: false, message: "Origin not allowed" }, 403, cors);
		}

		const ip = request.headers.get("CF-Connecting-IP") || "unknown";
		const { success: withinLimit } = await env.LEAD_LIMITER.limit({ key: ip });
		if (!withinLimit) {
			return json({ success: false, message: "Too many requests" }, 429, cors);
		}

		const declaredLength = Number(request.headers.get("Content-Length"));
		if (!declaredLength || declaredLength > MAX_BODY_BYTES) {
			return json({ success: false, message: "Invalid payload size" }, 413, cors);
		}

		let payload = {};
		try {
			payload = JSON.parse(await request.text());
		} catch {
			return json({ success: false, message: "Invalid JSON payload" }, 400, cors);
		}

		const tel = String(payload?.tel || "").replace(/\s+/g, " ").trim();
		if (!isValidPhone(tel)) {
			return json({ success: false, message: "Phone number is invalid" }, 422, cors);
		}

		// Службові поля беремо лише у вузькому форматі, щоб у чат не потрапив довільний текст
		const locale = /^[a-z]{2}$/.test(payload.locale) ? payload.locale : "?";
		const location = /^[a-z]{1,20}$/.test(payload.location) ? payload.location : "?";

		try {
			await sendTelegramMessage({
				text: `Strieva: нова заявка з сайту\nТелефон: ${tel}\nМова: ${locale}, форма: ${location}`,
				env,
			});
			return json({ success: true }, 200, cors);
		} catch (error) {
			console.error(
				JSON.stringify({ message: "telegram relay failed", error: error.message }),
			);
			return json(
				{ success: false, message: "Failed to relay the request to Telegram" },
				502,
				cors,
			);
		}
	},
};
