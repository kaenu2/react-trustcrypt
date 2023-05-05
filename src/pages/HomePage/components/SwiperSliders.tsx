import React from "react";
import { useSelector } from "react-redux";

import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IState, IContent } from "../../../modules";

import 'swiper/scss';
import 'swiper/scss/pagination';

export const SwiperSliders = () => {
	const contentHome = useSelector((state: IState): IContent[] => state.contentHome);
	const { swipers } = contentHome[1];
	return (
		<>
			<Swiper
				modules={[Pagination, Autoplay]}
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				autoplay={true}
			// onSwiper={(swiper) => console.log(swiper)}
			// onSlideChange={() => console.log('slide change')}
			>
				{
					swipers?.map(elem => {
						const { id, image } = elem;
						return (
							<SwiperSlide key={id}>
								<img src={image} alt={`img-swiper-slide${id + 1}`} />
							</SwiperSlide>
						)
					})
				}
			</Swiper>
		</>
	)
};