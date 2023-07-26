import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='icones'>
                <a href='https://facebook.com' target='_blank' rel="noreferrer"><img src='imagens/fb.png' alt='Logo do Facebook'/></a>
                <a href='https://twitter.com' target='_blank' rel="noreferrer"><img src='imagens/tw.png' alt='Logo do Twitter'/></a>
                <a href='https://instagram.com' target='_blank' rel="noreferrer"><img src='imagens/ig.png' alt='Logo do Instagram'/></a>
            </div>
            <div>
                <img src='imagens/logo.png' alt='Logo do Organo'/>
            </div>
            <div>
                <p>Desenvolvido por Alura.</p>
            </div>
        </footer>
    )
}

export default Rodape;