import { useNavigate } from "react-router-dom";

// componentes
import NavButton from "../components/NavButton";
import Product from "../components/Product";

function Filmes() {
    const navigate = useNavigate();

    const handleOnClickHome = () => {
        navigate("/home");
    };

    return (
        <>
            <div className="container">
                <div className="sidebar">
                    <NavButton onClick={handleOnClickHome}>Home</NavButton>
                </div>
                <div className="content">
                    <div className="content-overlay">
                        <div className="filmes">
                            <div className="cabecalho">
                                <h1>Recém Adicionados</h1>
                                <div className="recent">
                                    <Product type="acao" src="/Herança Roubada.jpg" link="https://paineltftv.projetojmmidias.workers.dev/0:/Filmes/Rec%C3%A9m%20Adicionado/TF-Heran%C3%A7a%20roubada.mp4?a=view">Herença Roubada</Product>
                                    <Product type="suspense" src="/Assassino da Rua Das Flores.jpg" link="https://paineltftv.projetojmmidias.workers.dev/0:/Filmes/Filmes%202023/%20Assassinos%20da%20Lua%20das%20Flores%20.mp4?a=view">Assassino da Rua Das Flores</Product>
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


export default Filmes;