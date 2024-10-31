import { LitElement, css, html } from "lit";
import { lines_spaces_measures } from "./lines-spaces-measures-css";
import { line_10_notes, line_11_notes, line_12_notes, line_13_notes, line_1_notes, line_2_notes, line_3_notes, line_4_notes } from "../staffHandlers/lines-notes";

export class MyIntervals extends LitElement {
  static properties = {
    clave: {},
    /* nota1: { type: String, state: true, attribute: 'nota1' }, */
    nota1: {},
    nota2: {},
    width: {},
    heigth: {},
  };

  // Define scoped styles right with your component, in plain CSS
  static styles = [
    
    lines_spaces_measures, 
    
    css`
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

    .linea-corta1 {
      width: 30%;
      left: calc(50% - 35%);
    }

    .linea-corta2 {
      width: 30%;
      left: calc(50% + 10%);
    }

    .linea-visible {
      visibility: visible;
    }

    .linea-oculta {
      visibility: hidden;
    }

    .nota1 {
      position: absolute;
      width: 20%;
      height: calc(7.14% - 1px);
      border-radius: 50% 50%;
      background-color: black;
      left: calc(50% - 30%);
    }

    .nota2 {
      position: absolute;
      width: 20%;
      height: calc(7.14% - 1px);
      border-radius: 50% 50%;
      background-color: black;
      left: calc(50% + 15%);
    }

    .sostenido1 {
      position: absolute;
      width: 20%;
      height: calc(7.14% - 1px);
      background-color: white;
      border: 1px solid black;
      left: calc(50% - 45%);
      visibility: hidden;
    }

    .sostenido2 {
      position: absolute;
      width: 20%;
      height: calc(7.14% - 1px);
      background-color: white;
      border: 1px solid black;
      left: calc(50% + 5%);
      visibility: hidden;
    }
     `];

  constructor() {
    super();
    // Declare reactive properties
    //this.clave = '';
    this.nota1 = '';
    this.nota2 = '';
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
        <div class="linea linea-corta1 element1 ${line_1_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta1 element2 ${line_2_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta1 element3 ${line_3_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta1 element4 ${line_4_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>

        <div class="linea linea-corta2 element1 ${line_1_notes.includes(this.nota2) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta2 element2 ${line_2_notes.includes(this.nota2) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta2 element3 ${line_3_notes.includes(this.nota2) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta2 element4 ${line_4_notes.includes(this.nota2) ? "linea-visible" : "linea-oculta"}"></div>

        <div class="linea linea-larga element5"></div>
        <div class="linea linea-larga element6"></div>
        <div class="linea linea-larga element7"></div>
        <div class="linea linea-larga element8"></div>
        <div class="linea linea-larga element9"></div>

        <div class="linea linea-corta1 element10 ${line_10_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta1 element11 ${line_11_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta1 element12 ${line_12_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta1 element13 ${line_13_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>

        <div class="linea linea-corta2 element10 ${line_10_notes.includes(this.nota2) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta2 element11 ${line_11_notes.includes(this.nota2) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta2 element12 ${line_12_notes.includes(this.nota2) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta2 element13 ${line_13_notes.includes(this.nota2) ? "linea-visible" : "linea-oculta"}"></div>

        <div class="nota1 ${this.nota1}"></div>
        <div class="nota2 ${this.nota2}"></div>
        <div class="sostenido1 ${this.nota1}"></div>
        <div class="sostenido2 ${this.nota2}"></div>
      </div>
    `;
  }
}
customElements.define("my-intervals", MyIntervals);
