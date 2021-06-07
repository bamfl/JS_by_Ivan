function tabs() {
	const setActiveTab = (tabsSelector, tabSelector, tabsContentSelector, activeClass) => {
		document.querySelector(tabsSelector).addEventListener('click', (event) => {
			if (event.target.parentElement.matches(tabSelector)) {
				document.querySelectorAll(tabSelector).forEach(item => item.classList.remove(activeClass));
				event.target.parentElement.classList.add(activeClass);
				showActiveTabContent(tabsContentSelector, event.target.parentElement.dataset.tab, activeClass);

			} else if (event.target.matches(tabSelector)) {
				document.querySelectorAll(tabSelector).forEach(item => item.classList.remove(activeClass));
				event.target.classList.add(activeClass);
				showActiveTabContent(tabsContentSelector, event.target.dataset.tab, activeClass);
			}			
		});
	};

	const showActiveTabContent = (tabsContentSelector, tabContentSelector, activeClass) => {
		document.querySelectorAll(tabsContentSelector).forEach(tab => {
			tab.classList.remove(activeClass);

			if (tab.classList.contains(tabContentSelector)) {
				tab.classList.add(activeClass);
			}
		});
	};

	setActiveTab('.glazing_slider', '.glazing_block', '.glazing_content', 'active');

	setActiveTab('.balcon_icons', '.balcon_icons_img', '.balcon_content', 'do_image_more');

	setActiveTab('.decoration_slider', '.decoration_item', '.decoration_content', 'active');
}

export default tabs;
