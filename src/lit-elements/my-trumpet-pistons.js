import { LitElement, css, html } from "lit";

export class MyTrumpetPistons extends LitElement {
  static properties = {
    pistons: {},
    width: {},
    heigth: {},
//    isTrumpet: {},
  };

  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      margin: 0;
      padding: 0;
      --proportion: 60px;
      --text-size: calc(var(--proportion) * 1.5);
    }

.pistons {
  display: flex;
  flex-direction: column; 
  height: var(--proportion);
  width: var(--text-size);
  /* border: 1px solid black; */
}

.numbers {
  display: flex;
  height: 50%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  font-size: var(--text-size); /*para que el hijo herede este tamaño y pueda usar porcentajes; si no, los porcentajes no van*/
}

.visible-number {
  height: 100%;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 27%; /*hereda del padre*/
  /* color: transparent; */
  /* border: 1px solid black;  */
}

.no-number {
  color: transparent;
}

.circles {
  display: flex;
  height: 50%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}

.empty-circle {
  height: 88%;
  width: 29%;
  border: 1px solid black;
  border-radius: 50%;
}

.full-circle {
  background-color: black;
}



  `;
  
  constructor() {
    super();
    // Declare reactive properties
    this.pistons = "";
    this.height = '250px';
    this.width = '100px';
//    this.isTrumpet = false;
  }

  // Render the UI as a function of component state
  render() {
    const sizeValues = html`<style> 
      .measures {
        height: ${this.height};
        width: ${this.width};  
      }
    </style>`;

    const trumpetNotes = html`
          ${sizeValues}
      <div class="pistons measures">
        <div class="numbers">
            <div class="visible-number ${this.pistons?.includes(1) ? "" : "no-number"}">1</div>
            <div class="visible-number ${this.pistons?.includes(2) ? "" : "no-number"}">2</div>
            <div class="visible-number ${this.pistons?.includes(3) ? "" : "no-number"}">3</div>
        </div>
        <div class="circles">
            <div class="empty-circle ${this.pistons?.includes(1) ? "full-circle" : ""}"></div>
            <div class="empty-circle ${this.pistons?.includes(2) ? "full-circle" : ""}"></div>
            <div class="empty-circle ${this.pistons?.includes(3) ? "full-circle" : ""}"></div>
        </div>
    </div>
    `
return trumpetNotes;
    
  }
}
customElements.define("my-trumpet-pistons", MyTrumpetPistons);
