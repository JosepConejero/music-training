import { LitElement, css, html } from "lit";
import "../lit-elements/my-button";

export class MySharpFlatShowedButtons extends LitElement {
    static properties = {
      height: {type: Number},
      width: {type: Number}, 
      isSiSharpKindShowed: {type: Boolean}, 
      isSharpShowed: {type: Boolean},
      isFlatShowed: {type: Boolean},
      isNormalNotesShowed: {type: Boolean},
      isSiSharpKindShowedAction: {type: Function},
      isSharpShowedAction: {type: Function},
      isFlatShowedAction: {type: Function},
      isNormalNotesShowedAction: {type: Function},
    };
  
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
      :host {
        margin: 0;
        padding: 0;
      }
  
      .container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 0.3em; 
      }

      .div-button {
        height: 33.3%;
      }

      `;
  
     constructor() {
      super();
      // Declare reactive properties
      this.height = "150px";
      this.width = "80px";
      this.isSiSharpKindShowed = false;
      this.isSharpShowed = true;
      this.isFlatShowed = true;
      this.isNormalNotesShowed = true;
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
            <div class="div-button">
                <my-button ?pressedButton=${this.isSiSharpKindShowed} toggle text="si# kind" @click=${this.isSiSharpKindShowedAction}></my-button>
            </div>
            <div class="div-button">
                <my-button ?pressedButton=${this.isSharpShowed} toggle text="sharp" @click=${this.isSharpShowedAction}></my-button>
            </div>
            <div class="div-button">
                <my-button ?pressedButton=${this.isFlatShowed} toggle text="flat" @click=${this.isFlatShowedAction}></my-button>
            </div>
            <div class="div-button">
                <my-button ?pressedButton=${this.isNormalNotesShowed} toggle text="normal" @click=${this.isNormalNotesShowedAction}></my-button>
            </div>
        </div>
      `;
    }
  }
  customElements.define("my-sharp-flat-showed-buttons", MySharpFlatShowedButtons);
  
