const currentProductsPageProducts = (id: number) => {
	return { type: 'CURRNET_PRODUCTS_PAGE_PRODUCTS', payload: id };
};
const updateActiveTabs = (id: number) => {
	return { type: 'UPDATE_ACTIVE_TABS', payload: id };
};
const currentNewsPageBlog = (id: number) => {
	return { type: 'CURRET_NEWS_PAGE_BLOG', payload: id };
};
const updateActiveTabsBlog = (id: number) => {
	return { type: 'UPDATE_ACTIVE_TABS_BLOG', payload: id };
};
const updateActiveTabsArticle = (id: number) => {
	return { type: 'UPDATE_ACTIVE_TABS_ARTICLE', payload: id };
};
const popUpState = () => {
	return { type: 'POP_UP_STATE' };
};



export {
	currentProductsPageProducts,
	updateActiveTabs,
	currentNewsPageBlog,
	updateActiveTabsBlog,
	updateActiveTabsArticle,
	popUpState,
};