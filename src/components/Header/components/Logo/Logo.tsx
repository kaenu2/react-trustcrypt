import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => {
	return (
		<>
			<Link to="" className="header__logo">
				<svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clipPath="url(#clip0_1_1128)">
						<path fillRule="evenodd" clipRule="evenodd" d="M0 21.0205L1.55218 23.0107L5.62169 28.2282V12.782H0V21.0205Z" fill="#ECF1F0" />
						<path fillRule="evenodd" clipRule="evenodd" d="M0 9.06136H5.62169V6.0104H11.2429V35.4354L17.9233 44V0H0V9.06136Z" fill="#ECF1F0" />
						<path fillRule="evenodd" clipRule="evenodd" d="M21.0771 0V43.9996L27.7575 35.4345V6.0104H33.3783V9.06136H39V0H21.0771Z" fill="#ECF1F0" />
						<path fillRule="evenodd" clipRule="evenodd" d="M33.3783 28.2282L37.4478 23.0107L39 21.0205V12.782H33.3783V28.2282Z" fill="#ECF1F0" />
					</g>
					<defs>
						<clipPath id="clip0_1_1128">
							<rect width="39" height="44" fill="white" />
						</clipPath>
					</defs>
				</svg>
				<h4>Trustcrypt</h4>
			</Link>
		</>
	)
}