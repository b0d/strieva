import "./index.css";
import {
	PhoneIcon,
	RoomIcon,
	TelegramIcon,
	WhatsAppIcon,
	YouTubeIcon,
	InstagramIcon,
} from "../Svg/icons";
import TikTok from "../Svg/tiktok";
import ViberAppIcon from "../Svg/viber";
import { MAPS_PLACE_URL, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer({ lng, messages = {} }) {
	const t = messages?.HomePage;
	return (
		<footer className='d-flex flex-wrap justify-content-between pt-4 align-items-center'>
			<div className='col-12 col-md-12 col-lg-9'>
				<ul className='footer-contacts p-0 m-0 list-unstyled d-flex flex-wrap justify-content-around'>
					<li>
						<a href={MAPS_PLACE_URL} className='me-3 '>
							<RoomIcon className='me-1 ' size={28} />
							{t.address || "Адреса"}
						</a>
					</li>
					<li>
						<a href='tel:+380970173737' className='me-3 '>
							<PhoneIcon className='me-2 ' size={28} />
							<span>+38-097-017-37-37</span>
						</a>
					</li>
					<li>
						<a href='https://wa.me/380970173737' className='me-3 '>
							<WhatsAppIcon size={28} /> WhatsApp
						</a>
					</li>
					<li>
						<a href={SOCIAL_LINKS.telegram} className='me-3 '>
							<TelegramIcon size={28} /> Telegram
						</a>
					</li>
					<li>
						<a href='viber://chat?number=%2B380970173737'>
							<ViberAppIcon /> Viber
						</a>
					</li>
				</ul>
			</div>

			<div className='col-12 col-md-12 col-lg-3 pt-3'>
				<ul className='footer-social list-unstyled d-flex justify-content-around flex-wrap'>
					<li>
						<a href={SOCIAL_LINKS.tiktok} className='te-color' aria-label='TikTok'>
							<TikTok
								className='me-2 w-10 te-color'
								style={{ width: 28, height: 28 }}
								aria-hidden='true'
							/>
						</a>
					</li>
					<li>
						<a href={SOCIAL_LINKS.youtube} className='te-color' aria-label='YouTube'>
							<YouTubeIcon className='me-2 te-color' size={28} />
						</a>
					</li>
					<li>
						<a
							href={SOCIAL_LINKS.instagram}
							className='te-color'
							aria-label='Instagram'
						>
							<InstagramIcon className='me-2' size={28} />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
