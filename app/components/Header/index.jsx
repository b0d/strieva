import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ViberAppIcon from "../Svg/viber";
import { getTranslations } from "next-intl/server";
import "./index.css";
import TopMenu from "../TopMenu";
import Image from "next/image";
export default async function Header({ lng }) {
	const t = await getTranslations({ lng });
	return (
		<header className='d-flex flex-wrap justify-content-between p-3 align-items-center'>
			<div className='logo-header-block col-12 col-md-12 col-lg-2'>
				<a href={lng}>
					<Image
						src='/imgs/logo.webp'
						alt='strieva.com'
						width={150}
						height={150}
						priority={true}
					/>
				</a>
			</div>
			<div className='col-12 col-md-12 col-lg-6'>
				<TopMenu lng={lng} />
			</div>
			<nav className='header-menu d-flex flex-wrap col-12 col-md-12 col-lg-4 col-xl-4'>
				<ul className='p-0 m-0 list-unstyled text-start'>
					<li>
						<a href='https://g.co/kgs/bCGmF1Y'>
							<RoomOutlinedIcon className='me-1' sx={{ fontSize: 36 }} />
							{t("HomePage.address")}
						</a>
					</li>
					<li>
						<a href='tel:+380970173737'>
							<LocalPhoneOutlinedIcon className='me-2' sx={{ fontSize: 36 }} />
							<span>+38-097-017-37-37</span>
						</a>
					</li>
					<li>
						<a href='https://wa.me/380970173737' className='me-3'>
							<WhatsAppIcon sx={{ fontSize: 28 }} /> WhatsApp
						</a>
						<a href='https://t.me/@Eco_House_Strieva' className='me-3'>
							<TelegramIcon sx={{ fontSize: 28 }} /> Telegram
						</a>
						<a href='viber://add?number=380970173737'>
							<ViberAppIcon sx={{ fontSize: 28 }} /> Viber
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
