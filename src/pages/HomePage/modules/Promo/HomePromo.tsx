import React from "react";
import { useSelector } from "react-redux";


import { IState, IContent } from "../../../../modules";


export const HomePromo = () => {
	const contentHome = useSelector((state: IState): IContent[] => state.contentHome);
	const { description, image, title } = contentHome[0];

	return (
		<section className="page__home-promo home-promo">
			<div className="home-promo__container _container">
				<div className="home-promo__content">
					<h1>{title}</h1>
					<p>{description}</p>
					<button className='home-promo__btn btn-color'>Подробнее</button>
				</div>
				<div className="home-promo__img">
					<img src={image} alt={title} />
				</div>
			</div>
		</section>
	)
}