import { Component } from "react";
import Boton from "./Boton";


export default class Formulario extends Component{
    constructor(props){
        super(props);
        this.state = {
            nota: ""
        }
    }

    manejarCambio(event){
        this.setState({nota: event.target.value});
    }

    manejarEnvio(event){
        event.preventDefault();
        this.props.guardar(this.state.nota);
        this.setState({nota: ''});
    }





    render(){
       return(
       <form onSubmit={(event)=> this.manejarEnvio(event)}>
        <textarea
        value={this.state.nota}
        onChange={(event)=> this.manejarCambio(event)}
        placeholder="escribe la nota"
        />
        <Boton type="submit">Guardar Nota</Boton>

        </form>
       )

    }
}