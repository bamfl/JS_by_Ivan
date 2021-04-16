'use strict';

function User(name, age) {
	this.name = name;
	this.age = age;
	this.human = true;
	this.hello = function() {
		console.log(this.name);
	};
}

User.prototype.exit = function() {
	console.log(`Пользователь ${this.name} ушел`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 36);

ivan.hello();
ivan.exit();

console.log(ivan);
console.log(alex);
