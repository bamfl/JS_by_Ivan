'use strict';

const box = document.querySelector('.box'),
			button = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

// console.log(width, height);

button.addEventListener('click', () => {
	// box.style.height = `${height + 18}px`;
	// console.log(box.scrollTop);
	console.log(document.documentElement.scrollTop);
});

const style = window.getComputedStyle(box);
console.log(style);
console.log(style.display);

document.documentElement.scrollTop = 4000;
window.scrollBy(0,400);
window.scrollTo(0,400);