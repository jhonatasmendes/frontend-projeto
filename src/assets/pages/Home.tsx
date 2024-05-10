import { useNavigate } from "react-router-dom";
// componentes
import NavButton from "../components/NavButton";
import ExternalLink from "../components/ExternalLink";

function Home() {
    const navigate = useNavigate();

    const handleOnClickHome = () => {
        navigate("/");
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
                        <h1>Página Inicial</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;