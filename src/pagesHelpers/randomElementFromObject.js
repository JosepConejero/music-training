export const randomElementFromObject = (objeto) => {
  const arrayDeElementos = Object.entries(objeto);
  let randomElement;
  const min = 0;
  const max = arrayDeElementos.length; // Thus, it will include max value

  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  randomElement = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive

  return arrayDeElementos[randomElement];
};
