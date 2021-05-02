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
