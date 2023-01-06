import { createContext, useState } from "react";
import data from "../data/horoscopes";

export const HoroscopeContext = createContext();

const HoroscopeProvider = (props) => {
  const [currentSign, setCurrentSign] = useState("Cancer");

  const sign = data[currentSign];

  return (
    <HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};

export default HoroscopeProvider;
