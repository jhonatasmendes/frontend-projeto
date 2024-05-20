import { useNavigate } from "react-router-dom";

// componentes
import NavButton from "../components/NavButton";
import Product from "../components/Product";

function Canais() {
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
                        <div className="Canais">
                            <div className="cabecalho">
                                <h1>Canais Aberto</h1>
                                <div className="recent">
                                    <Product type="noticias" src="/Globo.jpg" link="https://www.youtube.com/watch?v=_iY4WxGHNzA">RPC</Product>
                                    <Product type="noticias" src="/Record.jpg" link="https://globoplay.globo.com/tv-globo/ao-vivo/6120663/">Record News</Product>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Canais;