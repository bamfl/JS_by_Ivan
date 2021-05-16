function counter() {
	const daysBox = document.getElementById('days'),
				hoursBox = document.getElementById('hours'),
				minutesBox = document.getElementById('minutes'),
				secondsBox = document.getElementById('seconds');

	// Counter
	const deadline = new Date('2021-05-01T00:00');
	
	
	const timeCounter = () => {
		const nowDate = new Date();
		const timerId = setInterval(timeCounter, 100000);

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
			daysBox.innerHTML = `00`;
			hoursBox.innerHTML = `00`;
			minutesBox.innerHTML = `00`;
			secondsBox.innerHTML = `00`;
			clearInterval(timerId);
		}
	};

	timeCounter();
}

module.exports = counter;
