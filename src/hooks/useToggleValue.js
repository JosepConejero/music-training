import { useState } from "react";

export const useToggleValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const updateToggleValue = ()=>{
    setValue((prevState)=> !prevState); 
  };

  return {
    value,
    updateToggleValue,
  };
}