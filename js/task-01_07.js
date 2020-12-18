// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка
// элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const menuItemsByCategory = document.querySelectorAll("li.item");
console.log(`В списке ${menuItemsByCategory.length} категории.`);

// const menuItemsByTitle = document.querySelectorAll("ul > li.h2");
// //console.log(menuItemsByTitle);

// const allElementsInCategory = document.querySelectorAll("li.item");
// // console.log(
// //   `Категория: ${menuItemsByTitle} \n Количество элементов: ${allElementsInCategory.length}`
// // );