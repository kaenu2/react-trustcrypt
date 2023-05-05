import React, { useState } from "react";

import Header from "../Header";

import { AnimetedRoutes } from "../AnimatedRoutes/AnimetedRoutes";

import { Footer } from "../Footer/Footer";
import { PopUpMessage } from "../PopUpMessage/PopUpMessage";

export const App = () => {
	return (
		<>
			<Header />
			<main className="page">
				<AnimetedRoutes />
			</main>
			<Footer />
			<PopUpMessage text={'Заявка успешно отправлена! Скоро мы с вами свяжемся!'} />
		</>
	)
};