// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import "./App.css";
import { Escena } from "./componentes/escena/Escena";
import { data } from "./componentes/data";

function App() {
  return (
    <>
      {data.map((sentence, index) => (
        <Escena key={index} sentence={sentence.texto} />
      ))}
    </>
  );
}

export default App;
