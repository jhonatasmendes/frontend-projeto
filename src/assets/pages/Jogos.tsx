import { useNavigate } from "react-router-dom";

// componentes
import NavButton from "../components/NavButton";
import Product from "../components/Product";

function jogos() {
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
                        <div className="jogos">
                            <div className="cabecalho">
                                <h1>jogos PS3</h1>
                                <div className="recent">
                                    <Product type="acao" src="/TEKKEN 6.jpg" link="https://paineltftv.projetojmmidias.workers.dev/0:/Jogos/PS3/TEKEN%206/">TEKKEN 6</Product>
                                    <Product type="suspense" src="/FIFA 19.jpg" link="https://paineltftv.projetojmmidias.workers.dev/0:/Jogos/PS3/FIFA.19.PS3-DUPLEX.BLES02258/">FIFA 19</Product>
                                    
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