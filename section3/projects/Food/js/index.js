import calculator from './ frommodules/calculator';
import card from './modules/card';
import counter from './ frommodules/counter';
import form from './modules/form';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';

document.addEventListener('DOMContentLoaded', () => {
	calculator();
	card();
	counter();
	form();
	modal();
	slider();
	tabs();
});
