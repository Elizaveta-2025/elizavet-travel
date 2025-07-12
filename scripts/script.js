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
    
});
