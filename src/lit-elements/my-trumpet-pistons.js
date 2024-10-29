import { LitElement, css, html } from "lit";

export class MyTrumpetPistons extends LitElement {
  static properties = {
    pistons: {},
    width: {},
    heigth: {},
  };

  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      margin: 0;
      padding: 0;
    }

/*     .container {
      position: relative;
      margin: 1em;
      display: flex;
      flex-direction: row;
    } */

 .pistons {
  display: flex;
  flex-direction: column; 
  --proportion: 60px;
  height: var(--proportion);
  --text-size: calc(var(--proportion) * 1.5);
  width: var(--text-size);
  border: 1px solid black;
}

.numbers {
  display: flex;
  height: 50%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
/*   border: 1px solid black; */
   font-size: var(--text-size); /*para que el hijo herede este tamaño y pueda usar porcentajes; si no, los porcentajes eno van*/
}

.number1, .number2, .number3 {
  height: 100%;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 27%; /*hereda del padre*/
  color: transparent;
/*   border: 1px solid black; */
}
.circles {
  display: flex;
  height: 50%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}

.circle1, .circle2, .circle3 {
  height: 88%;
  width: 29%;
  border: 1px solid black;
  border-radius: 50%;
}
  `;




  
  constructor() {
    super();
    // Declare reactive properties
    this.pistons = "";
    this.height = '250px';
    this.width = '100px';
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
      <div class="pistons">
        <div class="numbers">
            <div class="number1">1</div>
            <div class="number2">2</div>
            <div class="number3">3</div>
        </div>
        <div class="circles">
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
        </div>
    </div>
    `;
  }
}
customElements.define("my-trumpet-pistons", MyTrumpetPistons);
