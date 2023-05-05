import React from "react";
import { useSelector } from "react-redux";

import { IState, IContent } from "../../../../modules";

export const ProductsHome = () => {
	const contentHome = useSelector((state: IState): IContent[] => state.contentHome);
	const { description, id, title, products } = contentHome[3];
	return (
		<section className="page__products-home products-home">
			<div className="products-home__container _container">
				<div className="products-home__title title">
					<h1 className="title__title">{title}</h1>
					<p className="title__desc">{description}</p>
				</div>
				<ul className="products-home__items">
					{
						products?.map(elem => {
							const { id, image, title } = elem;
							return (
								<li
									key={id}
									className="products-home__item item-home-products">
									<div className="item-home-products__img">
										<img src={image} alt={title} />
									</div>
									<h2>{title}</h2>
								</li>
							)
						})
					}
				</ul>
			</div>
		</section>
	)
};