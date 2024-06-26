import { useNavigate } from "react-router-dom";

// componentes
import NavButton from "../components/NavButton";
import Product from "../components/Product";

function jogos() {
    const navigate = useNavigate();

    const handleOnClickHome = () => {
        navigate("/home");
    };

    document.onclick = function(e: MouseEvent) {
        const target = e.target as HTMLImageElement;
        if (target.tagName == "IMG") {
            window.open(target.id);
        };
    };

    return (
        <>
            <div className="container">
                <div className="sidebar">
                    <NavButton onClick={handleOnClickHome}>Home</NavButton>
                </div>
                <div className="content">
                    <div className="content-overlay">
                        <div className="jogos">
                            <div className="cabecalho">
                                <h1>Jogos PS3</h1>
                                <div className="recent">
                                    <Product type="acao" src="/mortal-kombat.jpg" link="https://paineltftv.projetojmmidias.workers.dev/0:/Jogos/PS3/MORTAL%20KOMBATE.zip">Mortal Kombat</Product>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default jogos;