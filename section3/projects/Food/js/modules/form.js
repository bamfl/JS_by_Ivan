function form() {
	// 53. Реализация скрипта отправки данных на сервер
	const forms = document.querySelectorAll('form');

	const showThanksModal = (message) => {
		const modalContent = modalWindow.querySelector('.modal__content > form');
		modalContent.style.cssText = 'display: none';

		const modalSuccessDiv = document.createElement('div');
		modalSuccessDiv.innerHTML = `<h1>${message}</h1>`;	
		modalWindow.querySelector('.modal__content').append(modalSuccessDiv);

		setTimeout(() => {
			modalContent.style.cssText = '';
			modalSuccessDiv.remove();
			closeActions();
		}, 2000);
	};

	const postData = async (url, method, body) => {
		const response = await fetch(url, {
			method: method,
			headers: {
				'Content-Type': 'application/json'
			},
			body: body
		});

		return await response.json();
	};

	const bindPostData = (form) => {
		form.addEventListener('submit', (event) => {
			event.preventDefault();

			const modalContent = modalWindow.querySelector('.modal__content > form');
			modalContent.style.cssText = 'display: none';

			const spinner = document.createElement('img');
			spinner.src = `img/spinner.svg`;
			spinner.style.cssText = 'display: block; width: 40px; height: 40px; margin: 0 auto;';
			modalWindow.querySelector('.modal__content').append(spinner);

			const formData = new FormData(form);
			// const jsonObject = {};
	
			// formData.forEach((value, key) => {
			// 	jsonObject[key] = value;
			// });
			
			// const jsonData = JSON.stringify(jsonObject);

			const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));

			postData('http://localhost:3000/requests', 'POST', jsonData)
			.then(jsonData => {
				console.log(jsonData);
				showThanksModal('Успешно отправлено!!!');
				spinner.remove();
			})
			.catch(() => {
				showThanksModal('Не отправлено, ошибка!!!');
				spinner.remove();
			})
			.finally(() => {
				form.reset();
			});
		});		
	};

	forms.forEach(form => {
		bindPostData(form);
	});
}

module.exports = form;