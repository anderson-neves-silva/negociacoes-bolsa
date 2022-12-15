import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView');  // indicamos qual o elemento do dom que a view será renderizada por cima.

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
    this.negociacoesView.update(this.negociacoes);  // chamando o método que exibe a tabela
  }

  adiciona(): void {  // podemos tipar os retornos dos métodos, aqui eu apenas acrescentei.
    const negociacao = this.criaNegociacao();  // aqui eu apenas chamo o método.
    // console.log(negociacao);
    // negociacao.data.setDate(15);  // nesse linha usando o setDate indica uma folha que mesmo nossa propriedade como somente de leitura elá pode ser modificada.
    this.negociacoes.adiciona(negociacao);
    // this.negociacoes.lista().pop();  // essa linha não funciona porque a lista continua como somente de leitura. 
    // console.log(this.negociacoes.lista());
    this.negociacoesView.update(this.negociacoes);
    this.limparFormulario();  // após criar uma négociação eu chamo esse método que limpa o form.
  }

  criaNegociacao(): Negociacao {  // criando o método que cria a negociação.
    const exp = /-/g;  // convertendo a string que vem do form em um objeto do tipo Date, eu primeiro crio uma expressão regular que significa, encontra tudo que é "-" mas não só primeiro, todas as ocorrência eu faço isso com o "g" de global.
    const date = new Date(this.inputData.value.replace(exp, ','));  // aqui no construtor eu passo o resultado de replace que pega tudo que tem "-" e substituir por "," o retorno de value é sempre uma string, por isso uso o replace.
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);
    return new Negociacao(date, quantidade, valor);
  }

  limparFormulario(): void {  // método que limpa o form e dá foco ao primeiro input.
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }
}
