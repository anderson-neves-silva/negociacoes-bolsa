export class Negociacoes {
    constructor() {
        // private negociacoes: Array<Negociacao> = [];
        this.negociacoes = []; // atalho que o TS nos fornece, para fazer isso Array<Negociacao> é só fazer assim private Negociacao[], tem o mesmo efeito. 
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): ReadonlyArray<Negociacao> {}  // método que mostra as negociações criadas, o "ReadonlyArray" é idético ao array, ele permite criar um array ou lista somente de leitura.
    lista() {
        return this.negociacoes;
    }
}
