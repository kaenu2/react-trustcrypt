import React from "react";
import { useSelector } from "react-redux";

import { IFooter, IState } from "../../modules";

export const Footer = () => {
	const contentFooter = useSelector((state: IState): IFooter[] => state.footer);
	const { id, title } = contentFooter[0];
	return (
		<footer className="footer">
			<div className="footer__container _container">
				<h1 className="footer__title">{title}</h1>
			</div>
		</footer>
	)
}