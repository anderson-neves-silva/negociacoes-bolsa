var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _data, _quantidade, _valor;
// em um primeiro momento eu vou fazer em JS, aqui vamos modelar usando classes do Ecmascript, aqui depois que uma instância é criada não pode ser modificada, por isso criamos atributos privados, vou criar uma instância em "app" para testar se consigo modificar esses atributos. 
export class Negociacao {
    constructor(data, quantidade, valor) {
        _data.set(this, void 0);
        _quantidade.set(this, void 0);
        _valor.set(this, void 0);
        __classPrivateFieldSet(this, _data, data);
        __classPrivateFieldSet(this, _quantidade, quantidade);
        __classPrivateFieldSet(this, _valor, valor);
    }
    // criando os gets, pois ele sabe acessar os atributos privados da classe.
    get data() {
        return __classPrivateFieldGet(this, _data);
    }
    get quantidade() {
        return __classPrivateFieldGet(this, _quantidade);
    }
    get valor() {
        return __classPrivateFieldGet(this, _valor);
    }
    get volume() {
        return __classPrivateFieldGet(this, _valor) * __classPrivateFieldGet(this, _quantidade);
    }
}
_data = new WeakMap(), _quantidade = new WeakMap(), _valor = new WeakMap();
