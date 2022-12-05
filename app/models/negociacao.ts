export class Negociacao {
  // aqui não preciso mais colocar o modificador private porque vou usar o readonly que essa propriedade agara não pode ser mais alterda, pois ela é somente de leitua.
  constructor(
    public readonly data: Date, 
    public readonly quantidade: number,
    public readonly valor: number
  ) {}
  // criando o get, pois ele sabe acessar os atributos privados de uma classe.
  get volume(): number {
    return this.valor * this.quantidade;
  }
}
