'use strict';

// 28. Получение элементов со страницы
// // Старые методы
// const box = document.getElementById('box'); // ID, получаем один элемент
// // console.log(box);

// const buttons = document.getElementsByTagName('button'); //TAG, получаем коллекцию элементов
// const button1 = document.getElementsByTagName('button')[0];
// // console.log(buttons);
// // console.log(buttons[1]);
// // console.log(button1);

// const circles = document.getElementsByClassName('circle'); //CLASS, получаем коллекцию элементов
// // console.log(circles);
// // console.log(circles[0]);




// // Современные методы
// const hearts = document.querySelectorAll('.heart'); // Любой CSS селектор, получаем коллекцию элементов

// // hearts.forEach((el) => { // querySelectorAll имеет метод forEach()
// // 	console.log(el);
// // })

// // console.log(hearts);
// // console.log(hearts[0]);

// const firstHeart = document.querySelector('.heart'); // Любой CSS селектор, получаем только первый элемент .heart
// console.log(firstHeart);

// const firstButton = document.querySelector('button'); // Любой CSS селектор, получаем только первый элемент .button
// console.log(firstButton);

// 29. Действия с элементами на странице
const box = document.getElementById('box'),
			buttons = document.getElementsByTagName('button'),
			circles = document.getElementsByClassName('circle'),
			wrapper = document.querySelector('.wrapper'),
			hearts = wrapper.querySelectorAll('.heart'), // есть forEach
			firstHeart = document.querySelector('.heart');

// console.dir(box);

// box.style.backgroundColor = '#FFC0CB';
// box.style.width = '900px';
// let width = '500px';
// box.style.cssText = `background-color: #FFC0CB; width: ${width};`;

// buttons[1].style.borderRadius = '20px';
// circles[0].style.backgroundColor = 'red';

// for (let item of circles) {
// 	item.style.backgroundColor = 'green';
// }

// for(let i = 0; i < circles.length; i++) {
// 	circles[i].style.backgroundColor = 'green';
// }

// hearts.forEach((heart) => {
// 	heart.style.cssText = 'background-color: green';
// });

const div1 = document.createElement('div'); // создать элемент
const div2 = document.createElement('div'); // создать элемент
const div3 = document.createElement('div'); // создать элемент
// const text = document.createTextNode('Тут был я');

div1.classList.add('black'); // clasList. add, remove, item, toggle, contains, length
// div2.classList.add('circle'); // clasList. add, remove, item, toggle, contains, length
// div3.classList.add('black'); // clasList. add, remove, item, toggle, contains, length

wrapper.append(div1); // Добавить элемент в конец элемента wrapper
// document.body.append(div2); // Добавить элемент в конец элемента body
// wrapper.prepend(div3); // Добавить элемент в начало элемента wrapper

// hearts[0].before(div1); // Добавить элемент перед элементом DOM
// hearts[1].after(div1); // Добавить элемент после элемента DOM

// circles[0].remove(); // Удалить элемент элемент DOM

// hearts[0].replaceWith(buttons[0]); // Заменить элемент другим
// hearts[0].replaceWith(div1); // Заменить элемент другим

// document.body.appendChild(div2); // Добавить элемент в конец элемента body. Устаревший метод
// wrapper.insertBefore(div1, hearts[0]); // Добавить элемент перед элементом DOM. Устаревший метод
// wrapper.removeChild(hearts[0]); // Удалить элемент элемент DOM. Устаревший метод
// wrapper.replaceChild(circles[0], hearts[0]); // Заменить элемент другим. Устаревший метод

// div1.innerHTML = '<h1>Hello</h1>'; // Вставить HTML структуру в div
// div1.textContent = 'Только строка'; // Вставить строку в div

// div1.insertAdjacentHTML('beforebegin', '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, dolorum?</p>');
// div1.insertAdjacentHTML('afterbegin', '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, dolorum?</p>');
// div1.insertAdjacentHTML('beforeend', '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, dolorum?</p>');
// div1.insertAdjacentHTML('afterend', '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, dolorum?</p>');