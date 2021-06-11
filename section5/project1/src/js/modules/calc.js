let balconForm,
		balconWidthValue,
		balconHeightValue,
		viewTypeValue,
		checboxValue;	

const calc = () => {
	const nextBtn1 = document.querySelector('.popup_calc .popup_calc_button'),
				nextBtn2 = document.querySelector('.popup_calc_profile_button'),
				widthInput = document.getElementById('width'),
				heightInput = document.getElementById('height'),
				viewType = document.getElementById('view_type'),
				checkboxes = document.querySelectorAll('[name="checkbox-test"]');

	nextBtn1.addEventListener('click', () => {
		if (widthInput.value.match(/\d/) && heightInput.value.match(/\d/)) {
			balconHeightValue = heightInput.value;
			balconWidthValue = widthInput.value;

			checkboxes.forEach(checkbox => {
				checkbox.addEventListener('change', () => {
					if (checkbox.value === 'on') {
						checboxValue = checkbox.nextElementSibling.id;
					}
				});
			});

			document.querySelector('.popup_calc').style.cssText = 'display: none';
			document.querySelector('.popup_calc_profile').style.cssText = 'display: block';

			viewTypeValue = viewType.value;
			viewType.addEventListener('change', () => {
				viewTypeValue = viewType.value;
			});	

			document.querySelectorAll('.balcon_icons_img').forEach((el) => {
				if (el.classList.contains('do_image_more')) {
					balconForm = el.dataset.tab;
				}
			});

			nextBtn2.addEventListener('click', () => {
				document.querySelector('.popup_calc_profile').style.cssText = 'display: none';
				document.querySelector('.popup_calc_end').style.cssText = 'display: block';
			});
		}
	});	
};

export {balconForm,	balconWidthValue,	balconHeightValue, viewTypeValue, checboxValue};
export default calc;
