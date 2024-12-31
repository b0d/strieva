"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./index.css";

import { Navigation, Autoplay, FreeMode, Pagination } from "swiper/modules";
export default function MyGallery({ imgs }) {
	return (
		<Swiper
			autoHeight={true}
			slidesPerView={2}
			spaceBetween={30}
			navigation={true}
			autoplay={true}
			freeMode={true}
			pagination={{
				clickable: true,
			}}
			modules={[FreeMode, Autoplay, Pagination, Navigation]}
			className='mySwiper'
		>
			{imgs.map(({ src, alt }, index) => (
				<SwiperSlide key={index} className='col-12'>
					<img src={src} alt={alt} loading='lazy' />
				</SwiperSlide>
			))}
		</Swiper>
	);
}
