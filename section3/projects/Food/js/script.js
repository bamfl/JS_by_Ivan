document.addEventListener('DOMContentLoaded', () => {
  const tabContent = document.querySelectorAll('.tabcontent'),
  			tabs = document.querySelectorAll('.tabheader__item'),
  			tabList = document.querySelector('.tabheader__items'),
				daysBox = document.getElementById('days'),
				hoursBox = document.getElementById('hours'),
				minutesBox = document.getElementById('minutes'),
				secondsBox = document.getElementById('seconds');

	// Tabs
  const removeClass = () => {
  	tabContent.forEach(item => {
  		item.classList.remove('tabcontent_active');
  	});

  	tabs.forEach(tab => {
  		tab.classList.remove('tabheader__item_active');
  	});
  };

  const addClass = (idx = 0) => {
  	tabContent[idx].classList.add('tabcontent_active');
  	tabs[idx].classList.add('tabheader__item_active');
  };

  removeClass();
  addClass();

  tabList.addEventListener('click', (event) => {
  	removeClass();
  	const target = event.target;

  	if (target && target.matches('.tabheader__item')) {

  		tabs.forEach((tab, idx) => {
  			if (target === tab) {
  				addClass(idx);
  			}
  		});
  	}
  });

	// Counter
	const deadline = new Date('2021-05-01T00:00');
	
	const timeCounter = () => {
		const nowDate = new Date();

		let timeDiff = new Date(deadline - nowDate);

		const getZero = num => {
			if (num <= 10) {
				return `0${num}`;
			} else {
				return num;
			}
		};

		if (timeDiff > 0) {
			daysBox.innerHTML = getZero(`${parseInt(timeDiff / (1000 * 60 * 60 * 24))}`);
			hoursBox.innerHTML = getZero(`${parseInt((timeDiff / (1000 * 60 * 60)) % 24)}`);
			minutesBox.innerHTML = getZero(`${parseInt((timeDiff / (1000 * 60)) % 60)}`);
			secondsBox.innerHTML = getZero(`${parseInt((timeDiff / 1000) % 60)}`);
		} else {
			daysBox.innerHTML = `00`;
			hoursBox.innerHTML = `00`;
			minutesBox.innerHTML = `00`;
			secondsBox.innerHTML = `00`;
			clearInterval(timerId);
		}
	};

	timeCounter();
	const timerId = setInterval(timeCounter, 1000);

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

	// 48. Классы ES6
	class Card {
		constructor(imageSrc, imageSrcAlt, title, descr, price, parentSelector, ...classes) {
			this.imageSrc = imageSrc;
			this.imageSrcAlt = imageSrcAlt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.classes = classes;
			this.parent = document.querySelector(parentSelector);
			this.transfer = 27;
			this.changeToUAH();
		}

		changeToUAH() {
			this.price = parseInt(this.price * this.transfer);
		}		

		render() {
			const div = document.createElement('div');

			if (this.classes.length > 0) {
				this.classes.forEach(className => div.classList.add(className));
			} else {
				div.classList.add('menu__item');
			}

			div.innerHTML = `
				<img src="${this.imageSrc}" alt="${this.imageSrcAlt}" />
				<h3 class="menu__item-subtitle">${this.title}</h3>
				<div class="menu__item-descr">${this.descr}</div>
				<div class="menu__item-divider"></div>
				<div class="menu__item-price">
					<div class="menu__item-cost">Цена:</div>
					<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
				</div>
			`;
			
			this.parent.append(div);
		}
	}

	function clearParent() {
		document.querySelector('.menu__field .container').innerHTML = '';
	}

	clearParent();

	// const fitnessCard = new Card('img/tabs/vegy.jpg', 'vegy', 'Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и	здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 8.48, '.menu__field .container');
	// const premiumCard = new Card('img/tabs/elite.jpg', 'elite', 'Меню “Премиум”', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд.	Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 20.37, '.menu__field .container');
	// const postCard = new Card('img/tabs/post.jpg', 'post', 'Меню "Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения,	молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных	вегетарианских стейков.', 15.93, '.menu__field .container');

	// fitnessCard.render();
	// premiumCard.render();
	// postCard.render();

	// или другой синтаксис
	new Card(
		'img/tabs/vegy.jpg',
		'vegy',
		'Меню "Фитнес"',
		'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и	здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
		8.48,
		'.menu__field .container'
	).render();
	
	new Card(
		'img/tabs/elite.jpg',
		'elite',
		'Меню “Премиум”',
		'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд.	Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
		20.37,
		'.menu__field .container'
	).render();

	new Card(
		'img/tabs/post.jpg',
		'post',
		'Меню "Постное"',
		'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения,	молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных	вегетарианских стейков.',
		15.93,
		'.menu__field .container'
	).render();

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

	const sendPostData = (form) => {
		form.addEventListener('submit', (event) => {
			event.preventDefault();

			const modalContent = modalWindow.querySelector('.modal__content > form');
			modalContent.style.cssText = 'display: none';

			const spinner = document.createElement('img');
			spinner.src = `img/spinner.svg`;
			spinner.style.cssText = 'diplay: block; width: 40px; height: 40px; margin: 0 auto;';
			modalWindow.querySelector('.modal__content').append(spinner);

			const request = new XMLHttpRequest();
			const postData = new FormData(form);
			const jsonObject = {};
	
			request.open('POST', 'server.php');
			request.setRequestHeader('Content-type', 'application/json');
	
			postData.forEach((value, key) => {
				jsonObject[key] = value;
			});
	
			const jsonData = JSON.stringify(jsonObject);
			console.log(jsonData);
			request.send(jsonData);

			request.addEventListener('load', () => {
				if (request.status === 200) {
					console.log(request.response);
					showThanksModal('Успешно отправлено!!!');
					spinner.remove();
				} else {
					showThanksModal('Не отправлено, ошибка!!!');
					spinner.remove();
				}
			});
		});		
	};	

	forms.forEach(form => {
		sendPostData(form);
	});
});
