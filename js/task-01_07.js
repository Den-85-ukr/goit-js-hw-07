// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка
// элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const allItemsRef = document.querySelectorAll('li.item');

console.log(`В списке ${allItemsRef.length} категории.`);

allItemsRef.forEach(item => {
  const allTitleRef = item.querySelector('h2');
  //console.log(title);
  const allLiRef = item.querySelectorAll('ul li');
  //console.log(list.length);
  console.log(
    `Категория: ${allTitleRef.textContent}\r\nКоличество элементов: ${allLiRef.length}`,
  );
});