import { useState } from 'react';
import NavButton from '../components/NavButton'; // Certifique-se de que o caminho está correto
import M3U8Player from '../components/M3U8Player'; // Certifique-se de que o caminho está correto
import { useNavigate } from 'react-router-dom';

const Canais = () => {
    // Arrays de URLs para cada seção
    const openChannelsUrls = [
        "https://5cf4a2c2512a2.streamlock.net/8016/8016/playlist.m3u8",
        "http://cdn.connectbr.com.br/AE/tracks-v1a1/mono.m3u8",
        "http://flash.softhost.com.br:1935/ufg/tvufgweb/playlist.m3u8"
    ];

    const closedChannelsUrls = [
        "http://cdn.connectbr.com.br/AE/tracks-v1a1/mono.m3u8",
        "https://5cf4a2c2512a2.streamlock.net/8016/8016/playlist.m3u8"
        
    ];

    // Estados para os URLs atuais de cada seção
    const [currentOpenChannelUrl, setCurrentOpenChannelUrl] = useState(openChannelsUrls[0]);
    const [currentClosedChannelUrl, setCurrentClosedChannelUrl] = useState(closedChannelsUrls[0]);

    // Funções para atualizar os estados quando os botões forem clicados
    const handleNextOpenChannel = () => {
        setCurrentOpenChannelUrl(prevUrl => {
            const currentIndex = openChannelsUrls.indexOf(prevUrl);
            const nextIndex = (currentIndex + 1) % openChannelsUrls.length;
            return openChannelsUrls[nextIndex];
        });
    };

    const handleNextClosedChannel = () => {
        setCurrentClosedChannelUrl(prevUrl => {
            const currentIndex = closedChannelsUrls.indexOf(prevUrl);
            const nextIndex = (currentIndex + 1) % closedChannelsUrls.length;
            return closedChannelsUrls[nextIndex];
        });
    };

    const navigate = useNavigate();

    // Função de callback para o botão de navegação (ajuste conforme necessário)
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
                                    <M3U8Player url={currentOpenChannelUrl} />
                                    <button onClick={handleNextOpenChannel}>Next</button>
                                </div>    
                            </div>
                            <div className="cabecalho">
                                <h1>Canais Fechados</h1>
                                <div className="tv">
                                    <M3U8Player url={currentClosedChannelUrl} />
                                    <button onClick={handleNextClosedChannel}>Next</button>
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
