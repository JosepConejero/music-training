import { LitElement, css, html } from "lit";
import "./my-button";

export class My4GenericButtons extends LitElement {
    static properties = {
      height: {type: Number},
      width: {type: Number}, 
      button1Config: {type: Object},
      button2Config: {type: Object},
      button3Config: {type: Object},
      button4Config: {type: Object},
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
  
      /* button {  ESTE BUTTON ES PARA CUANDO NO HAYA BUTTON 
        width: 100%;
        visibility: hidden;
      } */

     constructor() {
      super();
      // Declare reactive properties
      this.height = "80px";
      this.width = "300px";
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
              ${this.button1Config ? html`
               <my-button text=${this.button1Config.text} ?pressedButton=${this.button1Config.defaultActivation} ?disabled=${this.button1Config.disabled}
                          ?toggle=${this.button1Config.toggle} @click=${this.button1Config.actionOnClick}></my-button> 
                ` : ""}
            </div>
            <div class="div-button">
              ${this.button2Config ? html`
               <my-button text=${this.button2Config.text} ?pressedButton=${this.button2Config.defaultActivation} ?disabled=${this.button2Config.disabled}
                          ?toggle=${this.button2Config.toggle} @click=${this.button2Config.actionOnClick}></my-button>
                ` : ""}
            </div>
            <div class="div-button">
              ${this.button3Config ? html`
               <my-button text=${this.button3Config.text} ?pressedButton=${this.button3Config.defaultActivation} ?disabled=${this.button3Config.disabled}
                          ?toggle=${this.button3Config.toggle} @click=${this.button3Config.actionOnClick}></my-button>
                ` : ""}
            </div>
            <div class="div-button">
              ${this.button4Config ? html`
               <my-button text=${this.button4Config.text} ?pressedButton=${this.button4Config.defaultActivation} ?disabled=${this.button4Config.disabled}
                          ?toggle=${this.button4Config.toggle} @click=${this.button4Config.actionOnClick}></my-button>
                ` : ""}
            </div>
            
        </div>
      `;
    }
  }
  customElements.define("my-4-generic-buttons", My4GenericButtons);
  
