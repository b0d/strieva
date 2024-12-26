export async function POST(req) {
	try {
		const { tel } = await req.json();

		// Ваш Telegram Bot Token и chat_id
		const botToken = process.env.TELEGRAM_BOT_TOKEN;
		const chatId = process.env.TELEGRAM_CHAT_ID;

		// Текст сообщения
		const text = `Сайт: "Strieva" 
      Телефон: ${tel}`;

		// URL для отправки запроса к Telegram API
		const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

		// Запрос к Telegram API
		const telegramResponse = await fetch(telegramUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				chat_id: chatId,
				text: text,
			}),
		});

		// Проверка на успешность запроса
		if (!telegramResponse.ok) {
			throw new Error("Помилка при відправці повідомлення в Telegram");
		}

		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		console.error("Помилка відправки повідомлення:", error);
		return new Response(
			JSON.stringify({ success: false, error: error.message }),
			{
				status: 500,
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	}
}
