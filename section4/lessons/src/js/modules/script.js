'use strict';

// 51. JSON формат передачи данных, глубокое клонирование объектов
// const persone = {
// 	name: 'Alex',
// 	tel: '+744444444',
// 	parents: {
// 		mom: 'Toma',
// 		dad: 'Nickolay'
// 	}
// };

// console.log(JSON.stringify(persone)); // Превратить объект в JSON: {"name":"Alex","tel":"+744444444","parents":{"mom":"Toma","dad":"Nickolay"}}

// console.log(JSON.parse(JSON.stringify(persone))); // Превратить JSON в объект: { name: 'Alex', tel: '+744444444',parents:{mom:"Toma",dad:"Nickolay"} }

// const clone = JSON.parse(JSON.stringify(persone)); // Глубокое клонирование объекта
// clone.parents.mom = 'Tamara';

// console.log(persone);
// console.log(clone);

// 52. AJAX и общение с сервером
// const inputRub = document.querySelector('#rub'),
//     	inputUsd = document.querySelector('#usd');

// inputRub.addEventListener('input', () => {
// 	const request = new XMLHttpRequest();

// 	// Методы объекта XMLHttpRequest
// 	request.open('GET', 'current.json'); // (method. url, async(default = true), login, password)
// 	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
// 	request.send();

// 	// Свойства объекта XMLHttpRequest: (status, statusText, response, readyState и др.)
// 	// console.log(request);

// 	// События объекта XMLHttpRequest: (load, start, readystatechange)
// 	request.addEventListener('load', () => {
// 		if (request.status === 200) {
// 			const data = JSON.parse(request.response);

// 			inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
// 		} else {
// 			inputUsd.value = 'Ошибка';
// 		}
// 	});
// });

// 55. Promise (ES6)
// Callback hell:
// console.log('Запрос на сервер...');

// setTimeout(() => {
// 	console.log('Сервер получил запрос...');

// 	const serverData = {
// 		port: 8800,
// 		active: true
// 	};

// 	setTimeout(() => {
// 		console.log('Ответ сервера:', serverData);
// 	}, 2000);
// }, 2000);

// Promise:
// console.log('Запрос на сервер...');

// const request = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('Сервер получил запрос...');
	
// 		const serverData = {
// 			port: 8800,
// 			active: true
// 		};
	
// 		resolve(serverData);
// 	}, 2000);
// });

// request.then((serverData) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			serverData.add = 'added';
// 			resolve(serverData); // Успешный запрос
// 			reject(); // Неуспешный запрос
// 		}, 2000);
// 	});	
// }).then((serverData) => {
// 	serverData.modify = true;
// 	return serverData;
// }).then((serverData) => {
// 	console.log('Ответ сервера:', serverData);
// }).catch(() => {
// 	console.error('Ошибка');
// }).finally(() => { // Будет работать при любом сценарии (всегда), например, очистка формы
// 	console.log('Finally');
// });

// const test = time => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve();
// 		}, time);
// 	});
// };

// test(1000).then(() => console.log('Test success, 1000 ms'));
// test(2000).then(() => console.log('Test success, 2000 ms'));

// // Подождать исполнения всех Promise, т.е. ждем самого долгого
// Promise.all([test(1000), test(5000)]).then(() => {
// 	console.log('All');
// });

// // Срабатывает после исполнения самомого быстрого Promise, остальных не ждет
// Promise.race([test(1000), test(5000)]).then(() => {
// 	console.log('Race');
// });

// 56. Fetch API
	// GET
	// fetch('https://jsonplaceholder.typicode.com/todos/1')
	// 	.then(jsonResponse => jsonResponse.json()) // превратить json в объект, и дальше вернуть Promise
	// 	.then(object => console.log(object));

	// POST
	// fetch('https://jsonplaceholder.typicode.com/posts', {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-type': 'application/json'
	// 	},
	// 	body: JSON.stringify({
	// 		name: 'Dima'
	// 	})
	// })
	// .then(jsonResponse => jsonResponse.json())
	// .then(object => console.log(object));

// 57. Методы перебора массивов

// Возвращают новый массив:

// 1. filter
// const names = ['Ivan', 'Anna', 'Ksenia', 'Volandemort'];
// const shortNames = names.filter(name => name.length < 5);
// console.log(shortNames);

// // 2. map
// const answers = ['IvAn', 'AnnA', 'KseniA', 'VolAndemort'];
// const result = answers.map(item => item.toLowerCase());
// console.log(result);

// // 3. some
// const some = [4, 'sffsd', 'dgdgf'];
// console.log(some.some(item => typeof item === 'number'));

// // 4. every
// const every = [4, 'sffsd', 'dgdgf'];
// console.log(every.every(item => typeof item === 'number'));

// 5. reduce (уменьшить)
// const arr = [4, 5, 1, 3, 2, 6];
// let summ = 0;

// arr.forEach((value) => {
// 	summ += value;
// });

// console.log(summ);

// const arr = [4, 5, 1, 3, 2, 6];
// const res = arr.reduce((summ, current) => summ + current);

// const arr = ['apple', 'orange', 'pear'];
// const res = arr.reduce((summ, current) => `${summ}, ${current}`);
// console.log(res);

// const obj = {
// 	ivan: 'persone',
// 	ann: 'persone',
// 	dog: 'animal',
// 	cat: 'animal'
// };

// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]);

// console.log(newArr);

// 64. Как сохранить данные без БД. Работа с localStorage
// localStorage.setItem('number', 555);
// console.log(localStorage.getItem('number'));
// localStorage.removeItem('number');
// localStorage.clear();

// const checkbox = document.querySelector('#checkbox'),
//       form = document.querySelector('form'),
// 			btn = document.querySelector('#color');

// let isChecked = localStorage.getItem('isChecked');
// isChecked === 'true' ? checkbox.checked = isChecked : checkbox.checked = false;

// checkbox.addEventListener('change', (event) => {
// 	isChecked = event.target.checked;
// 	localStorage.setItem('isChecked', isChecked);
// 	checkbox.checked = isChecked;
// });


// let isColored = localStorage.getItem('bg');
// isColored === 'red' ? form.style.backgroundColor = isColored : form.style.backgroundColor = '#ffffff';

// btn.addEventListener('click', () => {
// 	if (localStorage.getItem('bg') === 'red') {
// 		localStorage.setItem('bg', '#ffffff');
// 	} else {
// 		localStorage.setItem('bg', 'red');
// 	}
	
// 	isColored = localStorage.getItem('bg');

// 	form.style.backgroundColor = isColored;
// });

// const persone = {
// 	name: 'Dima',
// 	age: 26,
// 	dickLength: 17
// };

// localStorage.setItem('Dima', JSON.stringify(persone));
// console.log(JSON.parse(localStorage.getItem('Dima')));

// summ 1 to 10
// let counter = 1;
// let summ = 0;

// while (counter < 11) {
// 	summ = summ + counter;
// 	counter++;
// }

// console.log(summ);

// 65. Регулярные выражения
// 1. search
// const answer = prompt('Enter the name', '');

// const reg = /n/i;

// console.log(answer.search(reg));

// 2. match
// console.log(answer.match(/n/ig));

// 3. replace
// console.log(answer.replace(/n/ig, '*'));
// console.log('12-34-56'.replace(/\-/g, ':'));

// 4 test
// console.log(reg.test(answer));

// i- любой регистр
// g - все совпадения
// m - многостройчный режим

// /\d/ - ищем цифры
// /\w/ - ищем буквы
// /\s/ - ищем пробелы
// console.log(answer.match(/\d/));

// /\D/ - ищем не цифры
// /\W/ - ищем не буквы
// /\S/ - ищем не пробелы

// 68. Геттеры и сеттеры (свойства объектов)
// const persone = {
// 	name: 'Dmitriy',
// 	sername: 'Petukhov',

// 	get fullName() {
// 		return `${this.name} ${this.sername}`;
// 	},

// 	set fullName(value) {
// 		[this.name, this.sername] = value.split(' ');
// 	}
// };

// console.log(persone.fullName); // get

// persone.fullName = 'Ksenia Petukhova'; // set
// console.log(persone.fullName);

// 69. Инкапсуляция
// function User(name, age) {
// 	this.name = name;
// 	// this.age = age;
// 	let userAge = age;

// 	this.say = function() {
// 		console.log(this.name, userAge);
// 	};

// // 69. Инкапсуляция - принцип ООП. 
// // Отделение и сокрытие внутренних данных программы (переменных, функций) от внешнего мира. 
// // Только методы объекта имеют доступ к его изменению.

// // 1. Для функций-конструкторов
// function User(name, age) {
// 	this.name = name;	
// 	let userAge = age; // переменная userAge недоступна вне блока, поэтому к ней нет доступа

// 	this.showUser = function() {
// 		console.log(this.name, userAge);
// 	};

// 	// делаем отдельный метод-геттер для получения свойства userAge
// 	this.getAge = function() {
// 		return userAge;
// 	};

// 	this.setAge = function(value) {
// 		if (typeof value === 'number') {
// 			userAge = value;
// 		} else {
// 			console.log('Не число');
// 		}
// 	};
// }

// const dima = new User('Dima', 26);
// dima.name = 'Ksenia';
// dima.userAge = 30;

// dima.say();

// dima.setAge(55);
// console.log(dima.getAge());

// function User(name, age) {
// 	this.name = name;
// 	// this.age = age;
// 	let userAge = age;

// 	this.say = function() {
// 		console.log(this.name, userAge);
// 	};

// 	this.getAge = function() {
// 		return userAge;
// 	};

// 	this.setAge = function(value) {
// 		if (typeof value === 'number') {
// 			userAge = value;
// 		} else {
// 			console.log('Не число');
// 		}
// 	};
// }

// class User {
// 	constructor(name, age) {
// 		this.name = name;
// 		this._userAge = age;
// 	}

// 	say() {
// 		console.log(this.name, this._userAge);
// 	}

// 	get age() {
// 		return this._userAge;
// 	}

// 	set age(value) {
// 		if (typeof value === 'number') {
// 			this._userAge = value;
// 		} else {
// 			console.log('Не число');
// 		}
// 	}
// }

// const dima = new User('Dima', 26);
// dima.name = 'Ksenia';
// dima.age = 30;

// dima.say();
// 	// делаем отдельный метод-сеттер для установки нового значения свойства userAge
// 	this.setAge = function(newAge) {
// 		userAge = newAge;
// 	};
// }

// const dima = new User('Dmitriy', 26);

// console.log(dima.userAge); // undefined - нет доступа к свойству userAge напрямую
// dima.showUser(); // но при обращении через метод значение свойства доступно

// console.log(dima.getAge()); // вызываем метод-геттер для получения свойства userAge
// dima.setAge(100); // вызываем метод-сеттер для установки нового значения свойства userAge
// console.log(dima.getAge()); // вызываем метод-геттер для получения свойства userAge

// // 2.1 Для классов с префиксом (лодаш)
// class topUser {
// 	constructor(name, age) {
// 		this.name = name;
// 		this._age = age;
// 	}

// 	// метод объекта
// 	showUser() {
// 		console.log(this.name, this._age);
// 	}

// 	// создание геттера, свойство age становится доступным
// 	get age() {
// 		return this._age;
// 	}

// 	// создание сеттера, свойство age становится изменяемым
// 	set age(newAge) {
// 		this._age = newAge;
// 	}
// }

// const ksenia = new topUser('Ksenia', 30);

// // console.log(ksenia.age); // undefined - если нет геттера, то нет доступа к свойству age напрямую из-за префикса _age
// console.log(ksenia._age); // но при обращении с префиксом свойство доступно

// console.log(ksenia.age); // при создании геттера свойство age становится доступным
// ksenia.age = 50; // использование сеттера, свойство age изменяется

// ksenia.showUser();

// // 2.2 Для классов с полями классов (#)
// class bestUser {
// 	constructor(name, age) {
// 		this.name = name;
// 		this._age = age;
// 	}

// 	// приватное св-во пишется вне конструктора
// 	#sername = 'Petukhova'; 

// 	// метод объекта
// 	showUser() {
// 		console.log(this.name, this.#sername, this._age);
// 	}

// 	// создание геттера, свойство age становится доступным
// 	get age() {
// 		return this._age;
// 	}

// 	// создание сеттера, свойство age становится изменяемым
// 	set age(newAge) {
// 		this._age = newAge;
// 	}

// 	// создание геттера приватному свойству #sername, оно становится доступным
// 	get sername() {
// 		return this.#sername;
// 	}

// 	// создание cеттера приватному свойству #sername, можно поменять значение
// 	set sername(newSername) {
// 		this.#sername = newSername;
// 	}
// }

// const maryana = new bestUser('Maryana', 30);

// // console.log(maryana.age); // undefined - если нет геттера, то нет доступа к свойству age напрямую из-за префикса _age
// console.log(maryana._age); // но при обращении с префиксом свойство доступно

// console.log(maryana.age); // при создании геттера свойство age становится доступным
// maryana.age = 3; // использование сеттера, свойство age изменяется

// console.log(maryana.sername); // undefined, нужно создать геттер
// // console.log(maryana.#sername); // приватное свойство не может быть доступно, нужно создать геттер

// console.log(maryana.sername); // при создании геттера свойство #sername становится доступным
// maryana.sername = 'Kolganova'; // // использование сеттера, свойство #sername изменяется

// maryana.showUser();

// 70. Прием модуль, как и зачем его использовать
// const app = 60; // ошибка - в lib.js уже была объявлена переменная app

// // Способы создания модулей (смотри использование в lib.js):

// // 1. Использовать анонимную самовызывающуюся функцию
// const num = 1;

// // Анонимная самовызывающаяся функция
// (function() {
// 	let num = 10;
// 	console.log(num);
// 	console.log(num + 10);
// }());

// console.log(num);

// // 2. Использование объектного интерфейса
// const user = (function(){
// 	const privat = function() {
// 		console.log('I am privat');
// 	};

// 	return {
// 		sayHello: privat
// 	};
// }());

// user.sayHello();

// 71. Webpack. Собираем наш проект

// 75. Ошибки. Как избежать “поломки” своего кода
try {
	const btn = document.queryselector('.mybtn');
	console.log(btn);
} catch(error) {
	console.error(error, 'Выполняется при ошибке');
} finally {
	console.log('Finally всегда выполняется');
}

console.log('Далее код выполняется, а не останавливается');
