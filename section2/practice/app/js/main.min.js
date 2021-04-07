'use strict';

/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	start() {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');

		while (personalMovieDB.count === 0 || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
		}
	},
	rememberMyFilms() {
		for (let i = 0; i < 2; i++) {
			let lastMovie = prompt('Один из последних просмотренных фильмов?', ''),
					 lastMovieRate = prompt('На сколько оцените его?', '');
		
			if (lastMovie !== null && lastMovie.length !== 0 && lastMovie.length < 50 && 
					lastMovieRate !== null && lastMovieRate.length !== 0 && lastMovieRate.length < 50) {
		
				personalMovieDB.movies[lastMovie] = lastMovieRate;
			}	else {
				i--;
			}
		}
	},
	detectPersonaalLevel() {
		if (personalMovieDB.count < 10) {
			alert('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count < 30) {
			alert('Вы классический зритель');
		} else if (personalMovieDB.count > 30) {
			alert('Вы киноман!')
		} else {
			alert('Произошла ошибка!');
		}
	},
	showMyDB(privat) {
		if (!privat) {
			console.log(personalMovieDB);
		}
	},
	writeYourGenres() {
		for (let i = 0; i < 3; i++) {
			const favGenre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
			if (favGenre !== null && favGenre.length > 0) {
				personalMovieDB.genres[i] = favGenre;
			} else {
				i--;
			}
		}

		personalMovieDB.genres.forEach((el, idx) => {
			console.log(`Любимый жанр ${idx + 1} - это ${el}`);
		});
	},
	toggleVisibleMyDB() {
		personalMovieDB.privat = !personalMovieDB.privat;
	}
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonaalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
