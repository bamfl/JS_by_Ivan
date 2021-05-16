function modal() {
	// Modal
	const openModalBtns = document.querySelectorAll('[data-modalopen]'),
				closeModalBtn = document.querySelector('[data-modalclose]'),
				modalWindow = document.querySelector('.modal');

	const openActions = () => {
		document.body.style.cssText = 'overflow: hidden; width: 100%;';
		modalWindow.style.display = 'block';
		clearInterval(modalTimerId);
	};	

	const closeActions = () => {
		document.body.style.cssText = 'overflow: ""; width: ""';
		modalWindow.style.display = 'none';
	};

	openModalBtns.forEach((btn) => {
		btn.addEventListener('click', openActions);
	});

	closeModalBtn.addEventListener('click', closeActions);

	modalWindow.addEventListener('click', (event) => {
		if (event.target && event.target.matches('.modal')) {
			closeActions();
		}
	});

	document.addEventListener('keyup', (event) => {
		if (event.code === 'Escape' && modalWindow.style.display === 'block') {
			console.log('action');
			closeActions();
		}
	});

	const modalTimerId = setTimeout(openActions, 10000);

	const scrollModalOpen = () => {
		if (document.documentElement.scrollTop + document.documentElement.clientHeight >= document.body.scrollHeight) {
			openActions();
			document.removeEventListener('scroll', scrollModalOpen);	
		}
	};

	document.addEventListener('scroll', scrollModalOpen);
}

module.exports = modal;
