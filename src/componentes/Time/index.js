import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    return (
        <section className='time' style={{backgroundColor: props.corDeFundo}}>
            <h3 style={{borderColor: props.corDeDestaque}}>{props.nome}</h3>
            <div className='caixaDeColaboradores'>            
                {props.colaboradores.map(colaborador => <Colaborador corDoTime={props.corDeDestaque} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time;