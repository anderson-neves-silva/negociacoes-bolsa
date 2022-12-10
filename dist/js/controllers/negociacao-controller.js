import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao(); // aqui eu apenas chamo o método.
        // console.log(negociacao);
        negociacao.data.setDate(15); // nesse linha usando o setDate indica uma folha que mesmo nossa propriedade como somente de leitura elá pode ser modificada.
        this.negociacoes.adiciona(negociacao);
        // this.negociacoes.lista().pop();  // essa linha não funciona porque a lista continua como somente de leitura. 
        console.log(this.negociacoes.lista());
        this.limparFormulario(); // após criar uma négociação eu chamo esse método que limpa o form.
    }
    criaNegociacao() {
        const exp = /-/g; // convertendo a string que vem do form em um objeto do tipo Date, eu primeiro crio uma expressão regular que significa, encontra tudo que é "-" mas não só primeiro, todas as ocorrência eu faço isso com o "g" de global.
        const date = new Date(this.inputData.value.replace(exp, ',')); // aqui no construtor eu passo o resultado de replace que pega tudo que tem "-" e substituir por "," o retorno de value é sempre uma string, por isso uso o replace.
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
