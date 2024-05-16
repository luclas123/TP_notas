import { Component } from "react";


export default class Formulario extends Component{
    constructor(props){
        super(props);
        this.state = {
            nota: ""
        }
    }



    render(){
       return(
        <div className="Formulario">
            <input
            type="number"
            placeholder="nota"
            value={this.state.nota}
            
            ></input>

        </div>
       )

    }
}