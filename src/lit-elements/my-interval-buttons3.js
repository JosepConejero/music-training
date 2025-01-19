import { LitElement, css, html } from "lit";
import "./my-button";

export class MyIntervalButtons3 extends LitElement {
    static properties = {
      height: {type: Number},
      width: {type: Number}, 
      isShowingModePressed: {type: Boolean},
      isShowingModePressedAction: {type: Function},
      isSemitonesToggleSelected: {type: Boolean},
      isSemitonesToggleSelectedAction: {type: Function},
      isPlusShowed: {type: Boolean},
      isPlusShowedAction: {type: Function},
      isMinusShowed: {type: Boolean},
      isMinusShowedAction: {type: Function},
    };
  
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
      :host {
        margin: 0;
        padding: 0;
      }
  
      .container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 0.3em; 
      }

      .div-button {
        height: 100%;
        width: 25%;
      }

      button { /* ESTE BUTTON ES PARA BORRAR DESPUÉS */
        width: 100%;
        visibility: hidden;
      }

      `;
  
     constructor() {
      super();
      // Declare reactive properties
      this.height = "80px";
      this.width = "300px";
      this.isShowingModePressed = true;
      this.isSemitonesToggleSelected = true;
      this.isPlusShowed = true;
      this.isMinusShowed = true;
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
                <my-button ?pressedButton=${this.isShowingModePressed} toggle text="mode" @click=${this.isShowingModePressedAction}></my-button>
            </div>

            <div class="div-button">
                <my-button ?pressedButton=${this.isSemitonesToggleSelected} toggle text="st / pk" @click=${this.isSemitonesToggleSelectedAction}></my-button>
            </div> 
 
            <div class="div-button">
                <my-button ?pressedButton=${this.isPlusShowed} toggle text="+" @click=${this.isPlusShowedAction}></my-button>
            </div>

            <div class="div-button">
               <my-button ?pressedButton=${this.isMinusShowed} toggle text="-" @click=${this.isMinusShowedAction}></my-button>
            </div>

        </div>
      `;
    }
  }
  customElements.define("my-interval-buttons3", MyIntervalButtons3);
  
