import React from "react";
import { useSelector } from "react-redux";

import { IState, IContent } from "../../../../modules";



export const Tools = () => {
	const contentHome = useSelector((state: IState): IContent[] => state.contentHome);
	const { id, description, title, images } = contentHome[2];
	return (
		<section className="page__tools tools">
			<div className="tools__container _container">
				<div className="tools__title title">
					<h1 className="title__title">{title}</h1>
					<p className="title__desc">{description}</p>
				</div>
				<div className="tools__images-block">
					{
						images?.map(img => {
							const { id, image } = img;
							return (
								<img key={id} src={image} alt={`${title}${id}`} />
							)
						})
					}
				</div>
			</div>
		</section>
	)
};