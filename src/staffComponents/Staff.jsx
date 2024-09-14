import { uniqueKey } from "../helpers/uniqueKey";
import { distancia } from "../staffHandlers/distances";
import { StaffLine } from "./StaffLine";
import "./staffStyles.css";

export const Staff = ({ activeNote }) => {
  return (
    <>
      <div className="general">
        <div className="caja">
          {["sol6", "mi6", "do6", "la5", "fa5", "re5", "si4", "sol4", "mi4", "do4", "la3", "fa3", "re3"].map((note) => (
            <StaffLine key={uniqueKey()} staffNoteLine={note} activeNote={activeNote} />
          ))}
        </div>

        <div className="nota" style={{ position: "absolute", top: distancia[activeNote] }}></div>
      </div>
    </>
  );
};
