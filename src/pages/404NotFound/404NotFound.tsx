import React from "react";
import { motion } from "framer-motion";

import "./404NotFound.scss";


export const NotFound = () => {
	return (
		<motion.section
			initial={{ transform: 'translateY(100%)', opacity: 0 }}
			animate={{ transform: 'translateY(0%)', opacity: 1 }}
			exit={{ transform: 'translateY(100%)', opacity: 0, transition: { duration: 0.1 } }}
			className="page__not-found not-found-page"
		>
			<div className="not-found-page__title"><span>404</span> <h1>страница не найдена</h1></div>
		</motion.section>
	);
}