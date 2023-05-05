import React from "react";

interface ISponsor {
	title: string,
	img: string,
}

export const Sponsors = ({ title, img }: ISponsor) => {
	return (
		<div className="popular-new__sponsor">
			<img src={img} alt={title} />
		</div>
	)
}