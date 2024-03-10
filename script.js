const buttons = [...document.querySelectorAll('button')]
const result = document.querySelector('button#enter')

const p = document.querySelector('p#calculation')
const presult = document.querySelector('p#result')
let str = ''

buttons.pop()

buttons.forEach((element) => element.addEventListener('click', (e) =>{
    if (presult.textContent != '') {
        presult.textContent = '';
        p.textContent = '';
    }
    if (str == '' && ['+', '*', '-', '/'].includes(e.target.textContent))
        {}
    else {
        str += e.target.textContent;
        p.textContent = str;
    }
}));

result.addEventListener('click', (e) => {
    presult.textContent = eval(str);
    str = '';
});