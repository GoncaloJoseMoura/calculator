const buttons = [...document.querySelectorAll('button')]
const result = document.querySelector('button#enter')

const pCalculation = document.querySelector('p#calculation')
const pResult = document.querySelector('p#result')
let calcStorage = ''

const add = function (args) {
    return args.reduce((total, element) => total + element, 0);
}

const subtract = function (args) {
    return args.reduce((total, element) => total - element)
}

const multiply = function (args) {
    return args.reduce((total, element) => total * element, 1)
}

const divide = function (args) {
    return args.reduce((total, element) => total / element)
}

const dic = {
    '+' : add,
    '*': multiply,
    '-': subtract,
    '/': divide,
}

// = symbols is going to have a different action when clicked, so we remove it
buttons.pop()

buttons.forEach((element) => element.addEventListener('click', (e) =>{
    if (pResult.textContent != '') {
        pResult.textContent = '';
        pCalculation.textContent = '';
    }
    if (calcStorage == '' && ['+', '*', '-', '/'].includes(e.target.textContent))
        {}
    else {
        calcStorage += e.target.textContent;
        pCalculation.textContent = calcStorage;
    }
}));

result.addEventListener('click', (e) => {
    let numbers = calcStorage.split(/[^0-9]/g).map(Number);
    let symbols = calcStorage.replaceAll(/[0-9]/g, '').split('').map((symbol) => dic[symbol]);

    for (;symbols != 0;) {
        let tempfunc = symbols.shift()
        let temp = tempfunc(numbers.slice(0, 2))
        numbers.splice(0,2, temp)
    }
    pResult.textContent = numbers[0]
    calcStorage = '';

});