import { Children, Component } from "react";

// export default class Boton extends Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return(
//             <span className='Boton'
//             onClick={()=> this.props.accion()}>
//                 {this.props.simbolo}
//             </span>
//         )
//     }
// }
const Boton = ({type, Children})=>{
    return(
        <button type={type}>
            {Children}
        </button>
    )
}

export default Boton;