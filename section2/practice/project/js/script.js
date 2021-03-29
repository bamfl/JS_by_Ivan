'use strict';
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

const movieDB = {
    movies: [
			"Логан",
			"Лига справедливости",
			"Ла-ла лэнд",
			"Одержимость",
			"Скотт Пилигрим против..."
    ]
};

const ads = document.querySelector('.promo__adv'),
      genre = document.querySelector('.promo__genre'),
      bg = document.querySelector('.promo__bg'),
      list = document.querySelector('.promo__interactive-list'),
      listItems = document.querySelectorAll('.promo__interactive-item'),
      sortedList = movieDB.movies.sort(),
      content = document.querySelector('.promo__content');

ads.remove();

content.style.cssText = 'width: calc(100% - 300px);';

genre.innerHTML = 'Драма';

bg.style.cssText = "background: url(../img/bg.jpg) top center/cover no-repeat;";


listItems.forEach(listItem => {
	listItem.remove();
});

const listCreate = () => {
	for (let i = 0; i < sortedList.length; i++) {
		let li = document.createElement('li');

		li.classList.add('promo__interactive-item');

		list.append(li);

		li.innerHTML = `${i + 1}. ${sortedList[i]}`;
	}
};

listCreate();
