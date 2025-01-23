import { useState } from "react";

export const useToggleValue = (initialValue, action=()=>{}) => {
  const [value, setValue] = useState(initialValue);

  const updateToggleValue = ()=>{
    if (action) action();
    setValue((prevState)=> !prevState); 
  };

  return {
    value,
    updateToggleValue,
  };
}