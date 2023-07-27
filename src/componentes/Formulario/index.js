import "./Formulario.css";
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao";
import { useState } from "react";

const Formulario = ({aoColaboradorCadastrado, titulo, times}) => {

	const [nome, setNome] = useState('');
	const [cargo, setCargo] = useState('');
	const [imagem, setImagem] = useState('');
	const [time, setTime] = useState('');

	
	const aoSalvar = (evento) => {
		evento.preventDefault();
		aoColaboradorCadastrado({
			nome,
			cargo,
			imagem,
			time
		})
		setNome("");
		setCargo("");
		setImagem("");
		setTime("");
	}

	return (
		<section className="formulario">
			<form onSubmit={aoSalvar}>
                <h2>{titulo}</h2>
				<CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} required label="Nome" placeholder="Digite seu nome" />
				<CampoTexto valor={cargo} aoAlterado={valor => setCargo(valor)} required label="Cargo" placeholder="Digite seu cargo" />
				<CampoTexto valor={imagem} aoAlterado={valor => setImagem(valor)} label="Imagem" placeholder="Digite o endereço da imagem" />
				<ListaSuspensa valor={time} aoAlterado={valor => setTime(valor)} required label="Time" itens={times}/>
				<Botao>
					Criar card
				</Botao>
			</form>
		</section>
	);
};

export default Formulario;
