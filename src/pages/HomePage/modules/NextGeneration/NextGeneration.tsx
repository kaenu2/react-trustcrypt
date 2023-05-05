import React from "react";
import { useSelector } from "react-redux";

import { SwiperSliders } from "../../components/SwiperSliders";

import { IState, IContent } from "../../../../modules";


export const NextGeneration = () => {
	const contentHome = useSelector((state: IState): IContent[] => state.contentHome);
	const { description, title } = contentHome[1];
	return (
		<section className="page__next-generation">
			<div className="next-generation">
				<div className="next-generation__container _container">
					<SwiperSliders />
					<div className="next-generation__content">
						<h1>{title}</h1>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</section>
	);
};
