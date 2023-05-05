export interface IState {
	navMenu: INavMenu[],
	contentHome: IContent[],
	contentProducts: IContentProducts[],
	contentBlog: IContentProducts[],
	newsBlog: INewsBlog[],
	products: IProducts[],
	currentPageProducts: number,
	productsPerPageProducts: number,
	currentPageBlog: number,
	productsPerPageBlog: number,
	paginationPageProducts: IPagination[],
	tabsPageProducts: ITabs[],
	tabsPageBlog: ITabs[],
	footer: IFooter[],
	sponsor: ISponsor[],
	newTabs: ITabs[],
	popUp: boolean,
};

export interface INavMenu {
	id: number,
	name: string,
	link: string,
	label: string
}

export interface IAction {
	type: string,
	payload?: any
}

export interface IContent {
	id: number,
	title: string,
	description?: string,
	image?: string,
	swipers?: ISwapers[],
	images?: ISwapers[],
	products?: ISwapers[],
	info?: ISwapers[],
}

export interface ISwapers {
	id: number,
	image: string,
	title?: string,
	link?: string,
}

export interface IFooter {
	id: number,
	title: string,
}


export interface IContentProducts {
	id: number,
	title: string,
	descr: string,
}

export interface ITabs {
	id: number,
	label: string,
	active: boolean,
}

export interface IProducts {
	id: number,
	title: string,
	description: string,
	category: string,
	images: IImages[],
}

export interface IImages {
	id: number,
	image: string,
	label: string,
}

export interface IPagination {
	id: number,
	title: number,
}

export interface INewsBlog {
	id: number,
	title: string,
	description: string,
	image: string,
	views: number,
	category: string,
	date: string,
}

export interface ICategory {
	category: string,
	icon: string,
}

export interface ISponsor {
	id: number,
	title: string,
	img: string,
}

