"use client";
import React, { memo, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./index.css";
import { Navigation, Autoplay, FreeMode, Pagination } from "swiper/modules";

const MyGallery = ({ imgs, label }) => {
	const swiperConfig = useMemo(
		() => ({
			autoHeight: true,
			slidesPerView: 2,
			spaceBetween: 30,
			navigation: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			freeMode: true,
			pagination: {
				clickable: true,
			},
			breakpoints: {
				640: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
		}),
		[]
	);

	return (
		<Swiper
			{...swiperConfig}
			modules={[FreeMode, Autoplay, Pagination, Navigation]}
			className='mySwiper'
			aria-label={label}
		>
			{imgs.map(({ src, alt, width, height }, index) => (
				<SwiperSlide key={index} className='col-12'>
					<Image
						src={src}
						alt={alt}
						width={width}
						height={height}
						style={{ width: '100%', height: 'auto' }}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default memo(MyGallery);
