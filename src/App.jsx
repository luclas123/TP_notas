import { Component } from 'react'
import './App.css';
import Formulario from './componentes/Formulario';


export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      notas: [{
        nota:''
      }]
    }
  }

  render(){
    return(
      <div className='Contenedor'>
        <Formulario></Formulario>

        <div className='listanotas'>
          d
        </div>
      </div>

    )
  }

}

