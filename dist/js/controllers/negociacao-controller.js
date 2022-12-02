import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    // podemos tipar os retornos dos métodos, aqui eu apenas acrescentei.
    adiciona() {
        // aqui eu apenas chamo o método.
        const negociacao = this.criaNegociacao();
        // console.log(negociacao);
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        // após criar uma négociação eu chamo esse método.
        this.limparFormulario();
    }
    // criando o método que cria a negociação.
    criaNegociacao() {
        // convertendo a string que vem do form em um objeto do tipo Date, eu primeiro crio uma expressão regular que significa, encontra tudo que é "-" mas não só primeiro, todas as ocorrência eu faço isso com o "g" de global.
        const exp = /-/g;
        // aqui no construtor eu passo o resultado de replace que pega tudo que tem "-" e substituir por "," o retorno de value é sempre uma string, por isso uso o replace. 
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    // método que limpa o form e dá foco ao primeiro input.
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
