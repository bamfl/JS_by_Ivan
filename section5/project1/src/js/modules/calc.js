function calc() {
	const nextBtn = document.querySelector('.popup_calc .popup_calc_button'),
				widthInput = document.getElementById('width'),
				heightInput = document.getElementById('height');

	let balconWidth = 0,
			balconHeight = 0;

	nextBtn.addEventListener('click', () => {
		if (widthInput.value.match(/\d/) && heightInput.value.match(/\d/)) {
			balconHeight = heightInput.value;
			balconWidth = widthInput.value;
			console.log(balconWidth, balconHeight);
		}
	});	
}

export default calc;
