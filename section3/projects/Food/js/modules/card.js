function card() {
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
}

export default card;
