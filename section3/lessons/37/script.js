// 37. ClassList и делегирование событий
const buttons = document.querySelectorAll('button'),
			wrapper = document.querySelector('.btn-block');

// console.log(buttons[0].classList.length);
// console.log(buttons[0].classList.item(1));
// console.log(buttons[1].classList.add('red'));
// console.log(buttons[0].classList.remove('blue'));
// console.log(buttons[0].classList.toggle('blue'));

// if (buttons[1].classList.contains('red')) {
// 	console.log('red');
// } else {
// 	console.log('нет класса red');
// }

// buttons[0].addEventListener('click', () => {
// 	if (buttons[1].classList.contains('red')) {
// 		buttons[1].classList.remove('red');
// 	} else {
// 		buttons[1].classList.add('red');
// 	}
// });

// buttons[0].addEventListener('click', () => {
// 	buttons[1].classList.toggle('red');
// });

// console.log(buttons[0].className);

// wrapper.addEventListener('click', (event) => {
// 	if (event.target && event.target.tagName === 'BUTTON') {
// 		console.log(event.target);
// 	}
// });

// wrapper.addEventListener('click', (event) => {
// 	if (event.target && event.target.matches('button.red')) {
// 		console.log(event.target);
// 	}
// });

// wrapper.addEventListener('click', (event) => {
// 	if (event.target.classList.contains('blue')) {
// 		console.log(event.target);
// 	}
// });

// buttons.forEach((btn) => {
// 	btn.addEventListener('click', (event) => {
// 		console.log(event.target);
// 	});
// });

wrapper.addEventListener('click', event => {
	if (event.target.matches('button')) {
		event.target.classList.add('red');
	}
});

const newBtn = document.createElement('button');
newBtn.classList.add('red');
wrapper.append(newBtn);
