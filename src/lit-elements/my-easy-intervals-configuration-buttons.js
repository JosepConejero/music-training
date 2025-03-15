import { LitElement, css, html } from "lit";
import "./my-button";

export class MyEasyIntervalsConfigurationButtons extends LitElement {
    static properties = {
      height: {type: Number},
      width: {type: Number}, 

/*       isDoShowed: {type: Boolean}, 
      isDoShowedAction: {type: Function},

      isDosShowed: {type: Boolean}, 
      isDosShowedAction: {type: Function},

      isRebShowed: {type: Boolean}, 
      isRebShowedAction: {type: Function},

      isReShowed: {type: Boolean}, 
      isReShowedAction: {type: Function},

      isResShowed: {type: Boolean}, 
      isResShowedAction: {type: Function},

      isMibShowed: {type: Boolean}, 
      isMibShowedAction: {type: Function},

      isMiShowed: {type: Boolean}, 
      isMiShowedAction: {type: Function},

      isFaShowed: {type: Boolean}, 
      isFaShowedAction: {type: Function},

      isFasShowed: {type: Boolean}, 
      isFasShowedAction: {type: Function},

      isSolbShowed: {type: Boolean}, 
      isSolbShowedAction: {type: Function},

      isSolShowed: {type: Boolean}, 
      isSolShowedAction: {type: Function},

      isSolsShowed: {type: Boolean}, 
      isSolsShowedAction: {type: Function},

      isLabShowed: {type: Boolean}, 
      isLabShowedAction: {type: Function},

      isLaShowed: {type: Boolean}, 
      isLaShowedAction: {type: Function},

      isLasShowed: {type: Boolean}, 
      isLasShowedAction: {type: Function},

      isSibShowed: {type: Boolean}, 
      isSibShowedAction: {type: Function}, 

      isSiShowed: {type: Boolean}, 
      isSiShowedAction: {type: Function}, 

      isDoBlocked: {type: Boolean}, 
      isDosBlocked: {type: Boolean}, 
      isRebBlocked: {type: Boolean}, 
      isReBlocked: {type: Boolean}, 
      isResBlocked: {type: Boolean}, 
      isMibBlocked: {type: Boolean}, 
      isMiBlocked: {type: Boolean}, 
      isFaBlocked: {type: Boolean}, 
      isFasBlocked: {type: Boolean}, 
      isSolbBlocked: {type: Boolean}, 
      isSolBlocked: {type: Boolean}, 
      isSolsBlocked: {type: Boolean}, 
      isLabBlocked: {type: Boolean}, 
      isLaBlocked: {type: Boolean}, 
      isLasBlocked: {type: Boolean}, 
      isSibBlocked: {type: Boolean}, 
      isSiBlocked: {type: Boolean},  */
     
      actionOnHide: { type: Function },
      configuration: { type: Object },
      updateConfiguration: { type: Function },
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
        gap: 0.1em; 
      
      }

      .container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 0.3em; 
      }

      .div-button {
        height: 33.3%;
        width: 45px;
      }

      `;
  
     constructor() {
      super();
      // Declare reactive properties
      //this.height = "500px";
      //this.width = "380px";
      this.height = "100%";
      this.width = "100%";

/*       this.isDoShowed = true;
      this.isDosShowed = false;
      this.isRebShowed = false;
      this.isReShowed = false;
      this.isResShowed = false;
      this.isMibShowed = false;
      this.isMiShowed = false;
      this.isFaShowed = false;
      this.isFasShowed = false;
      this.isSolbShowed = false;
      this.isSolShowed = false;
      this.isSolsShowed = false;
      this.isLabShowed = false;
      this.isLaShowed = false;
      this.isLasShowed = false;
      this.isSibShowed = false;
      this.isSiShowed = false;

      this.isDoBlocked = false;
      this.isDosBlocked = false;
      this.isRebBlocked = false;
      this.isReBlocked = false;
      this.isResBlocked = false;
      this.isMibBlocked = false;
      this.isMiBlocked = false;
      this.isFaBlocked = false;
      this.isFasBlocked = false;
      this.isSolbBlocked = false;
      this.isSolBlocked = false;
      this.isSolsBlocked = false;
      this.isLabBlocked = false;
      this.isLaBlocked = false;
      this.isLasBlocked = false;
      this.isSibBlocked = false;
      this.isSiBlocked = false; */

    } 
  
    allColumn(){
        return html`
            <div class="container">
                <div class="div-button">
                         
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${this.handleAll_do}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${this.handleAll_do}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${this.handleAll_do}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${this.handleAll_do}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${this.handleAll_do}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${this.handleAll_do}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${this.handleAll_do}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${this.handleAll_do}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${this.handleAll_do}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${this.handleAll_do}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${this.handleAll_do}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${this.handleAll_do}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${this.handleAll_do}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${this.handleAll_do}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${this.handleAll_do}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${this.handleAll_do}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${this.handleAll_do}></my-button>
                </div>

                <div class="div-button">
    
                </div>
                <div class="div-button">
    
                </div>
    
            </div>    
        `;
    }

    noteColumn(){
        return html`
            <div class="container">
                <div class="div-button">
                    <my-button ?pressedButton=${false} text="all" @click=${()=>{}}></my-button>             
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.do} toggle text="do" @click=${()=>this.configuration.do = !this.configuration.do}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.dos} ?toggle=${!this.isDosBlocked} text="do#" @click=${this.isDosShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isRebShowed} ?toggle=${!this.isRebBlocked} text="re\u{266d}" @click=${this.isRebShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isReShowed} ?toggle=${!this.isReBlocked} text="re" @click=${this.isReShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isResShowed} ?toggle=${!this.isResBlocked} text="re#" @click=${this.isResShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isMibShowed} ?toggle=${!this.isMibBlocked} text="mi\u{266d}" @click=${this.isMibShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isMiShowed} ?toggle=${!this.isMiBlocked} text="mi" @click=${this.isMiShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isFaShowed} ?toggle=${!this.isFaBlocked} text="fa" @click=${this.isFaShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isFasShowed} ?toggle=${!this.isFasBlocked} text="fa#" @click=${this.isFasShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSolbShowed} ?toggle=${!this.isSolbBlocked} text="sol\u{266d}" @click=${this.isSolbShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSolShowed} ?toggle=${!this.isSolBlocked} text="sol" @click=${this.isSolShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSolsShowed} ?toggle=${!this.isSolsBlocked} text="sol#" @click=${this.isSolsShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isLabShowed} ?toggle=${!this.isLabBlocked} text="la\u{266d}" @click=${this.isLabShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isLaShowed} ?toggle=${!this.isLaBlocked} text="la" @click=${this.isLaShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isLasShowed} ?toggle=${!this.isLasBlocked} text="la#" @click=${this.isLasShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSibShowed} ?toggle=${!this.isSibBlocked} text="si\u{266d}" @click=${this.isSibShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSiShowed} ?toggle=${!this.isSiBlocked} text="si" @click=${this.isSiShowedAction}></my-button>
                </div>
                <div class="div-button">

                </div>
                <div class="div-button">

                </div>

            </div>    
        `;
    }

    sharpColumn(){
        return html`
            <div class="container">
                <div class="div-button">
                    <my-button ?pressedButton=${false} text="all" @click=${()=>{}}></my-button>             
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isDoShowed} ?toggle=${!this.isDoBlocked} text="\u{266f}" @click=${this.isDoShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isDosShowed} ?toggle=${!this.isDosBlocked} text="\u{266f}" @click=${this.isDosShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isRebShowed} ?toggle=${!this.isRebBlocked} text="\u{266f}" @click=${this.isRebShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isReShowed} ?toggle=${!this.isReBlocked} text="\u{266f}" @click=${this.isReShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isResShowed} ?toggle=${!this.isResBlocked} text="\u{266f}" @click=${this.isResShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isMibShowed} ?toggle=${!this.isMibBlocked} text="\u{266f}" @click=${this.isMibShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isMiShowed} ?toggle=${!this.isMiBlocked} text="\u{266f}" @click=${this.isMiShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isFaShowed} ?toggle=${!this.isFaBlocked} text="\u{266f}" @click=${this.isFaShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isFasShowed} ?toggle=${!this.isFasBlocked} text="\u{266f}" @click=${this.isFasShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSolbShowed} ?toggle=${!this.isSolbBlocked} text="\u{266f}" @click=${this.isSolbShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSolShowed} ?toggle=${!this.isSolBlocked} text="\u{266f}" @click=${this.isSolShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSolsShowed} ?toggle=${!this.isSolsBlocked} text="\u{266f}" @click=${this.isSolsShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isLabShowed} ?toggle=${!this.isLabBlocked} text="\u{266f}" @click=${this.isLabShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isLaShowed} ?toggle=${!this.isLaBlocked} text="\u{266f}" @click=${this.isLaShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isLasShowed} ?toggle=${!this.isLasBlocked} text="\u{266f}" @click=${this.isLasShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSibShowed} ?toggle=${!this.isSibBlocked} text="\u{266f}" @click=${this.isSibShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSiShowed} ?toggle=${!this.isSiBlocked} text="\u{266f}" @click=${this.isSiShowedAction}></my-button>
                </div>
                <div class="div-button">

                </div>
                <div class="div-button">

                </div>

            </div>    
        `;
    }

    flatColumn(){
        return html`
            <div class="container">
                <div class="div-button">
                    <my-button ?pressedButton=${false} text="all" @click=${()=>{}}></my-button>             
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isDoShowed} ?toggle=${!this.isDoBlocked} text="\u{266d}" @click=${this.isDoShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isDosShowed} ?toggle=${!this.isDosBlocked} text="\u{266d}" @click=${this.isDosShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isRebShowed} ?toggle=${!this.isRebBlocked} text="\u{266d}" @click=${this.isRebShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isReShowed} ?toggle=${!this.isReBlocked} text="\u{266d}" @click=${this.isReShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isResShowed} ?toggle=${!this.isResBlocked} text="\u{266d}" @click=${this.isResShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isMibShowed} ?toggle=${!this.isMibBlocked} text="\u{266d}" @click=${this.isMibShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isMiShowed} ?toggle=${!this.isMiBlocked} text="\u{266d}" @click=${this.isMiShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isFaShowed} ?toggle=${!this.isFaBlocked} text="\u{266d}" @click=${this.isFaShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isFasShowed} ?toggle=${!this.isFasBlocked} text="\u{266d}" @click=${this.isFasShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSolbShowed} ?toggle=${!this.isSolbBlocked} text="\u{266d}" @click=${this.isSolbShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSolShowed} ?toggle=${!this.isSolBlocked} text="\u{266d}" @click=${this.isSolShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSolsShowed} ?toggle=${!this.isSolsBlocked} text="\u{266d}" @click=${this.isSolsShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isLabShowed} ?toggle=${!this.isLabBlocked} text="\u{266d}" @click=${this.isLabShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isLaShowed} ?toggle=${!this.isLaBlocked} text="\u{266d}" @click=${this.isLaShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isLasShowed} ?toggle=${!this.isLasBlocked} text="\u{266d}" @click=${this.isLasShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSibShowed} ?toggle=${!this.isSibBlocked} text="\u{266d}" @click=${this.isSibShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSiShowed} ?toggle=${!this.isSiBlocked} text="\u{266d}" @click=${this.isSiShowedAction}></my-button>
                </div>
                <div class="div-button">

                </div>
                <div class="div-button">

                </div>

            </div>    
        `;
    }

    naturalColumn(){
        return html`
            <div class="container">
                <div class="div-button">
                    <my-button ?pressedButton=${false} text="all" @click=${()=>{}}></my-button>             
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isDoShowed} ?toggle=${!this.isDoBlocked} text="nat" @click=${this.isDoShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isDosShowed} ?toggle=${!this.isDosBlocked} text="nat" @click=${this.isDosShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isRebShowed} ?toggle=${!this.isRebBlocked} text="nat" @click=${this.isRebShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isReShowed} ?toggle=${!this.isReBlocked} text="nat" @click=${this.isReShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isResShowed} ?toggle=${!this.isResBlocked} text="nat" @click=${this.isResShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isMibShowed} ?toggle=${!this.isMibBlocked} text="nat" @click=${this.isMibShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isMiShowed} ?toggle=${!this.isMiBlocked} text="nat" @click=${this.isMiShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isFaShowed} ?toggle=${!this.isFaBlocked} text="nat" @click=${this.isFaShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isFasShowed} ?toggle=${!this.isFasBlocked} text="nat" @click=${this.isFasShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSolbShowed} ?toggle=${!this.isSolbBlocked} text="nat" @click=${this.isSolbShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSolShowed} ?toggle=${!this.isSolBlocked} text="nat" @click=${this.isSolShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSolsShowed} ?toggle=${!this.isSolsBlocked} text="nat" @click=${this.isSolsShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isLabShowed} ?toggle=${!this.isLabBlocked} text="nat" @click=${this.isLabShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isLaShowed} ?toggle=${!this.isLaBlocked} text="nat" @click=${this.isLaShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isLasShowed} ?toggle=${!this.isLasBlocked} text="nat" @click=${this.isLasShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSibShowed} ?toggle=${!this.isSibBlocked} text="nat" @click=${this.isSibShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSiShowed} ?toggle=${!this.isSiBlocked} text="nat" @click=${this.isSiShowedAction}></my-button>
                </div>
                <div class="div-button">

                </div>
                <div class="div-button">

                </div>

            </div>    
        `;
    }

    upColumn(){
        return html`
            <div class="container">
                 <div class="div-button">
                    <my-button ?pressedButton=${false} text="all" @click=${()=>{}}></my-button>             
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isDoShowed} ?toggle=${!this.isDoBlocked} text="+" @click=${this.isDoShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isDosShowed} ?toggle=${!this.isDosBlocked} text="+" @click=${this.isDosShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isRebShowed} ?toggle=${!this.isRebBlocked} text="+" @click=${this.isRebShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isReShowed} ?toggle=${!this.isReBlocked} text="+" @click=${this.isReShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isResShowed} ?toggle=${!this.isResBlocked} text="+" @click=${this.isResShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isMibShowed} ?toggle=${!this.isMibBlocked} text="+" @click=${this.isMibShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isMiShowed} ?toggle=${!this.isMiBlocked} text="+" @click=${this.isMiShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isFaShowed} ?toggle=${!this.isFaBlocked} text="+" @click=${this.isFaShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isFasShowed} ?toggle=${!this.isFasBlocked} text="+" @click=${this.isFasShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSolbShowed} ?toggle=${!this.isSolbBlocked} text="+" @click=${this.isSolbShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSolShowed} ?toggle=${!this.isSolBlocked} text="+" @click=${this.isSolShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSolsShowed} ?toggle=${!this.isSolsBlocked} text="+" @click=${this.isSolsShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isLabShowed} ?toggle=${!this.isLabBlocked} text="+" @click=${this.isLabShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isLaShowed} ?toggle=${!this.isLaBlocked} text="+" @click=${this.isLaShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isLasShowed} ?toggle=${!this.isLasBlocked} text="+" @click=${this.isLasShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSibShowed} ?toggle=${!this.isSibBlocked} text="+" @click=${this.isSibShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSiShowed} ?toggle=${!this.isSiBlocked} text="+" @click=${this.isSiShowedAction}></my-button>
                </div>
                <div class="div-button">

                </div>
                <div class="div-button">

                </div>

            </div>    
        `;
    }

    downColumn(){
        return html`
            <div class="container">
                <div class="div-button">
                    <my-button ?pressedButton=${false} text="all" @click=${()=>{}}></my-button>             
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isDoShowed} ?toggle=${!this.isDoBlocked} text="-" @click=${this.isDoShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isDosShowed} ?toggle=${!this.isDosBlocked} text="-" @click=${this.isDosShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isRebShowed} ?toggle=${!this.isRebBlocked} text="-" @click=${this.isRebShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isReShowed} ?toggle=${!this.isReBlocked} text="-" @click=${this.isReShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isResShowed} ?toggle=${!this.isResBlocked} text="-" @click=${this.isResShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isMibShowed} ?toggle=${!this.isMibBlocked} text="-" @click=${this.isMibShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isMiShowed} ?toggle=${!this.isMiBlocked} text="-" @click=${this.isMiShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isFaShowed} ?toggle=${!this.isFaBlocked} text="-" @click=${this.isFaShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isFasShowed} ?toggle=${!this.isFasBlocked} text="-" @click=${this.isFasShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSolbShowed} ?toggle=${!this.isSolbBlocked} text="-" @click=${this.isSolbShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSolShowed} ?toggle=${!this.isSolBlocked} text="-" @click=${this.isSolShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSolsShowed} ?toggle=${!this.isSolsBlocked} text="-" @click=${this.isSolsShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isLabShowed} ?toggle=${!this.isLabBlocked} text="-" @click=${this.isLabShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isLaShowed} ?toggle=${!this.isLaBlocked} text="-" @click=${this.isLaShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isLasShowed} ?toggle=${!this.isLasBlocked} text="-" @click=${this.isLasShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSibShowed} ?toggle=${!this.isSibBlocked} text="-" @click=${this.isSibShowedAction}></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.isSiShowed} ?toggle=${!this.isSiBlocked} text="-" @click=${this.isSiShowedAction}></my-button>
                </div>
                <div class="div-button">

                </div>
                <div class="div-button">

                </div>

            </div>    
        `;
    }

    // Render the UI as a function of component state
    render() {
      const sizeValues = html`<style> 
        .size {
          height: ${this.height};
          width: ${this.width};  
        }
      </style>`;

 //console.log(JSON.stringify(this.configuration));

      return html`
        ${sizeValues} 
        <div class="supercontainer size">
            ${this.allColumn()}
            ${this.noteColumn()}
            ${this.sharpColumn()}
            ${this.flatColumn()}
            ${this.naturalColumn()}
            ${this.upColumn()}
            ${this.downColumn()}
        </div>
      `;
    }
  }
  customElements.define("my-easy-intervals-configuration-buttons", MyEasyIntervalsConfigurationButtons);
  
  