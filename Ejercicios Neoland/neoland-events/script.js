// 1.1 Evento 'click' para el botón
const btnToClick = document.createElement('button');
btnToClick.textContent = 'Haz clic';
btnToClick.id = 'btnToClick';

document.body.appendChild(btnToClick);

btnToClick.addEventListener('click', function(event) {
    console.log('Evento de clic:', event);
});

// 1.2 Evento 'focus' para el input con clase 'focus'
const inputFocus = document.querySelector('.focus');

inputFocus.addEventListener('focus', function(event) {
    console.log('Evento de focus. Valor del input:', event.target.value);
});

// 1.3 Evento 'input' para el input con clase 'value'
const inputValue = document.querySelector('.value');

inputValue.addEventListener('input', function(event) {
    console.log('Evento de input. Nuevo valor del input:', event.target.value);
});
