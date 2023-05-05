import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { IState, IContent } from '../../../../modules';
import GetService from '../../../../service';

export const CallForm = () => {
	const dispatch = useDispatch();
	const popUpState = useSelector((state: IState): boolean => state.popUp);

	function onActivePopUp() {
		dispatch({ type: 'POP_UP_STATE' });
	}

	const getService = new GetService();

	const [nameData, setNameData] = useState('');
	const [emailData, setEmailData] = useState('');
	const [companyData, setCompanyData] = useState('');
	const [commentsData, setCommentsData] = useState('');
	const [checkBoxData, setCheckBoxData] = useState(false);

	const onSubmitPostForm = (e: any): void => {
		e.preventDefault();

		if (checkBoxData && nameData && emailData) {
			const data = { name: nameData, email: emailData, company: companyData, comments: commentsData };
			getService.postUserInfo(data)
			onActivePopUp();
			if (popUpState) {
				setTimeout(() => {
					onActivePopUp();
				}, 2000)
			}
			setNameData('');
			setEmailData('');
			setCompanyData('');
			setCommentsData('');
			setCheckBoxData(false)
		} else {
		}
	}


	const contentHome = useSelector((state: IState): IContent[] => state.contentHome);
	const { id, title, info } = contentHome[4];
	return (
		<section
			className='page-callform-home callform-home'>
			<div className="callform-home__container _container">
				<div className="callform-home__title title">
					<h1 className='title__title'>{title}</h1>
				</div>
				<div className="callform-home__content">
					<form
						className='callform-home__form'
						onSubmit={(e) => onSubmitPostForm(e)}>
						<input onChange={(e) => { setNameData(e.target.value) }} className='callform-home__input' type="text" placeholder='Как к Вам обращаться?' value={nameData} required />
						<input onChange={(e) => { setCompanyData(e.target.value) }} className='callform-home__input' type="text" placeholder='Какую компанию Вы представляете?' value={companyData} required />
						<input onChange={(e) => { setEmailData(e.target.value) }} className='callform-home__input' type="email" placeholder='Адрес электронной почты' value={emailData} required />
						<textarea onChange={(e) => { setCommentsData(e.target.value) }} className='callform-home__input input-message' placeholder='Введите ваше сообщение' value={commentsData} />
						<div className='callform-home__input-checked'>
							<label className="switch">
								<input type="checkbox" onChange={(e) => { setCheckBoxData(prev => !prev) }} checked={checkBoxData} />
								<span className="slider round"></span>
							</label>
							<p>Я согласен на обработку персональных данных</p>
						</div>
						<button className='callform-home__btn btn-color'>Отправить данные</button>
					</form>
					<div className="callform-home__info">
						{
							info?.map(elem => {
								const { id, image, link, title } = elem;
								return (
									<a key={id} href={link}><img src={image} alt={title} />{title}</a>
								)
							})
						}
						<div>
							<iframe
								src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae57ba659f64e95caed5a0e2b37bdfa8f32acab89c3e03134624ad14cd052874b&amp;source=constructor">
							</iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}