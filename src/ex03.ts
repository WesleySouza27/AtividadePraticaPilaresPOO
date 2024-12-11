class Animal {
    constructor(protected _comer: string, protected _beber: string, protected _cor: string) {}

}

class Cavalo extends Animal {
    constructor(_comer: string, _beber: string, _cor: string, protected _quantCascos: number) {
        super(_comer, _beber, _cor)
    }

    darCoice() {
        console.log('Cavalo: coice executado com sucesso!')
    }
}

class Cachorro extends Animal {
    constructor(_comer: string, _beber: string, _cor: string, protected raca: string) {
        super(_comer, _beber, _cor)
    }

    latir() {
        console.log('Cachorro: Au au au!')
    }
}

class Gato extends Animal {
    constructor(_comer: string, _beber: string, _cor: string, protected raca: string) {
        super(_comer, _beber, _cor)
    }

    pular() {
        console.log('Gato: gato pulando!')
    }
}

const cavalo = new Cavalo('capim', 'agua', 'marrom', 4)
cavalo.darCoice()

const cachorro = new Cachorro('carne', 'agua', 'caramelo', 'vira-lata')
cachorro.latir()

const gato = new Gato('peixe', 'leite', 'cinza/preto', 'siamês')
gato.pular()