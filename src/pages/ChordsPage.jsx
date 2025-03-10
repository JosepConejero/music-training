import { useRef, useState } from "react";
import { Navbar } from "../components/Navbar";
//import "../lit-elements/my-modal-1";
import { MyModal1 } from "../lit-react-components/MyModal1";

const initialValue = { a: 0, b: "valor inicial" };

export const ChordsPage = () => {
  const [value, setValue] = useState(initialValue);
  //const valor = useRef(initialValue);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  //const isVisibleModal = useRef(false);

  const handleClick = () => {
    //console.log(valor.current);
    console.log(value);
  };

  const changeValue = () => {
    //valor.current = { a: 10000, b: "valor cambiado" };
    setValue({ a: 5, b: "valor cambiado" });
  };

  const updateExternalProps = (value) => {
    setValue(value);
    //console.log("este valor es value: ", value);
    hideModal();
  };

  const showModal = () => {
    //setIsVisibleModal(true);
    setIsVisibleModal((value) => !value);
  };

  const hideModal = () => {
    setIsVisibleModal(false);
  };

  return (
    <>
      <Navbar />
      <div>CHORDS PAGE</div>
      <div>UNDER CONSTRUCTION</div>
      <button onClick={handleClick}>MOSTRAR VALOR</button>
      <button onClick={changeValue}>CAMBIAR VALOR</button>
      <button onClick={showModal}>MOSTRAR MODAL</button>
      <MyModal1 visible={isVisibleModal} configuration={value} updateExternalProps={updateExternalProps} />
    </>
  );
};

//{ a: 9999, b: "valor pasado al componente react" }
