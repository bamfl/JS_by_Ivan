document.addEventListener('DOMContentLoaded', () => {
	const calculator = require('./modules/calculator'),
				card = require('./modules/card'),
				counter = require('./modules/counter'),
				form = require('./modules/form'),
				modal = require('./modules/modal'),
				slider = require('./modules/slider'),
				tabs = require('./modules/tabs');

	calculator();
	card();
	counter();
	form();
	modal();
	slider();
	tabs();
});
