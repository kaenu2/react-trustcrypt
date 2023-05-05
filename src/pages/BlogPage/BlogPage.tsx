import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { motion } from "framer-motion";


import "./BlogPage.scss";

import { TitleBlock } from "../../components/TitleBlock/TitleBlock";
import { IContentProducts, IPagination, IState, ITabs, INewsBlog } from "../../modules";
import { Pagination } from "../../components/Pagination/Pagination";
import { Tabs } from "../../components/Tabs/Tabs";
import { NewsBlogItems } from "./components/NewsBlog/NewsBlog";


export const BlogPage = () => {
	const blogState = useSelector((state: IState): IContentProducts[] => state.contentBlog)[0];
	const newsBlog = useSelector((state: IState): INewsBlog[] => state.newsBlog).sort((a, b) => a.id - b.id);
	const news = useSelector((state: IState): IPagination[] => state.paginationPageProducts);
	const tabs = useSelector((state: IState): ITabs[] => state.tabsPageBlog);

	const contentProductsFilter = tabs.filter(elem => elem.active);

	const currentPageBlog = useSelector((state: IState): number => state.currentPageBlog);
	const productsPerPageBlog = useSelector((state: IState): number => state.productsPerPageBlog);

	const dispatch = useDispatch();

	function filterProducts(products: INewsBlog[], str: string): INewsBlog[] {
		if (str === 'Все статьи') {
			return products;
		} else {
			const filterProducts = products.filter(elem => elem.category === str);
			return filterProducts;
		}
	};

	const lastProductsIndex = currentPageBlog * productsPerPageBlog;
	const firstProductsIndex = lastProductsIndex - productsPerPageBlog;
	const currentProductsPageProducts = filterProducts(newsBlog, contentProductsFilter[0].label).slice(firstProductsIndex, lastProductsIndex);

	const { descr, title } = blogState;

	const onTabs = (id: number) => {
		return dispatch({ type: 'UPDATE_ACTIVE_TABS_BLOG', payload: id });
	}

	const onPaginate = (id: number) => {
		return dispatch({ type: 'CURRET_NEWS_PAGE_BLOG', payload: id });
	}

	return (
		<motion.section
			initial={{ transform: 'translateY(100%)', opacity: 0 }}
			animate={{ transform: 'translateY(0%)', opacity: 1 }}
			exit={{ transform: 'translateY(100%)', opacity: 0, transition: { duration: 0.1 } }}
			// initial={{ opacity: 0 }}
			// animate={{ opacity: 1 }}
			// exit={{ opacity: 0 }}

			className="page__blog blog">
			<div className="blog__container _container">
				<TitleBlock
					title={title}
					descr={descr} />
				<Tabs
					tabs={tabs}
					onTabAction={onTabs} />
				<div className="blog__content">
					<NewsBlogItems news={currentProductsPageProducts} />
					<Pagination
						pagination={news}
						funcPagination={onPaginate}
						current={currentPageBlog}
						productsProps={filterProducts(newsBlog, contentProductsFilter[0].label)} />
				</div>
			</div>
		</motion.section>
	)
}