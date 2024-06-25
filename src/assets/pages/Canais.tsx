// Canais.tsx

import React, { useState, ChangeEvent } from 'react';
import NavButton from '../components/NavButton';
// import M3U8Player from '../components/M3U8Player';
import { useNavigate } from 'react-router-dom';
// import { VLCPlayer } from 'react-native-vlc-media-player';
import VideoPlayer from '../components/VLCPLAYER';

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
                
                { url: "https://www.youtube.com/embed/zgeHMOPved4?si=ES-RTWQ946TUE-Ei", name: "Globo", image: "https://th.bing.com/th/id/R.6a740f84b21670b198b297f5ea85ed0c?rik=5zKQeIuYfqJWQQ&riu=http%3a%2f%2fvignette4.wikia.nocookie.net%2fredeglobologopedia%2fimages%2fe%2fe3%2fGlobo_logotipo_2008.png%2frevision%2flatest%3fcb%3d20160119051348&ehk=Sm%2f%2bmV9ha2IZ2ceNmwVMhY8IM%2b5%2fhFW1XSiSE2qc7Jo%3d&risl=&pid=ImgRaw&r=0", categoria: "Aberto" },
                { url: "https://5f593df7851db.streamlock.net/evangelizar/tv/playlist.m3u8?PlaylistM3UCL", name: "Globo(ALT)", image: "https://th.bing.com/th/id/R.6a740f84b21670b198b297f5ea85ed0c?rik=5zKQeIuYfqJWQQ&riu=http%3a%2f%2fvignette4.wikia.nocookie.net%2fredeglobologopedia%2fimages%2fe%2fe3%2fGlobo_logotipo_2008.png%2frevision%2flatest%3fcb%3d20160119051348&ehk=Sm%2f%2bmV9ha2IZ2ceNmwVMhY8IM%2b5%2fhFW1XSiSE2qc7Jo%3d&risl=&pid=ImgRaw&r=0", categoria: "Aberto" },
                { url: "http://15.235.11.7:14787", name: "Globo", image: "https://th.bing.com/th/id/R.119c69661a9e39bedea75b4d09ed1dee?rik=eF1S0MzuH1gBzQ&pid=ImgRaw&r=0&sres=1&sresct=1", categoria: "Aberto" },
            ]
        },
        {
            title: "Canais Record",
            channels: [
                { url: "https://5cf4a2c2512a2.streamlock.net/8016/8016/playlist.m3u8", name: "RecordNews", image: "URL_DA_IMAGEM", categoria: "Aberto" },
                { url: "URL_DO_CANAL_2", name: "Record 2", image: "URL_DA_IMAGEM_2", categoria: "Aberto" },
            ]
        },
        {
            title: "Canais SBT",
            channels: [
                { url: "https://www.youtube.com/embed/RZgxuQ0e5zc?si=Y1zub9obD3bTloMG", name: "SBT", image: "https://yt3.ggpht.com/Sy1nh5tP0V7p_nwM5KMFY0e-yN2pjFKpNQMSX3oTQHU1H2hOWVsrSXIfdcRKXCHcKVm6wiPCxhg=s48-c-k-c0x00ffffff-no-rj", categoria: "Aberto" },
                
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
            title: "Canais Premier",
            channels: [
                { url: "http://s.streambr.site:80/824578/036170/3060507.m3u8", name: "Premier", image: "https://th.bing.com/th/id/R.2b3aa23986720801fcc2eb4be36ddd16?rik=xew90jWv4kTWIQ&pid=ImgRaw&r=0", categoria: "Aberto" },
                { url: "http://s.streambr.site:80/824578/036170/3060507.m3u8", name: "Premier(2)", image: "https://th.bing.com/th/id/R.2b3aa23986720801fcc2eb4be36ddd16?rik=xew90jWv4kTWIQ&pid=ImgRaw&r=0", categoria: "Aberto" },
                // Adicione os canais de esportes aqui
            ]
        },
        {

            title: "Canais Sport",
            channels: [
                // Adicione os canais de esportes aqui
            ]
        },
        {
            title: "Canais YouTube",
            channels: [
                { url: "https://www.youtube.com/embed/T-7Mhcz_7tM?si=8qexD1KQhtqGTckj", name: "", image: "https://th.bing.com/th/id/R.c137f4b422793b4a46266b6d701b95cd?rik=hiifW1p57qKSXA&pid=ImgRaw&r=0", categoria: "Aberto" },
                { url: "https://www.youtube.com/embed/RZgxuQ0e5zc?si=Y1zub9obD3bTloMG", name: "SBT", image: "https://th.bing.com/th/id/R.119c69661a9e39bedea75b4d09ed1dee?rik=eF1S0MzuH1gBzQ&pid=ImgRaw&r=0&sres=1&sresct=1", categoria: "Aberto" },
            ]
        },
        {
            title: "Outros Canais",
            channels: [
                // Adicione os outros canais aqui
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

    const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);
    const [passwordEntered, setPasswordEntered] = useState(false);
    const [currentCategory, setCurrentCategory] = useState<Category>(categories[0]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const navigate = useNavigate();

    const handleOnClickHome = () => {
        navigate("/home");
    };

    const handleChannelSelection = (channel: Channel) => {
        setSelectedChannel(channel);
    };

    const handleCategorySelection = (category: Category) => {
        setCurrentCategory(category);
        if (category.title === "Canais Adulto" && !passwordEntered) {
            const inputPassword = prompt("Digite a senha para acessar os canais adultos:");
            if (inputPassword === "1099") {
                setPasswordEntered(true);
            } else {
                alert("Senha incorreta!");
                return;
            }
        }
        setSelectedChannel(null);
    };

    const filteredChannels = currentCategory.channels.filter(channel =>
        channel.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <div className="sidebar">
                <NavButton onClick={handleOnClickHome} /*</div>style={{ marginBottom: '10px' }}*/>Home</NavButton>
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => handleCategorySelection(category)}
                        style={{
                            padding: '10px',
                            marginBottom: '5px',
                            backgroundColor: '#f0f0f0',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            width: '100%',
                            textAlign: 'left',
                            textTransform: 'uppercase'
                        }}
                    >
                        {category.title}
                    </button>
                ))}
            </div>
            <div className="content">
                <input
                    type="text"
                    placeholder="Buscar canais..."
                    value={searchTerm}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    style={{
                        margin: '20px',
                        padding: '10px',
                        fontSize: '16px',
                        width: '100%',
                        boxSizing: 'border-box'
                    }}
                />
                <div className="channels-list">
                    {filteredChannels.map((channel, index) => (
                        <div key={index} className="channel-item">
                            <button
                                onClick={() => handleChannelSelection(channel)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '10px',
                                    marginBottom: '5px',
                                    backgroundColor: '#fff',
                                    border: '1px solid #ccc',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    width: '100%'
                                }}
                            >
                                <img
                                    src={channel.image}
                                    alt={channel.name}
                                    style={{
                                        width: '30px',
                                        height: '30px',
                                        marginRight: '10px',
                                        borderRadius: '50%'
                                    }}
                                />
                                <span>{channel.name}</span>
                            </button>
                        </div>
                    ))}
                </div>
                {selectedChannel && (
                    <div className="tv">
                        {selectedChannel.url.includes("youtube.com") ? (
                            <iframe
                                src={selectedChannel.url}
                                title={selectedChannel.name}
                                style={{ width: '100%', height: '400px', border: 'none' }}
                                allowFullScreen
                            ></iframe>
                        ) : (
                            // <M3U8Player url={selectedChannel.url} />
                            <VideoPlayer />
                            // <></>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Canais;
