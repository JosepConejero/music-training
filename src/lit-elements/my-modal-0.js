import { LitElement, css, html } from "lit";
import "./my-easy-intervals-configuration-buttons";
//import { easyIntervalsConfiguration } from "../pagesHelpers/easy-intervals-configuration";
export class MyModal0 extends LitElement {
  static properties = {
    // actionOnClick: { type: Function },
    // actionOnShow: { type: Function }, 
    actionOnHide: { type: Function },

    configuration: { type: Object }, //, reflect: true
    updateConfiguration: { type: Function },

    visible: { type: Boolean },
    height: { type: Number },
    width: { type: Number },
   // disabled: { type: Boolean },
  };

  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      margin: 0;
      padding: 0;
    }

    .unpressedButton {
      background-color: #003838;
      color: yellow;
      border-radius: 0.3em;
    }

    .pressedButton {
      background-color: #689292;
      color: black;
      border-radius: 0.3em;
    }

    .disabledButton {
      background-color: lightgrey;
      color: grey;
      border-radius: 0.3em;
    }

    .hidden {
      visibility: hidden;
    }

    .container {
      position: fixed;
      height: 100vh;
      width: 100%;
      background-color: grey;
      top: 0;
      left: 0;
      z-index: 80000;
      opacity: 0.6;
    }

    .modal {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      border: 1px solid grey;
      border-radius: 5px;
      z-index: 90000;
    }

    .background {
      position: absolute;
    }
  `;

  handleAction() {
   // console.log(this.configuration);
    this.updateConfiguration(this.configuration);
  }

  handleAction1() {
    this.configuration = { a: 1, b: "modificación 1 (dentro del lit element)" };
  }
  handleAction2() {
    this.configuration = { a: 2, b: "modificación 2 (dentro del lit element)" };
  }
  handleAction3() {
    this.configuration = { a: 3, b: "modificación 3 (dentro del lit element)" };
  }

  constructor() {
    super();
    // Declare reactive properties
    this.height = "730px";
    this.width = "370px";
    this.visible = false;
   // this.configuration = easyIntervalsConfiguration;
    //this.disabled = false;
    //this.configuration = { a: 9999, b: "por defecto dentro del lit element" };
    //this.updateConfiguration = () => {      console.log("no le he pasado nada al final");    };
  }

  // Render the UI as a function of component state
  render() {
    const sizeValues = html`<style>
      .size {
        height: ${this.height};
        width: ${this.width};
      }
    </style>`;

     //console.log(JSON.stringify(this.configuration));

    //<button class="${this.buttonAppearance()} size" @click="${this.handleAction}" ?disabled=${this.disabled}>${this.text}</button>
    return html`
      ${sizeValues}
      <div
        class="${this.visible ? "container" : "hidden"}"
        @click="${() => {
          this.actionOnHide();
        }}"
      ></div>
      <div class="${this.visible ? "modal size" : "hidden"}">
        <my-easy-intervals-configuration-buttons 
            actionOnHide="${this.actionOnHide}" 
            .configuration="${this.configuration}"
            updateConfiguration="${this.updateConfiguration}"
        ></my-easy-intervals-configuration-buttons>
        <!-- <button class="unpressedButton" @click="${this.handleAction1}">devolver 1</button>
          <button class="unpressedButton" @click="${this.handleAction2}">devolver 2</button>
          <button class="unpressedButton" @click="${this.handleAction3}">devolver 3</button>
          <button class="unpressedButton" @click="${this.handleAction}">mostrar confituración</button>-->
      </div>
    `;
  }
}
customElements.define("my-modal-0", MyModal0);

//<div class="${this.visible ? "background" : "hidden"}"></div>
