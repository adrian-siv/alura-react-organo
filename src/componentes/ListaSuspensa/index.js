import "./ListaSuspensa.css";

const ListaSuspensa = ({itens, aoAlterado, label, valor}) => {
    
    const aoDigitado = (evt) => {
        aoAlterado(evt.target.value);
    }
    
    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select value={valor} onChange={aoDigitado}>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa