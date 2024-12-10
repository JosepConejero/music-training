import { Navbar } from "../components/Navbar";
import { Redonda } from "../noteComponents/Redonda";
import { Blanca } from "../noteComponents/Blanca";
import { Negra } from "../noteComponents/Negra";
import { Corchea } from "../noteComponents/Corchea";
import { Semicorchea } from "../noteComponents/Semicorchea";
import { Linea } from "../noteComponents/Linea";

export const RythmsPage = () => {
  return (
    <>
      <Navbar />
      <div>RYTHMS</div>
      <div>UNDER CONSTRUCTION</div>
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
