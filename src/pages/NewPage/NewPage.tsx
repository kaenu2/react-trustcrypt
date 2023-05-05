import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { motion } from "framer-motion";



import { CategoryIcon } from "../../components/CategoryIcon/CategoryIcon";
import { Tabs } from "../../components/Tabs/Tabs";

import "./NewPage.scss";

import { INewsBlog, ISponsor, IState, ITabs } from "../../modules";
import { PopularItems } from "./components/PopularItems/PopularItems";
import { Sponsors } from "./components/Sponsors/Sponsors";

export const NewPage = () => {
	const { id: idParams } = useParams();
	const newState = useSelector((state: IState): INewsBlog[] => state.newsBlog);
	const sponsorsState = useSelector((state: IState): ISponsor[] => state.sponsor);
	const newTabsState = useSelector((state: IState): ITabs[] => state.newTabs);
	const dispatch = useDispatch();

	const article = newState.filter(elem => elem.id === Number(idParams))[0];

	const { id, img, title } = sponsorsState[0];
	const { category, views, date, description, id: idArticle, image, title: titleArticle } = article;

	function customDate(str: string): string {
		const dataText = [
			'Декабря',
			'Января',
			'Февраля',
			'Март',
			'Аперля',
			'Мая',
			'Июня',
			'Июля',
			'Августа',
			'Сентебря',
			'Октября',
			'Ноября',
		];
		const m = str.split('-');

		return `${m[2]} ${dataText[Number(m[1])]}, ${m[0]}`;
	}

	function onTabAction(id: number) {
		return dispatch({ type: 'UPDATE_ACTIVE_TABS_ARTICLE', payload: id })
	};

	function viewArticls(tab: string, articles: INewsBlog[]): INewsBlog[] {
		switch (tab) {
			case 'За день':
				return articles.filter(elem => {
					const t = Date.parse(new Date(elem.date).toISOString()) - Date.parse(new Date().toISOString());
					const d = Math.floor(t / (1000 * 60 * 60 * 24));
					return d === -1;
				}).slice(0, 4);
			case 'За неделю':
				return articles.filter(elem => {
					const t = Date.parse(new Date(elem.date).toISOString()) - Date.parse(new Date().toISOString());
					const d = Math.floor(t / (1000 * 60 * 60 * 24));
					return (d >= -7 && d <= 7);
				});
			case 'За месяц':
				return articles.filter(elem => {
					const t = Date.parse(new Date(elem.date).toISOString()) - Date.parse(new Date().toISOString());
					const d = Math.floor(t / (1000 * 60 * 60 * 24));
					return d >= -32;
				});
			default:
				return articles;
		}
	}


	function customViews(number: number) {
		if (number >= 1000 && number < 1000000) {
			return `${String(number).slice(0, -3)} т`;
		} else if (number >= 1000000) {
			return `${String(number).slice(0, -6)} м`;
		} else {
			return number;
		}
	}

	const viewContentState = viewArticls(newTabsState.filter(elem => elem.active)[0].label, newState);


	return (
		<motion.section
			initial={{ transform: 'translateY(100%)', opacity: 0 }}
			animate={{ transform: 'translateY(0%)', opacity: 1 }}
			exit={{ transform: 'translateY(100%)', opacity: 0, transition: { duration: 0.1 } }}
			className="page__new page-new">
			<div className="page-new__container _container">
				<div className="page-new__info">
					<div className="page-new__content-title">
						<h1>{titleArticle}</h1>
						<div className="page-new__state">
							<div className="page-new__views"><img src="https://i.ibb.co/L8GBPYb/ic-baseline-remove-red-eye.png" alt="views" />{views}</div>
							<div className="page-new__date"><img src="https://i.ibb.co/JHQrJCL/ic-baseline-date-range.png" alt="date" />Дата публикации: {customDate(date)}</div>
						</div>
						<div className="page-new__img">
							<img src={image} alt={title} />
							<div className="page-new__category category"><CategoryIcon str={category} />{category}</div>
						</div>
					</div>
					<p>{description}</p>
				</div>
				<div className="page-new__popular popular-new">
					<h2>Популярные статьи</h2>
					<Tabs onTabAction={onTabAction} tabs={newTabsState} />
					<PopularItems viewArticls={viewContentState} customDate={customDate} customViews={customViews} />
					<Sponsors title={title} img={img} />
				</div>
			</div>
		</motion.section>
	)
}