import { LitElement, css, html } from "lit";

export class MyStaff extends LitElement {
  static properties = {
    clave: {},
    /* nota1: { type: String, state: true, attribute: 'nota1' }, */
    nota1: {},
    nota2: {},
    notas: {},
    width: {},
    heigth: {},
  };

  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      margin: 0;
      padding: 0;
  /*  --alto: 250px;
      --ancho: 100px;  */
    }

    .container {
      position: relative;
      margin: 1em;
  /*  height: var(--alto);
      width: var(--ancho); 
      border: 1px solid black;  */
    }

    .linea {
      position: absolute;
      border-top: 0.1px solid black;
      height: 0;
    }

    .linea-larga {
      width: 100%;
    }

    .linea-corta {
      width: 30%;
      left: calc(50% - 15%);
    }

    .linea-visible {
      visibility: visible;
    }

    .linea-oculta {
      visibility: hidden;
    }

    .element1  {      top: 7.14285714285714%;               }
    .element2  {      top: calc(7.14285714285714% * 2);     }
    .element3  {      top: calc(7.14285714285714% * 3);     }
    .element4  {      top: calc(7.14285714285714% * 4);     }
    .element5  {      top: calc(7.14285714285714% * 5);     }
    .element6  {      top: calc(7.14285714285714% * 6);     }
    .element7  {      top: calc(7.14285714285714% * 7);     }
    .element8  {      top: calc(7.14285714285714% * 8);     }
    .element9  {      top: calc(7.14285714285714% * 9);     }
    .element10 {      top: calc(7.14285714285714% * 10);    }
    .element11 {      top: calc(7.14285714285714% * 11);    }
    .element12 {      top: calc(7.14285714285714% * 12);    }
    .element13 {      top: calc(7.14285714285714% * 13);    }

    .nota {
      position: absolute;
      width: 20%;
      height: calc(7.14% - 1px);
      border-radius: 50% 50%;
      background-color: black;
      left: calc(50% - 11%);
    }

    .sostenido {
      position: absolute;
      width: 20%;
      height: calc(7.14% - 1px);
      background-color: white;
      border: 1px solid black;
      left: calc(50% - 35%);
      visibility: hidden;
    }

    .la6  {      top: calc(0% + 1px);    }
    .sol6 {      top: calc(7.14% - 3.57% + 1px);    }
    .fa6  {      top: calc(7.14% + 1px);    }
    .mi6  {      top: calc(14.28% - 3.57% + 1px);    }
    .re6  {      top: calc(14.28% + 1px);    }
    .do6  {      top: calc(21.42% - 3.57% + 1px);    }
    .si5  {      top: calc(21.42% + 1px);    }
    .la5  {      top: calc(28.57% - 3.57% + 1px);    }

    .sol5 {      top: calc(28.57% + 1px);    }
    .fa5  {      top: calc(35.71% - 3.57% + 1px);    }
    .mi5  {      top: calc(35.71% + 1px);    }
    .re5  {      top: calc(42.85% - 3.57% + 1px);    }
    .do5  {      top: calc(42.85% + 1px);    }
    .si4  {      top: calc(50% - 3.57% + 1px);    }
    .la4  {      top: calc(50% + 1px);    }
    .sol4 {      top: calc(57.14% - 3.57% + 1px);    }
    .fa4  {      top: calc(57.14% + 1px);    }
    .mi4  {      top: calc(64.28% - 3.57% + 1px);    }
    .re4  {      top: calc(64.28% + 1px);    }

    .do4  {      top: calc(71.42% - 3.57% + 1px);    }
    .si3  {      top: calc(71.42% + 1px);    }
    .la3  {      top: calc(78.57% - 3.57% + 1px);    }
    .sol3 {      top: calc(78.57% + 1px);    }
    .fa3  {      top: calc(85.71% - 3.57% + 1px);    }
    .mi3  {      top: calc(85.71% + 1px);    }
    .re3  {      top: calc(92.85% - 3.57% + 1px);    }
    .do3  {      top: calc(92.85% + 1px);    }
  `;

  constructor() {
    super();
    // Declare reactive properties
    //this.clave = '';
    this.nota1 = "";
    this.height = '250px';
    this.width = '100px';
  }

  // Render the UI as a function of component state
  render() {
    const sizeValues = html`<style> 
      .size {
        height: ${this.height};
        width: ${this.width};  
      }
    </style>`;
    return html`
      ${sizeValues}
      <div class="container size">
        <div class="linea linea-corta element1 ${["sol6", "la6"].includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta element2 ${["sol6", "la6", "mi6", "fa6"].includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta element3 ${["sol6", "la6", "mi6", "fa6", "re6", "do6"].includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta element4 ${["sol6", "la6", "mi6", "fa6", "re6", "do6", "la5", "si5"].includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>

        <div class="linea linea-larga element5"></div>
        <div class="linea linea-larga element6"></div>
        <div class="linea linea-larga element7"></div>
        <div class="linea linea-larga element8"></div>
        <div class="linea linea-larga element9"></div>

        <div class="linea linea-corta element10 ${["do4", "si3", "la3", "sol3", "fa3", "mi3", "re3", "do3"].includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta element11 ${["la3", "sol3", "fa3", "mi3", "re3", "do3"].includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta element12 ${["fa3", "mi3", "re3", "do3"].includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta element13 ${["re3", "do3"].includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>

        <div class="nota ${this.nota1}"></div>
        <div class="sostenido ${this.nota1}"></div>
      </div>
    `;
  }
}
customElements.define("my-staff", MyStaff);
