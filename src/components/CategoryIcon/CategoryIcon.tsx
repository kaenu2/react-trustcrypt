import React from "react";

interface ICategoryIcon {
	str: string
}

export const CategoryIcon = ({ str }: ICategoryIcon) => {
	const checkIcon = (str: string) => {
		switch (str) {
			case 'Фишинг':
				return 'https://i.ibb.co/p0q81xR/Group.png';
			case 'Советы':
				return 'https://i.ibb.co/87XjWVp/Group-1.png';
			case 'Способы':
				return 'https://i.ibb.co/zQ710nc/Group-2.png';
			case 'Гейминг':
				return 'https://i.ibb.co/RSFMwbX/Group-3.png';
			case 'Безопасность':
				return 'https://i.ibb.co/Hpn0nhc/ic-baseline-gpp-good.png';
			case 'Разработка':
				return 'https://i.ibb.co/16v5x29/ic-outline-data-object.png';
		}
	}
	return (
		<img src={checkIcon(str)} alt={str} />
	)
}