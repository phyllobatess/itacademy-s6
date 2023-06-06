// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import "./App.css";
import { Escena } from "./componentes/escena/Escena";
import { data } from "./componentes/data";


function App() {
  //La propiedad "key" es un atributo especial  que se debe incluir al crear listas de elementos. Cada key debe ser único por lista.
  return (
    <>
      {data.map((frase) => (
        <Escena key={frase.id} sentence={frase.texto} />
      ))} 
    </>
  );
}

export default App;
