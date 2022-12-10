import { Negociacao } from './negociacao.js';

export class Negociacoes {

  // private negociacoes: Array<Negociacao> = [];
  private negociacoes: Negociacao[] = [];  // atalho que o TS nos fornece, para fazer isso Array<Negociacao> é só fazer assim private Negociacao[], tem o mesmo efeito. 

  adiciona(negociacao: Negociacao) {  // método que adiciona uma negociação.
    this.negociacoes.push(negociacao);
  }

  // lista(): ReadonlyArray<Negociacao> {}  // método que mostra as negociações criadas, o "ReadonlyArray" é idético ao array, ele permite criar um array ou lista somente de leitura.
  
  lista(): readonly Negociacao[] {  // para ter o mesmo resultado da linha acima é só escrever esse modificador o "readonly".
    return this.negociacoes;
  }
}