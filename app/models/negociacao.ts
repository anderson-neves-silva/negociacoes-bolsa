// em um primeiro momento eu vou fazer em JS, aqui vamos modelar usando classes do Ecmascript, aqui depois que uma instância é criada não pode ser modificada, por isso criamos atributos privados, vou criar uma instância em "app" para testar se consigo modificar esses atributos. 
export class Negociacao {
  #data;
  #quantidade;
  #valor;

  constructor(data, quantidade, valor) {
    this.#data = data;
    this.#quantidade = quantidade;
    this.#valor = valor;
  }

  // criando os gets, pois ele sabe acessar os atributos privados da classe.
  get data() { 
    return this.#data; 
  }

  get quantidade() {
    return this.#quantidade;
  }

  get valor() {
    return this.#valor;
  }

  get volume() {
    return this.#valor * this.#quantidade;
  }
}
