import './App.css';
import ListaTareas from './components/ListaTareas';
import freeCodeCampLogo from './img/freecodecamp-logo.png';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src= {freeCodeCampLogo} 
          className='freecodecamp-logo' 
          alt='logo de freecodecamp'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
