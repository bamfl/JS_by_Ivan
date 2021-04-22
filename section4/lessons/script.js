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
const inputRub = document.querySelector('#rub'),
    	inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
	const request = new XMLHttpRequest();

	// Методы объекта XMLHttpRequest
	request.open('GET', 'current.json'); // (method. url, async(default = true), login, password)
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	request.send();

	// Свойства объекта XMLHttpRequest: (status, statusText, response, readyState)
	// console.log(request);

	// События объекта XMLHttpRequest: (load, start, readystatechange)
	request.addEventListener('load', () => {
		if (request.status === 200) {
			const data = JSON.parse(request.response);

			inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
		} else {
			inputUsd.value = 'Ошибка';
		}
	});
});