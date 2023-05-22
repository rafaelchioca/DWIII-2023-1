import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Bem-vindo a página Home</h1>
            <span>Nossa primeira aplicação em REACT</span> <br/> <br/>

            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/loja">Loja</Link>
        </div>
    )
}

export default Home;