import "./index.css";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import FireplaceOutlinedIcon from "@mui/icons-material/FireplaceOutlined";
import OutdoorGrillOutlinedIcon from "@mui/icons-material/OutdoorGrillOutlined";
import DeckOutlinedIcon from "@mui/icons-material/DeckOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import CountertopsOutlinedIcon from "@mui/icons-material/CountertopsOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import LocalParkingOutlinedIcon from "@mui/icons-material/LocalParkingOutlined";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import HotTubOutlinedIcon from "@mui/icons-material/HotTubOutlined";
import Form from "../Form";
import Image from "next/image";

export default function WhatWeHave({ lng, messages }) {
	const t = messages.HomePage;

	return (
		<section className='container' id='whatwehave'>
			<div className='col-12 d-flex flex-row flex-wrap justify-content-between '>
				<div className='col-12 py-3'>
					<h3>{t.h3}</h3>
				</div>
				{[
					{ Icon: PlaceOutlinedIcon, text: t.h3p1 },
					{ Icon: CottageOutlinedIcon, text: t.h3p2 },
					{ Icon: ParkOutlinedIcon, text: t.h3p3 },
					{ Icon: DeckOutlinedIcon, text: t.h3p4 },
					{ Icon: HotTubOutlinedIcon, text: t.h3p5 },
				].map(({ Icon, text }, i) => (
					<div
						key={i}
						className='col-12 col-sm-6 col-xl-2 px-1 d-flex align-center'
					>
						<figure className='figure text-center bg-color-dark w-100 p-2'>
							<Icon sx={{ fontSize: 50 }} />
							<figcaption className='py-2'>{text}</figcaption>
						</figure>
					</div>
				))}
			</div>

			<div className='col-12 d-flex flex-row flex-wrap what-we-have py-3 justify-content-between'>
				<div className='col-12 col-lg-6 px-4'>
					<Image
						src='/imgs/rent-house-Strieva.webp'
						alt={t.logoAlt}
						width={520}
						height={680}
					/>
				</div>
				<div className='col-12 col-lg-6'>
					<p>{t.h3ul}</p>
					<ul>
						{[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
							<li key={i}>{t[`h3li${i}`]}</li>
						))}
						<li>{t.h3p6}</li>
					</ul>
					<div className='col-6 col-md-3 offset-md-3 p-1'>
						<Image
							src='/imgs/feedbacks.webp'
							alt='Відгуки ЕкоХаус Стрієва'
							width={186}
							height={96}
							className='border border-light rounded'
						/>
					</div>
					<div className='col-12 py-5'>
						<div className='like-header'>{t.orderLikeHeader}</div>
						<div className='col-12'>
							<Form messages={messages} />
							<p>{t.orderLikeText}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
