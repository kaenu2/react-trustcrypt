import React from "react";
import { ITabs } from "../../modules";

interface Itabs {
	tabs: ITabs[],
	onTabAction: any,
}

export const Tabs = ({ tabs, onTabAction }: Itabs) => {
	return (
		<ul className="tabs__list">
			{
				tabs.map((tab: ITabs) => {
					const { id, label, active } = tab;
					return (
						<li
							key={id}
							onClick={() => onTabAction(id)}
							className={active ? "tabs__tab-item _active" : "tabs__tab-item"}>
							{label}
						</li>
					)
				})
			}
		</ul>
	)
}