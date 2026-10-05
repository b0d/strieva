import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ViberAppIcon from "../Svg/viber";
import LanguageSwitcher from "../LanguageSwitcher";
import "./index.css";
import TopMenu from "../TopMenu";
import Image from "next/image";

export default function Header({ lng, messages = {} }) {
	const t = messages?.HomePage;
	const href = lng === "uk" || lng === "" ? "/" : `/${lng}`;

	return (
		<header className='d-flex flex-wrap justify-content-between p-3 align-items-center'>
			<div className='logo-header-block col-12 col-md-12 col-lg-2'>
				<a href={href} aria-label="Home">
					<Image
						src='/imgs/logo.webp'
						alt={t?.logoAlt || 'Strieva Eco House'}
						width={150}
						height={150}
						priority={true}
					/>
				</a>
			</div>

			<div className='col-12 col-md-12 col-lg-6'>
				<TopMenu lng={lng} messages={messages} />
			</div>

			<nav className='header-menu d-flex flex-wrap col-12 col-md-12 col-lg-4 col-xl-4'>
				<div className="col-12 col-lg-12 mb-2 d-flex flex-wrap flex-row align-items-center justify-content-center justify-content-xl-end">
					<LanguageSwitcher currentLocale={lng} />
				</div>
				<ul className='p-0 m-0 list-unstyled text-start'>
					<li>
						<a href='https://g.co/kgs/bCGmF1Y' aria-label="View on Google Maps">
							<RoomOutlinedIcon style={{ fontSize: 36 }} className='me-1' />
							{t.address || "Адреса"}
						</a>
					</li>
					<li>
						<a href='tel:+380970173737' aria-label="Call us" className="h3">
							<LocalPhoneOutlinedIcon
								style={{ fontSize: 36 }}
								className='me-2'
							/>
							<span>+38-097-017-37-37</span>
						</a>
					</li>
					<li>
						<a href='https://wa.me/380970173737' className='me-3' aria-label="WhatsApp">
							<WhatsAppIcon style={{ fontSize: 28 }} /> WhatsApp
						</a>
						<a href='https://t.me/Eco_House_Strieva' className='me-3' aria-label="Telegram">
							<TelegramIcon style={{ fontSize: 28 }} /> Telegram
						</a>
						<a href='viber://add?number=380970173737' aria-label="Viber">
							<ViberAppIcon style={{ fontSize: 28 }} /> Viber
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
