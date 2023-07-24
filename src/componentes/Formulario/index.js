import "./Formulario.css";
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao";
import { useState } from "react";

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

	const [nome, setNome] = useState('');
	const [cargo, setCargo] = useState('');
	const [imagem, setImagem] = useState('');
	const [time, setTime] = useState('Programação');

	
	const aoSalvar = (evento) => {
		evento.preventDefault();
		console.log(nome, cargo, imagem, time);
	}

	return (
		<section className="formulario">
			<form onSubmit={aoSalvar}>
                <h2>{props.title}</h2>
				<CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} required label="Nome" placeholder="Digite seu nome" />
				<CampoTexto valor={cargo} aoAlterado={valor => setCargo(valor)} required label="Cargo" placeholder="Digite seu cargo" />
				<CampoTexto valor={imagem} aoAlterado={valor => setImagem(valor)} label="Imagem" placeholder="Digite o endereço da imagem" />
				<ListaSuspensa valor={time} aoAlterado={valor => setTime(valor)} label="Time" itens={Times}/>
				<Botao>
					Criar card
				</Botao>
			</form>
		</section>
	);
};

export default Formulario;
