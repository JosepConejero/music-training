import { LitElement, css, html } from "lit";

export class MyAlteration extends LitElement {
  static properties = {
    width: {},
    height: {},
    /* leftDistance: {},
    topDistance: {}, */
    typeAlteration: {},
  };

  static styles = [

    css`
    :host {
        margin: 0;
        padding: 0;
        
    }

    .sharp, .flat {
        background-color: transparent;
        position: relative;
    }

    .vertic1 {
        position: absolute;
        height: 90%;
        width: 17%;
        background-color: black;
        bottom: 0%;
        left: 19%;
    }

    .vertic2 {
        position: absolute;
        height: 90%;
        width: 17%;
        background-color: black;
        top: 0%;
        right: 15%;
    }

    .horiz1 {
        position: absolute;
        top: 21%;
        width: 100%;
        height: 12%;
        background-color: black;
        transform: skewY(-25deg);
    }

    .horiz2 {
        position: absolute;
        top: 71%;
        width: 100%;
        height: 12%;
        background-color: black;
        transform: skewY(-25deg);
    }

    .none {
        
        visibility: hidden;
    }


  `];
  
  constructor() {
    super();
    this.height = '20px';
    this.width = '12px';
    //this.leftDistance = "25%";
    //this.topDistance = "0%";
    this.typeAlteration = "sharp";
  }
  /*       top: ${this.topDistance};
        left: ${this.leftDistance}; */
  render() {
    const sizeValues = html`<style> 
      .measures {
        height: ${this.height};
        width: ${this.width};

      }
    </style>`;

    const sharpAlteration = html`
        ${sizeValues}
        <div class="sharp measures">
            <div class="horiz1"></div>
            <div class="horiz2"></div>
            <div class="vertic1"></div>
            <div class="vertic2"></div>
        </div>
    `;

    const flatAlteration = html`
        ${sizeValues}
        <div class="flat measures">
          <svg class="svg" width="100%" height="130%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,100 L0,0 L15,0 L15,95 
                  C15,95 80,80 80,50 
                  C80,50 80,40 55,40 
                  C55,40 15,40 10,65 

                  C10,65 0,40 60,30 
                  C60,30 100,25 100,40 
                  C100,40 120,70 15,100 Z"/>  
          </svg>            
        </div>
    `;

    const finalAlteration = () =>{
      if (this.typeAlteration==="sharp") return sharpAlteration;
      if (this.typeAlteration==="flat") return flatAlteration;
      return html`<div class="none"></div>`
    }

    return finalAlteration();
  }
}
customElements.define("my-alteration", MyAlteration);
