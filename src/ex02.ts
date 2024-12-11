class Imovel {
    constructor(protected _endereco: string, protected _preco: number) {}
}

class Novo extends Imovel {
    constructor(_endereco: string, _preco: number, protected _adicional: number){
        super(_endereco, _preco)
    }

    get valorAdicional(): number {
        return this._adicional
    }

    set valorAdicional(valor: number) {
        if (valor > 0) {
            this._adicional = valor
        } else {
            console.log(`Valor não pode ser menor ou igual a 0`)
        }
    }
}

class Velho extends Imovel {
    constructor(_endereco: string, _preco: number, protected _desconto: number) {
        super(_endereco, _preco)
    }

    get desconto(): number {
        return this._desconto
    }

    set desconto(valor: number) {
        if (valor > 0) {
            this._desconto = valor
        } else {
            console.log(`Valor do desconto não pode ser menor ou igual a 0`)
        }
    }
}


// Testando as classes
const casaNova = new Novo("Feira de Santana", 15000, 5000);
console.log(casaNova.valorAdicional); // 5000
casaNova.valorAdicional = 7000; // Atualiza o valor adicional
console.log(casaNova.valorAdicional); // 7000

const casaVelha = new Velho("Osasco", 20000, 5000);
console.log(casaVelha.desconto); // 5000
casaVelha.desconto = 6000; // Atualiza o desconto
console.log(casaVelha.desconto); // 6000

