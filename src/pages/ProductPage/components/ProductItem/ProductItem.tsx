import React from "react";
import { Link } from "react-router-dom";

import { IProducts } from "../../../../modules";

interface IProductcItem {
	relatedProducts: IProducts[],
}

export const ProductItem = ({ relatedProducts }: IProductcItem) => {
	return (
		<ul className="related-product__list">
			{
				relatedProducts.map(elem => {
					const { category, description, id, images, title } = elem;
					return (
						<li key={id} className="related-product__item">
							<Link to={`../react-trustcrypt/products/${id}`}>
								<img src={images[0].image} alt={title} />
							</Link>
							<div className="related-product__info">
								<Link to={`../react-trustcrypt/products/${id}`}><h3>{title}</h3></Link>

								<Link to={`../react-trustcrypt/products/${id}`}><p>{description.slice(0, 92) + '...'}</p></Link>
								<Link to={`../react-trustcrypt/products/${id}`} className="related-product__btn btn-outline">
									Просмотреть
								</Link>
							</div>
						</li>
					)
				})
			}
		</ul>
	)
}