import { Negociacao } from './negociacao.js';

export class Negociacoes {

  private negociacoes: Array<Negociacao> = [];

  // método que adiciona uma negociação.
  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  // método que mostra as negociações criadas.
  lista(): Array<Negociacao> {
    // o “...” significa pega cada item desse array individualmenet e coloca nessa lista.
    return [...this.negociacoes];
  }
}