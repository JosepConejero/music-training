import { LitElement, css, html } from "lit";
import { lines_spaces_measures } from "./lines-spaces-measures-css";
import { line_10_notes, line_11_notes, line_12_notes, line_13_notes, line_1_notes, line_2_notes, line_3_notes, line_4_notes } from "../staffHandlers/lines-notes";
import { noteTop } from "../staffHandlers/notes-tops";
import { isSharp } from "../staffHandlers/isSharp";
import { isFlat } from "../staffHandlers/isFlat";
import "./my-alteration";

export class MyIntervals extends LitElement {
  static properties = {
    clave: {},
    /* nota1: { type: String, state: true, attribute: 'nota1' }, */
    nota1: {},
    nota2: {},
    width: {},
    heigth: {},
    showingMode: {type: Boolean, converter: (value)=>value.toString()},
    showingModeText: {},
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

 /*    .sostenido1 {
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
    } */

    .alteration {
       position: absolute; 
    }

    .showing-mode {
       position: absolute; 
       left: 55%;
       top: 44%;
       font-size: 1.5em;
       font-weight: bold;
       color: yellow;
       
       border-radius: 3px;
       padding: 2px;
       background: grey;
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
    //this.showingMode = true;
    this.showingModeText = "+3";
  }

  typeAlteration (note){
    if (isSharp(note)) return `sharp`; // sostenido
    if (isFlat(note)) return `flat`; // bemol
    return "none"; 
  }

  setUserMode (){
    if (this.showingMode) {
      return html`
        <span class="showing-mode">${this.showingModeText}</span>
      `;
    } else {
        return html`
          <div class="linea linea-corta2 element1 ${line_1_notes.includes(this.nota2) ? "linea-visible" : "linea-oculta"}"></div>
          <div class="linea linea-corta2 element2 ${line_2_notes.includes(this.nota2) ? "linea-visible" : "linea-oculta"}"></div>
          <div class="linea linea-corta2 element3 ${line_3_notes.includes(this.nota2) ? "linea-visible" : "linea-oculta"}"></div>
          <div class="linea linea-corta2 element4 ${line_4_notes.includes(this.nota2) ? "linea-visible" : "linea-oculta"}"></div>

          <div class="linea linea-corta2 element10 ${line_10_notes.includes(this.nota2) ? "linea-visible" : "linea-oculta"}"></div>
          <div class="linea linea-corta2 element11 ${line_11_notes.includes(this.nota2) ? "linea-visible" : "linea-oculta"}"></div>
          <div class="linea linea-corta2 element12 ${line_12_notes.includes(this.nota2) ? "linea-visible" : "linea-oculta"}"></div>
          <div class="linea linea-corta2 element13 ${line_13_notes.includes(this.nota2) ? "linea-visible" : "linea-oculta"}"></div>

          <div class="nota2 ${this.nota2}"></div>    
          <my-alteration class="alteration position-note2" typeAlteration="${this.typeAlteration(this.nota2)}"></my-alteration>
        `; 
    }
}

  // Render the UI as a function of component state
  render() {
    const sizeValues = html`<style> 
      .size {
        height: ${this.height};
        width: ${this.width};  
      }

      .position-note1 {
        top: ${noteTop[this.nota1]};
        left: calc(50% - 44%);
      }

      .position-note2 {
        top: ${noteTop[this.nota2]};
        left: calc(50% + 1%);
      }

    </style>`;
    return html`
      ${sizeValues}
      <div class="container size">
        <div class="linea linea-corta1 element1 ${line_1_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta1 element2 ${line_2_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta1 element3 ${line_3_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta1 element4 ${line_4_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>


        <div class="linea linea-larga element5"></div>
        <div class="linea linea-larga element6"></div>
        <div class="linea linea-larga element7"></div>
        <div class="linea linea-larga element8"></div>
        <div class="linea linea-larga element9"></div>

        <div class="linea linea-corta1 element10 ${line_10_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta1 element11 ${line_11_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta1 element12 ${line_12_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>
        <div class="linea linea-corta1 element13 ${line_13_notes.includes(this.nota1) ? "linea-visible" : "linea-oculta"}"></div>


        <div class="nota1 ${this.nota1}"></div>
        <my-alteration class="alteration position-note1" typeAlteration="${this.typeAlteration(this.nota1)}"></my-alteration>

        ${this.setUserMode()}        
              
      </div>
    `;
   }
  };

  customElements.define("my-intervals", MyIntervals);
  
//  <div class="nota2 ${this.nota2}"></div>
  

//  topDistance="${noteTop[this.nota1]}"
//  topDistance="${noteTop[this.nota2]}"


//leftDistance="calc(50% - 45%)" 
// leftDistance="calc(50% + 1%)"