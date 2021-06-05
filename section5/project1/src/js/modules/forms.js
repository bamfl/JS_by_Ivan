function forms() {
	const postForm = (form) => {
		form.addEventListener('submit', (event) => {
			event.preventDefault();

			let messageDiv = document.createElement('div');
			messageDiv.innerHTML = 'Отправка данных';			
			form.append(messageDiv);

			const formData = new FormData(form);

			if (form[1].value.match(/\d/)) {
				fetch('./assets/server.php', {
					method: 'POST',
					body: formData
				})
				.then(() => {
					messageDiv.innerHTML = 'Данные успешно отправлены!';
				})
				.catch(error => {
					messageDiv.innerHTML = `Произошла ошибка ${error}`;
				})
				.finally(setTimeout(() => {
					form.reset();
					messageDiv.remove();
				}, 5000));
			} else {
				messageDiv.innerHTML = 'В телефоне допустимы только цифры';
				form[1].style.cssText = 'border: 2px solid red';

				setTimeout(() => {
					form[1].style.cssText = '';
					messageDiv.remove();
				}, 5000);
			}
		});
	};

	document.querySelectorAll('form').forEach(form => {
		postForm(form);
	});
}

export default forms;
