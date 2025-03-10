import { LitElement, css, html } from "lit";

export class MyModal1 extends LitElement {
  static properties = {
    actionOnClick: { type: Function },
    actionOnActivate: { type: Function },
    actionOnDeactivate: { type: Function },

    updateExternalProps: { type: Function },
    visible: { type: Boolean },
    height: { type: Number },
    width: { type: Number },
    disabled: { type: Boolean },
    configuration: { type: Object }, //, reflect: true
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

    .modal {
      background-color: white;
      border: 1px solid grey;
      z-index: 90001;
    }

    .background {
      position: fixed;
      height: 100vh;
      width: 100%;
      background-color: grey;
      top: 0;
      left: 0;
      z-index: 90000;
      opacity: 0.6;
    }
  `;

  handleAction() {
    console.log(this.configuration);

    //this.updateExternalProps("valor de los cojones");
    this.updateExternalProps(this.configuration);
    console.log("visible: ", this.visible);
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
    this.height = "400px";
    this.width = "300px";
    this.visible = false;
    this.disabled = false;
    this.configuration = { a: 9999, b: "por defecto dentro del lit element" };
    this.updateExternalProps = () => {
      console.log("no le he pasado nada al final");
    };
  }

  // Render the UI as a function of component state
  render() {
    const sizeValues = html`<style>
      .size {
        height: ${this.height};
        width: ${this.width};
      }
    </style>`;

    //<button class="${this.buttonAppearance()} size" @click="${this.handleAction}" ?disabled=${this.disabled}>${this.text}</button>
    return html`
      ${sizeValues}
      <div class="${this.visible ? "background1" : "hidden"}"></div>
      <div class="${this.visible ? "modal size" : "hidden"}">
        <button @click="${this.handleAction1}">devolver 1</button>
        <button @click="${this.handleAction2}">devolver 2</button>
        <button @click="${this.handleAction3}">devolver 3</button>
        <button @click="${this.handleAction}">mostrar confituración</button>
      </div>
    `;
  }
}
customElements.define("my-modal-1", MyModal1);
