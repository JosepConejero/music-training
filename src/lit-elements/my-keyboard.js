import { LitElement, css, html } from "lit";

export class MyKeyboard extends LitElement {
  static properties = {
    notes: {type: Array},
    width: {type: Number},
  };

  // Define scoped styles right with your component, in plain CSS
  static styles = [
    
    css`
    :host {
      margin: 0;
      padding: 0;
    }

    .container {
        margin: 5px;
        display: flex;
        flex-direction: row;
        position: relative;
        width: var(--fixed-value);
        --proportional-height: calc(var(--fixed-value) * 0.25);
        height: var(--proportional-height);
    }

    .white-key {
        height: 100%;
        width: 21%;
        border: 1px solid black;
        border-radius: 2px;
        background: white;
    }

    .pressed-key {
        background: red;
    } 

    .unpressed-white-key {
        background: white;
    }

    .unpressed-black-key {
        background: black;
    }

    .black-key {
        height: 63%;
        width: 2.8%;  
        border: 1px solid black;
        border-radius: 2px;
    }

    .fas3, .solb3 { position: absolute; left: 3%; }
    .sols3, .lab3 { position: absolute; left: 8%; }
    .las3, .sib3 { position: absolute; left: 12.9%; }

    .dos4, .reb4 { position: absolute; left: 22.0%; }
    .res4, .mib4 { position: absolute; left: 27.4%; }

    .fas4, .solb4 { position: absolute; left: 36.3%; }
    .sols4, .lab4 { position: absolute; left: 41.3%; }
    .las4, .sib4 { position: absolute; left: 46.4%; }

    .dos5, .reb5 { position: absolute; left: 55.3%; }
    .res5, .mib5 { position: absolute; left: 60.6%; }

    .fas5, .solb5 { position: absolute; left: 69.6%; }
    .sols5, .lab5 { position: absolute; left: 74.7%; }
    .las5, .sib5 { position: absolute; left: 79.7%; }

    .dos6, .reb6 { position: absolute; left: 88.7%; }
    .res6, .mib6 { position: absolute; left: 94%; }    


     `];

    constructor() {
        super();
        // Declare reactive properties
        this.notes = [];
        this.width = '360px';
    }

  // Render the UI as a function of component state
  render() {
    const sizeValues = html`<style> 
        .keyboard {
           --fixed-value: ${this.width};
        }
      </style>`;

    return html`
        ${sizeValues}

        <div class="keyboard container">

            <div class="white-key fa3 ${this.notes.includes("fa3") ? "pressed-key" : "unpressed-white-key"}"></div>
            <div class="white-key sol3 ${this.notes.includes("sol3") ? "pressed-key" : "unpressed-white-key"}"></div>
            <div class="white-key la3 ${this.notes.includes("la3") ? "pressed-key" : "unpressed-white-key"}"></div>
            <div class="white-key si3 ${this.notes.includes("si3") ? "pressed-key" : "unpressed-white-key"}"></div>
            <div class="white-key do4 ${this.notes.includes("do4") ? "pressed-key" : "unpressed-white-key"}"></div>
            <div class="white-key re4 ${this.notes.includes("re4") ? "pressed-key" : "unpressed-white-key"}"></div>
            <div class="white-key mi4 ${this.notes.includes("mi4") ? "pressed-key" : "unpressed-white-key"}"></div>
            
            <div class="white-key fa4 ${this.notes.includes("fa4") ? "pressed-key" : "unpressed-white-key"}"></div>
            <div class="white-key sol4 ${this.notes.includes("sol4") ? "pressed-key" : "unpressed-white-key"}"></div>
            <div class="white-key la4 ${this.notes.includes("la4") ? "pressed-key" : "unpressed-white-key"}"></div>
            <div class="white-key si4 ${this.notes.includes("si4") ? "pressed-key" : "unpressed-white-key"}"></div>
            <div class="white-key do5 ${this.notes.includes("do5") ? "pressed-key" : "unpressed-white-key"}"></div>
            <div class="white-key re5 ${this.notes.includes("re5") ? "pressed-key" : "unpressed-white-key"}"></div>
            <div class="white-key mi5 ${this.notes.includes("mi5") ? "pressed-key" : "unpressed-white-key"}"></div>

            <div class="white-key fa5 ${this.notes.includes("fa5") ? "pressed-key" : "unpressed-white-key"}"></div>
            <div class="white-key sol5 ${this.notes.includes("sol5") ? "pressed-key" : "unpressed-white-key"}"></div>
            <div class="white-key la5 ${this.notes.includes("la5") ? "pressed-key" : "unpressed-white-key"}"></div>
            <div class="white-key si5 ${this.notes.includes("si5") ? "pressed-key" : "unpressed-white-key"}"></div>
            <div class="white-key do6 ${this.notes.includes("do6") ? "pressed-key" : "unpressed-white-key"}""></div>
            <div class="white-key re6 ${this.notes.includes("re6") ? "pressed-key" : "unpressed-white-key"}"></div>
            <div class="white-key mi6 ${this.notes.includes("mi6") ? "pressed-key" : "unpressed-white-key"}"></div>

            <div class="black-key fas3 solb3 ${this.notes.includes("fas3") || this.notes.includes("solb3") ? "pressed-key" : "unpressed-black-key"}"></div>
            <div class="black-key sols3 lab3 ${this.notes.includes("sols3") || this.notes.includes("lab3") ? "pressed-key" : "unpressed-black-key"}"></div>
            <div class="black-key las3 sib3 ${this.notes.includes("las3") || this.notes.includes("sib3") ? "pressed-key" : "unpressed-black-key"}"></div>

            <div class="black-key dos4 reb4 ${this.notes.includes("dos4") || this.notes.includes("reb4") ? "pressed-key" : "unpressed-black-key"}"></div> 
            <div class="black-key res4 mib4 ${this.notes.includes("res4") || this.notes.includes("mib4") ? "pressed-key" : "unpressed-black-key"}"></div>

            <div class="black-key fas4 solb4 ${this.notes.includes("fas4") || this.notes.includes("solb4") ? "pressed-key" : "unpressed-black-key"}"></div>
            <div class="black-key sols4 lab4 ${this.notes.includes("sols4") || this.notes.includes("lab4") ? "pressed-key" : "unpressed-black-key"}"></div>
            <div class="black-key las4 sib4 ${this.notes.includes("las4") || this.notes.includes("sib4") ? "pressed-key" : "unpressed-black-key"}"></div>

            <div class="black-key dos5 reb5 ${this.notes.includes("dos5") || this.notes.includes("reb5") ? "pressed-key" : "unpressed-black-key"}"></div> 
            <div class="black-key res5 mib5 ${this.notes.includes("res5") || this.notes.includes("mib5") ? "pressed-key" : "unpressed-black-key"}"></div>

            <div class="black-key fas5 solb5 ${this.notes.includes("fas5") || this.notes.includes("solb5") ? "pressed-key" : "unpressed-black-key"}"></div>
            <div class="black-key sols5 lab5 ${this.notes.includes("sols5") || this.notes.includes("lab5") ? "pressed-key" : "unpressed-black-key"}"></div>
            <div class="black-key las5 sib5 ${this.notes.includes("las5") || this.notes.includes("sib5") ? "pressed-key" : "unpressed-black-key"}"></div>

            <div class="black-key dos6 reb6 ${this.notes.includes("dos6") || this.notes.includes("reb6") ? "pressed-key" : "unpressed-black-key"}"></div> 
            <div class="black-key res6 mib6 ${this.notes.includes("res6") || this.notes.includes("mib6") ? "pressed-key" : "unpressed-black-key"}"></div>
        
        </div>
    `;
   }
  };

  customElements.define("my-keyboard", MyKeyboard);
  
