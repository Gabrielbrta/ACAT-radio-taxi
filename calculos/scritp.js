import Calculos from './Calculos.js';

const select = document.querySelector('#calc');
const options = document.querySelectorAll('option');
const cards = document.querySelectorAll('.card');
const inputs= document.querySelectorAll('input');
const buttons = document.querySelectorAll('button');
let results = document.querySelectorAll('.result');
let targets = [];

cards[0].classList.add('active');
buttons[0].addEventListener('click', handleCalc(0));

function handleChange(e) {
    targets.push(e.target.value);

    // adiciono os cards
    cards.forEach((card) => {
        card.classList.remove('active');
        cards[e.target.value].classList.add('active');
    });
    
    handleCalc(Number(e.target.value));
}

function handleCalc(i) {
    
    buttons[i].addEventListener('click', (e) => {
        e.preventDefault();
        let erro = "<strong>Digite um número válido!</strong>";
        let calculo;
        console.log(i);
            switch(i) {
                case 0:
                    if(Number(inputs[0].value) || Number(inputs[1].value)) {
                        calculo = new Calculos(Number(inputs[0].value), Number(inputs[1].value)).bandeira_1_petro();
                        results[0].innerHTML = calculo;
                        console.log(inputs[0].value, inputs[1].value);
                    } else results[0].innerHTML = erro;
                    break;
                case 1:
                    if(Number(inputs[2].value) || Number(inputs[3].value)) {
                        calculo = new Calculos(Number(inputs[2].value), Number(inputs[3].value)).bandeira_2_petro();
                        results[1].innerHTML = calculo;
                        console.log(inputs[2].value, inputs[3].value);
                    } else results[1].innerHTML = erro;
                    break;
                case 2:
                    if(Number(inputs[4].value) || Number(inputs[5].value)) {
                        calculo = new Calculos(Number(inputs[4].value), Number(inputs[5].value)).bandeira_1_normal();
                        results[2].innerHTML = calculo;
                        console.log(inputs[4].value, inputs[5].value);
                    } else results[2].innerHTML = erro;
                    break;
                case 3:
                    if(Number(inputs[6].value) || Number(inputs[7].value)) {
                        calculo = new Calculos(Number(inputs[6].value), Number(inputs[7].value)).bandeira_2_normal();
                        results[3].innerHTML = calculo;
                        console.log(inputs[6].value, inputs[7].value);
                    } else results[3].innerHTML = erro;
                    break;
                case 4:
                    if(Number(inputs[8].value) || Number(inputs[9].value)) {
                        calculo = new Calculos(Number(inputs[8].value), Number(inputs[9].value)).yara_bandeira2();
                        results[4].innerHTML = calculo;
                        console.log(inputs[8].value, inputs[9].value);
                    } else results[4].innerHTML = erro;
                    break;
                default:
                    results.innerHTML = "Ocorreu um erro!";
                    break;
            }
    });
}

select.addEventListener('change', (e) => handleChange(e));

