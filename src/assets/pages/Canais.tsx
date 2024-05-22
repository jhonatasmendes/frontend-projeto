import { useNavigate } from "react-router-dom";

// componentes
import NavButton from "../components/NavButton";
import M3U8Player from "../components/M3U8Player";

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
                                <div className="tv">
                                    <M3U8Player url="https://5cf4a2c2512a2.streamlock.net/8016/8016/playlist.m3u8"></M3U8Player>
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