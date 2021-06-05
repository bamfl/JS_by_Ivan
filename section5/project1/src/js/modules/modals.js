function modals() {
	const openPopup = (btnSelector, popupSelector) => {
		document.querySelectorAll(btnSelector).forEach(btn => {
			btn.addEventListener('click', (event) => {
				event.preventDefault();
				document.querySelector(popupSelector).style.cssText = 'display: block';
			});
		});
	};

	const closePopup = (popupSelector) => {
		document.querySelector(popupSelector).addEventListener('click', (event) => {
			if (event.target.matches('strong') || event.target.matches(popupSelector)) {
				document.querySelector(popupSelector).style.cssText = 'display: none';
			}
		});
	};

	openPopup('.popup_engineer_btn', '.popup_engineer');
	closePopup('.popup_engineer');

	openPopup('.phone_link', '.popup');
	closePopup('.popup');
}

export default modals;