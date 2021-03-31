// console.log(document.body); // body
// console.log(document.head); // head
// console.log(document.documentElement); // html

// console.log(document.body.childNodes); // все Nodes (узлы) в родителе
// console.log(document.body.firstChild); // первый Node (узел) в родителе
// console.log(document.body.firstElementChild); // первый элемент в родителе
// console.log(document.body.lastChild); // последний Node (узел) в родителе
// console.log(document.body.lastElementChild); // последний элемент в родителе

// console.log(document.querySelector('#current').parentNode); // Получить родительский Node
// console.log(document.querySelector('#current').parentElement); // Получить родительский элемент
// console.log(document.querySelector('#current').parentNode.parentNode); // Получить родительский Node родителя

// console.log(document.querySelector('[data-current]')); // по аттрибуту
// console.log(document.querySelector('[data-current="3"]')); // по значению аттрибута
// console.log(document.querySelector('[data-current] + li')); // соседний эемент справа

// console.log(document.querySelector('[data-current]').nextSibling); // соседний Node справа
// console.log(document.querySelector('[data-current]').nextElementSibling); // соседний эемент справа

// console.log(document.querySelector('[data-current]').previousSibling); // соседний Node слева
// console.log(document.querySelector('[data-current]').previousElementSibling); // соседний эемент слева

// const nodes = document.body.childNodes; // все Nodes (узлы) в родителе

// for (let element of nodes) {
// 	if (element.nodeName !== '#text') {
// 		console.log(element);
// 	}
// }

// for (let element of nodes) {	
// 	if (element.nodeName === '#text') {
// 		continue;
// 	}

// 	console.log(element);
// }
