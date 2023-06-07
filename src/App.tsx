// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
// ponemos rafc para hacer el import de react
//passing image as a prop styled component  --> para ej.6

import "./App.css";
import { Escena } from "./componentes/escena/Escena";
import { data } from "./componentes/data";
import { useState } from "react";

//Solo se pueden usar los HOOKS dentro de function components, no dentro de CLASES
//USESTATE no se puede llamar dentro de un condicional
function App() {
  const [position, setPosition] = useState<number>(1);

  const mueveAtras=()=>{
    if (position <= data.length) {
      setPosition(position - 1);
      //console.log(position)
    }
    if (position === 1) {
      setPosition(4);
      //console.log(position);
    }
  }
   const mueveAdelante=()=> {
    if (position < data.length) {
      setPosition(position + 1);
      //console.log(position);
    }
    if (position >= data.length) {
      setPosition(1);
      //console.log(position);
    }
  }
  //La propiedad "key" es un atributo especial  que se debe incluir al crear listas de elementos. Cada key debe ser único por lista.
  return (
    <>
      <div>
        <button onClick={mueveAtras} className="boton">
          Anterior
        </button>
        <button onClick={mueveAdelante} className="boton">
          Siguiente
        </button>
      </div>{" "}

      {data.map((frase) => (
        <Escena  key={frase.id} id={frase.id} sentence={frase.texto} position={position}  /> //le pasamos mediante props el state (position) que tenemos en cada momento.
      ))}
    </>
  );
}

export default App;
