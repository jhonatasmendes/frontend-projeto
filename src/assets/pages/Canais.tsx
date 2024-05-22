import { useNavigate } from "react-router-dom";

// componentes
import NavButton from "../components/NavButton";
import Canal from "../components/Canal";

function Canais() {
    const navigate = useNavigate();

    const handleOnClickHome = () => {
        navigate("/home");
    };

    const canal = document.getElementById("canal");

    const handleOnClickSbt = () => {
        canal?.setAttribute("src", "https://www.youtube.com/embed/_iY4WxGHNzA?autoplay=1&mute=1");
    };
    const handleOnClickRecord = () => {
        canal?.setAttribute("src", "https://www.youtube.com/embed/RQ6FzIqR7vA?autoplay=1&mute=1");
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
                                <div className="tv">
                                    <Canal id="canal" src=""></Canal>
                                    <div className="canais">
                                        <button onClick={handleOnClickSbt}>sbt</button>
                                        <button onClick={handleOnClickRecord}>record</button>
                                    </div>
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