import React, { useState } from "react";

import "./Header.scss";
import { Logo, NavMenu, SocLinks } from "./components";

export const Header = () => {
	const [burgerMenu, setBurgerMenu] = useState(false);

	function onClickLink() {
		if (burgerMenu) {
			setBurgerMenu(false);
		}
	}


	return (
		<header className="header">
			<div className="header__container _container">
				<Logo />
				<div className={burgerMenu ? 'header__body _active' : 'header__body'}>
					<NavMenu onClickLink={onClickLink} />
					<SocLinks />
				</div>
				<div
					onClick={() => setBurgerMenu((prev: boolean): boolean => !prev)}
					className={burgerMenu ? 'header__icon _active' : 'header__icon'}><span></span></div>
			</div>
		</header>
	)
};