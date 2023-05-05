import React from "react";

import "./HomePage.scss";

import { motion } from "framer-motion";

import { NextGeneration } from "./modules/NextGeneration/NextGeneration";
import { HomePromo } from "./modules/Promo/HomePromo";
import { Tools } from "./modules/Tools/Tools";
import { ProductsHome } from "./modules/Products/Products";
import { CallForm } from "./modules/CallForm/CallForm";

export const HomePage = () => {
	return (
		<motion.div
			initial={{ transform: 'translateY(100%)', opacity: 0 }}
			animate={{ transform: 'translateY(0%)', opacity: 1 }}
			exit={{ transform: 'translateY(100%)', opacity: 0, transition: { duration: 0.1 } }}
		>
			<HomePromo />
			<NextGeneration />
			<Tools />
			<ProductsHome />
			<CallForm />
		</motion.div>
	)
};