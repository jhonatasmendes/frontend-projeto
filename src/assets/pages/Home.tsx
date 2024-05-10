import { useNavigate } from "react-router-dom";
// componentes
import NavButton from "../components/NavButton";
import ExternalLink from "../components/ExternalLink";

function Home() {
    const navigate = useNavigate();

    const handleOnClickHome = () => {
        navigate("/home");
    };
    const handleOnClickFilmes = () => {
        navigate("/filmes");
    };
    const handleOnClickSeries = () => {
        navigate("/series");
    };
    const handleOnClickJogos = () => {
        navigate("/jogos");
    };

    return (
        <>
            <div className="container">
                <div className="sidebar">
                    <NavButton onClick={handleOnClickHome}>Home</NavButton>
                    <NavButton onClick={handleOnClickFilmes}>Filmes</NavButton>
                    <NavButton onClick={handleOnClickSeries}>Series</NavButton>
                    <NavButton onClick={handleOnClickJogos}>Jogos</NavButton>

                    <ExternalLink href="https://github.com/">Link</ExternalLink>
                </div>
                <div className="content">
                    <div className="home">
                        <div className="cabecalho">
                            <h1>Página Inicial</h1>
                            <h2>Seja bem vindo!</h2>
                        </div>
                        <div className="conteudo">
                            <h2>Recentes</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;