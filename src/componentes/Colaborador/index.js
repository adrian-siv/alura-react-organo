import './Colaborador.css';

const Colaborador = ({nome, cargo, imagem, corDoTime}) => {
    return (
        <div className='colaborador'>
            <div className='superior' style={{backgroundColor: corDoTime}}>
                <img src={imagem} alt={`Foto do colaborador ${nome}`}/>
            </div>
            <div className='inferior'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;