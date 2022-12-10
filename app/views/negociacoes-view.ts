export class NegociacoesView {  // como vou precisar importar ela em outros locais eu coloco como export.

  private elemento: HTMLLIElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);  // guardando o elemento do dom capturado.
  }
  
  template(): string {  // método template que retora uma string e declarando o tamplate da view.
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

  update(): void {  // método que atualiza a view, ele renderiza esse template no elemento capturado através do construtor .
    this.elemento.innerHTML = this.template();  // todo elemento do dom tem a propriedade innerHTML.

  }
}