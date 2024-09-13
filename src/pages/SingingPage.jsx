import { Navbar } from "../components/Navbar";
import { Redonda } from "../noteComponents/Redonda";
import { Blanca } from "../noteComponents/Blanca";
import { Negra } from "../noteComponents/Negra";
import { Corchea } from "../noteComponents/Corchea";
import { Semicorchea } from "../noteComponents/Semicorchea";
import { Linea } from "../noteComponents/Linea";

export const SingingPage = () => {
  return (
    <>
      <Navbar />
      <p>Singing</p>
      <main className="fraseo">
        <Redonda />
        <Blanca />
        <Negra />
        <Corchea />
        <Semicorchea />
        <Linea />
      </main>
    </>
  );
};
