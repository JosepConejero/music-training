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

      isFasShowed: {type: Boolean}, 
      isFasShowedAction: {type: Function},

      isSolShowed: {type: Boolean}, 
      isSolShowedAction: {type: Function},

      isSolsShowed: {type: Boolean}, 
      isSolsShowedAction: {type: Function},

      isLaShowed: {type: Boolean}, 
      isLaShowedAction: {type: Function},

      isLasShowed: {type: Boolean}, 
      isLasShowedAction: {type: Function},

      isSiShowed: {type: Boolean}, 
      isSiShowedAction: {type: Function}, 

      isDoBlocked: {type: Boolean}, 
      isDosBlocked: {type: Boolean}, 
      isReBlocked: {type: Boolean}, 
      isResBlocked: {type: Boolean}, 
      isMiBlocked: {type: Boolean}, 
      isFaBlocked: {type: Boolean}, 
      isFasBlocked: {type: Boolean}, 
      isSolBlocked: {type: Boolean}, 
      isSolsBlocked: {type: Boolean}, 
      isLaBlocked: {type: Boolean}, 
      isLasBlocked: {type: Boolean}, 
      issiBlocked: {type: Boolean}, 
    };
  
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
      :host {
        margin: 0;
        padding: 0;
      }
  
      .supercontainer {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 0.3em; 
      
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
      this.width = "100px";

      this.isDoShowed = true;
      this.isDosShowed = false;
      this.isReShowed = false;
      this.isResShowed = false;
      this.isMiShowed = false;
      this.isFaShowed = false;
      this.isFasShowed = false;
      this.isSolShowed = false;
      this.isSolsShowed = false;
      this.isLaShowed = false;
      this.isLasShowed = false;
      this.isSiShowed = false;

      this.isDoBlocked = false;
      this.isDosBlocked = false;
      this.isReBlocked = false;
      this.isResBlocked = false;
      this.isMiBlocked = false;
      this.isFaBlocked = false;
      this.isFasBlocked = false;
      this.isSolBlocked = false;
      this.isSolsBlocked = false;
      this.isLaBlocked = false;
      this.isLasBlocked = false;
      this.isSiBlocked = false;
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
        <div class="supercontainer size">
        <div class="container">
            <div class="div-button">
                <my-button ?pressedButton=${this.isDoShowed} ?toggle=${!this.isDoBlocked} text="do" @click=${this.isDoShowedAction}></my-button>
            </div>
            <div class="div-button">
                <my-button ?pressedButton=${this.isDosShowed} ?toggle=${!this.isDosBlocked} text="do#" @click=${this.isDosShowedAction}></my-button>
            </div>
            <div class="div-button">
                <my-button ?pressedButton=${this.isReShowed} ?toggle=${!this.isReBlocked} text="re" @click=${this.isReShowedAction}></my-button>
            </div>
            <div class="div-button">
                <my-button ?pressedButton=${this.isResShowed} ?toggle=${!this.isResBlocked} text="re#" @click=${this.isResShowedAction}></my-button>
            </div>
            <div class="div-button">
                <my-button ?pressedButton=${this.isMiShowed} ?toggle=${!this.isMiBlocked} text="mi" @click=${this.isMiShowedAction}></my-button>
            </div>
            <div class="div-button">
                <my-button ?pressedButton=${this.isFaShowed} ?toggle=${!this.isFaBlocked} text="fa" @click=${this.isFaShowedAction}></my-button>
            </div>
        </div>
        <div class="container">
            <div class="div-button">
                <my-button ?pressedButton=${this.isFasShowed} ?toggle=${!this.isFasBlocked} text="fa#" @click=${this.isFasShowedAction}></my-button>
            </div>
            <div class="div-button">
                <my-button ?pressedButton=${this.isSolShowed} ?toggle=${!this.isSolBlocked} text="sol" @click=${this.isSolShowedAction}></my-button>
            </div>
            <div class="div-button">
                <my-button ?pressedButton=${this.isSolsShowed} ?toggle=${!this.isSolsBlocked} text="sol#" @click=${this.isSolsShowedAction}></my-button>
            </div>
            <div class="div-button">
                <my-button ?pressedButton=${this.isLaShowed} ?toggle=${!this.isLaBlocked} text="la" @click=${this.isLaShowedAction}></my-button>
            </div>
            <div class="div-button">
                <my-button ?pressedButton=${this.isLasShowed} ?toggle=${!this.isLasBlocked} text="la#" @click=${this.isLasShowedAction}></my-button>
            </div>
            <div class="div-button">
                <my-button ?pressedButton=${this.isSiShowed} ?toggle=${!this.isSiBlocked} text="si" @click=${this.isSiShowedAction}></my-button>
            </div>
        </div>
        </div>
      `;
    }
  }
  customElements.define("my-easy-intervals-buttons", MyEasyIntervalsButtons);
  
