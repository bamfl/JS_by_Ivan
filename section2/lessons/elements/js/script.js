'use strict';

// Старые методы
const box = document.getElementById('box'); // ID, получаем один элемент
// console.log(box);

const buttons = document.getElementsByTagName('button'); //TAG, получаем коллекцию элементов
const button1 = document.getElementsByTagName('button')[0];
// console.log(buttons);
// console.log(buttons[1]);
// console.log(button1);

const circles = document.getElementsByClassName('circle'); //CLASS, получаем коллекцию элементов
// console.log(circles);
// console.log(circles[0]);




// Современные методы
const hearts = document.querySelectorAll('.heart'); // Любой CSS селектор, получаем коллекцию элементов

// hearts.forEach((el) => { // querySelectorAll имеет метод forEach()
// 	console.log(el);
// })

// console.log(hearts);
// console.log(hearts[0]);

const firstHeart = document.querySelector('.heart'); // Любой CSS селектор, получаем только первый элемент .heart
console.log(firstHeart);

const firstButton = document.querySelector('button'); // Любой CSS селектор, получаем только первый элемент .button
console.log(firstButton);