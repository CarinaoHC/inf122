import './App.css';
import Contador from './components/Contador';
import Boton from './components/Boton';
import { useState } from 'react';

function App() {
  const [nroClicks, setNumClicks] = useState(0);
  const click = () => {
    setNumClicks(nroClicks + 1);
    console.log("Click");
  }
  const clickMenos1 = () => {
    setNumClicks(nroClicks - 1);
    console.log("Click");
  }
  const clickMas3 = () => {
    setNumClicks(nroClicks + 3);
    console.log("Click");
  }
  const clickMenos3 = () => {
    setNumClicks(nroClicks - 3);
    console.log("Click");
  }
  const reiniciar = () => {
    setNumClicks(0);
    console.log("Reiniciar");
  }
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} />
        <div className='contendedor-botones'>
          <div className='botones'>
            <Boton texto="-3" esBotonClick={true}
              funcionClick={clickMenos3} />
            <Boton texto="+3" esBotonClick={true}
              funcionClick={clickMas3} />
            <Boton texto="-1" esBotonClick={true}
              funcionClick={clickMenos1} />
            <Boton texto="+1" esBotonClick={true}
              funcionClick={click} />
          </div>
          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
        </div>
      </div>
    </div>
  );
}

export default App;