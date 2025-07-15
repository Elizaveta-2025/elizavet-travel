'use strict';
// Блок - схема: /images/block_shema.png

window.addEventListener("DOMContentLoaded", () => {
   

// Динамическое формирование новигационного меню
const headerMenu = document.querySelector('.main-nav');

if (headerMenu) {
    const headerList = headerMenu.querySelector('.header__list');

    const menuData = {
        link1: { link: '#', title: 'Главное' },
        link2: { link: '#', title: 'Экскурсии' },
        link3: { link: '#', title: 'Личный кабинет' }
    };

    const createLink = (url, title) => {
        return `<li><a href="${url}">${title}</a></li>`;
        
    };

    for (const key in menuData) {
        const { link, title } = menuData[key];
        headerList.insertAdjacentHTML('beforeend', createLink(link, title));
    }

    console.log('Навигационное меню создано с помощью javascript!');
}



    const favoriteBlock = document.querySelector('.hero-actions');

    if (favoriteBlock) {
        console.log('Константа favoriteBlock существует');

        const favoriteButton = favoriteBlock.querySelector('.favorite-button');
        const favoriteCount = favoriteBlock.querySelector('.indicators-count');

        let isFavorite = false; // Состояние избранного
        let count = parseInt(favoriteCount.textContent); // Начальное значение счетчика с приведением строки к числу

        // Обработчик клика на иконку
        favoriteButton.addEventListener('click', () => {
            isFavorite = !isFavorite; // Меняем состояние

            if (isFavorite) {
                count += 1; // Увеличиваем счетчик
                favoriteButton.classList.add('active')
            } 
            else {
                count -= 1; // Уменьшаем счетчик
                favoriteButton.classList.remove('active')
            }

            favoriteCount.textContent = count; // Обновляем счетчик
        });
    }

    //Задание 3,4 динамическая подгрузка
    const trenersContainer = document.querySelector(".treners");

    if (trenersContainer) {
        // Создаем массив dataTitleTreners с новыми именами
        const dataTitleTreners = [
            "Ирина Лайм",
            "Марина Орлова",
            "Максим Петров",
            "Константин Назаров",
            "Лиза Весенняя",
            "Валентин Сидоров",
        ];

        const titleTreners = trenersContainer.querySelectorAll(".treners__subtitle");

        titleTreners.forEach((item, index) => {
            console.log(item);
            item.textContent = dataTitleTreners[index];
        });
    }
  
    //Задание 3,5 динамическая подгрузка
    const cardsPrice = document.querySelector('.price');

    if (cardsPrice) {
        const priceList = cardsPrice.querySelector('.price__list');

        const cardsPriceData = {
            price1: {
                level: '– Социальный –',
                price: '12 000 ₽',
                description: 'Поездка по городу',
                button: 'Оставить заявку'
            },
            price2: {
                level: '– Классический –',
                price: '15 000 ₽',
                description: 'Поездки по России',
                button: 'Оставить заявку'
            },
            price3: {
                level: '– Студенческий –',
                price: '10 000 ₽',
                description: 'Поездки',
                button: 'Оставить заявку'
            }
        };

        const createCard = (level, price, description, button) => {
            const card = `
                <li class="price__item">
                    <p class="price__level">${level}</p>
                    <p class="price__price">${price}</p>
                    <p class="price__description">${description}</p>
                    <button class="price__button">
                    <span>${button}</span> 
                    </button>
                </li>
            `;
            return card;
        };

        for (const key in cardsPriceData) {
            const card = cardsPriceData[key];
            const cardElement = createCard(card.level, card.price, card.description, card.button);
            priceList.insertAdjacentHTML('beforeend', cardElement);
        }
    }

    
});