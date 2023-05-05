import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { HomePage } from "../../pages";
import { ProductsPage } from "../../pages";
import { BlogPage } from "../../pages/BlogPage/BlogPage";
import { ProductPage } from "../../pages/ProductPage/ProductPage";
import { NewPage } from "../../pages/NewPage/NewPage";
import { ConcatsPage } from "../../pages/ConcatsPage/ConcatsPage";
import { NotFound } from "../../pages/404NotFound/404NotFound";


export const AnimetedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="react-trustcrypt" element={<HomePage />} />
				<Route path="/react-trustcrypt/products" element={<ProductsPage />} />
				<Route path="/react-trustcrypt/products/:id" element={<ProductPage />} />
				<Route path="/react-trustcrypt/blog" element={<BlogPage />} />
				<Route path="/react-trustcrypt/blog/:id" element={<NewPage />} />
				<Route path="/react-trustcrypt/contacts" element={<ConcatsPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</AnimatePresence>
	)
}