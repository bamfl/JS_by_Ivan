'use strict';

// const user = {
// 	name: 'Dima'
// };

// user.name = 'Ksenia';
// console.log('Hello,', user.name);

// const userAge = 26;
// console.log('Age is', userAge);

// 6. Классификация типов данных в JavaScript

// let num = 10;.

// console.log(-num / 0);
// console.log('num' * 0);

// const obj = {
// 	name: 'Dima',
// 	age: 26
// };

// console.log(obj['name']);
// console.log(obj.name);

// let arr = ['apple', 15, true];

// console.log(arr);
// console.log(arr[1]);

// console.log(typeof arr);

// alert('Здарова, ёпта!');

// const result = confirm('Had sex?');
// console.log(result);

// const answer = prompt('Как дела?', 'норм');
// console.log(typeof answer);

// let arr2 = [];
// arr2[0] = result;
// arr2[1] = answer;
// arr2[2] = prompt('Пол', 'М');

// console.log(arr2);
// let way = prompt('Куда идти?');

// if (way) {
// 	alert(`Я вас не звал, идите ${way}`);
// }

// 13. Условия

// const num = +prompt('Введите число', '');

// // if (num < 10) {
// // 	alert('Маленькое');
// // } else if (num < 50) {
// // 	alert('Среднее');
// // } else {
// // 	alert('Большое');
// // }

// num > 100 ? console.log('Огромное') : console.log('Норм');

// switch (num) {
// 	case 50:
// 		alert(50);
// 		break;

// 	case 100:
// 		alert(100);
// 		break;

// 	default:
// 		alert('null')
// 		break;
// }

// 14. Циклы

// let num = 56;

// while (num <= 55) {
// 	alert(num);
// 	num++;
// }

// do {
// 	alert(num);
// 	num++;
// } while (num <= 55);

// for (let i = 0; i < 5; i++) {
// 	if (i === 3) {
// 		alert('Finish');
// 		break;
// 		// continue;
// 	}
// 	alert(i);
// }

// function showNum(num) {
// 	return num + num;
// }

// let outsideNum = showNum(10);

// // alert(outsideNum);

// const showTwo = function() {
// 	alert(2);
// };

// // showTwo();

// const arr = (a, b) => a + b;

// // alert(arr(4, 6));

// const bigArr = (a, b) => {
// 	return a + b;
// };

// let ret = bigArr(3, 7);

// alert(ret);

// 19. Callback- функции

// const showOne = (callback) => {
// 	callback();
// 	console.log(1);
// };

// const showTwo = () => {
// 	console.log(2);
// };

// showOne(showTwo);

// 20. Объекты, деструктуризация объектов (ES6)

// const obj = {
// 	name: 'Dmitriy',
// 	height: 900,
// 	width: 900,
// 	color: {
// 		border: 'black',
// 		bg: 'white'
// 	},
// 	showTen: function() {
// 		console.log(10);
// 	}
// };

// // delete obj.height; // Удалить св-во у объекта

// for (let key in obj) {
// 	if (typeof obj[key] === 'object') {
// 		for (let i in obj[key]) {
// 			console.log(`У свойства ${i} значение ${obj[key][i]}`);
// 		}
// 	} else {
// 		console.log(`У свойства ${key} значение ${obj[key]}`);
// 	}
// }

// console.log(Object.keys(obj)); // Ключи объекта

// console.log(Object.keys(obj).length); // Количество свойств у объекта

// let borderWrong = obj['color']['border']; // Вместо этого используем деструктуризацию
// let { border, bg } = obj.color; // Деструктуризация обекта (ES6)

// console.log(border);
// console.log(bg);

// obj.showTen(); // Выззов функции у объекта

// 21. Массивы и псевдомассивы
// const arr = [1, 2, 3, 6, 8];

// arr.pop(); // Удалить последний эл-т в массиве
// arr.push(10); // Добавить эл-т в конец массива

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
// 	console.log(`url: https://www.yandex.ru/news/${arr[i]}`);
// }

// for (let key in arr) {
// 	console.log(`url: https://www.yandex.ru/news/${arr[key]}`);
// }

// console.log(arr.length); // Последний index + 1

// arr.forEach(function(item, idx, arr) { // item - значение элемента, i - index элемента, arr - массив итерируемый
// 	console.log(item, idx, arr);
// });

// const str = 'www, ddd, fff';
// const newArr = str.split(', '); // [] из строки
// const newStr = newArr.join(); // строка из []

// console.log(newStr);

// 22. Передача по ссылке или по значению, Spread оператор (ES6-ES9)
// let a = 5,
// 		b = a; // Передача по значению, т.к. примитивный тип данных

// b += 5;

// console.log(b);
// console.log(a);

// const obj = {
// 	a: 5,
// 	b: 1,
// 	c: {
// 		x: 7,
// 		y: 4
// 	}
// };

// const copy = obj; // Передача по ссылке, а не по значению, т.к. комплексный тип данных
// copy.a = 10;

// console.log(copy);
// console.log(obj);

// !!!Создние поверхностной копии на первом (верхнем) уровне объекта:

// 1. С помощью цикла
// const obj = {
//   a: 5,
//   b: 1,
//   c: {
//     x: 7,
//     y: 4,
//   }
// };

// function copy(oldObj) {
//   let newObj = {};

//   for (let key in oldObj) {
//     newObj[key] = oldObj[key];
//   }

//   return newObj;
// }

// const newObj = copy(obj);
// newObj.a = 10;
// newObj.c.x = 10;

// console.log(obj);
// console.log(newObj);

// 2. С помощью Object.assign(obj1, obj2)
// const obj = {
//   a: 5,
//   b: 1,
//   c: {
//     x: 7,
//     y: 4,
//   }
// };

// const add = {
// 	d: 66,
// 	e: 99
// };

// // const newObj = Object.assign(obj, add);
// // console.log(newObj);

// const newObj2 = Object.assign({}, add);
// newObj2.d = 100;
// console.log(add);
// // console.log(newObj2);

// 3. С помощью оператора slice для массива []
// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();

// newArr[0] = 'x';

// console.log(oldArr);
// console.log(newArr);

// 4. С помощью оператора Sread (развернуть структуру на отдельные элементы)
// 4.1 Для массивов []
// const oldArr = ['a', 'b', 'c'];
// const newArr = [...oldArr];

// newArr[0] = 'u';

// console.log(...oldArr);
// console.log(oldArr);
// console.log(newArr);

// // Spread массива в аргументы функции
// function logger(a, b, c) {
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// }

// const num = [1, 2, 3];

// logger(...num);

// // 4.2 Для объектов {}
// const obj = {
//   a: 5,
//   b: 1,
//   c: {
//     x: 7,
//     y: 4,
//   }
// };

// const newObj = {...obj};

// newObj.a = 222;

// console.log(obj);
// console.log(newObj);

// 23. Основы ООП, прототипно-ориентированное наследование
// let str = 'some';
// let strObj = new String(str);

// // console.log(typeof str);
// // console.log(typeof strObj);

// console.dir([1, 2, 3]);

const soldier = {
	health: 400,
	armor: 100,
	sayHello: function() {
		console.log('Hello');
	}
};

// const john = {
// 	health: 100
// };

// Object.setPrototypeOf(john, soldier);

// john.__proto__ = soldier; // Устаревший формат

const john = Object.create(soldier);

john.sayHello();