/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while(numberOfFilms === 0 || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonaalLevel() {
	if (personalMovieDB.count < 10) {
		alert('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count < 30) {
		alert('Вы классический зритель');
	} else if (personalMovieDB.count > 100) {
		alert('Вы киноман');
	} else {
		alert('Произошла ошибка');
	}
}

detectPersonaalLevel();

const writeYourGenres = function() {
	for (let i = 0; i < 3; i++) {
		let genres = personalMovieDB.genres;
		genres[genres.length] = prompt(`Ваш любимый жанр под номером ${genres.length + 1}`, '');
	}
};	

writeYourGenres();

const showMyDB = () => personalMovieDB.private ? '' : console.log(personalMovieDB);

showMyDB();
