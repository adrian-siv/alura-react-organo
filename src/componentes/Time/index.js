import Colaborador from '../Colaborador';
import './Time.css';

const Time = ({corDeFundo, corDeDestaque, nome, colaboradores}) => {
    return (
        (colaboradores.length > 0) && <section className='time' style={{backgroundColor: corDeFundo}}>
            <h3 style={{borderColor: corDeDestaque}}>{nome}</h3>
            <div className='caixaDeColaboradores'>            
                {colaboradores.map(colaborador => <Colaborador key={colaborador.nome} corDoTime={corDeDestaque} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time;