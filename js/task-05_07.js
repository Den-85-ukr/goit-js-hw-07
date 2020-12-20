// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
    if (inputRef.value.length === 0) {
      return (outputRef.textContent = 'незнакомец');
    }
    return (outputRef.textContent = event.target.value);  
});
