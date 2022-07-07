import React, { useState } from "react";
import Exo1 from "./Components/Exo_1";
import Exo2 from "./Components/Exo_2";
import Exo3 from "./Components/Exo_3";
import Exo4 from "./Components/Exo_4";
import Exo5 from "./Components/Exo_5";

export default function App() {
  let [chiffre, setChiffre] = useState(0);
  let [text, setText] = useState("Ce texte est modifiable");
  return (
    <div>
      <Exo1 monChiffre={chiffre} setChiffre={setChiffre} />
      <Exo2 text={text} setText={setText}/>
      <Exo3 />
      <Exo4 />
      <Exo5 />
    </div>
  )
}
