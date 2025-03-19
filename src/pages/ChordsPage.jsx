//import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { MyButton } from "../lit-react-components/MyButton";
//import "../lit-elements/my-modal-1";
//import { MyModal0 } from "../lit-react-components/MyModal0";
//import { easyIntervalsConfiguration } from "../pagesHelpers/easy-intervals-configuration";

//const initialValue = easyIntervalsConfiguration;

export const ChordsPage = () => {
  // const [value, setValue] = useState(initialValue);
  //const valor = useRef(initialValue);
  // const [isVisibleModal, setIsVisibleModal] = useState(false);
  //const isVisibleModal = useRef(false);

  // const handleClick = () => {
  //   //console.log(valor.current);
  //   //console.log(value);
  // };

  /*   const changeValue = () => {
    //valor.current = { a: 10000, b: "valor cambiado" };
    setValue({ a: 5, b: "valor cambiado" });
  }; */

  /* const updateConfiguration = (value) => {
    setValue(value);
    hideModal();
  };

  const showModal = () => {
    setIsVisibleModal(true);
  };

  const hideModal = () => {
    setIsVisibleModal(false);
  }; */

  return (
    <>
      <Navbar />
      <div>CHORDS PAGE</div>
      <div>UNDER CONSTRUCTION</div>
      {/* <button onClick={handleClick}>MOSTRAR VALOR</button> */}
      {/* <button onClick={changeValue}>CAMBIAR VALOR</button> */}
      {/* <button onClick={showModal}>MOSTRAR MODAL</button> */}
      {/* <MyModal0 visible={isVisibleModal} configuration={value} updateConfiguration={updateConfiguration} actionOnHide={hideModal} /> */}
      {/* <button><img src="/assets/play.ico" alt="lo siento, no hay imagen" /></button> */}
       <MyButton icon="play" text="abre"></MyButton> 
 {/*      <button>

      <span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">          
          <g><path d="M8.286 3.407A1.5 1.5 0 0 0 6 4.684v14.632a1.5 1.5 0 0 0 2.286 1.277l11.888-7.316a1.5 1.5 0 0 0 0-2.555L8.286 3.407z" fill="#000000"></path></g>
        </svg>
      </span> 
      </button> */}
      
    </>
  );
};

//{ a: 9999, b: "valor pasado al componente react" }

