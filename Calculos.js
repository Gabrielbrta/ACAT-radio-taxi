class Calculos {
    km;
    hp;
    valInicio;
    desconto;

    constructor(km , hp) {
        this.km = km;
        this.hp = hp;
    }

    bandeira_1_normal() {
        this.valInicio = 5.90;
        this.desconto = 4.00;
        let resultado = (((this.km * this.desconto) + this.valInicio) + this.hp);
        return resultado;
    }

    bandeira_2_normal() {
        this.valInicio = 5.90;
        this.desconto = 4.80;
        let resultado = (((this.km * this.desconto) + this.valInicio) + this.hp);
        return resultado;
    }

    bandeira_1_petro() {
        this.valInicio = 5.73
        this.desconto = 3.88;
        let resultado = (((this.km * this.desconto) + this.valInicio) + this.hp);
        return resultado;
    }

    bandeira_2_petro() {
        this.valInicio = 5.73
        this.desconto = 4.66;
        let resultado = (((this.km * this.desconto) + this.valInicio) + this.hp);
        return resultado;
    }

    yara_bandeira2() {
        this.valInicio = 5.90;
        this.desconto = 4.80;
        let resultado = (((this.km * this.desconto) + this.valInicio) + this.hp);
        let porcentagem = (5 / 100) * resultado;
        resultado = this.km == '' ? resultado : resultado - porcentagem;
        return resultado;
    }
}

export default Calculos;