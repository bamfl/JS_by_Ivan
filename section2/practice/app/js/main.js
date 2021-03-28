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
  private: false,	
	start: function() {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
	
		while(personalMovieDB.count === 0 || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++) {
			const movieName = prompt('Один из последних просмотренных фильмов?', ''),
						movieRate = prompt('На сколько оцените его?', '');
		
			if (
				movieName !== null &&
				movieRate !== null &&
				movieName.length !== 0 &&
				movieRate.length !== 0 &&
				movieName.length < 50 &&
				movieRate.length < 50
			) {
				personalMovieDB.movies[movieName] = movieRate;
			} else {
				i--;
			}
		}
	},
	detectPersonaalLevel: function() {
		if (personalMovieDB.count < 10) {
			alert('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count < 30) {
			alert('Вы классический зритель');
		} else if (personalMovieDB.count > 100) {
			alert('Вы киноман');
		} else {
			alert('Произошла ошибка');
		}
	},
	writeYourGenres: function() {
		for (let i = 0; i < 1; i++) {
			let answer = prompt(`Три ваших любимых жанра через запятую с пробелом`, '');

			if (answer !== null && answer.length > 0) {
				personalMovieDB.genres = answer.split(', ');
			} else {
				i--;
			}
		}
		
		personalMovieDB.genres.forEach(function(i, idx) {
			console.log(`Любимый жанр #${idx + 1} - это ${i}`);
		});
	},
	toggleVisibleMyDB: function() {
		personalMovieDB.private = !personalMovieDB.private;
	},
	showMyDB: function() {
		personalMovieDB.private ? '' : console.log(personalMovieDB);
	}
};

personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
