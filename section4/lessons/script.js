'use strict';

const persone = {
	name: 'Alex',
	tel: '+744444444',
	parents: {
		mom: 'Toma',
		dad: 'Nickolay'
	}
};

console.log(JSON.stringify(persone)); // Превратить объект в JSON: {"name":"Alex","tel":"+744444444","parents":{"mom":"Toma","dad":"Nickolay"}}

console.log(JSON.parse(JSON.stringify(persone))); // Превратить JSON в объект: { name: 'Alex', tel: '+744444444',parents:{mom:"Toma",dad:"Nickolay"} }

const clone = JSON.parse(JSON.stringify(persone)); // Глубокое клонирование объекта
clone.parents.mom = 'Tamara';

console.log(persone);
console.log(clone);
