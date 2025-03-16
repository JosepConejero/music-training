import { LitElement, css, html } from "lit";
import "./my-easy-intervals-configuration-buttons";
//import { easyIntervalsConfiguration } from "../pagesHelpers/easy-intervals-configuration";

export class MyEasyIntervalsConfigurationModal extends LitElement {
  static properties = {
    // actionOnClick: { type: Function },
    // actionOnShow: { type: Function }, 
    actionOnHideWithUpdate: { type: Function },
    actionOnHideWithoutUpdate: { type: Function },

    //oldConfiguration: { type: Object, state: true }, //, reflect: true
    configuration: { type: Object, state: true }, //, reflect: true
    //newConfiguration: { type: Object }, //, reflect: true
    updateConfiguration: { type: Function },

    visible: { type: Boolean },
    height: { type: Number },
    width: { type: Number },
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
      display: none;
    }

    .container {
      position: fixed;
      height: 100vh;
      width: 100%;
      background-color: grey;
      top: 0;
      left: 0;
      z-index: 50000;
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
      z-index: 50001;
    }

    .background {
      position: absolute;
    }
  `;

/*   handleAction() {
    this.updateConfiguration(this.newConfiguration);
  } */

  constructor() {
    super();
    // Declare reactive properties
    this.height = "730px";
    this.width = "370px";
    this.visible = false;
    
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
      <div
        class="${this.visible ? "container" : "hidden"}"
        @click="${() => {
          this.actionOnHideWithoutUpdate();
        }}"
      ></div>
      <div class="${this.visible ? "modal size" : "hidden"}">
        <my-easy-intervals-configuration-buttons 
            .actionOnHideWithUpdate="${this.actionOnHideWithUpdate}" 
            .actionOnHideWithoutUpdate="${this.actionOnHideWithoutUpdate}" 
            .configuration="${this.configuration}"
            .updateConfiguration="${this.updateConfiguration}"
            ></my-easy-intervals-configuration-buttons>
            </div>
            `;
          }
        }
        customElements.define("my-easy-intervals-configuration-modal", MyEasyIntervalsConfigurationModal);
        
        
        /* .newConfiguration="${this.newConfiguration}" */