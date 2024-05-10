import { useNavigate } from "react-router-dom";
// componentes
import NavButton from "../components/NavButton";

function Filmes() {
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
                </div>
                <div className="content">
                    <div className="filmes">
                        <div className="cabecalho">
                            <h1>Filmes</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Filmes;