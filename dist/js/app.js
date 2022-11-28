// //  primeiro presciso importar Negociacao aqui, e para isso lá onde foi criado está classe preciso colocar essa diretiva "export".
// import { Negociacao } from './models/negociacao.js';
import { NegociacaoController } from "./controllers/negociacao-controller.js";
// criando uma instância.
const controller = new NegociacaoController();
// toda vez que submeter o form chama a função adiciona.
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    // quando o form é submetido ele faz um refresh, vamos retirar isto.
    event.preventDefault();
    controller.adiciona();
});
