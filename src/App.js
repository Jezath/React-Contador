import { Boton } from './components/Boton';
import { Contador } from './components/Contador';
import { useState } from 'react';
import './App.css';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClick = () => {
    setNumClics(numClics + 1)
    console.log(numClics);
  }
  const reiniciarContador = () => {
    setNumClics(0);
    console.log('Contador reiniciado');
  }

  return (
    <div className="App">
     <div className='cont-princ'>
        <Contador numClick={numClics}/>
        <Boton 
          texto="Click"
          esBotonClick={true}
          manejarClick={manejarClick}
        />
        <Boton 
          texto="Reiniciar"
          esBotonClick={false}
          manejarClick={reiniciarContador}
        />
     </div>
    </div>
  );
}

export default App;
