function gallery() {
	const setActiveItem = (itemsSelector, itemSelector) => {
		document.querySelector(itemsSelector).addEventListener('click', (event) => {
			document.body.style.cssText = 'overflow: hidden';

			document.querySelectorAll(itemSelector).forEach(item => {
				item.classList.remove('active');

				if (item == event.target) {
					item.classList.add('active');		

					const bgImg = document.createElement('div');
					bgImg.classList.add('bg_img');
					bgImg.style.display = 'block';

					if (!item.previousElementSibling) {
						item.before(bgImg);
					}

					closeActiveItem('.bg_img');
				}
			});
		});
	};

	const closeActiveItem = (bgSelector) => {
		document.querySelector(bgSelector).addEventListener('click', () => {
			document.body.style.cssText = 'overflow: visible';
			document.querySelector(bgSelector).remove();
			document.querySelector(bgSelector).nextElementSibling.classList.remove('active');
		});
	};

	setActiveItem('.previews', '.preview');
}

export default gallery;