import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {
  
  const [colaboradores, setColaboradores] = useState([]);

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => setColaboradores([...colaboradores, colaborador])} title="Preencha os dados para criar o card do colaborador" />
    </div>
  );
}

export default App;
