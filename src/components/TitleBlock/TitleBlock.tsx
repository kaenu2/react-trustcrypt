import React from "react";

interface ITitleBlock {
	title: string,
	descr: string,
}

export const TitleBlock = ({ title, descr }: ITitleBlock) => {
	return (
		<div className="products-page__title title-page">
			<h1>{title}</h1>
			<p>{descr}</p>
		</div>
	)
}