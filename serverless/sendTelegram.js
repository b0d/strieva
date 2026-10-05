const TELEGRAM_API_BASE = "https://api.telegram.org";

/**
 * Sends a sanitized phone number to Telegram using the Bot API.
 * @param {object} params
 * @param {string} params.tel
 * @param {string} params.botToken
 * @param {string|number} params.chatId
 */
async function sendTelegramMessage({ tel, botToken, chatId }) {
	if (!botToken || !chatId) {
		throw new Error("Telegram credentials are missing.");
	}

	const formattedTel = tel.replace(/\s+/g, " ").trim();
	const telegramUrl = `${TELEGRAM_API_BASE}/bot${botToken}/sendMessage`;

	const response = await fetch(telegramUrl, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			chat_id: chatId,
			text: `Стриева: новий запит з номером ${formattedTel}`,
		}),
	});

	if (!response.ok) {
		const errorBody = await response.text();
		throw new Error(
			`Telegram API responded with ${response.status}: ${errorBody}`,
		);
	}
}

/**
 * Generic serverless handler (Netlify / AWS Lambda signature).
 * Exported as CommonJS to maximise compatibility with edge runtimes.
 */
exports.handler = async function handler(event) {
	if (event.httpMethod && event.httpMethod !== "POST") {
		return {
			statusCode: 405,
			body: JSON.stringify({
				success: false,
				message: "Method not allowed",
			}),
		};
	}

	let payload = {};
	try {
		payload = JSON.parse(event.body || "{}");
	} catch {
		return {
			statusCode: 400,
			body: JSON.stringify({
				success: false,
				message: "Invalid JSON payload",
			}),
		};
	}

	const tel = (payload.tel || "").trim();

	if (!tel) {
		return {
			statusCode: 422,
			body: JSON.stringify({
				success: false,
				message: "Phone number is required",
			}),
		};
	}

	const botToken = process.env.TELEGRAM_BOT_TOKEN;
	const chatId = process.env.TELEGRAM_CHAT_ID;

	try {
		await sendTelegramMessage({ tel, botToken, chatId });
		return {
			statusCode: 200,
			body: JSON.stringify({ success: true }),
		};
	} catch (error) {
		console.error("Telegram function error:", error);
		return {
			statusCode: 502,
			body: JSON.stringify({
				success: false,
				message: "Failed to relay the request to Telegram",
			}),
		};
	}
};

exports.sendTelegramMessage = sendTelegramMessage;
