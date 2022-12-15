import { Negociacoes } from '../models/negociacoes.js';

export class NegociacoesView {  // como vou precisar importar ela em outros locais eu coloco como export.

  private elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);  // guardando o elemento do dom capturado.
  }
  
  template(model: Negociacoes): string {  // método template que retora uma string e declarando o tamplate da view.
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
        ${model.lista().map(negociacao => {
          return `
            <tr>
              <td>?</td>
              <td>${negociacao.quantidade}</td>
              <td>${negociacao.valor}</td>
            </tr>          
          `
        }).join('')}
      </tbody>
    </table>
    `;
  }

  update(model: Negociacoes): void {  // método que atualiza a view, ele renderiza esse template no elemento capturado através do construtor .
    const template = this.template(model);
    // console.log(template);
    this.elemento.innerHTML = template;  // todo elemento do dom tem a propriedade innerHTML.
  }
}
