import { FC } from "react";
import { DivStyle } from "../styled-components/Button";

//Hacemos esta interfaz para darle el tipado de todos los props que pasamos al componente-hijo->ESCENA desde el componente-padre->APP:
interface Props{
  position: number;
  id: number;
  sentence: string;
  
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Escena:FC<Props> = ({ position, id, sentence }) => {
  return (
    <>
      <DivStyle active={position === id ? true : false}>{sentence}</DivStyle>
    </>
  );
};
 