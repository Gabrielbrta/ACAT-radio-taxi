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
        this.valInicio = 6.50;
        this.desconto = 4.60;
        let resultado = (((this.km * this.desconto) + this.valInicio) + this.hp);
        return resultado;
    }

    bandeira_2_normal() {
        this.valInicio = 6.50;
        this.desconto = 5.52;
        let resultado = (((this.km * this.desconto) + this.valInicio) + this.hp);
        return resultado;
    }

    bandeira_1_petro() {
        this.valInicio = 6.30
        this.desconto = 4.46;
        let resultado = (((this.km * this.desconto) + this.valInicio) + this.hp);
        return resultado;
        
    }

    bandeira_2_petro() {
        this.valInicio = 6.30
        this.desconto = 5.35;
        let resultado = (((this.km * this.desconto) + this.valInicio) + this.hp);
        return resultado;
    }

    yara_bandeira1() {
        this.valInicio = 6.50;
        this.desconto = 4.60;
        let resultado = (((this.km * this.desconto) + this.valInicio) + this.hp);
        let porcentagem = (5 / 100) * resultado;
        resultado = this.km == '' ? resultado : resultado - porcentagem;
        return resultado;
    }
    yara_bandeira2() {
        this.valInicio = 6.50;
        this.desconto = 5.52;
        let resultado = (((this.km * this.desconto) + this.valInicio) + this.hp);
        let porcentagem = (5 / 100) * resultado;
        resultado = this.km == '' ? resultado : resultado - porcentagem;
        return resultado;
    }
    
    prodesan() {
        this.valInicio = 4.30
        this.desconto = 4.30;
        let resultado = (((this.km * this.desconto) + this.valInicio) + this.hp);
        return resultado;
    }
}

export default Calculos;