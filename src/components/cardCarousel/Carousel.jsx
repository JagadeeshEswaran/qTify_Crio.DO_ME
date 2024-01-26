/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import Card from "../cardGrid/Card";

export default function App({ albumData, inputComponent }) {
	const [swiperRef, setSwiperRef] = useState(null);

	return (
		<>
			<Swiper
				cssMode={true}
				// freeMode={true}
				onSwiper={setSwiperRef}
				slidesPerView={1}
				centeredSlides={false}
				navigation={true}
				modules={[Navigation]}
				className="mySwiper">
				{albumData.map((item) => (
					<SwiperSlide key={item.id}>
						{/* {inputComponent} */}
						<Card item={item} cardType="album" />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
