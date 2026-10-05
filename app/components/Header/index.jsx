import {
	PhoneIcon,
	RoomIcon,
	TelegramIcon,
	WhatsAppIcon,
} from "../Svg/icons";
import ViberAppIcon from "../Svg/viber";
import LanguageSwitcher from "../LanguageSwitcher";
import "./index.css";
import TopMenu from "../TopMenu";
import Image from "next/image";
import { MAPS_PLACE_URL, SOCIAL_LINKS, getLocalePath } from "@/lib/constants";

export default function Header({ lng, messages = {} }) {
	const t = messages?.HomePage;

	return (
		<header>
			<div className='logo-header-block'>
				<a href={getLocalePath(lng)}>
					<Image
						src='/imgs/logo.webp'
						alt={t?.logoAlt || 'EcoHouse Strieva'}
						width={150}
						height={150}
						priority={true}
					/>
				</a>
			</div>

			<TopMenu lng={lng} messages={messages} />

			{/* На телефоні з цього блоку видно лише перемикач мов: контакти там у нижній панелі */}
			<nav className='header-menu' aria-label={t.contactsLabel}>
				<div className='header-menu__main'>
					<a href='tel:+380970173737' className='header-phone'>
						<PhoneIcon className='me-2' />
						<span>+38-097-017-37-37</span>
					</a>
					<LanguageSwitcher currentLocale={lng} />
				</div>
				<ul className='header-menu__links list-unstyled'>
					<li>
						<a href={MAPS_PLACE_URL}>
							<RoomIcon />
							{t.address || "Адреса"}
						</a>
					</li>
					<li>
						<a href='https://wa.me/380970173737'>
							<WhatsAppIcon /> WhatsApp
						</a>
					</li>
					<li>
						<a href={SOCIAL_LINKS.telegram}>
							<TelegramIcon /> Telegram
						</a>
					</li>
					<li>
						<a href='viber://chat?number=%2B380970173737'>
							<ViberAppIcon /> Viber
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
