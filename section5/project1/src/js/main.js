import modals from './modules/modals';
import forms from './modules/forms';
import tabs from './modules/tabs';
import calc from './modules/calc';
import timer from './modules/timer';
import gallery from './modules/gallery';
import slider from './modules/slider';

document.addEventListener('DOMContentLoaded', () => {
	modals();
	forms();
	tabs();
	calc();
	timer();
	gallery();
	slider();
});