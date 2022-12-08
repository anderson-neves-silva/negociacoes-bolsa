export class Negociacao {
    // usando a programação defensiva, pois na aplicação te uma falha, aqui tem um "_" no data porque o get não pode ter o mesmo nome dessa variável.
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    // criando o get, pois   ele sabe acessar os atributos privados de uma classe.
    get volume() {
        return this.valor * this.quantidade;
    }
    get data() {
        // aqui antes de devolver a data, criamos uma nova data igual a data que a classe negociacão está guardando protegida porém com uma nova referência para a memôria, aqui foi o mesmo que clonar essa variável mas sendo modificada apenas a cópia.
        const data = new Date(this._data.getTime());
        return data;
    }
}
