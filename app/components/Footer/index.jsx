import "./index.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTok from "../Svg/tiktok";
import ViberAppIcon from "../Svg/viber";
export default function Footer({ lng }) {
	return (
		<footer className='d-flex flex-wrap justify-content-between pt-4 align-items-center'>
			<div className='col-12 col-md-12 col-lg-8'>
				<ul className='footer-contacts p-0 m-0 list-unstyled d-flex flex-wrap justify-content-around'>
					<li>
						<a href='https://g.co/kgs/bCGmF1Y' className='me-3 te-color'>
							<RoomOutlinedIcon
								className='me-1 te-color'
								sx={{ fontSize: 28 }}
							/>
							с. Стриєва, вул. Перемоги 37
						</a>
					</li>
					<li>
						<a href='tel:+380970173737' className='me-3 te-color'>
							<LocalPhoneOutlinedIcon
								className='me-2 te-color'
								sx={{ fontSize: 28 }}
							/>
							<span>+38-097-017-37-37</span>
						</a>
					</li>
					<li>
						<a href='https://wa.me/380970173737' className='me-3 te-color'>
							<WhatsAppIcon sx={{ fontSize: 28 }} /> WhatsApp
						</a>
					</li>
					<li>
						<a href='https://t.me/@Eco_House_Strieva' className='me-3 te-color'>
							<TelegramIcon sx={{ fontSize: 28 }} /> Telegram
						</a>
					</li>
					<li>
						<a href='viber://add?number=380970173737' className='te-color'>
							<ViberAppIcon sx={{ fontSize: 28 }} /> Viber
						</a>
					</li>
				</ul>
			</div>
			<div className='col-6 col-md-6 col-lg-2 pt-3'>
				<ul className='footer-languages list-unstyled d-flex justify-content-around flex-wrap'>
					<li>
						<a href={lng === "ru" ? "/ru" : "/ru"} className='te-color'>
							ru
						</a>
					</li>
					<li>
						<a href={lng === "en" ? "/en" : "/en"} className='te-color'>
							en
						</a>
					</li>
					<li>
						<a href={lng === "uk" ? "/" : "/uk"} className='te-color'>
							uk
						</a>
					</li>
				</ul>
			</div>
			<div className='col-6 col-md-6 col-lg-2 pt-3'>
				<ul className='footer-social list-unstyled d-flex justify-content-around flex-wrap'>
					<li>
						<a
							href='https://www.tiktok.com/@eco_house_strieva'
							className='te-color'
						>
							<TikTok
								className='me-2 w-10 te-color'
								sx={{ fontSize: 28 }}
								style={{ width: 28, height: 28 }}
							/>
						</a>
					</li>
					<li>
						<a
							href='https://www.youtube.com/@EcoHouse-Strieva'
							className='te-color'
						>
							<YouTubeIcon className='me-2 te-color' sx={{ fontSize: 28 }} />
						</a>
					</li>
					<li>
						<a
							href='https://www.instagram.com/Eco_house_strieva'
							className='te-color'
						>
							<InstagramIcon className='me-2' sx={{ fontSize: 28 }} />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
