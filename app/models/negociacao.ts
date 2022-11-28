// em um primeiro momento eu vou fazer em JS, aqui vamos modelar usando classes do Ecmascript, aqui depois que uma instância é criada não pode ser modificada, por isso criamos atributos privados, vou criar uma instância em "app" para testar se consigo modificar esses atributos. 
export class Negociacao {
  private _data;
  private _quantidade;
  private _valor;

  constructor(data, quantidade, valor) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
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
