import React, { useState } from 'react';
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
        "https://5cf4a2c2512a2.streamlock.net/8016/8016/playlist.m3u8",
        "http://45.162.230.234:1935/agrobrasiltv/agrobrasiltv/playlist.m3u8",
        "http://flash.softhost.com.br:1935/fonte/fontetv/live.m3u8",
        "http://wz3.dnip.com.br:1935/novaeratv/novaeratv.sdp/live.m3u8",
        "http://painelvj.com.br/tvaguaboa2/tvaguaboa2.sdp/playlist.m3u8",
        "http://evpp.mm.uol.com.br:1935/band_live/terraviva/playlist.m3u8",
        "http://wowza4.catve.com.br:1935/live/livestream/media.m3u8",
        "http://flash.softhost.com.br:1935/ufg/tvufgweb/playlist.m3u8",
        "http://painelvj.com.br:1935/tvnbrasil/tvnbrasil.sdp/playlist.m3u8",
        "http://cdn.connectbr.com.br/AE/index.m3u8",
        "http://cdn.connectbr.com.br/AE/tracks-v1a1/mono.m3u8",
        "http://cdn.connectbr.com.br:80/Record-News-HD/index.m3u8",
        "http://wowza4.catve.com.br:1935/live/livestream/media.m3u8"
        
         
        
        
    ];

    const navigate = useNavigate();

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
