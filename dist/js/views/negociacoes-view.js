export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor); // guardando o elemento do dom capturado.
    }
    template() {
        return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
    `;
    }
    update() {
        this.elemento.innerHTML = this.template(); // todo elemento do dom tem a propriedade innerHTML.
    }
}
