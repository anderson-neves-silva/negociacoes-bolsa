export class Negociacao {
  // usando a programação defensiva, pois na aplicação te uma falha, aqui tem um "_" no data porque o get não pode ter o mesmo nome dessa variável.
  constructor(
    private _data: Date, 
    public readonly quantidade: number,
    public readonly valor: number
  ) {}
  // criando o get, pois   ele sabe acessar os atributos privados de uma classe.
  get volume(): number {
    return this.valor * this.quantidade;
  }

  get data(): Date {
    // aqui antes de devolver a data, criamos uma nova data igual a data que a classe negociacão está guardando protegida porém com uma nova referência para a memôria.
    const data = new Date(this._data.getTime()); 
    return data;
  }
}
