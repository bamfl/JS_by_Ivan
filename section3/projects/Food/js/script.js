document.addEventListener('DOMContentLoaded', () => {
  // const tabMenus = document.querySelector('.tabheader__items'),
  // 		tabContent = document.querySelectorAll('.tabcontent');

  // tabMenus.addEventListener('click', (event) => {
  // 	for (let node of tabMenus.childNodes) {
  // 		if (node.nodeName !== '#text') {
  // 			node.classList.remove('tabheader__item_active');
  // 		}
  // 	}

  // 	for (let node of tabContent) {
  // 		node.classList.remove('tabcontent_active');
  // 	}

  // 	if (event.target && event.target.matches('.tabheader__item')) {
  // 		event.target.classList.add('tabheader__item_active');
  // 	}

  // 	let idx = -1;

  // 	for (let tabMenu of tabMenus.childNodes) {
  // 		if (tabMenu.nodeName !== '#text') {
  // 			idx++;

  // 			if (tabMenu.classList.contains('tabheader__item_active')) {
  // 				break;
  // 			}
  // 		}
  // 	}

  // 	tabContent[idx].classList.add('tabcontent_active');
  // });

  // const newTabItem = document.createElement('div');
  // newTabItem.classList.add('tabheader__item');
  // newTabItem.innerHTML = 'Хуй';
  // tabMenus.append(newTabItem);

  const tabContent = document.querySelectorAll('.tabcontent'),
  			tabs = document.querySelectorAll('.tabheader__item'),
  			tabList = document.querySelector('.tabheader__items');

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

  // const newTabItem = document.createElement('div');
  // newTabItem.classList.add('tabheader__item');
  // newTabItem.innerHTML = 'Новый элемент';
  // tabList.append(newTabItem);
});
