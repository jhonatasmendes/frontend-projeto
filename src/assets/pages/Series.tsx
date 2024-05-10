import { useNavigate } from "react-router-dom";
// componentes
import NavButton from "../components/NavButton";

function Series() {
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
                    <div className="series">
                        <div className="cabecalho">
                            <h1>Series</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Series;