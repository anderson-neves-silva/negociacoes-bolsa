import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        // convertendo a string que vem do form em um objeto do tipo Date, eu primeiro crio uma expressão regular que significa, encontra tudo que é "-" mas não só primeiro, todas as ocorrência eu faço isso com o "g" de global.
        const exp = /-/g;
        // aqui no construtor eu passo o resultado de replace que pega tudo que tem "-" e substituir por "," o retorno de value é sempre uma string, por isso uso o replace. 
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        const negociacao = new Negociacao(date, quantidade, valor);
        console.log(negociacao);
    }
}
