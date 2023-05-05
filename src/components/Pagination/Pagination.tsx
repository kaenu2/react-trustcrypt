import React from "react";

import { INewsBlog, IPagination, IProducts } from "../../modules";

interface PaginationProps {
	pagination: IPagination[],
	funcPagination: any,
	current: number,
	productsProps: IProducts[] | INewsBlog[],
}

export const Pagination = ({ pagination, funcPagination, current, productsProps }: PaginationProps) => {

	const length: number = Math.ceil(productsProps.length / 6);

	const newPagination = pagination.filter(elem => elem.id <= length);

	return (
		<div className="pagination">
			<ul className="pagination__list">
				{
					newPagination.map(elem => {
						const { id, title } = elem;
						return (
							<li
								key={id}
								className={current === id ? "pagination__item _active" : "pagination__item"}
								onClick={() => funcPagination(id)}>{title}</li>
						);
					})
				}
			</ul>
		</div>
	)
}