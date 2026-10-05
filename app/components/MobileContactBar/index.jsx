import "./index.css";
import { PhoneIcon, TelegramIcon, WhatsAppIcon } from "../Svg/icons";
import ViberAppIcon from "../Svg/viber";
import { SOCIAL_LINKS } from "@/lib/constants";

// Закріплена внизу панель швидкого зв'язку: на телефонах і планшетах замінює контакти з шапки
export default function MobileContactBar({ messages = {} }) {
	const t = messages?.HomePage || {};

	return (
		<nav className='mobile-contact-bar' aria-label={t.quickContactLabel}>
			<a href='tel:+380970173737' className='mobile-contact-bar__call'>
				<PhoneIcon />
				{t.callLabel}
			</a>
			<a href={SOCIAL_LINKS.telegram}>
				<TelegramIcon />
				Telegram
			</a>
			<a href='viber://chat?number=%2B380970173737'>
				<ViberAppIcon fill='currentColor' />
				Viber
			</a>
			<a href='https://wa.me/380970173737'>
				<WhatsAppIcon />
				WhatsApp
			</a>
		</nav>
	);
}
