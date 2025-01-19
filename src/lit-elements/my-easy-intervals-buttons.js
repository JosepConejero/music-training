import { LitElement, css, html } from "lit";
import "../lit-elements/my-button";

export class MyEasyIntervalsButtons extends LitElement {
    static properties = {
      height: {type: Number},
      width: {type: Number}, 

      isDoShowed: {type: Boolean}, 
      isDoShowedAction: {type: Function},

      isDosShowed: {type: Boolean}, 
      isDosShowedAction: {type: Function},

      isReShowed: {type: Boolean}, 
      isReShowedAction: {type: Function},

      isResShowed: {type: Boolean}, 
      isResShowedAction: {type: Function},

      isMiShowed: {type: Boolean}, 
      isMiShowedAction: {type: Function},

      isFaShowed: {type: Boolean}, 
      isFaShowedAction: {type: Function},

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
      this.height = "200px";
      this.width = "60px";
      this.isDoShowed = true;
      this.isDosShowed = false;
      this.isReShowed = false;
      this.isResShowed = false;
      this.isMiShowed = false;
      this.isFaShowed = false;
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
                <my-button ?pressedButton=${this.isDoShowed} toggle text="do" @click=${this.isDoShowedAction}></my-button>
            </div>
            <div class="div-button">
                <my-button ?pressedButton=${this.isDosShowed} toggle text="do#" @click=${this.isDosShowedAction}></my-button>
            </div>
            <div class="div-button">
                <my-button ?pressedButton=${this.isReShowed} toggle text="re" @click=${this.isReShowedAction}></my-button>
            </div>
            <div class="div-button">
                <my-button ?pressedButton=${this.isResShowed} toggle text="re#" @click=${this.isResShowedAction}></my-button>
            </div>
            <div class="div-button">
                <my-button ?pressedButton=${this.isMiShowed} toggle text="mi" @click=${this.isMiShowedAction}></my-button>
            </div>
            <div class="div-button">
                <my-button ?pressedButton=${this.isFaShowed} toggle text="fa" @click=${this.isFaShowedAction}></my-button>
            </div>
        </div>
      `;
    }
  }
  customElements.define("my-easy-intervals-buttons", MyEasyIntervalsButtons);
  
