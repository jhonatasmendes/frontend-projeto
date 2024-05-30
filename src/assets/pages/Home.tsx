import { useNavigate } from "react-router-dom";

// componentes
import NavButton from "../components/NavButton";
import Product from "../components/Product";

function Home() {
    const navigate = useNavigate();
   
    const handleOnClickFilmes = () => {
        navigate("/filmes");
    };
    const handleOnClickSeries = () => {
        navigate("/series");
    };
    const handleOnClickJogos = () => {
        navigate("/jogos");
    };
    const handleOnClickCanais = () => {
        navigate("/Canais");
    };

    return (
        <>
            <div className="container">
                <div className="sidebar">
                    <NavButton onClick={handleOnClickCanais}>Canais</NavButton>
                    <NavButton onClick={handleOnClickFilmes}>Filmes</NavButton>
                    <NavButton onClick={handleOnClickSeries}>Series</NavButton>
                    <NavButton onClick={handleOnClickJogos}>Jogos</NavButton>
                   
                </div>
                <div className="content">
                    <div className="content-overlay">
                        <div className="home">
                            <div className="cabecalho">
                                <h1>Seja bem vindo!</h1>
                                <h2>JM-PLAY</h2>
                            </div>
                            <div className="conteudo">
                                <h2>Recém Adicionados</h2>
                                <div className="recent">
                                    <Product type="acao" src="Atlas.jpg" link="https://paineltftv.projetojmmidias.workers.dev/0:/Filmes/Filmes%202024/Atlas.mp4">Atlas</Product>,
                                    <Product type="acao" src="Taro Da Morte.jpg" link="https://paineltftv.projetojmmidias.workers.dev/0:/Filmes/Filmes%202024/Taro%20Da%20Morte.mp4?a=view">Taro Da Morte</Product>,
                                    <Product type="animacao" src="/kung-fu-panda4.jpg" link="https://paineltftv.projetojmmidias.workers.dev/0:/Filmes/Rec%C3%A9m%20Adicionado/KUNG%20FU%20PANDA%204%20(TF_2024).mp4?a=view">kung-fu-panda4</Product>
                                    <Product type="acao" src="/Batalha dos Drones.jpg" link="https://paineltftv.projetojmmidias.workers.dev/0:/Filmes/Filmes%202023/Batalha%20dos%20Drones.mp4?a=view">Batalha dos Drones</Product>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;