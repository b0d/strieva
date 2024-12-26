import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ViberAppIcon from "../Svg/viber";

import "./index.css";
import TopMenu from "../TopMenu";
import Image from "next/image";
export default function Header({ lng }) {
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
			<nav className='header-menu d-flex flex-wrap justify-content-end col-12 col-md-12 col-lg-4 col-xl-4'>
				<ul className='p-0 m-0 list-unstyled text-start'>
					<li>
						<a href='https://g.co/kgs/bCGmF1Y'>
							<RoomOutlinedIcon className='me-1' sx={{ fontSize: 36 }} />
							с. Стриєва, вул. Перемоги 37
						</a>
					</li>
					<li>
						<a href='tel:+380970173737'>
							<LocalPhoneOutlinedIcon className='me-2' sx={{ fontSize: 36 }} />
							<span>+38-097-017-37-37</span>
						</a>
					</li>
					<li>
						<a href='/' className='me-3'>
							<WhatsAppIcon sx={{ fontSize: 28 }} /> WhatsApp
						</a>
						<a href='/' className='me-3'>
							<TelegramIcon sx={{ fontSize: 28 }} /> Telegram
						</a>
						<a href='/'>
							<ViberAppIcon sx={{ fontSize: 28 }} /> Viber
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}