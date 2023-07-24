import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
    
    const aoDigitado = (evt) => {
        props.aoAlterado(evt.target.value);
    }
    
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select value={props.valor} onChange={aoDigitado}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa