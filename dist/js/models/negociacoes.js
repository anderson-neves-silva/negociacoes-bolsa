export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // método que adiciona uma negociação.
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // método que mostra as negociações criadas, o "ReadonlyArray" é idético ao array, ele permite criar um array ou lista somente de leitura.
    lista() {
        return this.negociacoes;
    }
}
