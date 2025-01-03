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
import { getTranslations } from "next-intl/server";
export default async function WhatWeHave({ lng }) {
	const t = await getTranslations({ lng });
	return (
		<section className='container' id='whatwehave'>
			<div className='col-12 d-flex flex-row flex-wrap justify-content-between '>
				<div className='col-12 py-3'>
					<h3>{t("HomePage.h3")}</h3>
				</div>
				<div className='col-12 col-sm-6 col-xl-2 px-1 d-flex align-center'>
					<figure className='figure text-center bg-color-dark w-100 p-2'>
						<PlaceOutlinedIcon sx={{ fontSize: 50 }} />
						<figcaption className='py-2'>{t("HomePage.h3p1")}</figcaption>
					</figure>
				</div>
				<div className='col-12 col-sm-6 col-xl-2 px-1 d-flex align-center'>
					<figure className='figure text-center bg-color-dark w-100 p-2'>
						<CottageOutlinedIcon sx={{ fontSize: 50 }} />
						<figcaption className='py-2'>{t("HomePage.h3p2")}</figcaption>
					</figure>
				</div>
				<div className='col-12 col-sm-6 col-xl-2 px-1 d-flex align-center'>
					<figure className='figure text-center bg-color-dark w-100 p-2'>
						<ParkOutlinedIcon sx={{ fontSize: 50 }} />
						<figcaption className='py-2'>{t("HomePage.h3p3")}</figcaption>
					</figure>
				</div>
				<div className='col-12 col-sm-6 col-xl-2 px-1 d-flex align-center'>
					<figure className='figure text-center bg-color-dark w-100 p-2'>
						<DeckOutlinedIcon sx={{ fontSize: 50 }} />
						<figcaption className='py-2'>{t("HomePage.h3p4")}</figcaption>
					</figure>
				</div>
				<div className='col-12 col-sm-6 col-xl-2 px-1 d-flex align-center'>
					<figure className='figure text-center bg-color-dark w-100 p-2'>
						<HotTubOutlinedIcon sx={{ fontSize: 50 }} />
						<figcaption className='py-2'>{t("HomePage.h3p5")}</figcaption>
					</figure>
				</div>
			</div>
			<div className='col-12 d-flex flex-row flex-wrap what-we-have py-3 justify-content-between'>
				<div className='col-12 col-lg-6 px-4'>
					<Image
						src='/imgs/rent-house-Strieva.webp'
						alt={t("HomePage.logoAlt")}
						width={520}
						height={680}
					/>
				</div>
				<div className='col-12 col-lg-6'>
					<p>{t("HomePage.h3ul")}</p>
					<ul>
						<li>{t("HomePage.h3li1")}</li>
						<li>{t("HomePage.h3li2")}</li>
						<li>{t("HomePage.h3li3")}</li>
						<li>{t("HomePage.h3li4")}</li>
						<li>{t("HomePage.h3li5")}</li>
						<li>{t("HomePage.h3li6")}</li>
						<li>{t("HomePage.h3li7")}</li>
						<li>{t("HomePage.h3li8")}</li>
						<li>{t("HomePage.h3p6")}</li>
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
						<div className='like-header'>{t("HomePage.orderLikeHeader")}</div>
						<div className='col-12'>
							<Form />
							<p>{t("HomePage.orderLikeText")}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
