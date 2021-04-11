// 39. Скрипты и время их выполнения. setTimeout и setInterval
// const btn = document.querySelector('.btn');

// const timeoutId = setInterval(() => {
// 	console.log(10);
// }, 1000);

// btn.addEventListener('click', () => {
// 	clearInterval(timeoutId);
// });

// setTimeout(() => {
// 	alert(20);
// }, 2000);

// const logger = (text) => {
// 	console.log(text);
// };

// setTimeout(logger, 1000, 'help');

// const intervalId = setInterval(() => {
// 	let num = 10;
// 	console.log(num);
// }, 1000);

// setInterval(() => {
// 	console.log(50);
// }, 1000);

// setInterval(logger, 1000, 'help');

// let id = setTimeout(function log() {
// 	console.log(300);
// 	id = setTimeout(log, 5000);
// }, 1000);

const box = document.querySelector('.box'),
			btn = document.querySelector('.btn');

let pos = 0;
let intervalId;

const anim = () => {	
	if (pos < 300) {
		pos++;
		box.style.top = `${pos}px`;
		box.style.left = `${pos}px`;
	} else {
		clearInterval(intervalId);
	}
};

btn.addEventListener('click', () => {
	intervalId = setInterval(anim, 5);
});

