import { LitElement, css, html } from "lit";

export class MyButtons extends LitElement {
  static properties = {
    activateAction: {type: Function},
    stopAction: {type: Function},
    updateItemIndex: {type: Function},
    textItems: {type: Array},
    selectedItemIndex: {type: Number, reflect:true},
    height: {type: Number},
    width: {type: Number}, 
    autoUpdate: {type:Boolean} //si está a true, se ejecutará activateAction cuando se pulse arriba o abajo
  };

  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      margin: 0;
      padding: 0;
    }

    .container {
      position: relative;
      display: flex;
      flex-direction:column;
    }

    button {
      margin: 0.2em;
    }

    .up-down-button {
      height: 25%;
    }

    .up-button {
      height: 0;
      border-bottom: 20px solid black; 
      border-right: 40px solid transparent;
      border-left: 40px solid transparent;
    }

    .up-button-disabled {
      height: 0;
      border-bottom: 20px solid lightgrey; 
      border-right: 40px solid transparent;
      border-left: 40px solid transparent;
    }


    .down-button {
      height: 0;
      border-top: 20px solid black;
      border-right: 40px solid transparent;
      border-left: 40px solid transparent;
      
    }

    .down-button-disabled {
      height: 0;
      border-top: 20px solid lightgrey;
      border-right: 40px solid transparent;
      border-left: 40px solid transparent;
      
    }

    .main-button {
      height: 50%;
      background-color: #003838;
      color: yellow;
      border-radius: 0.3em;

    }
  `;

  decreaseIndex () {
    if (this.selectedItemIndex>0) {
      this.selectedItemIndex= this.selectedItemIndex - 1;
      this.updateItemIndex(this.selectedItemIndex)
    }
    if (this.autoUpdate && this.stopAction) {
      this.stopAction();
    //  this.activateAction();
    }
  }


  increaseIndex () {
    if (this.selectedItemIndex<this.textItems.length-1) {
      this.selectedItemIndex= this.selectedItemIndex + 1;
      this.updateItemIndex(this.selectedItemIndex)
    }
    if (this.autoUpdate && this.stopAction) {
      this.stopAction();
    //  this.activateAction();
    }
  }

   constructor() {
    super();
    // Declare reactive properties
    this.height = "150px";
    this.width = "80px";
    this.autoUpdate = false;
  } 

  // Render the UI as a function of component state
  render() {
   /*  if (this.stopAction) console.log("hay un stopAction")
      else console.log("NO hay un stopAction") */
    //console.log(this.stopAction)
    //if (this.stopAction) 
    const sizeValues = html`<style> 
      .size {
        height: ${this.height};
        width: ${this.width};  
      }
    </style>`;
    return html`
      ${sizeValues}
      <div class="container size">
        <button class="up-down-button" @click="${()=>this.decreaseIndex()}" ?disabled=${this.selectedItemIndex===0} >
            <div class="up-button ${this.selectedItemIndex===0 ? "up-button-disabled" : ""}"></div></button>
        <button class="main-button" @click="${this.activateAction}">${this.textItems[this.selectedItemIndex]}</button>
        <button class="up-down-button" @click="${()=>this.increaseIndex()}" ?disabled=${this.selectedItemIndex===this.textItems.length-1}>
            <div class="down-button ${this.selectedItemIndex===this.textItems.length-1 ? "down-button-disabled" : ""}"></div></button>
        <!-- <img src="prueba.png" alt="x" /> -->
      </div>
    `;
  }
}
customElements.define("my-buttons", MyButtons);
