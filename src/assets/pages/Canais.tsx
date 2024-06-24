import React, { useState, ChangeEvent } from 'react';
import NavButton from '../components/NavButton';
import M3U8Player from '../components/M3U8Player';
import { useNavigate } from 'react-router-dom';

interface Channel {
    url: string;
    name: string;
    image: string;
    categoria: string;
}

interface Category {
    title: string;
    channels: Channel[];
}

const Canais: React.FC = () => {
    const categories: Category[] = [
        {
            title: "Canais Globo",
            channels: [
                { url: "https://5cf4a2c2512a2.streamlock.net/8016/8016/playlist.m3u8", name: "Globo", image: "https://paineltftv.projetojmmidias.workers.dev/0:/IMAGENS.LOGO/TFTV.jpg", categoria: "Aberto" },
                { url: "http://168.205.87.198:8555/live/1431/123456/70.m3u8", name: "Globo 2", image: "https://th.bing.com/th/id/R.119c69661a9e39bedea75b4d09ed1dee?rik=eF1S0MzuH1gBzQ&pid=ImgRaw&r=0&sres=1&sresct=1", categoria: "Aberto" },
            ]
        },
        {
            title: "Canais Record",
            channels: [
                { url: "https://5cf4a2c2512a2.streamlock.net/8016/8016/playlist.m3u8", name: "RecordNews", image: ",/public/Globo.jpg", categoria: "Aberto" },
                { url: "URL_DO_CANAL_2", name: "Record 2", image: "URL_DA_IMAGEM_2", categoria: "Aberto" },
            ]
        },
        {
            title: "Canais SBT",
            channels: [
                { url: "http://s.streambr.site:80/824578/036170/3060507.m3u8", name: "Record 2", image: "URL_DA_IMAGEM_2", categoria: "Aberto" },
                
                // Adicione os canais do SBT aqui
            ]
        },
        {
            title: "Canais Documentários",
            channels: [
                { url: "http://s.streambr.site:80/824578/036170/3060507.m3u8", name: "Record ", image: "URL_DA_IMAGEM_2", categoria: "Aberto" },
                { url: "http://s.streambr.site:80/824578/036170/3060602.m3u8", name: "BAND CURITIBA HD", image: "URL_DA_IMAGEM_2", categoria: "Aberto" },
                // Adicione os canais de documentários aqui
            ]
        },
        {
            title: "Canais Sport",
            channels: [
                // Adicione os canais de esportes aqui
            ]
        },
        {
            title: "Canais Adulto",
            channels: [
                { url: "http://cdn.adultiptv.net/anal.m3u8", name: "Anal", image: "https://files.adultiptv.net/adultiptvnet.jpg", categoria: "Adulto" },
                { url: "http://cdn.adultiptv.net/interracial.m3u8", name: "Interracial", image: "https://files.adultiptv.net/adultiptvnet.jpg", categoria: "Adulto" },
            ]
        },
        {
            title: "Outros Canais",
            channels: [
                // Adicione os outros canais aqui
            ]
        },
    ];

    const [selectedChannel, setSelectedChannel] = useState<string>(categories[0].channels[0].url);
    const [passwordEntered, setPasswordEntered] = useState<boolean>(false);
    const [currentCategory, setCurrentCategory] = useState<Category>(categories[0]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const navigate = useNavigate();

    const handleOnClickHome = () => {
        navigate("/home");
    };

    const handleChannelSelection = (channelUrl: string) => {
        const channel = currentCategory.channels.find(channel => channel.url === channelUrl);
        if (channel) {
            setSelectedChannel(channelUrl);
        }
    };

    const handleCategorySelection = (category: Category) => {
        setCurrentCategory(category);
        const defaultChannelUrl = category.channels[0].url;
        if (category.title === "Canais Adulto" && !passwordEntered) {
            const inputPassword = prompt("Digite a senha para acessar os canais adultos:");
            if (inputPassword === "1099") {
                setPasswordEntered(true);
                setSelectedChannel(defaultChannelUrl);
            } else {
                alert("Senha incorreta!");
            }
        } else {
            setSelectedChannel(defaultChannelUrl);
        }
    };

    const filteredChannels = currentCategory.channels.filter(channel =>
        channel.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="container">
                <div className="sidebar">
                    <NavButton onClick={handleOnClickHome}>Home</NavButton>
                    {categories.map((category, index) => (
                        <button key={index} onClick={() => handleCategorySelection(category)}>
                            {category.title}
                        </button>
                    ))}
                </div>
                <div className="content">
                    <div className="content-overlay">
                        <input
                            type="text"
                            placeholder="Buscar canais..."
                            value={searchTerm}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                            style={{ margin: '20px', padding: '10px', fontSize: '16px' }}
                        />
                        <div className="canais">
                            <div className="cabecalho">
                                <h1>{currentCategory.title}</h1>
                                <div className="channels-list">
                                    {filteredChannels.map((channel, index) => (
                                        <div key={index} className="channel-item">
                                            <button onClick={() => handleChannelSelection(channel.url)}>
                                                <img src={channel.image} alt={channel.name} className="logo-canal" /> {channel.name}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="tv">
                                <M3U8Player url={selectedChannel} />
                                <div className="change-channel">
                                    <h2>Canais</h2>
                                    <div className="channels-list">
                                        {filteredChannels.map((channel, index) => (
                                            <div key={index} className="channel-item">
                                                <button onClick={() => handleChannelSelection(channel.url)}>
                                                    {channel.name}
                                                </button>
                                            </div>
                                        ))}
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
