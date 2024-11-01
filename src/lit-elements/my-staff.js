import { LitElement, css, html } from "lit";
import { lines_spaces_measures } from "./lines-spaces-measures-css";
import { line_10_notes, line_11_notes, line_12_notes, line_13_notes, line_1_notes, line_2_notes, line_3_notes, line_4_notes } from "../staffHandlers/lines-notes";
import { isSharp } from "../staffHandlers/isSharp";
import { isFlat } from "../staffHandlers/isFlat";
import "./my-alteration";
import { noteTop } from "../staffHandlers/notes-tops";

export class MyStaff extends LitElement {
  
  // "\u{266f}"; // sostenido - sharp
  // "\u{266d}"; // bemol - flat

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
    }

    .container {
      position: relative;
      margin: 1em;
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

     `];

  constructor() {
    super();
    // Declare reactive properties
    //this.clave = '';
    this.nota1 = '';
    this.height = '250px';
    this.width = '100px';

  }

  typeAlteration (){
    if (isSharp(this.nota1)) return `sharp`; // sostenido
    if (isFlat(this.nota1)) return `flat`; // bemol
    return "none"; 
  }
  

  // Render the UI as a function of component state
  render() {
    console.log(this.typeAlteration());
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
  
        <my-alteration typeAlteration="${this.typeAlteration()}" topDistance="${noteTop[this.nota1]}"></my-alteration>

        </div>
    `;
  }
}
customElements.define("my-staff", MyStaff);

//<!--  <div class="alteration ${this.alterationSize()}">${this.alteration()}</div> -->