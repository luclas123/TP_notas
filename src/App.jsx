import { Component } from 'react'
import './App.css';
import Formulario from './componentes/Formulario';



export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      notas:[]
    }
  }

  guardar(nota){
    let nuevasNotas = this.state.notas;
    nuevasNotas.push({nota});
    this.setState({notas: nuevasNotas})

  }

  render(){
    return(
      <div className='Contenedor'>
        <Formulario 
        guardar={(nota)=> this.guardar(nota)}>

        </Formulario>

        <div className='listanotas'>
          {this.state.notas.map((cont, index)=>{
             <div className='nota' key={index}>
             <p>{cont.notas}</p>
           </div>

          })}
        </div>
      </div>

    )
  }

}

