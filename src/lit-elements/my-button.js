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
    icon: { type: String },
    iconColor: { type: String },
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
    return "unpressedButton";
  }

  handleContent(){
    if (this.icon) {
      switch (this.icon) {
        case "play":
          return html`
            <span>
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none">          
              <g><path d="M8.286 3.407A1.5 1.5 0 0 0 6 4.684v14.632a1.5 1.5 0 0 0 2.286 
              1.277l11.888-7.316a1.5 1.5 0 0 0 0-2.555L8.286 3.407z" fill=${this.iconColor}></path></g>
              </svg>
            </span> 
          `;
        case "refresh":
          return html`
            <span>
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
              <g><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.181a.75.75 0 0 1 1.177-.616l4.432 3.068a.75.75 0 0 1 0 1.234l-4.432 
              3.068A.75.75 0 0 1 12 8.32V6a7 7 0 1 0 7 7 1 1 0 1 1 2 0 9 9 0 1 1-9-9V2.181z" fill=${this.iconColor}></path></g></svg>
            </span> 
          `;
          case "gear":
            return html`
            <span>
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
            <g><path fill-rule="evenodd" clip-rule="evenodd" d="m4.929 4.93.001-.002.002.001.527-.528a.575.575 0 0 1 
            .786-.025l1.21 1.061c.332.305.774.492 1.26.492.514 0 .98-.21 1.316-.548.318-.32.52-.754.539-1.235h.004l.105-1.607a.575.575 
            0 0 1 .574-.537h.746V2v.002h.747c.303 0 .554.235.574.537l.105 1.607h.005c.019.484.223.92.544 1.24.336.335.8.543 1.312.543.492 
            0 .94-.192 1.272-.504l1.196-1.05a.575.575 0 0 1 .786.026l.528.528.002-.002v.002l-.001.002.528.527a.575.575 0 0 1 
            .026.786l-1.06 1.212a1.85 1.85 0 0 0-.492 1.258c0 
            .515.21.98.548 1.317.32.318.753.52 1.235.539v.004l1.606.105c.303.02.538.271.538.574V12H22v.002h-.002v.746a.575.575 
            0 0 1-.537.574l-1.607.107v.001c-.484.02-.92.223-1.24.544-.335.336-.543.8-.543 1.312 0 .486.187.928.493 1.26h-.002l1.062 
            1.211c.2.228.188.572-.026.786l-.528.528v.002h-.001l-.528.527a.575.575 0 0 1-.785.026l-1.168-1.021a1.851 1.851 0 0 
            0-1.302-.534c-.515 0-.98.21-1.317.548-.318.32-.52.755-.54 1.238h-.004l-.105 1.607a.575.575 0 0 1-.54.536H11.22a.575.575 
            0 0 1-.54-.536l-.105-1.607h-.004a1.851 1.851 0 0 0-.545-1.244 1.851 1.851 0 0 0-1.31-.542c-.504 0-.96.2-1.295.526l-1.177 
            1.03a.575.575 0 0 1-.785-.027l-.528-.528-.001-.001-.528-.528a.575.575 0 0 1-.026-.786l1.062-1.21-.001-.001a1.85 1.85 0 0 
            0 .493-1.26c0-.515-.21-.98-.548-1.317a1.85 1.85 0 0 0-1.236-.539v-.001l-1.607-.107a.575.575 0 0 
            1-.537-.574v-.746H2V12h.001v-.747c0-.303.235-.554.538-.574l1.606-.105v-.004a1.851 1.851 0 0 0 1.242-.545c.335-.336.542-.8.542-1.31 
            0-.49-.19-.935-.499-1.267L4.376 6.244a.575.575 0 0 1 .026-.786l.528-.527-.001-.002zM16.286 12a4.286 4.286 0 1 1-8.572 0 4.286 4.286 
            0 0 1 8.572 0z" fill=${this.iconColor}></path></g></svg>
            </span> 
            `;
            case "next":
              return html`
                <span>
                  <svg width="54" height="54" viewBox="0 0 24 24" fill="none">
                  <g><path d="M8.293 5.707a1 1 0 0 1 1.414-1.414l6.647 6.646a1.5 1.5 0 0 1 0 2.122l-6.647 6.646a1 1 0 0 
                  1-1.414-1.414L14.586 12 8.293 5.707z" fill=${this.iconColor}></path></g></svg>
                </span> 
              `;
            case "previous":
              return html`
                <span>
                  <svg width="54" height="54" viewBox="0 0 24 24" fill="none">
                  <g><path d="M15.707 18.293a1 1 0 0 1-1.414 1.414l-6.647-6.646a1.5 1.5 0 0 1 0-2.122l6.647-6.646a1 1 0 1 
                  1 1.414 1.414L9.414 12l6.293 6.293z" fill=${this.iconColor}></path></g></svg>
                </span> 
              `;
            case "next2":
              return html`
                <span>
                  <svg width="54" height="54" viewBox="0 0 24 24" fill="none" transform="rotate(0)">
                  <g><path d="M8.293 5.707a1 1 0 0 1 1.414-1.414l6.647 6.646a1.5 1.5 0 0 1 0 2.122l-6.647 6.646a1 1 0 0 
                  1-1.414-1.414L14.586 12 8.293 5.707z" fill=${this.iconColor}></path></g></svg>
                </span> 
              `;
            case "mode":
              return html`
                <span>
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
                  <g><path d="m19 9.308-9 1.384V18c0 2-2.067 3-4 3-1.933 0-4-1-4-3s2.067-3 4-3c.682 0 1.381.125 2 
                  .374V6.287c0-.74.54-1.37 1.272-1.483l10.576-1.627A1 1 0 0 1 21 4.166V16c0 2-2.067 
                  3-4 3-1.933 0-4-1-4-3s2.067-3 4-3c.682 0 1.381.125 2 .374V9.308zm0-2v-2l-9 1.384v2l9-1.384zM8 
                  18c0-1-2-1-2-1s-2 0-2 1 2 1 2 1 2 0 2-1zm11-2c0-1-2-1-2-1s-2 0-2 1 2 1 2 1 2 0 2-1z" fill=${this.iconColor}></path></g></svg>
                </span> 
              `;
            case "down-arrow":
              return html`
                <span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M10.944 
                  21.596c.586.585 1.53.585 2.116 0 1.815-1.811 5.353-5.345 5.643-5.633.39-.39.39-1.03 0-1.42a.996.996 0 0 
                  0-1.41 0l-2.717 2.716a9.993 9.993 0 0 0-1.407 1.768l-.214.342-.207-.208a10 10 0 0 0 .255-2.24V3a1 1 0 
                  1 0-2 0v13.922a10 10 0 0 0 .254 2.24l-.207.207-.214-.342a9.993 9.993 0 0 0-1.407-1.768l-2.716-2.716a.996.996 0 0 
                  0-1.41 0c-.39.39-.39 1.03 0 1.42l5.641 5.633z" fill=${this.iconColor}></path></g></svg>
                </span> 
              `;
            case "right-arrow":
              return html`
                <span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M21.596 
                  13.058a1.495 1.495 0 0 0 0-2.116A39833.83 39833.83 0 0 0 15.963 5.3c-.39-.39-1.03-.39-1.42 0a.996.996 0 
                  0 0 0 1.41l2.716 2.717a9.994 9.994 0 0 0 1.768 1.406l.342.214-.208.207a10 10 0 0 0-2.24-.254H3a1 1 0 1 
                  0 0 2h13.922a10 10 0 0 0 2.24-.254l.207.207-.342.214c-.641.4-1.233.872-1.768 1.406l-2.716 2.717a.996.996 0 0 0 0 
                  1.41c.39.39 1.03.39 1.42 0l5.633-5.642z" fill=${this.iconColor}></path></g></svg>
                </span> 
              `;
            default:
          console.log("sorry, there's no icon for this");
        }
    } 
    else {
      return this.text;
    }
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
    this.iconColor = "#FFFF00";
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
       <button class="${this.buttonAppearance()} size" @click="${this.handleAction}" ?disabled=${this.disabled}>${this.handleContent()}</button>
      
    `;
  }
}
customElements.define("my-button", MyModal1);
