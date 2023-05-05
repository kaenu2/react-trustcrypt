import React from "react";
import { Link } from "react-router-dom";



import { INewsBlog } from "../../../../modules";
import { CategoryIcon } from "../../../../components/CategoryIcon/CategoryIcon";

interface INewsBlogNews {
	news: INewsBlog[]
}

export const NewsBlogItems = ({ news }: INewsBlogNews) => {

	function customViews(number: number) {
		if (number >= 1000 && number < 1000000) {
			return `${String(number).slice(0, -3)} т`;
		} else if (number >= 1000000) {
			return `${String(number).slice(0, -6)} м`;
		} else {
			return number;
		}
	}

	return (
		<ul className="blog__list">
			{
				news.map(elem => {
					const { category, date, description, id, image, title, views } = elem;
					return (
						<li
							key={id}
							className="blog__item item-blog">
							<div className="item-blog__img">
								<Link to={`${id}`}>
									<div className="item-blog__category">
										<CategoryIcon str={category} />
										{category}
									</div>
									<img src={image} alt={title} className="item-blog__content-img" />
									<div className="item-blog__group">
										<div className="item-blog__views">
											<img src="https://i.ibb.co/L8GBPYb/ic-baseline-remove-red-eye.png" alt="views" />
											{customViews(views)}
										</div>
										<div className="item-blog__date">
											<img src="https://i.ibb.co/JHQrJCL/ic-baseline-date-range.png" alt="date" />
											{date.split('-').reverse().join('-')}
										</div>
									</div>
								</Link>
							</div>
							<Link to={`${id}`}>
								<h2>{title.split('').slice(0, 46).join('') + '...'}</h2>
							</Link>
							<Link to={`${id}`}>
								<p>
									{description.split('').slice(0, 98).join('') + '...'}
								</p>
							</Link>
						</li>
					)
				})
			}
		</ul>
	);
}