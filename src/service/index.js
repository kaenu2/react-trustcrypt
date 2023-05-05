export default class GetService {
	constructor() {
		this._apiurl = 'https://64465af1ee791e1e29fcd08a.mockapi.io/users';
	}

	onActivePopUp() {
		this.dispatch({ type: 'POP_UP_STATE' });
	}

	async postUserInfo(data) {
		const res = await fetch(this._apiurl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(data),
		});
		if (res.ok) {
		}
	}
}