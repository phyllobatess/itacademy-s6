// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import "./App.css";
import { Escena } from "./componentes/escena/Escena";
import { data } from "./componentes/data";


function App() {
  //La propiedad "key" es un atributo especial string que se debe incluir al crear listas de elementos. Cada key debe ser único por lista.
  return (
    <>
      {data.map((item) => (
        <Escena key={item.id} sentence={item.texto} />
      ))} 
    </>
  );
}

export default App;
