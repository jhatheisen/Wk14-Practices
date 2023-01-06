import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

export const Match = () => {
  const [match, setMatch] = useState(false);

  const { sign } = useContext(HoroscopeContext);

  return (
    <div>
      <button onClick={() => (match ? setMatch(false) : setMatch(true))}>
        Check Match
      </button>
      {match === true && <h4>{sign.match}</h4>}
    </div>
  );
};
