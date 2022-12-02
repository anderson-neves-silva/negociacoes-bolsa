export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // método que adiciona uma negociação.
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // método que mostra as negociações criadas.
    lista() {
        // o “...” significa pega cada item desse array individualmenet e coloca nessa lista.
        return [...this.negociacoes];
    }
}
