import { LitElement, css, html } from "lit";
import { lines_spaces_measures } from "./lines-spaces-measures-css";
import { line_10_notes, line_11_notes, line_12_notes, line_13_notes, line_1_notes, line_2_notes, line_3_notes, line_4_notes } from "../staffHandlers/lines-notes";
import { isSharp } from "../staffHandlers/isSharp";
import { isFlat } from "../staffHandlers/isFlat";

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

    .linea-corta {
      width: 30%;
      left: calc(50% - 15%);
    }

    .linea-visible {
      visibility: visible;
    }

    .linea-oculta, .hidden {
      visibility: hidden;
    }

    .nota {
      position: absolute;
      width: 20%;
      height: calc(7.14% - 1px);
      border-radius: 50% 50%;
      background-color: black;
      left: calc(50% - 11%);
    }

    .alteration {
      position: absolute;
      width: 20%;
      left: calc(50% - 30%);
    }

    .sharp {
      font-size: 2.2em;
    }

    .flat {
      font-size: 3.2em;
    }

     `];

  constructor() {
    super();
    // Declare reactive properties
    //this.clave = '';
    this.nota1 = '';
    this.height = '250px';
    this.width = '100px';

  }

  alteration (){
    if (isSharp(this.nota1)) return "\u{266f}"; // sostenido
    if (isFlat(this.nota1)) return "\u{266d}"; // bemol
    return "";
  }

  alterationSize (){
     if (isSharp(this.nota1)) return `sharp ${this.nota1}s`; // sostenido
    if (isFlat(this.nota1)) return `flat ${this.nota1}f`; // bemol
    return "hidden"; 

    /* let merdaputa = "hidden";
    if (isSharp(this.nota1)) merdaputa= `sharp ${this.nota1}s`; // sostenido
    if (isFlat(this.nota1)) merdaputa= `flat ${this.nota1}f`; // bemol
    console.log(merdaputa);
    
    return merdaputa; */

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
        <div class="linea linea-corta element1 ${line_1_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta element2 ${line_2_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta element3 ${line_3_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta element4 ${line_4_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>

        <div class="linea linea-larga element5"></div>
        <div class="linea linea-larga element6"></div>
        <div class="linea linea-larga element7"></div>
        <div class="linea linea-larga element8"></div>
        <div class="linea linea-larga element9"></div>

        <div class="linea linea-corta element10 ${line_10_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta element11 ${line_11_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta element12 ${line_12_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta element13 ${line_13_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>

        <div class="nota ${this.nota1}"></div>
        <div class="alteration ${this.alterationSize()}">${this.alteration()}</div>         

        </div>
    `;
  }
}
customElements.define("my-staff", MyStaff);

