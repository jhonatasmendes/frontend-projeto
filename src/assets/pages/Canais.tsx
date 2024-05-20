import { useNavigate } from "react-router-dom";

// componentes
import NavButton from "../components/NavButton";
import Product from "../components/Product";
import Canal from "../components/Canal";

function Canais() {
    const navigate = useNavigate();

    const handleOnClickHome = () => {
        navigate("/home");
    };

    var src = "https://www.youtube.com/embed/_iY4WxGHNzA?autoplay=1&mute=1&controls=0";

    const handleOnClickSbt = () => {
        src = "https://www.youtube.com/embed/_iY4WxGHNzA?si=8Kt3u2d6EFiGBPNG";
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
                                    <Canal src={src}></Canal>
                                    <button onClick={handleOnClickSbt}>sbt</button>
                                    <button>record</button>
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