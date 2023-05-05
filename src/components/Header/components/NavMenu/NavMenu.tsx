import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { INavMenu, IState } from "../../../../modules";

interface INavMenuLink {
	onClickLink: any
}

export const NavMenu = ({ onClickLink }: INavMenuLink) => {
	const navMenuState = useSelector((state: IState): INavMenu[] => state.navMenu);

	return (
		<nav className="header__nav-menu nav-menu">
			<ul className="nav-menu__list">
				{
					navMenuState.map((elem) => {
						const { id, label, link, name } = elem;
						return (
							<li key={id}>
								<NavLink
									onClick={() => onClickLink()}
									to={`/react-trustcrypt/${link}`}
									className={({ isActive }) => isActive ? 'nav-menu__link _active' : 'nav-menu__link'}>{label}</NavLink>
							</li>
						);
					})
				}
			</ul>
		</nav>
	)
}