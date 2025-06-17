const button = document.querySelector(".addCalcButton");
const nome = document.querySelector('#nome');
const bandeira = document.querySelector('#bandeira');
const bandeirada = document.querySelector('#bandeirada');
const desconto = document.querySelector('#desconto');

function verificar_virgula(valor) {
    if(String(valor).includes(",")) {
        let val = Number(valor.replace(",", "."));
        return val;
    } else return Number(valor);
}

function pickData() {
    const data = [nome.value, verificar_virgula(bandeira.value), verificar_virgula(bandeirada.value), desconto.value];
    return data;
}

function createCard(datas) {
    const body = document.querySelector('form');
    if(datas[1] != "" && datas[2] != "") {
            const name = datas[0];
            const bandeira = datas[1];
            const bandeirada = datas[2];
            const desconto = datas[3];
            body.innerHTML += `
            <div class="card custom-card">
                <div class="card-container custom-container">
                    <label for="" class="title">${name}</label>
                    <label for="km" class="red">KM</label>
                    <input type="text" name="km" id="km">
                    <span>x  ${bandeira}</span>
                    <span>+  ${bandeirada}</span>
                    <span>+ </span>
                    <label for="hp" class="red">HP</label>
                    <input type="text" name="hp" id="hp">
                    <span>- ${desconto}%</span>
                    <p class="text">Resultado:</p>
                    <p class="result"></p>
                    <button type="button">calcular</button>
                </div>
            </div>`
    } else {
        alert("ocorreu um erro!");
    }
}

button.addEventListener('click', () => createCard(pickData()));


