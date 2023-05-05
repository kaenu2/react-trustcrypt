import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IProducts, IState, ITabs } from "../../../../modules";

interface IProductsItems {
	currentProductsPageProducts: IProducts[],
}


export const ProductsItems = ({ currentProductsPageProducts }: IProductsItems) => {
	//67
	// const products = useSelector((state: IState): IProducts[] => state.products);



	return (
		<ul className="products-page__items">
			{
				currentProductsPageProducts.map(product => {
					const { description, id, images, title } = product;
					return (
						<li
							key={id}
							className="products-page__item">
							<div>
								<Link to={`${id}`}>
									<Swiper
										modules={[Pagination, Autoplay]}
										spaceBetween={50}
										slidesPerView={1}
										pagination={{ clickable: true }}
										scrollbar={{ draggable: true }}
										autoplay={false}
									// onSwiper={(swiper) => console.log(swiper)}
									// onSlideChange={() => console.log('slide change')}
									>
										{
											images.map(elem => {
												const { id, image, label } = elem;
												return (
													<SwiperSlide key={id}>
														<img src={image} alt={`img-swiper-slide${id + 1}`} />
													</SwiperSlide>
												)
											})
										}
									</Swiper>
								</Link>
							</div>
							<div>
								<Link to={`${id}`}>
									<h3>{title}</h3>
								</Link>
								<Link to={`${id}`}>
									<p>{description.split('').slice(0, 67).join('') + '...'}</p>
								</Link>
								<Link to={`${id}`}>
									<span>Подробнее</span>
								</Link>
							</div>
						</li>
					)
				})
			}
		</ul>
	)
};