import { Negociacao } from './negociacao.js';

export class Negociacoes {

  // private negociacoes: Array<Negociacao> = [];
  // atalho que o TS nos fornece, para fazer isso Array<Negociacao> é só fazer assim private Negociacao[], tem o mesmo efeito. 
  private negociacoes: Negociacao[] = [];

  // método que adiciona uma negociação.
  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  // método que mostra as negociações criadas, o "ReadonlyArray" é idético ao array, ele permite criar um array ou lista somente de leitura.
  // lista(): ReadonlyArray<Negociacao> {
  // para ter o mesmo resultado da linha acima siga a linha abaixo é só escrever esse modificador. 
  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}