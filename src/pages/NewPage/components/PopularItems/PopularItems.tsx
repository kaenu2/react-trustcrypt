import React from "react";
import { CategoryIcon } from "../../../../components/CategoryIcon/CategoryIcon";

import { Link } from "react-router-dom";
import { INewsBlog } from "../../../../modules";

interface IPopularItems {
	viewArticls: INewsBlog[],
	customDate: any,
	customViews: any,
}


export const PopularItems = ({ viewArticls, customDate, customViews }: IPopularItems) => {
	return (
		<ul className="popular-new__list">
			{
				viewArticls.map(elem => {
					const { id, category, date, description, image, title, views } = elem;
					return (
						<li key={id}
							className="popular-new__item">
							<div className="popular-new__img">
								<Link to={`../react-trustcrypt/blog/${id}`}>
									<img width={218} height={218} src={image} alt={title} />
								</Link>
								<div className="popular-new__category category"><CategoryIcon str={category} />{category}</div>
								<div className="popular-new__views"><img src="https://i.ibb.co/L8GBPYb/ic-baseline-remove-red-eye.png" alt="views" />{customViews(views)}</div>
							</div>
							<div className="popular-new__info">
								<Link className="popular-new__title" to={`../react-trustcrypt/blog/${id}`}>{title.slice(0, 43) + '...'}</Link>
								<Link className="popular-new__descr" to={`../react-trustcrypt/blog/${id}`}>{description.slice(0, 81) + '...'}</Link>
								<Link to={`../react-trustcrypt/blog/${id}`} className="popular-new__btn btn-outline">Просмотреть</Link>
							</div>
						</li>
					)
				})
			}
		</ul>
	)
};