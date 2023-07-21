import "./Formulario.css";
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"

const Formulario = (props) => {
	const Times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX & Design',
        'Mobile',
        'Inovação e Gestão'
    ]
	
	return (
		<section className="formulario">
			<form>
                <h2>{props.title}</h2>
				<CampoTexto label="Nome" placeholder="Digite seu nome" />
				<CampoTexto label="Cargo" placeholder="Digite seu cargo" />
				<CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
				<ListaSuspensa label="Time" itens={Times}/>
			</form>
		</section>
	);
};

export default Formulario;
