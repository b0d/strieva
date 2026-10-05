import "./index.css";
import {
	PlaceIcon,
	CottageIcon,
	ParkIcon,
	DeckIcon,
	HotTubIcon,
} from "../Svg/icons";
import Form from "../Form";
import Image from "next/image";

export default function WhatWeHave({ lng, messages }) {
	const t = messages.HomePage;

	return (
		<section className='container' id='whatwehave'>
			<div className='col-12 d-flex flex-row flex-wrap justify-content-between '>
				<div className='col-12 py-3'>
					<h2 className='h3'>{t.h3}</h2>
				</div>
				{[
					{ Icon: PlaceIcon, text: t.h3p1 },
					{ Icon: CottageIcon, text: t.h3p2 },
					{ Icon: ParkIcon, text: t.h3p3 },
					{ Icon: DeckIcon, text: t.h3p4 },
					{ Icon: HotTubIcon, text: t.h3p5 },
				].map(({ Icon, text }, i) => (
					<div
						key={i}
						className='col-12 col-sm-6 col-xl-2 px-1 d-flex align-center'
					>
						<figure className='figure text-center bg-color-dark w-100 p-2'>
							<Icon size={50} />
							<figcaption className='py-2'>{text}</figcaption>
						</figure>
					</div>
				))}
			</div>

			<div className='col-12 d-flex flex-row flex-wrap what-we-have py-3 justify-content-between'>
				<div className='col-12 col-lg-6 px-4'>
					<Image
						src='/imgs/rent-house-Strieva.webp'
						alt={t.houseImageAlt}
						width={520}
						height={780}
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
							alt={t.reviewsAlt}
							width={186}
							height={96}
							className='border border-light rounded'
						/>
					</div>
					<div className='col-12 py-5'>
						<div className='like-header'>{t.orderLikeHeader}</div>
						<div className='col-12'>
							<Form messages={messages} locale={lng} location='amenities' />
							<p>{t.orderLikeText}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
