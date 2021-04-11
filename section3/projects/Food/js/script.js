document.addEventListener('DOMContentLoaded', () => {
  const tabContent = document.querySelectorAll('.tabcontent'),
  			tabs = document.querySelectorAll('.tabheader__item'),
  			tabList = document.querySelector('.tabheader__items'),
				daysBox = document.getElementById('days'),
				hoursBox = document.getElementById('hours'),
				minutesBox = document.getElementById('minutes'),
				secondsBox = document.getElementById('seconds');

	// Tabs
  const removeClass = () => {
  	tabContent.forEach(item => {
  		item.classList.remove('tabcontent_active');
  	});

  	tabs.forEach(tab => {
  		tab.classList.remove('tabheader__item_active');
  	});
  };

  const addClass = (idx = 0) => {
  	tabContent[idx].classList.add('tabcontent_active');
  	tabs[idx].classList.add('tabheader__item_active');
  };

  removeClass();
  addClass();

  tabList.addEventListener('click', (event) => {
  	removeClass();
  	const target = event.target;

  	if (target && target.matches('.tabheader__item')) {

  		tabs.forEach((tab, idx) => {
  			if (target === tab) {
  				addClass(idx);
  			}
  		});
  	}
  });

	// Counter
	const deadline = new Date('2021-05-01T00:00');
	
	const timeCounter = () => {
		const nowDate = new Date();

		let timeDiff = new Date(deadline - nowDate);

		const getZero = num => {
			if (num <= 10) {
				return `0${num}`;
			} else {
				return num;
			}
		};

		if (timeDiff > 0) {
			daysBox.innerHTML = getZero(`${parseInt(timeDiff / (1000 * 60 * 60 * 24))}`);
			hoursBox.innerHTML = getZero(`${parseInt((timeDiff / (1000 * 60 * 60)) % 24)}`);
			minutesBox.innerHTML = getZero(`${parseInt((timeDiff / (1000 * 60)) % 60)}`);
			secondsBox.innerHTML = getZero(`${parseInt((timeDiff / 1000) % 60)}`);
		} else {
			daysBox.innerHTML = `0`;
			hoursBox.innerHTML = `0`;
			minutesBox.innerHTML = `0`;
			secondsBox.innerHTML = `0`;
			clearInterval(timerId);
		}
	};

	timeCounter();
	const timerId = setInterval(timeCounter, 1000);
});
