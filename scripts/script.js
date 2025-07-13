'use strict';
// Блок - схема: /images/block_shema.png
 //Задание 3,2 

document.addEventListener("DOMContentLoaded", () => {

const intensiveImg = document.querySelector(".gallery-grid");
intensiveImg.addEventListener('mouseenter', () => {
  console.log('Мышка наведена на изображение')
});
});

window.addEventListener("DOMContentLoaded", () => {

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
    const gidsContainer = document.querySelector(".gids");

    if (gidsContainer) {
        // Создаем массив dataTitleGids с новыми именами
        const dataTitleGids = [
            "Ирина Лайм",
            "Марина Орлова",
            "Максим Петров",
            "Константин Назаров",
            "Лиза Весенняя",
            "Валентин Сидоров",
        ];

        const titleGids = gidsContainer.querySelectorAll(".gids__subtitle");

        titleGids.forEach((item, index) => {
            console.log(item);
            item.textContent = dataTitleGids[index];
        });
    }
});

const headerMenu = document.querySelector('.main-nav');
if (headerMenu){
    const headerList = headerMenu.querySelector('.header_list');
    const menuData = {
        link1: {
            link: 'index.html',
            title: 'Главная',
        },
        link2: {
            link: 'excursions.html',
            title: 'Экскурсии',
        },
         link3: {
            link: '#',
            title: 'Личный кабинет',
        }
    }



/*Задание 3.5
    const cardsPrice = document.querySelector('.price');
if (cardsPrice) {
    const priceList = cardsPrice.querySelector('.price_list');

    const cardsPriceData = {
        price1: {
            level: 'Социальный',
            price: '25000 р.',
            description: 'Скидки',
            button: 'Оставить заявку'
        },
        price2: {
            level: 'Классический',
            price: '35000 р.',
            description: 'Sale',
            button: 'Оставить заявку'
        },
        price3: {
            level: 'Студенческий',
            price: '30000 р.',
            description: 'Sale',
            button: 'Оставить заявку'
        }
    }
    const createCard = (level, price, description, button) => {
        const card=
       <li class="price_item">
            <p class="price_level">${level}</p>
            <p class="price_price">${price}</p>
            <p class="price_description">${description}</p>
            <button class="price_button button">${button}</button>
        </li>
        
             
        return card;
    }

        for (const cardKey in cardsPriceData) {
            const card = cardsPriceData[cardKey];
            const cardElement = createCard(card.level, card.price, card.description, card.button);
            priceList.insertAdjacentHTML('beforeend', cardElement);
        }
}*/
    



