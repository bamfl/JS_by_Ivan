// Обычных export может быть сколько угодно
export let one = 1; // экспорт переменной

let two = 2;
export {two}; // именованный экспорт переменной

export function hello() {
	console.log('Hello');
}

// export default может быть только один
export default function myModule() {
	this.hello = function() {
		console.log("Hello!");
	};

	this.goodbye = function() {
		console.log("Goodbye!");
	};
}
