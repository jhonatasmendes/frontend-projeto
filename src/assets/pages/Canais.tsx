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
                                    <M3U8Player url="http://cdn.connectbr.com.br/AE/tracks-v1a1/mono.m3u8"></M3U8Player>
                                    <M3U8Player url="http://wowza4.catve.com.br:1935/live/livestream/media.m3u8"></M3U8Player>
                                    <M3U8Player url="http://15.235.11.7:14787"></M3U8Player>
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