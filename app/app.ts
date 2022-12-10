import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();  // criando uma instância.
const form = document.querySelector('.form');  // toda vez que submeter o form chama a função adiciona.
form.addEventListener('submit', event => {
  event.preventDefault();  // quando o form é submetido ele faz um refresh, vamos retirar esse comportamento.
  controller.adiciona();
});
