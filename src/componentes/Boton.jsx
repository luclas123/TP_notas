import { Children, Component } from "react";

// const Boton = ({type, Children})=>{
//     return(
//         <button type={type}>
//             {Children}
//         </button>
//     )
// }

const Boton = ({ onClick, children }) => {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  };
  
  

export default Boton;