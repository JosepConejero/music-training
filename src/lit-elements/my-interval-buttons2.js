import { LitElement, css, html } from "lit";
import "./my-button";

export class MyIntervalButtons2 extends LitElement {
    static properties = {
      height: {type: Number},
      width: {type: Number}, 
      //isSharpShowed: {type: Boolean},
      //isFlatShowed: {type: Boolean},
      //showNext: {type: Function},
      //isSharpShowedAction: {type: Function},
      //isFlatShowedAction: {type: Function},
      isShowingModePressed: {type: Boolean},
      isShowingModePressedAction: {type: Function},
      isSemitonesToggleSelected: {type: Boolean},
      isSemitonesToggleSelectedAction: {type: Function},
      isLessThan8Showed: {type: Boolean},
      isLessThan8ShowedAction: {type: Function},
/*       inputText: {type: String},
      inputTextAction: {type: Function}, */
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
      //this.isSharpShowed = true;
      //this.isFlatShowed = true;
      this.isShowingModePressed = true;
      this.isSemitonesToggleSelected = true;
      this.isLessThan8Showed = true;
    } 
  
/* actuar (){
  console.log(this.inputText);
 if (this.inputTextAction) this.inputTextAction();
} */

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
                <my-button ?pressedButton=${this.isLessThan8Showed} toggle text="less than 8" @click=${this.isLessThan8ShowedAction}></my-button>
            </div>

            <div class="div-button">
               <button></button> <!-- ESTE BUTTON ES PARA BORRAR DESPUÉS -->
            </div>

        </div>
      `;
    }
  }
  customElements.define("my-interval-buttons2", MyIntervalButtons2);
  


/* 

  <div class="div-button">
  <my-button text="NEXT" @click=${this.showNext}></my-button>
</div>
<div class="div-button">
  <my-button ?pressedButton=${this.isSharpShowed} toggle text="sharp" @click=${this.isSharpShowedAction}></my-button>
</div>
<div class="div-button">
  <my-button ?pressedButton=${this.isFlatShowed} toggle text="flat" @click=${this.isFlatShowedAction}></my-button>
</div>
*/