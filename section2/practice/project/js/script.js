'use strict';

/*
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

const movieDB = {
	movies: [
			"Логан",
			"Лига справедливости",
			"Ла-ла лэнд",
			"Одержимость",
			"Скотт Пилигрим против..."
	]
};

const adv = document.querySelector('.promo__adv'),
			content = document.querySelector('.promo__content'),
			genre = document.querySelector('.promo__genre'),
			bg = document.querySelector('.promo__bg'),
			moviesList = document.querySelector('.promo__interactive-list'),
			addInput = document.querySelector('.adding__input'),
			addBtn = document.querySelector('button'),
			favorite = document.querySelector('input[type="checkbox"]');

const changeSite = () => {
	adv.remove();

	content.style.cssText = 'width: 100%';

	genre.innerHTML = 'Драма';

	bg.style.cssText = 'background: url(../img/bg.jpg) top center/cover no-repeat;';
};

const sort = (arr) => {
	arr.sort();
};

const renderList = () => {
	moviesList.innerHTML = '';

	sort(movieDB.movies);

	movieDB.movies.forEach((film, idx) => {
		moviesList.innerHTML += `
			<li class="promo__interactive-item">
				${idx + 1}. ${film}
				<div class="delete"></div>
			</li>
		`;
	});

	delFilm();
};

const addFilm = () => {
	addBtn.addEventListener('click', (event) => {
		event.preventDefault();

		if (addInput.value.length > 21) {
			addInput.value = `${addInput.value.slice(0, 21)}...`;
		}

		if (favorite.checked) {
			console.log('Добавляем любимый фильм');
			favorite.checked = false;
		}

		movieDB.movies.push(addInput.value);

		addInput.value = '';

		renderList();
		showDB();
	});
};

const delFilm = () => {
	document.querySelectorAll('.delete').forEach((btn, idx) => {
		btn.addEventListener('click', () => {
			movieDB.movies.splice(idx, 1);

			renderList();
			showDB();
		});
	});
};

const showDB = () => {
	console.log(movieDB.movies);
};

changeSite();
renderList();
addFilm();

