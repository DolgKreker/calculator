
const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
    .forEach( button => button.addEventListener('click', digitPressed));
function digitPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.dot').addEventListener('click', dotPressed);
   function dotPressed(ev) {
    display.value += ev.target.innerText;
}


document.querySelectorAll('.opers button')
    .forEach( button => button.addEventListener('click', operPressed));
    function operPressed(ev) {
    display.value += ev.target.innerText;
}


document.querySelector('.clear').addEventListener('click', clear);
function clear() {
    display.value = "";
}

document.querySelector('.eq').addEventListener('click', calculate);
function calculate() {
    display.value = eval(display.value);}