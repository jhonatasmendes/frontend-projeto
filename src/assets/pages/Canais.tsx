import React, { useState } from 'react';
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
                // Adicione os canais do SBT aqui
            ]
        },
        {
            title: "Canais Documentários",
            channels: [
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
    ];

    const [selectedChannel, setSelectedChannel] = useState<string>(categories[0].channels[0].url);
    const [password, setPassword] = useState<string>("");
    const [passwordEntered, setPasswordEntered] = useState<boolean>(false);
    const [currentCategory, setCurrentCategory] = useState<Category>(categories[0]);

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
                    {/* Adicionando botão Canais SBT apenas uma vez */}
                    {categories[2].channels.length > 0 && (
                        <button onClick={() => handleCategorySelection(categories[2])}>
                            Canais SBT
                        </button>
                    )}
                </div>
                <div className="content">
                    <div className="content-overlay">
                        <div className="Canais">
                            <div className="cabecalho">
                                <h1>{currentCategory.title}</h1>
                                <div className="channels-list">
                                    {currentCategory.channels.map((channel, index) => (
                                        <button key={index} onClick={() => handleChannelSelection(channel.url)}>
                                            <img src={channel.image} alt={channel.name} /> {channel.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="tv">
                                <M3U8Player url={selectedChannel} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Canais;
