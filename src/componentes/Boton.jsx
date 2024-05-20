import { Children, Component } from "react";

const Boton = ({type, Children})=>{
    return(
        <button type={type}>
            {Children}
        </button>
    )
}

export default Boton;