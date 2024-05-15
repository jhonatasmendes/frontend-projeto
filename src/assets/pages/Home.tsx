import { useNavigate } from "react-router-dom";

// componentes
import NavButton from "../components/NavButton";
import ExternalLink from "../components/ExternalLink";
import Product from "../components/Product";

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
                            <div className="recent">
                            <Product src="/Herança Roubada.jpg" link="https://paineltftv.projetojmmidias.workers.dev/0:/Filmes/Rec%C3%A9m%20Adicionado/TF-Heran%C3%A7a%20roubada.mp4?a=view">Herença Perdida</Product>
                                <Product src="/Assassino da Rua Das Flores.jpg" link="https://paineltftv.projetojmmidias.workers.dev/0:/Filmes/Filmes%202023/%20Assassinos%20da%20Lua%20das%20Flores%20.mp4?a=view">Assassino da Rua Das Flores</Product>
                                <Product src="/kung-fu-panda4.jpg" link="https://paineltftv.projetojmmidias.workers.dev/0:/Filmes/Rec%C3%A9m%20Adicionado/KUNG%20FU%20PANDA%204%20(TF_2024).mp4?a=view">kung-fu-panda4</Product>
                                <Product src="/Batalha dos Drones.jpg" link="https://paineltftv.projetojmmidias.workers.dev/0:/Filmes/Filmes%202023/Batalha%20dos%20Drones.mp4?a=view">Batalha dos Drones</Product>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;