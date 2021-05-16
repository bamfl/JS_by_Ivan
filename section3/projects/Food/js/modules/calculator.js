function calculator() {
	// 66. Создаем калькулятор на сайте, часть 1
	let calculatingResult = document.querySelector('.calculating__result span'),
			sex = document.querySelector('#gender'),
			activity = document.querySelector('#activity'),
			height = document.querySelector('#height'),
			weight = document.querySelector('#weight'),
			age = document.querySelector('#age'),
			sexValue,
			activityValue,
			heightValue = 160,
			weightValue = 50,
			ageValue = 25;

	if (localStorage.getItem('sexValue')) {
		sexValue = localStorage.getItem('sexValue');
	} else {
		sexValue = 'female';
		localStorage.setItem('sexValue', sexValue);
	}

	if (localStorage.getItem('activityValue')) {
		activityValue = localStorage.getItem('activityValue');
	} else {
		activityValue = 1.375;
		localStorage.setItem('activityValue', activityValue);
	}

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

	const setActiveClass = (parentDiv) => {
		const childItems = parentDiv.querySelectorAll('div');

		childItems.forEach(item => {
			item.classList.remove('calculating__choose-item_active');

			if (item.id === localStorage.getItem('sexValue')) {
				item.classList.add('calculating__choose-item_active');
			}

			if (item.dataset.activity === localStorage.getItem('activityValue')) {
				item.classList.add('calculating__choose-item_active');
			}
		});
	};

	const getBtnData = (parentDiv) => {
		parentDiv.addEventListener('click', (event) => {			
			if (event.target.dataset.activity) {
				activityValue = event.target.dataset.activity;
				localStorage.setItem('activityValue', activityValue);			
			} else {
				sexValue = event.target.id;	
				localStorage.setItem('sexValue', sexValue);
			}

			setActiveClass(parentDiv);
			calcResult(sexValue, heightValue, weightValue, ageValue, activityValue);
		});
	};

	const getInputData = (input) => {
		input.addEventListener('input', (event) => {
			if (input.value.match(/\D/g)) {
				input.style.border = '1px solid red';
				input.classList.remove('calculating__choose-item_active');
			} else {
				input.style.border = '';
				input.classList.add('calculating__choose-item_active');
			}

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

	setActiveClass(sex);
	setActiveClass(activity);
	getBtnData(sex);
	getBtnData(activity);
	getInputData(height);
	getInputData(weight);
	getInputData(age);
}

module.exports = calculator;