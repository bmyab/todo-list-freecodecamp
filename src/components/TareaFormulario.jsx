import React  , { useState }from 'react'
import '../stylesheets/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid';



export default function TareaFormulario( props ) {

  const [input, setInput] = useState( '' );

  const manejarCambio = e =>{
    setInput(e.target.value);
  }

  const manejarEnvio = e =>{
    e.preventDefault();
    console.log('Enviando Formulario')

    const tareaNueva = {
      id : uuidv4(),
      texto : input,
      completada : false
    }

    props.onSubmit(tareaNueva)
  }

  return (
    <form
       className='tarea-formulario'
       onSubmit={ manejarEnvio }>
      <input 
        className='tarea-input'
        type='texto'
        placeholder='Escribe una tarea'
        name='texto'
        onChange={ manejarCambio }
      />
      <button className='tarea-boton'>agregar tarea</button>
    </form>
  )
}
