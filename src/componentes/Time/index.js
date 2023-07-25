import './Time.css';

const Time = (props) => {
    return (
        <section style={{backgroundColor: props.corDeFundo}} className='time'>
            <h3 style={{borderColor: props.corDeDestaque}}>{props.nome}</h3>
        </section>
    )
}

export default Time;