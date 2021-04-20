const log = function(a, b, ...rest) {
	console.log(a, b, rest);
};

log(10, 20, 'sdffsd', 'wsefefg');


function calcOrDouble(number = 6, basis = 2) {
	console.log(number * basis);
}

calcOrDouble(3, 5);
calcOrDouble();
