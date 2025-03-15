import { useState } from "react";

export const useConfigurationModal = (initialConfiguration) => {
  const [configuration, setConfiguration] = useState(initialConfiguration);
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const updateConfiguration = (configuration) => {
    setConfiguration(configuration);
    hideModal();
  };

  const showModal = () => {
    setIsVisibleModal(true);
  };

  const hideModal = () => {
    setIsVisibleModal(false);
  };  

  return {
    configuration,
    setConfiguration,
    isVisibleModal, 
    setIsVisibleModal,
    updateConfiguration,
    showModal,
    hideModal,    
  };
}
