import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { motion } from "framer-motion";



import { useSelector } from "react-redux";

import { IProducts, IState } from "../../modules";

import "./ProductPage.scss";
import { ProductItem } from "./components/ProductItem/ProductItem";

export const ProductPage = () => {
	const { id: idParams } = useParams();
	const productsState = useSelector((state: IState): IProducts[] => state.products);

	const product = productsState.filter((elem: IProducts) => elem.id === Number(idParams))[0];

	const { id, category, description, images, title } = product;

	const relatedProducts = productsState.filter((elem: IProducts) => elem.category === category).slice(0, 3);

	const [openDesc, setOpenDesc] = useState(false);

	return (
		<motion.section
			initial={{ transform: 'translateY(100%)', opacity: 0 }}
			animate={{ transform: 'translateY(0%)', opacity: 1 }}
			exit={{ transform: 'translateY(100%)', opacity: 0, transition: { duration: 0.1 } }}
			className="page__product-page product-page">
			<div className="product-page__container _container">
				<div className="product-page__content">
					<div className="product-page__img">
						<img src={images[0].image} alt={title} />
					</div>
					<div className="product-page__info">
						<h1>{title}</h1>
						<strong>Описание</strong>
						{
							openDesc ?
								<>
									<p>{description}</p>
									<p>{description}</p>
									<span onClick={() => setOpenDesc(prev => !prev)}>Скрыть</span>
								</>
								:
								<>
									<p>{description.slice(0, 507) + '...'}</p>
									<p className="v-hiden">{description}</p>
									<span onClick={() => setOpenDesc(prev => !prev)}>Подробнее</span>
								</>
						}

					</div>
				</div>
				<h2>Похожие продукты</h2>
				<div className="product-page__related related-product">
					<ProductItem relatedProducts={relatedProducts} />
				</div>
			</div>
		</motion.section>
	)
}