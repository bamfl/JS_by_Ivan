// const now = new Date();
// const now1 = new Date('2021-04-11');
// const now2 = new Date(2021, 4, 11);
// const now3 = new Date(0);

// console.log(now);
// console.log(now1);
// console.log(now2);
// console.log(now3);

// const now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getMilliseconds());
// console.log(now.getTimezoneOffset());
// now.setFullYear(2050);
// console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
	let some = i ** 3;
}

let end = new Date();

console.log(`Цикл отработал за ${end - start}`);