import { LitElement, css, html } from "lit";

export class MyModal1 extends LitElement {
  static properties = {
    actionOnClick: { type: Function },
    actionOnActivate: { type: Function },
    actionOnDeactivate: { type: Function },
    toggle: { type: Boolean },
    pressedButton: { type: Boolean },
    text: { type: String },
    height: { type: Number },
    width: { type: Number },
    disabled: { type: Boolean },
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
  `;

  handleAction() {
    if (this.toggle) this.pressedButton = !this.pressedButton;
    if (this.toggle && this.actionOnActivate && this.pressedButton) this.actionOnActivate();
    if (this.toggle && this.actionOnDeactivate && !this.pressedButton) this.actionOnDeactivate();
    if (this.actionOnClick) this.actionOnClick();
  }

  buttonAppearance() {
    if (this.disabled) return "disabledButton";
    if (this.pressedButton) return "pressedButton";
    else return "unpressedButton";
  }

  constructor() {
    super();
    // Declare reactive properties
    this.height = "100%"; //el button ha de estar dentro de un div
    this.width = "100%"; //el button ha de estar dentro de un div
    this.toggle = false;
    this.text = "PRESS";
    this.pressedButton = false;
    this.disabled = false;
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
      <button class="${this.buttonAppearance()} size" @click="${this.handleAction}" ?disabled=${this.disabled}>${this.text}</button>
    `;
  }
}
customElements.define("my-button", MyModal1);
