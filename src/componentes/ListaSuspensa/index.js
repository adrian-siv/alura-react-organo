import "./ListaSuspensa.css";

const ListaSuspensa = ({itens, aoAlterado, label, valor, required}) => {
    
    const aoDigitado = (evt) => {
        aoAlterado(evt.target.value);
    }
    
    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select placeholder="Teste" value={valor} onChange={aoDigitado} required={required}>
                <option disabled value="">Selecione um time</option>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa