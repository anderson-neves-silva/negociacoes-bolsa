export class Negociacao {
  // se no construtor colocarmos o modificador private ou public o TS por de baixo dos panos criar uma propriedade da minha classe que contenha esse mesmo nome com esses parâmetros do construtor e faz a atribuição, uma observação: podemos criar uma propriedade que não faz parte do construtor antes dele tranquilamente.
  constructor(
    private _data: Date, 
    private _quantidade: number,
    private _valor: number
  ) {}
  // criando os gets, pois ele sabe acessar os atributos privados da classe.
  get data(): Date { 
    return this._data; 
  }

  get quantidade(): number {
    return this._quantidade;
  }

  get valor(): number {
    return this._valor;
  }

  get volume(): number {
    return this._valor * this._quantidade;
  }
}
