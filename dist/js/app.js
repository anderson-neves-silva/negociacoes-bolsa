//  primeiro presciso importar Negociacao aqui, e para isso lá onde foi criado está classe preciso colocar essa diretiva "export".
import { Negociacao } from './models/negociacao.js';
// fazendo uma instância
const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao.volume);
