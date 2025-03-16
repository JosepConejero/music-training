import { useCallback, useEffect, useState, useRef } from "react";

export const useConfigurationModal = (initialConfiguration, isConfigurationRight) => {
  const configurationRef = useRef({...initialConfiguration});
  const [configuration, setConfiguration] = useState({...configurationRef.current});
  const [oldConfiguration, setOldConfiguration] = useState({...configurationRef.current});
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const updateConfiguration = (configuration) => {
    if (isConfigurationRight(configuration)) {
      configurationRef.current = {...configuration};
      setConfiguration({...configuration});
      hideModalWithUpdade();
    } else {
      //aquí podría hacer que la configuración fuera la inicial (descomentando la comentado y comentando lo no comentado)
      //configurationRef.current = {...initialConfiguration};
      //setConfiguration({...initialConfiguration});
      //hideModalWithUpdade();
      hideModalWithoutUpdade();
    }
  };
  
  const showModal = () => {
    setOldConfiguration({...configuration});
    setIsVisibleModal(true);
  };
  
  const hideModalWithoutUpdade = () => {
    setIsVisibleModal(false);
    configurationRef.current = {...oldConfiguration};
    setConfiguration({...oldConfiguration});
  };  

  const hideModalWithUpdade = () => {
    setIsVisibleModal(false);
  };  


  const keyPress = useCallback(
    (event) => {
      if (event.key === "Escape" && isVisibleModal) {
        hideModalWithoutUpdade();
      }
    },
    [hideModalWithoutUpdade, isVisibleModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return {
    configuration,
    oldConfiguration,
    configurationRef,
    setConfiguration,
    isVisibleModal, 
    setIsVisibleModal,
    updateConfiguration,
    showModal,
    hideModalWithoutUpdade,
    hideModalWithUpdade,
  };
}
