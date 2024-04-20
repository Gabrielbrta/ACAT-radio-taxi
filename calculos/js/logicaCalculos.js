import Calculos from './Calculos.js';

export function init() {
    const select = document.querySelector('#calc');
    const cards = document.querySelectorAll('.card');
    const inputs = document.querySelectorAll('input');
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

    function verificar_virgula(valor) {
        if(String(valor).includes(",")) {
            let val = Number(valor.replace(",", "."));
            return val;
        } else return Number(valor);
    }

    function handleCalc(i) {

        buttons[i].addEventListener('click', (e) => {
            e.preventDefault();
            let erro = "<strong class='black'>Digite um número válido!</strong>";
            let calculo;
            
            switch (i) {
                case 0:
                    if (Number(verificar_virgula(inputs[0].value)) || Number(verificar_virgula(inputs[1].value))) {
                        calculo = new Calculos(Number(verificar_virgula(inputs[0].value)), Number(verificar_virgula(inputs[1].value))).bandeira_1_petro();
                        results[0].innerHTML = calculo;
                    } else results[0].innerHTML = erro;
                    break;
                case 1:
                    if (Number(verificar_virgula(inputs[2].value)) || Number(verificar_virgula(inputs[3].value))) {
                        calculo = new Calculos(Number(verificar_virgula(inputs[2].value)), Number(verificar_virgula(inputs[3].value))).bandeira_2_petro();
                        results[1].innerHTML = calculo;
                    } else results[1].innerHTML = erro;
                    break;
                case 2:
                    if (Number(verificar_virgula(inputs[4].value)) || Number(verificar_virgula(inputs[5].value))) {
                        calculo = new Calculos(Number(verificar_virgula(inputs[4].value)), Number(verificar_virgula(inputs[5].value))).bandeira_1_normal();
                        results[2].innerHTML = calculo;
                    } else results[2].innerHTML = erro;
                    break;
                case 3:
                    if (Number(verificar_virgula(inputs[6].value)) || Number(verificar_virgula(inputs[7].value))) {
                        calculo = new Calculos(Number(verificar_virgula(inputs[6].value)), Number(verificar_virgula(inputs[7].value))).bandeira_2_normal();
                        results[3].innerHTML = calculo;
                    } else results[3].innerHTML = erro;
                    break;
                case 4:
                    if (Number(verificar_virgula(inputs[8].value)) || Number(verificar_virgula(inputs[9].value))) {
                        calculo = new Calculos(Number(verificar_virgula(inputs[8].value)), Number(verificar_virgula(inputs[9].value))).yara_bandeira2();
                        results[4].innerHTML = calculo;
                    } else results[4].innerHTML = erro;
                    break;
                case 5:
                    if (Number(verificar_virgula(inputs[10].value)) || Number(verificar_virgula(inputs[11].value))) {
                        calculo = new Calculos(Number(verificar_virgula(inputs[10].value)), Number(verificar_virgula(inputs[11].value))).prodesan();
                        results[5].innerHTML = calculo;
                    } else results[5].innerHTML = erro;
                    break;
                default:
                    results.innerHTML = "Ocorreu um erro!";
                    break;
            }
        });
    }

    select.addEventListener('change', (e) => handleChange(e));
}
init();

export default init;
