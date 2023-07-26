import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {
  
  const [colaboradores, setColaboradores] = useState([]);

  const listaDeTimes = [
    {
      nome: "Programação",
      corDeFundo: "#D9F7E9",
      corDeDestaque: "#57C278"
    },
    {
      nome: "Front-end",
      corDeFundo: "#E8F8FF",
      corDeDestaque: "#82CFFA"
    },
    {
      nome: "Data Science",
      corDeFundo: "#F0F8E2",
      corDeDestaque: "#A6D157"
    },
    {
      nome: "DevOps",
      corDeFundo: "#FDE7E8",
      corDeDestaque: "#E06B69"
    },
    {
      nome: "UX & Design",
      corDeFundo: "#FAE9F5",
      corDeDestaque: "#DB6EBF"
    },
    {
      nome: "Mobile",
      corDeFundo: "#FFF5D9",
      corDeDestaque: "#FFBA05"
    },
    {
      nome: "Inovação e Gestão",
      corDeFundo: "#FFEEDF",
      corDeDestaque: "#FF8A29"
    }
  ]

  return (
    <div className="App">
      <Banner />

      <Formulario 
      times={listaDeTimes.map(time => time.nome)}
      aoColaboradorCadastrado={colaborador => setColaboradores([...colaboradores, colaborador])}
      title="Preencha os dados para criar o card do colaborador"
      />

      {listaDeTimes.map(time => <Time
        key={time.nome} 
        nome={time.nome}
        corDeFundo={time.corDeFundo}
        corDeDestaque={time.corDeDestaque}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  );
}

export default App;
