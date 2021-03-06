const display = document.querySelector('.display');
let resRec = 0; // result recorded
let opsBtn = 0; // operations button

document.querySelectorAll('.digits button')
    .forEach(button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    if (resRec === 1 && opsBtn === 0) clearResults();
    display.value += ev.target.innerText;
}

document.querySelectorAll('.opers button')
    .forEach(button => button.addEventListener('click', opersPressed));

function opersPressed(ev) {
    if (display.value.slice(-1) === '+' || display.value.slice(-1) === '*' || display.value.slice(-1) === '/' || display.value.slice(-1) === '-') {
        display.value = display.value.substring(0, display.value.length - 1) + ev.target.innerText;
    } else {
        display.value += ev.target.innerText;
    }
    opsBtn = 1;
}

document.querySelector('.eq').addEventListener('click', calculate);

function calculate() {
    if (display.value.slice(-1) === '+' || display.value.slice(-1) === '*' || display.value.slice(-1) === '/' || display.value.slice(-1) === '-') display.value = display.value.substring(0, display.value.length - 1);
    (eval(display.value) === Infinity || eval(display.value) === -Infinity) ? display.value = 'You can\'t divide by zero!'
        : display.value = Math.round((eval(display.value) + Number.EPSILON) * 100) / 100;
    resRec = 1;
    opsBtn = 0;
}

document.querySelector('.clearAll').addEventListener('click', clearResults);

function clearResults() {
    display.value = '';
    resRec = 0;
    opsBtn = 0;
}

document.querySelector('.dot').addEventListener('click', addDot);

function addDot(ev) {
    if (display.value.slice(-1) !== '.') display.value += ev.target.innerText;
}

document.querySelector('.clear1').addEventListener('click', delChar);

function delChar() {
    display.value = display.value.substring(0, display.value.length - 1);
}