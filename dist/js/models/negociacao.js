export class Negociacao {
    // aqui não preciso mais colocar o modificador private porque vou usar o readonly que essa propriedade agara não pode ser mais alterda, pois ela é somente de leitua.
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    // criando o get, pois ele sabe acessar os atributos privados de uma classe.
    get volume() {
        return this.valor * this.quantidade;
    }
}
