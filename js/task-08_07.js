// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputRef = document.querySelector('#input-boxes');
const createRef = document.querySelector('button[data-action="render"]');
const deleteRef = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

boxes.style.display = 'flex';
boxes.style.justifyContent = 'space-around';
boxes.style.flexWrap = 'wrap';

const createElement = () => {
  let boxesArray = [];
  let height = 20;
  let width = 20;
  for (let i = 0; i < inputRef.value; i += 1) {
    let box = document.createElement('div');
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let randomColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    box.style.backgroundColor = `${randomColor}`;
    width += 10;
    height += 10;
    box.style.height = `${height}px`;
    box.style.width = `${width}px`;
    boxesArray.push(box);
  }
  boxes.append(...boxesArray);
//   console.log(boxes);
};

const destroy = () => {
  boxes.textContent = '';
  inputRef.value = '';
};

createRef.addEventListener('click', createElement);
deleteRef.addEventListener('click', destroy);