export const randomElementFromArray = (elementsArray) => {
    let randomElement;
    const min = 0;
    const max = elementsArray.length; // Thus, it will include max value
  
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
  
    randomElement = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  
    return elementsArray[randomElement];
  };