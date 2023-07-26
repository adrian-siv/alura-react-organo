import './CampoTexto.css'

const CampoTexto = ({aoAlterado, label, valor, required, placeholder}) => {
    
    const aoDigitado = (evt) => {
        aoAlterado(evt.target.value);
    }
    
    return (
    <div className="campo-texto">
        <label>{label}</label>
        <input value={valor} onChange={aoDigitado} required={required} placeholder={placeholder} />
    </div>
    )
}

export default CampoTexto