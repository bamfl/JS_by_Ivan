// 31. События и их обработчики

// 1. Устаревший метод inline <button onclick="alert(1)" id="btn">Нажми меня</button>

// 2 Устаревший метод
// const btn = document.querySelector('button');

// btn.onclick = () => {
// 	alert(10);
// };

// Перезаписывается alert
// btn.onclick = () => {
// 	alert(100);
// };

// 3. Современные методы
// const wrp = document.querySelector('.wrp');
// const btn = wrp.querySelector('button');

// btn.addEventListener('click', () => {
// 	alert(10);
// });

// // Alert не перезаписывается, а события происходят последовательно
// btn.addEventListener('click', () => { // click
// 	alert('click');
// });

// btn.addEventListener('mouseenter', () => { // hover
// 	console.log('hover');
// });

// btn.addEventListener('mouseenter', (event) => { // event 
// 	console.log(event); // событие
// 	console.log(event.type); // event.type: "mouseenter"
// 	console.log(event.target); // event.target: button
// 	event.target.remove();
// });

// let i = 0;

// const delElement = event => {
// 	console.log(event.target);
// 	i++;

// 	if (i === 1) {
// 		btn.removeEventListener('click', delElement); // Удалить обработчик событий
// 	}
// };

// btn.addEventListener('click', delElement); // Назначить обработчик событий

// const delElement = event => {
// 	// console.log(event.target);
// 	console.log(event.currentTarget); // Всплытие событий
// 	console.log(event.type);
// };

// // Всплытие событий
// wrp.addEventListener('click', delElement); // Затем на родитедбском
// btn.addEventListener('click', delElement); // Собитие срабатывает сначала на вложенном элменте

// // Отмена default поведения элементов
// let link = document.querySelector('a');

// link.addEventListener('click', (event) => {
// 	event.preventDefault(); // Отмена default поведения элементов

// 	console.log(event.target);
// });

// Событие на несколько элементов
const buttons = document.querySelectorAll('button');

const alertTen = () => alert(10);

buttons.forEach(btn => {
	btn.addEventListener('click', alertTen, {once: true}); // один раз
});

// for (let btn of buttons) {
// 	btn.addEventListener('click', alertTen);
// }