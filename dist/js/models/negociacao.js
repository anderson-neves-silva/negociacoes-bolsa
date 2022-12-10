export class Negociacao {
    constructor(// usando a programação defensiva, pois na aplicação te uma falha, aqui tem um "_" no data porque o get não pode ter o mesmo nome dessa variável.
    _data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.valor * this.quantidade;
    }
    get data() {
        const data = new Date(this._data.getTime()); // aqui antes de devolver a data, criamos uma nova data igual a data que a classe negociacão está guardando protegida porém com uma nova referência para a memôria, aqui foi o mesmo que clonar essa variável mas sendo modificada apenas a cópia.
        return data;
    }
}
