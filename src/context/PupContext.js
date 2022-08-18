import { createContext, useContext, useState } from "react";
import speedy from "../pups/speedy-pup.jpg";

const PupContext = createContext();

export function usePuppyType() {
  return useContext(PupContext);
}

export default function PupProvider(props) {
  const [puppyType, setPuppyType] = useState(speedy);

  return (
    <PupContext.Provider value={{ puppyType, setPuppyType }}>
      {props.children}
    </PupContext.Provider>
  );
}
