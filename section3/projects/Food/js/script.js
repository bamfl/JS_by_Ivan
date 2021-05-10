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
		const timerId = setInterval(timeCounter, 100000);

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

	// const getData = async (url) => {
	// 	const response = await fetch(url);

	// 	if (response.status !== 200) {
	// 		throw new Error(`Can't fetch ${url}, status: ${response.status}`);
	// 	}

	// 	return await response.json();
	// };

	axios.get('http://localhost:3000/menu')
	.then(({data}) => {
		data.forEach(({img, altimg, title, descr, price}) => {
			new Card(
				img,
				altimg,
				title,
				descr,
				price,
				'.menu__field .container'
			).render();
		});
	});

	// getData('http://localhost:3000/menu')
	// .then(objectMenu => {
	// 	objectMenu.forEach(({img, altimg, title, descr, price}) => {
	// 		new Card(
	// 			img,
	// 			altimg,
	// 			title,
	// 			descr,
	// 			price,
	// 			'.menu__field .container'
	// 		).render();
	// 	});
	// });

	// const fitnessCard = new Card('img/tabs/vegy.jpg', 'vegy', 'Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и	здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 8.48, '.menu__field .container');
	// const premiumCard = new Card('img/tabs/elite.jpg', 'elite', 'Меню “Премиум”', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд.	Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 20.37, '.menu__field .container');
	// const postCard = new Card('img/tabs/post.jpg', 'post', 'Меню "Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения,	молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных	вегетарианских стейков.', 15.93, '.menu__field .container');

	// fitnessCard.render();
	// premiumCard.render();
	// postCard.render();

	// или другой синтаксис
	// new Card(
	// 	'img/tabs/vegy.jpg',
	// 	'vegy',
	// 	'Меню "Фитнес"',
	// 	'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и	здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
	// 	8.48,
	// 	'.menu__field .container'
	// ).render();
	
	// new Card(
	// 	'img/tabs/elite.jpg',
	// 	'elite',
	// 	'Меню “Премиум”',
	// 	'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд.	Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
	// 	20.37,
	// 	'.menu__field .container'
	// ).render();

	// new Card(
	// 	'img/tabs/post.jpg',
	// 	'post',
	// 	'Меню "Постное"',
	// 	'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения,	молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных	вегетарианских стейков.',
	// 	15.93,
	// 	'.menu__field .container'
	// ).render();

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

	// 56. Fetch API
	// GET
	// fetch('https://jsonplaceholder.typicode.com/todos/1')
	// 	.then(jsonResponse => jsonResponse.json()) // превратить json в объект, и дальше вернуть Promise
	// 	.then(object => console.log(object));

	// POST
	// fetch('https://jsonplaceholder.typicode.com/posts', {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-Type': 'application/json'
	// 	},
	// 	body: JSON.stringify({
	// 		name: 'Dima'
	// 	})
	// })
	// .then(jsonResponse => jsonResponse.json())
	// .then(object => console.log(object));

	// 61. Создаем слайдер на сайте, вариант 1
	const prevArrow = document.querySelector('.offer__slider-prev'),
				nextArrow = document.querySelector('.offer__slider-next'),
				currentSlideNumber = document.querySelector('#current'),
				totalSlideNumber = document.querySelector('#total'),
				slides = document.querySelectorAll('.offer__slide'),
				slidesWrapper = document.querySelector('.offer__slider-wrapper'),
				slidesInner = document.querySelector('.offer__slider-inner');

	let counter = 4;	

	slidesWrapper.style.cssText = 'overflow: hidden; height: 390px; position: relative';	

	const carouselIndicators = document.createElement('div');
	carouselIndicators.classList.add('carousel-indicators');
	slidesWrapper.append(carouselIndicators);

	const sliderNav = (counter) => {
		if (counter + 1 < 10) {
			currentSlideNumber.innerHTML = `0${counter + 1}`;
		} else {
			currentSlideNumber.innerHTML = counter + 1;
		}

		if (slides.length < 10) {
			totalSlideNumber.innerHTML = `0${slides.length}`;
		} else {
			totalSlideNumber.innerHTML = slides.length;
		}
	};

	const renderSlide = (counter) => {
		sliderNav(counter);

		carouselIndicators.innerHTML = '';

		slides.forEach((slide, idx) => {
			slide.style.cssText = 'min-width: 100%';

			const dot = document.createElement('div');
			dot.classList.add('dot');
			carouselIndicators.append(dot);

			if (counter === idx) {
				dot.classList.add('active');
			}

			dot.addEventListener('click', (event) => {

				dot.classList.remove('active');

				if (event.target === dot) {
					counter = idx;
					renderSlide(counter);
				}
			});
		});		


		slidesInner.style.cssText = `display: flex; transition: all 0.5s; transform: translate(-${counter * 100}%, 0);`;		
	};

	renderSlide(counter);

	nextArrow.addEventListener('click', () => {
		if (counter + 1 < slides.length) {
			counter++;
		} else {
			counter = 0;
		}
		renderSlide(counter);
	});

	prevArrow.addEventListener('click', () => {
		if (counter > 0) {
			counter--;
		} else {
			counter = slides.length - 1;
		}
		renderSlide(counter);
	});

	// 66. Создаем калькулятор на сайте, часть 1
	let calculatingResult = document.querySelector('.calculating__result span'),
			sex = document.querySelector('#gender'),
			activity = document.querySelector('#activity'),
			height = document.querySelector('#height'),
			weight = document.querySelector('#weight'),
			age = document.querySelector('#age'),
			sexValue = 'female',
			activityValue = 1.375,
			heightValue = 160,
			weightValue = 50,
			ageValue = 25;

	const calcResult = (sexValue, height, weight, age, activityValue) => {
		console.log(sexValue, heightValue, weightValue, ageValue, activityValue);

		if (sexValue && height && weight && age && activityValue) {
			if (sexValue === 'female') {
				calculatingResult.innerHTML = +((447.6 + (9.2 * weightValue) + (3.1 * heightValue) - (4.3 * ageValue)) * activityValue).toFixed(0);
			} else if ((sexValue === 'male')) {
				calculatingResult.innerHTML = +((88.36 + (13.4 * weightValue) + (4.8 * heightValue) - (5.7 * ageValue)) * activityValue).toFixed(0);
			}
		}
	};

	const getBtnData = (parentDiv) => {
		parentDiv.addEventListener('click', (event) => {
			const childItems = parentDiv.querySelectorAll('div');

			childItems.forEach(item => {
				item.classList.remove('calculating__choose-item_active');

				if (item === event.target) {
					item.classList.add('calculating__choose-item_active');
				}
			});

			if (event.target.dataset.activity) {
				activityValue = event.target.dataset.activity;			
			} else {
				sexValue = event.target.id;	
			}

			calcResult(sexValue, heightValue, weightValue, ageValue, activityValue);
		});
	};

	const getInputData = (input) => {
		input.addEventListener('input', (event) => {
			input.classList.add('calculating__choose-item_active');

			if (event.target.id === 'height') {
				heightValue = input.value;
			} else if (event.target.id === 'weight') {
				weightValue = input.value;
			} else if (event.target.id === 'age') {
				ageValue = input.value;
			}

			calcResult(sexValue, heightValue, weightValue, ageValue, activityValue);
		});

	};

	calcResult(sexValue, heightValue, weightValue, ageValue, activityValue);

	getBtnData(sex);
	getBtnData(activity);
	getInputData(height);
	getInputData(weight);
	getInputData(age);
});
