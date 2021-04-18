'use strict';

// Функии-конструкторы
// function User(name, age) {
// 	this.name = name;
// 	this.age = age;
// 	this.human = true;
// 	this.hello = function() {
// 		console.log(this.name);
// 	};
// }

// User.prototype.exit = function() {
// 	console.log(`Пользователь ${this.name} ушел`);
// };

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 36);

// ivan.hello();
// ivan.exit();

// console.log(ivan);
// console.log(alex);

// 47. Классы ES6

// Концепция
// Базовый класс
class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	// Методы
	calcArea() {
		return this.height * this.width;
	}
}

// Экземпляры базового класса
const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(long.calcArea());


// Дополнительный класс ColoredRectangleWithText, основанный на базовом классе
// (extends - расширяет) расширяет базовый класс Rectangle
class ColoredRectangleWithText extends Rectangle {
	constructor(height, width, bgColor, text) {
		// super() должен всегда стоять на первом месте в конструкторе
		super(height, width); // метод, вызывающий конструктор базового класса (this.height = height и т.д.)
		this.bgColor = bgColor;
		this.text = text;
	}

	// Методы наследуются из базового класса
	showMyProps() {
		console.log(this.text, this.bgColor, this.height, this.width);
	}
}

// Экземпляр дополнительного класса
const blueRect = new ColoredRectangleWithText(10, 10, 'blue', 'Синий');

blueRect.showMyProps();
console.log(blueRect.calcArea());
