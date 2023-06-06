import { DivStyle } from "../styled-components/Button"


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Escena = (props:any) => {
   return (
     <>
       <DivStyle>
         <p>{props.sentence}</p>
       </DivStyle>
     </>
   );
 }

