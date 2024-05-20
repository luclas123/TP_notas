  import { Component } from 'react'
  import './App.css';
  import Formulario from './componentes/Formulario';




  export default class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        notas:[],
        promedio: 0
      }
    }

    

    guardar = (nota) => {
      this.setState((prevState) => {
        const nuevasNotas =  [...prevState.notas, parseFloat(nota)];
        const suma = nuevasNotas.reduce((acc, cur)=> acc + cur, 0)
        const promedio = suma / nuevasNotas.length

        return{
          notas: nuevasNotas,
          promedio: promedio
        }
      });
    }

    actualizarNota = (index, nuevaNota) => {
      this.setState((prevState) => {
        const nuevasNotas = prevState.notas.map((nota, i) => i === index ? parseFloat(nuevaNota) : nota);
        const suma = nuevasNotas.reduce((acc, cur) => acc + cur, 0);
        const promedio = suma / nuevasNotas.length;
        return {
          notas: nuevasNotas,
          promedio: promedio
        };
      });
    }

    render(){
      return(
        <div className='Contenedor'>
          <Formulario guardar={this.guardar}>

          </Formulario>

          <div className='listanotas'>
            {this.state.notas.map((nota, index)=>(
              <div className='nota' key={index}>
              <input
              type='number'
              onChange={(e)=> this.actualizarNota(index, e.target.value)}
              step="0.01"
               value={nota}/>
            </div>

            ))}
          </div>
          <div className='promedio'>
            <h2>Promedio: {this.state.promedio.toFixed(2)}</h2>
          </div>
        </div>

      )
    }

  }

