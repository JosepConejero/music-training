import { distancia } from "../staffHandlers/distances";
import { CentralStaff } from "./CentralStaff";
import "./staffStyles.css";

export const Staff = () => {
  return (
    <>
      <div className="general">
        <div className="caja">
          {/*  <div className="sol6"></div>
          <div className="mi6"></div>
          <div className="do6"></div>
          <div className="la5"></div> */}

          {/* {["sol6", "mi6", "do6", "la5"].map((note) => (
            <CentralStaff note={note} />
          ))}

          {["fa5", "re5", "si4", "sol4", "mi4"].map((note) => (
            <CentralStaff note={note} />
          ))}

          {["do4", "la3", "fa3", "re3"].map((note) => (
            <CentralStaff note={note} />
          ))} */}

          {["sol6", "mi6", "do6", "la5", "fa5", "re5", "si4", "sol4", "mi4", "do4", "la3", "fa3", "re3"].map((note) => (
            <CentralStaff note={note} />
          ))}

          {/*    <div className="fa5"></div>
          <div className="re5"></div>
          <div className="si4"></div>
          <div className="sol4"></div>
          <div className="mi4"></div> 

          <div className="do4"></div>
          <div className="la3"></div>
          <div className="fa3"></div>
          <div className="re3"></div>
          */}
        </div>

        <div className="nota"></div>
        {/* <div className="nota">        </div> */}
      </div>
    </>
  );
};
