'use strict';
  
/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

document.addEventListener('DOMContentLoaded', () => {
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
				content = document.querySelector('.promo__content'),
				input = document.querySelector('.adding__input'),
				submitBtn = document.querySelector('button'),
				checkbox = document.querySelector('input[type="checkbox"]');

	ads.remove(); // 1) Удалить все рекламные блоки со страницы (правая часть сайта)
	
	content.style.cssText = 'width: calc(100% - 300px);';
	
	genre.innerHTML = 'Драма'; // 2) Изменить жанр фильма, поменять "комедия" на "драма"
	
	bg.style.cssText = "background: url(../img/bg.jpg) top center/cover no-repeat;"; // 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. Реализовать только при помощи JS
	
	const listCreate = () => {
		list.innerHTML = '';

		movieDB.movies.sort();

		movieDB.movies.forEach((film, i) => {
			list.innerHTML += `
				<li class="promo__interactive-item">
					${i + 1}. ${film}
					<div class="delete"></div>
				</li>
			`;
		});

		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click', () => {
				movieDB.movies.splice(i, 1);
				listCreate();
			});
		});
	};

	listCreate();
	
	const addMovie = event => {
		event.preventDefault();
	
		if (input.value.length >= 21) {
			input.value = `${input.value.slice(0, 21)}...`;
		}
	
		if (checkbox.checked === true) {
			console.log("Добавляем любимый фильм");
			checkbox.checked = false;
		}
	
		if (input.value) {
			movieDB.movies.push(input.value);
			
			input.value = '';	
	
			listCreate();
		}
	};
	
	submitBtn.addEventListener('click', addMovie);	
});
