const tabs = () => {
	const setActiveTab = (tabsSelector, tabSelector, tabsContentSelector, activeClassSelector) => {
		document.querySelector(tabsSelector).addEventListener('click', (event) => {
			if (event.target.parentElement.matches(tabSelector)) {
				document.querySelectorAll(tabSelector).forEach(item => item.classList.remove(activeClassSelector.slice(1)));
				event.target.parentElement.classList.add(activeClassSelector.slice(1));
				showActiveTabContent(tabsContentSelector, event.target.parentElement.dataset.tab, activeClassSelector);

			} else if (event.target.matches(tabSelector)) {
				document.querySelectorAll(tabSelector).forEach(item => item.classList.remove(activeClassSelector.slice(1)));
				event.target.classList.add(activeClassSelector.slice(1));
				showActiveTabContent(tabsContentSelector, event.target.dataset.tab, activeClassSelector);
			}			
		});
	};

	const showActiveTabContent = (tabsContentSelector, tabContentSelector, activeClassSelector) => {
		document.querySelectorAll(tabsContentSelector).forEach(tab => {
			tab.classList.remove(activeClassSelector.slice(1));

			if (tab.classList.contains(tabContentSelector)) {
				tab.classList.add(activeClassSelector.slice(1));
			}
		});
	};

	setActiveTab('.glazing_slider', '.glazing_block', '.glazing_content', '.active');

	setActiveTab('.balcon_icons', '.balcon_icons_img', '.balcon_content', '.do_image_more');

	setActiveTab('.decoration_slider', '.decoration_item', '.decoration_content', '.active');
};

export default tabs;
