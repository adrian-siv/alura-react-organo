import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderCompleta = `${props.placeholder}...`

    return (
    <div className="campo-texto">
        <label>{props.label}</label>
        <input placeholder={placeholderCompleta} />
    </div>
    )
}

export default CampoTexto