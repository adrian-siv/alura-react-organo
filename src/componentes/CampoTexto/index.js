import './CampoTexto.css'

const CampoTexto = (props) => {
    
    const aoDigitado = (evt) => {
        props.aoAlterado(evt.target.value);
    }
    
    return (
    <div className="campo-texto">
        <label>{props.label}</label>
        <input value={props.valor} onChange={aoDigitado} required={props.required} placeholder={props.placeholder} />
    </div>
    )
}

export default CampoTexto