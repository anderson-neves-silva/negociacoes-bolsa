export class Negociacao {
    // se no construtor colocarmos o modificador private ou public o TS por de baixo dos panos criar uma propriedade da minha classe que contenha esse mesmo nome com esses parâmetros do construtor e faz a atribuição, uma observação: podemos criar uma propriedade que não faz parte do construtor antes dele tranquilamente.
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    // criando os gets, pois ele sabe acessar os atributos privados da classe.
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._valor * this._quantidade;
    }
}
