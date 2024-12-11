abstract class Ingresso {
    constructor(protected _valorEmReais: number) {}

    imprimeValor() {
        console.log(`Valor: R$ ${this._valorEmReais}`)
    }
}

class Normal extends Ingresso {
    constructor(valor: number) {
        super(valor)
    }

    imprimeValor() {
        console.log(`Valor ingresso Normal: R$ ${this._valorEmReais}`)
    }
}

class Vip extends Ingresso {
    constructor(_valorRmReais: number, protected _ValorAdicional: number) {
        super(_valorRmReais)
    }

    imprimeValor() {
        console.log(`Valor ingresso Vip: R$ ${this._valorEmReais + this._ValorAdicional}`)
    }

}

class Camarote extends Ingresso {
    constructor(_valorRmReais: number, protected _ValorAdicional: number) {
        super(_valorRmReais)
    }

    imprimeValor() {
        console.log(`Valor ingresso Camarote: R$ ${this._valorEmReais + this._ValorAdicional}`)
    }

}

const ingressoNormal = new Normal(100)
ingressoNormal.imprimeValor()

const ingressoVip = new Vip(100, 100)
ingressoVip.imprimeValor()

const ingressoCamarote = new Camarote(200, 100)
ingressoCamarote.imprimeValor()