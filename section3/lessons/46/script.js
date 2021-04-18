"use strict";

// 1. Обычные функции. this = window или undefined в 'use strict'
// function showThis(a, b) {
// 	console.log(this);

// 	function summ() {
// 		console.log(this);
// 		return a + b;
// 	}

// 	console.log(summ());	
// }

// showThis(4, 5);


// 2. Методы объектов. this = самому объекту
// const obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function() {
// 		console.log(this);

// 		function shout() {
// 			console.log(this);
// 		}

// 		shout();
// 	}
// };

// obj.sum();

// 3. Функции конструкторы и классы. this = новому экземпляру объекта
// const User = function(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function() {
// 		console.log(`Привет ${this.name}`);
// 	};
// };

// const dima = new User('Dima', 27);
// dima.hello();

// 4. Ручное присваивание this функции
// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name, surname);
// }

// const user = {
// 	name: 'John'
// };

// // 4.1
// sayName.call(user, 'Smith');
// // 4.2
// sayName.apply(user, ['Smith']);

// // 4.3
// function count(num) {
// 	return this * num;
// }

// const doubleCount = count.bind(2);

// console.log(doubleCount(10));

const btn = document.querySelector('button');

// btn.addEventListener('click', (event) => {
// 	console.log(this);
// 	console.log(event.target);
// });

const obj = {
	num: 5,
	sayNum: function() {
		const say = () => {
			console.log(this);
		};

		say();
	}
};

obj.sayNum();
