import { Component } from "react";
import Boton from "./Boton";


export default class Formulario extends Component{
    constructor(props){
        super(props);
        this.state = {
            nota: ""
        }
    }

    manejarCambio = (e) => {
        this.setState({nota: e.target.value})
    }

    
    manejarEnvio = (e) => {
        e.preventDefault();
        this.props.guardar(this.state.nota);
        this.setState({ nota: '' });
      }
    





    render(){
       return(
       <form onSubmit= {this.manejarEnvio}>
        <input
        type="text"
        value={this.state.nota}
        onChange={this.manejarCambio}
        placeholder="escribe la nota"
        step="0.01"
        
        />
        <Boton accion={()=> this.props.guardar(this.state.nota)} Children='guardar' ></Boton>

        </form>
       )

    }
}