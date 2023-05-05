import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { IState } from "../../modules";

import "./PopUpMessage.scss"

interface IPopUpMessage {
	text: string,
}


export const PopUpMessage = ({ text }: IPopUpMessage) => {
	const state = useSelector((state: IState): boolean => state.popUp);
	const dispatch = useDispatch();

	function onActivePopUp() {
		dispatch({ type: 'POP_UP_STATE' });
	}
	return (
		<div
			className={state ? "pop-up__modal _active" : "pop-up__modal"}
			onClick={() => onActivePopUp()}>
			<div className={state ? "pop-up__dialog _active" : "pop-up__dialog"}>
				{text}
			</div>
		</div>
	)
}