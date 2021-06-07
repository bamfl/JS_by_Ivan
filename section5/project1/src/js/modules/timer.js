function timer() {
	const days = document.getElementById('days'),
				hours = document.getElementById('hours'),
				minutes = document.getElementById('minutes'),
				seconds = document.getElementById('seconds'),
				deadline = new Date('2021-07-08T00:00');

	const timeCounter = (days, hours, minutes, seconds) => {
		const nowDate = new Date();
		const timerId = setInterval(() => timeCounter(days, hours, minutes, seconds), 1000);

		let timeDiff = new Date(deadline - nowDate);

		const getZero = num => {
			if (num <= 10) {
				return `0${num}`;
			} else {
				return num;
			}
		};

		if (timeDiff > 0) {
			days.innerHTML = getZero(`${parseInt(timeDiff / (1000 * 60 * 60 * 24))}`);
			hours.innerHTML = getZero(`${parseInt((timeDiff / (1000 * 60 * 60)) % 24)}`);
			minutes.innerHTML = getZero(`${parseInt((timeDiff / (1000 * 60)) % 60)}`);
			seconds.innerHTML = getZero(`${parseInt((timeDiff / 1000) % 60)}`);
		} else {
			days.innerHTML = `00`;
			hours.innerHTML = `00`;
			minutes.innerHTML = `00`;
			seconds.innerHTML = `00`;
			clearInterval(timerId);
		}
	};

	timeCounter(days, hours, minutes, seconds);
}

export default timer;