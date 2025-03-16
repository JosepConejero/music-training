import { LitElement, css, html } from "lit";
import "./my-button";

export class MyEasyIntervalsConfigurationButtons extends LitElement {
    static properties = {
      height: {type: Number},
      width: {type: Number}, 
     
      actionOnHideWithUpdate: { type: Function },
      actionOnHideWithoutUpdate: { type: Function },
      //oldConfiguration: { type: Object, state: true },
      configuration: { type: Object, state: true },
      //newConfiguration: { type: Object, state: true },
    //   oldConfiguration: { type: Object},
    //   newConfiguration: { type: Object},
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
        flex-direction: column;
        justify-content: space-evenly;
      }
        
      .container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 0.1em; 
        /*background-color: green;*/
        margin-top: 0.3em;
        height: 100%
      }

      .column {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 0.3em; 
      }

      .div-button {
        height: 33.3%;
        width: 45px;
      }

      .div-bottom-buttons {
        height: 200%;
        width: 80px;
      }

      .bottom-buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        /*background-color: red;*/
        margin-top: 1em;
      }

      `;
  
     constructor() {
      super();
      // Declare reactive properties
      //this.height = "500px";
      //this.width = "380px";
      this.height = "95%";
      this.width = "100%";
      //this.newConfiguration = {...this.oldConfiguration};
      //console.log(this.oldConfiguration);
    //   console.log("entra en constructor");
      //console.log(this.newConfiguration);
    } 

    handleAllNotes () {
      let isAnyFalse = false;
      ["do", "dos", "reb", "re", "res", "mib", "mi", "fa", "fas", "solb", "sol", "sols", "lab", "la", "las", "sib", "si"].forEach((note)=>{
        ["", "_s", "_b", "_n", "_up", "_down"].forEach((option)=>{
          if (this.configuration[`${note}${option}`] === false) isAnyFalse = true;
        });
      });

      if (isAnyFalse) {
        ["do", "dos", "reb", "re", "res", "mib", "mi", "fa", "fas", "solb", "sol", "sols", "lab", "la", "las", "sib", "si"].forEach((note)=>{
          ["", "_s", "_b", "_n", "_up", "_down"].forEach((option)=>{
            this.configuration[`${note}${option}`] = true;
          });
        });
      } else {
        ["do", "dos", "reb", "re", "res", "mib", "mi", "fa", "fas", "solb", "sol", "sols", "lab", "la", "las", "sib", "si"].forEach((note)=>{
          ["", "_s", "_b", "_n", "_up", "_down"].forEach((option)=>{
            this.configuration[`${note}${option}`] = false;
          });
        });
      }

      this.requestUpdate(); 
    }

    handleAllSingleNote (note) {
        //console.log(this.newConfiguration[note]);
        const toggleAll_do = this.configuration[note] && this.configuration[`${note}_s`] && 
                             this.configuration[`${note}_b`] && this.configuration[`${note}_n`] && 
                             this.configuration[`${note}_up`] && this.configuration[`${note}_down`];
        if (toggleAll_do) {
            this.configuration[note] = false;
            this.configuration[`${note}_s`] = false;
            this.configuration[`${note}_b`] = false;
            this.configuration[`${note}_n`] = true;
            this.configuration[`${note}_up`] = true;
            this.configuration[`${note}_down`] = false;
        } else {
            this.configuration[note] = true;
            this.configuration[`${note}_s`] = true;
            this.configuration[`${note}_b`] = true;
            this.configuration[`${note}_n`] = true;
            this.configuration[`${note}_up`] = true;
            this.configuration[`${note}_down`] = true;
        }
        
        this.requestUpdate();
        //console.log(this.newConfiguration);
    }

    handleClickOnOptions (option){
       this.configuration[option] = !this.configuration[option];
       this.requestUpdate();
    }

    handleAllColumn (column) {
        const toggleAll_column = this.configuration[`do${column}`] && 
                                 this.configuration[`dos${column}`] && 
                                 this.configuration[`reb${column}`] && 
                                 this.configuration[`re${column}`] && 
                                 this.configuration[`res${column}`] && 
                                 this.configuration[`mib${column}`] && 
                                 this.configuration[`mi${column}`] && 
                                 this.configuration[`fa${column}`] && 
                                 this.configuration[`fas${column}`] && 
                                 this.configuration[`solb${column}`] && 
                                 this.configuration[`sol${column}`] && 
                                 this.configuration[`sols${column}`] && 
                                 this.configuration[`lab${column}`] && 
                                 this.configuration[`la${column}`] && 
                                 this.configuration[`las${column}`] && 
                                 this.configuration[`sib${column}`] && 
                                 this.configuration[`si${column}`];
        if (toggleAll_column) {
            this.configuration[`do${column}`] = false;
            this.configuration[`dos${column}`] = false;
            this.configuration[`reb${column}`] = false;
            this.configuration[`re${column}`] = false;
            this.configuration[`res${column}`] = false;
            this.configuration[`mib${column}`] = false;
            this.configuration[`mi${column}`] = false;
            this.configuration[`fa${column}`] = false;
            this.configuration[`fas${column}`] = false;
            this.configuration[`solb${column}`] = false;
            this.configuration[`sol${column}`] = false;
            this.configuration[`sols${column}`] = false;
            this.configuration[`lab${column}`] = false;
            this.configuration[`la${column}`] = false;
            this.configuration[`las${column}`] = false;
            this.configuration[`sib${column}`] = false;
            this.configuration[`si${column}`] = false;
        } else {
            this.configuration[`do${column}`] = true;
            this.configuration[`dos${column}`] = true;
            this.configuration[`reb${column}`] = true;
            this.configuration[`re${column}`] = true;
            this.configuration[`res${column}`] = true;
            this.configuration[`mib${column}`] = true;
            this.configuration[`mi${column}`] = true;
            this.configuration[`fa${column}`] = true;
            this.configuration[`fas${column}`] = true;
            this.configuration[`solb${column}`] = true;
            this.configuration[`sol${column}`] = true;
            this.configuration[`sols${column}`] = true;
            this.configuration[`lab${column}`] = true;
            this.configuration[`la${column}`] = true;
            this.configuration[`las${column}`] = true;
            this.configuration[`sib${column}`] = true;
            this.configuration[`si${column}`] = true;
        }
        this.requestUpdate();
        
    }


    allColumn(){
        return html`
            <div class="column">
                <div class="div-button">
                         
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${()=>this.handleAllSingleNote("do")}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${()=>this.handleAllSingleNote("dos")}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${()=>this.handleAllSingleNote("reb")}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${()=>this.handleAllSingleNote("re")}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${()=>this.handleAllSingleNote("res")}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${()=>this.handleAllSingleNote("mib")}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${()=>this.handleAllSingleNote("mi")}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${()=>this.handleAllSingleNote("fa")}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${()=>this.handleAllSingleNote("fas")}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${()=>this.handleAllSingleNote("solb")}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${()=>this.handleAllSingleNote("sol")}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${()=>this.handleAllSingleNote("sols")}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${()=>this.handleAllSingleNote("lab")}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${()=>this.handleAllSingleNote("la")}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${()=>this.handleAllSingleNote("las")}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${()=>this.handleAllSingleNote("sib")}></my-button>
                </div>
                <div class="div-button">
                    <my-button text="all" @click=${()=>this.handleAllSingleNote("si")}></my-button>
                </div>
            </div>    
        `;
    }

    noteColumn(){
        return html`
            <div class="column">
                <div class="div-button">
                    <my-button ?pressedButton=${false} text="all" @click=${ ()=>this.handleAllColumn("") }></my-button>             
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.do} toggle text="do" @click=${ ()=>this.handleClickOnOptions("do") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.dos} toggle text="do#" @click=${ ()=>this.handleClickOnOptions("dos") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.reb} toggle text="re\u{266d}" @click=${ ()=>this.handleClickOnOptions("reb") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.re} toggle text="re" @click=${ ()=>this.handleClickOnOptions("re") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.res} toggle text="re#" @click=${ ()=>this.handleClickOnOptions("res") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.mib} toggle text="mi\u{266d}" @click=${ ()=>this.handleClickOnOptions("mib") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.mi} toggle text="mi" @click=${ ()=>this.handleClickOnOptions("mi") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.fa} toggle text="fa" @click=${ ()=>this.handleClickOnOptions("fa") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.fas} toggle text="fa#" @click=${ ()=>this.handleClickOnOptions("fas") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.solb} toggle text="sol\u{266d}" @click=${ ()=>this.handleClickOnOptions("solb") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.sol} toggle text="sol" @click=${ ()=>this.handleClickOnOptions("sol") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.sols} toggle text="sol#" @click=${ ()=>this.handleClickOnOptions("sols") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.lab} toggle text="la\u{266d}" @click=${ ()=>this.handleClickOnOptions("lab") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.la} toggle text="la" @click=${ ()=>this.handleClickOnOptions("la") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.las} toggle text="la#" @click=${ ()=>this.handleClickOnOptions("las") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.sib} toggle text="si\u{266d}" @click=${ ()=>this.handleClickOnOptions("sib") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.si} toggle text="si" @click=${ ()=>this.handleClickOnOptions("si") }></my-button>
                </div>
            </div>    
        `;
    }

    sharpColumn(){
        return html`
            <div class="column">
                <div class="div-button">
                    <my-button ?pressedButton=${false} text="all" @click=${ ()=>this.handleAllColumn("_s") }></my-button>             
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.do_s} toggle text="\u{266f}" @click=${ ()=>this.handleClickOnOptions("do_s") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.dos_s} toggle text="\u{266f}" @click=${ ()=>this.handleClickOnOptions("dos_s") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.reb_s} toggle text="\u{266f}" @click=${ ()=>this.handleClickOnOptions("reb_s") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.re_s} toggle text="\u{266f}" @click=${ ()=>this.handleClickOnOptions("re_s") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.res_s} toggle text="\u{266f}" @click=${ ()=>this.handleClickOnOptions("res_s") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.mib_s} toggle text="\u{266f}" @click=${ ()=>this.handleClickOnOptions("mib_s") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.mi_s} toggle text="\u{266f}" @click=${ ()=>this.handleClickOnOptions("mi_s") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.fa_s} toggle text="\u{266f}" @click=${ ()=>this.handleClickOnOptions("fa_s") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.fas_s} toggle text="\u{266f}" @click=${ ()=>this.handleClickOnOptions("fas_s") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.solb_s} toggle text="\u{266f}" @click=${ ()=>this.handleClickOnOptions("solb_s") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.sol_s} toggle text="\u{266f}" @click=${ ()=>this.handleClickOnOptions("sol_s") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.sols_s} toggle text="\u{266f}" @click=${ ()=>this.handleClickOnOptions("sols_s") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.lab_s} toggle text="\u{266f}" @click=${ ()=>this.handleClickOnOptions("lab_s") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.la_s} toggle text="\u{266f}" @click=${ ()=>this.handleClickOnOptions("la_s") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.las_s} toggle text="\u{266f}" @click=${ ()=>this.handleClickOnOptions("las_s") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.sib_s} toggle text="\u{266f}" @click=${ ()=>this.handleClickOnOptions("sib_s") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.si_s} toggle text="\u{266f}" @click=${ ()=>this.handleClickOnOptions("si_s") }></my-button>
                </div>
            </div>    
        `;
    }

    flatColumn(){
        return html`
            <div class="column">
                <div class="div-button">
                    <my-button ?pressedButton=${false} text="all" @click=${ ()=>this.handleAllColumn("_b") }></my-button>             
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.do_b} toggle text="\u{266d}" @click=${ ()=>this.handleClickOnOptions("do_b") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.dos_b} toggle text="\u{266d}" @click=${ ()=>this.handleClickOnOptions("dos_b") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.reb_b} toggle text="\u{266d}" @click=${ ()=>this.handleClickOnOptions("reb_b") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.re_b} toggle text="\u{266d}" @click=${ ()=>this.handleClickOnOptions("re_b") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.res_b} toggle text="\u{266d}" @click=${ ()=>this.handleClickOnOptions("res_b") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.mib_b} toggle text="\u{266d}" @click=${ ()=>this.handleClickOnOptions("mib_b") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.mi_b} toggle text="\u{266d}" @click=${ ()=>this.handleClickOnOptions("mi_b") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.fa_b} toggle text="\u{266d}" @click=${ ()=>this.handleClickOnOptions("fa_b") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.fas_b} toggle text="\u{266d}" @click=${ ()=>this.handleClickOnOptions("fas_b") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.solb_b} toggle text="\u{266d}" @click=${ ()=>this.handleClickOnOptions("solb_b") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.sol_b} toggle text="\u{266d}" @click=${ ()=>this.handleClickOnOptions("sol_b") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.sols_b} toggle text="\u{266d}" @click=${ ()=>this.handleClickOnOptions("sols_b") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.lab_b} toggle text="\u{266d}" @click=${ ()=>this.handleClickOnOptions("lab_b") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.la_b} toggle text="\u{266d}" @click=${ ()=>this.handleClickOnOptions("la_b") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.las_b} toggle text="\u{266d}" @click=${ ()=>this.handleClickOnOptions("las_b") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.sib_b} toggle text="\u{266d}" @click=${ ()=>this.handleClickOnOptions("sib_b") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.si_b} toggle text="\u{266d}" @click=${ ()=>this.handleClickOnOptions("si_b") }></my-button>
                </div>
            </div>    
        `;
    }

    naturalColumn(){
        return html`
            <div class="column">
                <div class="div-button">
                    <my-button ?pressedButton=${false} text="all" @click=${ ()=>this.handleAllColumn("_n") }></my-button>             
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.do_n} toggle text="nat" @click=${ ()=>this.handleClickOnOptions("do_n") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.dos_n} toggle text="nat" @click=${ ()=>this.handleClickOnOptions("dos_n") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.reb_n} toggle text="nat" @click=${ ()=>this.handleClickOnOptions("reb_n") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.re_n} toggle text="nat" @click=${ ()=>this.handleClickOnOptions("re_n") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.res_n} toggle text="nat" @click=${ ()=>this.handleClickOnOptions("res_n") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.mib_n} toggle text="nat" @click=${ ()=>this.handleClickOnOptions("mib_n") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.mi_n} toggle text="nat" @click=${ ()=>this.handleClickOnOptions("mi_n") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.fa_n} toggle text="nat" @click=${ ()=>this.handleClickOnOptions("fa_n") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.fas_n} toggle text="nat" @click=${ ()=>this.handleClickOnOptions("fas_n") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.solb_n} toggle text="nat" @click=${ ()=>this.handleClickOnOptions("solb_n") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.sol_n} toggle text="nat" @click=${ ()=>this.handleClickOnOptions("sol_n") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.sols_n} toggle text="nat" @click=${ ()=>this.handleClickOnOptions("sols_n") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.lab_n} toggle text="nat" @click=${ ()=>this.handleClickOnOptions("lab_n") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.la_n} toggle text="nat" @click=${ ()=>this.handleClickOnOptions("la_n") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.las_n} toggle text="nat" @click=${ ()=>this.handleClickOnOptions("las_n") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.sib_n} toggle text="nat" @click=${ ()=>this.handleClickOnOptions("sib_n") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.si_n} toggle text="nat" @click=${ ()=>this.handleClickOnOptions("si_n") }></my-button>
                </div>
            </div>    
        `;
    }

    upColumn(){
        return html`
            <div class="column">
                 <div class="div-button">
                    <my-button ?pressedButton=${false} text="all" @click=${ ()=>this.handleAllColumn("_up") }></my-button>             
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.do_up} toggle text="+" @click=${ ()=>this.handleClickOnOptions("do_up") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.dos_up} toggle text="+" @click=${ ()=>this.handleClickOnOptions("dos_up") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.reb_up} toggle text="+" @click=${ ()=>this.handleClickOnOptions("reb_up") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.re_up} toggle text="+" @click=${ ()=>this.handleClickOnOptions("re_up") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.res_up} toggle text="+" @click=${ ()=>this.handleClickOnOptions("res_up") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.mib_up} toggle text="+" @click=${ ()=>this.handleClickOnOptions("mib_up") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.mi_up} toggle text="+" @click=${ ()=>this.handleClickOnOptions("mi_up") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.fa_up} toggle text="+" @click=${ ()=>this.handleClickOnOptions("fa_up") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.fas_up} toggle text="+" @click=${ ()=>this.handleClickOnOptions("fas_up") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.solb_up} toggle text="+" @click=${ ()=>this.handleClickOnOptions("solb_up") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.sol_up} toggle text="+" @click=${ ()=>this.handleClickOnOptions("sol_up") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.sols_up} toggle text="+" @click=${ ()=>this.handleClickOnOptions("sols_up") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.lab_up} toggle text="+" @click=${ ()=>this.handleClickOnOptions("lab_up") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.la_up} toggle text="+" @click=${ ()=>this.handleClickOnOptions("la_up") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.las_up} toggle text="+" @click=${ ()=>this.handleClickOnOptions("las_up") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.sib_up} toggle text="+" @click=${ ()=>this.handleClickOnOptions("sib_up") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.si_up} toggle text="+" @click=${ ()=>this.handleClickOnOptions("si_up") }></my-button>
                </div>
            </div>    
        `;
    }

    downColumn(){
        return html`
            <div class="column">
                <div class="div-button">
                    <my-button ?pressedButton=${false} text="all" @click=${ ()=>this.handleAllColumn("_down") }></my-button>             
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.do_down} toggle text="-" @click=${ ()=>this.handleClickOnOptions("do_down") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.dos_down} toggle text="-" @click=${ ()=>this.handleClickOnOptions("dos_down") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.reb_down} toggle text="-" @click=${ ()=>this.handleClickOnOptions("reb_down") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.re_down} toggle text="-" @click=${ ()=>this.handleClickOnOptions("re_down") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.res_down} toggle text="-" @click=${ ()=>this.handleClickOnOptions("res_down") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.mib_down} toggle text="-" @click=${ ()=>this.handleClickOnOptions("mib_down") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.mi_down} toggle text="-" @click=${ ()=>this.handleClickOnOptions("mi_down") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.fa_down} toggle text="-" @click=${ ()=>this.handleClickOnOptions("fa_down") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.fas_down} toggle text="-" @click=${ ()=>this.handleClickOnOptions("fas_down") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.solb_down} toggle text="-" @click=${ ()=>this.handleClickOnOptions("solb_down") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.sol_down} toggle text="-" @click=${ ()=>this.handleClickOnOptions("sol_down") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.sols_down} toggle text="-" @click=${ ()=>this.handleClickOnOptions("sols_down") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.lab_down} toggle text="-" @click=${ ()=>this.handleClickOnOptions("lab_down") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.la_down} toggle text="-" @click=${ ()=>this.handleClickOnOptions("la_down") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.las_down} toggle text="-" @click=${ ()=>this.handleClickOnOptions("las_down") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.sib_down} toggle text="-" @click=${ ()=>this.handleClickOnOptions("sib_down") }></my-button>
                </div>
                <div class="div-button">
                    <my-button ?pressedButton=${this.configuration.si_down} toggle text="-" @click=${ ()=>this.handleClickOnOptions("si_down") }></my-button>
                </div>
            </div>    
        `;
    }

    handleDifficultNotes () {
      this.configuration.difficult = !this.configuration.difficult;
      this.requestUpdate(); 
    }

    // Render the UI as a function of component state
    render() {
      const sizeValues = html`<style> 
        .size {
          height: ${this.height};
          width: ${this.width};  
        }
      </style>`;
      //this.newConfiguration = {...this.oldConfiguration};
      //console.log(JSON.stringify(this.oldConfiguration));
    //   console.log(JSON.stringify(this.newConfiguration));
    //   console.log("entra en render");
      return html`
        ${sizeValues} 
        <div class="supercontainer size">
            <div class="container">
                ${this.allColumn()}
                ${this.noteColumn()}
                ${this.sharpColumn()}
                ${this.flatColumn()}
                ${this.naturalColumn()}
                ${this.upColumn()}
                ${this.downColumn()}
            </div>
            <div class="bottom-buttons">
                <div class="div-bottom-buttons">
                    <my-button text="all" @click=${ this.handleAllNotes }></my-button>
                </div>  
                <div class="div-bottom-buttons">
                    <my-button ?pressedButton=${this.configuration.difficult} text="difficult" toggle @click=${ this.handleDifficultNotes }></my-button>
                </div>  
                <div class="div-bottom-buttons">
                    <my-button text="cancel" @click=${ this.actionOnHideWithoutUpdate }></my-button>
                </div>  
                <div class="div-bottom-buttons">
                    <my-button text="ok" @click=${ ()=>this.updateConfiguration(this.configuration) }></my-button>
                </div>  
            </div>
        </div>
      `;
    }
  }
  customElements.define("my-easy-intervals-configuration-buttons", MyEasyIntervalsConfigurationButtons);
  
  