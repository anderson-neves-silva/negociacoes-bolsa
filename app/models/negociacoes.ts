import { Negociacao } from './negociacao.js';

export class Negociacoes {

  private negociacoes: Array<Negociacao> = [];

  // método que adiciona uma negociação.
  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  // método que mostra as negociações criadas, o "ReadonlyArray" é idético ao array, ele permite criar um array ou lista somente de leitura.
  lista(): ReadonlyArray<Negociacao> {
    return this.negociacoes;
  }
}