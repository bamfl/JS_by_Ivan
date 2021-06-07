function gallery() {
	const setActiveItem = (itemSelector) => {
		document.querySelectorAll(itemSelector).forEach(item => {
			item.addEventListener('click', (event) => {
				item.classList.remove('active');
				
				if (event.target.matches('.gallery-item')) {
					event.target.classList.add('active');
				}
			});
		});
	};

	setActiveItem('.gallery-item');
}

export default gallery;