function slider() {
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
}

module.exports = slider;