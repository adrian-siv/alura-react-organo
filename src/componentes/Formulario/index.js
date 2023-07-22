import "./Formulario.css";
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao";

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
	
	const aoSalvar = (evento) => {
		evento.preventDefault();
	}

	return (
		<section className="formulario">
			<form onSubmit={aoSalvar}>
                <h2>{props.title}</h2>
				<CampoTexto required label="Nome" placeholder="Digite seu nome" />
				<CampoTexto required label="Cargo" placeholder="Digite seu cargo" />
				<CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
				<ListaSuspensa label="Time" itens={Times}/>
				<Botao>
					Criar card
				</Botao>
			</form>
		</section>
	);
};

export default Formulario;
