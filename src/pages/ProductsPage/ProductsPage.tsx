import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { motion } from "framer-motion";


import "./ProductsPage.scss";

import { ProductsItems } from "./components/ProductsItems/ProductsItems";
import { Pagination } from "../../components/Pagination/Pagination";
import { Tabs } from "../../components/Tabs/Tabs";

import { IState, IContentProducts, ITabs, IProducts, IPagination } from "../../modules";
import { TitleBlock } from "../../components/TitleBlock/TitleBlock";




export const ProductsPage = () => {
	const productPageState = useSelector((state: IState): IContentProducts[] => state.contentProducts)[0];
	const paginationState = useSelector((state: IState): IPagination[] => state.paginationPageProducts);
	const tabs = useSelector((state: IState): ITabs[] => state.tabsPageProducts);
	const products = useSelector((state: IState): IProducts[] => state.products);

	const currentPageProducts = useSelector((state: IState): number => state.currentPageProducts);
	const productsPerPageProducts = useSelector((state: IState): number => state.productsPerPageProducts);

	const contentProductsFilter = tabs.filter(elem => elem.active);


	const filterProducts = (products: IProducts[], str: string): IProducts[] => {
		if (str === 'Все продукты') {
			return products;
		} else {
			const filterProducts = products.filter(elem => elem.category === str);
			return filterProducts;
		}
	};


	const lastProductsIndex = currentPageProducts * productsPerPageProducts;
	const firstProductsIndex = lastProductsIndex - productsPerPageProducts;
	const currentProductsPageProducts = filterProducts(products, contentProductsFilter[0].label).slice(firstProductsIndex, lastProductsIndex);

	const dispatch = useDispatch();

	const { id, title, descr } = productPageState;

	function onPagintaion(id: number) {
		return dispatch({ type: 'CURRNET_PRODUCTS_PAGE_PRODUCTS', payload: id });
	}
	function onTabAction(id: number) {
		return dispatch({ type: 'UPDATE_ACTIVE_TABS', payload: id });
	}

	return (
		<motion.section
			initial={{ transform: 'translateY(100%)', opacity: 0 }}
			animate={{ transform: 'translateY(0%)', opacity: 1 }}
			exit={{ transform: 'translateY(100%)', opacity: 0, transition: { duration: 0.1 } }}
			className="page-products products-page">
			<div className="products-page__container _container">
				<TitleBlock title={title} descr={descr} />
				<div className="products-page__tabs tabs">
					<Tabs
						tabs={tabs}
						onTabAction={onTabAction} />
				</div>
				<div className="products-page__content">
					<ProductsItems
						currentProductsPageProducts={currentProductsPageProducts} />
					<Pagination
						pagination={paginationState}
						funcPagination={onPagintaion}
						current={currentPageProducts}
						productsProps={filterProducts(products, contentProductsFilter[0].label)} />
				</div>
			</div>
		</motion.section>
	)
}