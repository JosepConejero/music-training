import { LitElement, css, html } from "lit";
import "./my-button";

export class MyIntervalButtons extends LitElement {
    static properties = {
      height: {type: Number},
      width: {type: Number}, 
      showNext: {type: Function},
      isSharpShowed: {type: Boolean},
      isSharpShowedAction: {type: Function},
      isFlatShowed: {type: Boolean},
      isFlatShowedAction: {type: Function},
      isNormalShowed: {type: Boolean},
      isNormalShowedAction: {type: Boolean},
     // isLessThan8Showed: {type: Boolean},
     // isShowingModePressed: {type: Boolean},
     // isLessThan8ShowedAction: {type: Function},
     // isShowingModePressedAction: {type: Function},
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

      `;
  
     constructor() {
      super();
      // Declare reactive properties
      this.height = "80px";
      this.width = "300px";
      this.isSharpShowed = true;
      this.isFlatShowed = true;
      this.isNormalShowed = true;
     // this.isLessThan8Showed = true;
      //this.isShowingModePressed = true;
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
                <my-button text="NEXT" @click=${this.showNext}></my-button>
            </div>
            <div class="div-button">
                <my-button ?pressedButton=${this.isSharpShowed} toggle text="sharp" @click=${this.isSharpShowedAction}></my-button>
            </div>
            <div class="div-button">
                <my-button ?pressedButton=${this.isFlatShowed} toggle text="flat" @click=${this.isFlatShowedAction}></my-button>
            </div>
            <div class="div-button">
                <my-button ?pressedButton=${this.isNormalShowed} toggle text="normal" @click=${this.isNormalShowedAction}></my-button>
            </div>
            
        </div>
      `;
    }
  }
  customElements.define("my-interval-buttons", MyIntervalButtons);
  
/* <div class="div-button">
                <my-button ?pressedButton=${this.isShowingModePressed} toggle text="mode" @click=${this.isShowingModePressedAction}></my-button>
            </div> */


/*             <div class="div-button">
            <my-button ?pressedButton=${this.isLessThan8Showed} toggle text="less than 8" @click=${this.isLessThan8ShowedAction}></my-button>
        </div>
 */