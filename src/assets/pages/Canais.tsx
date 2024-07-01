import React, { useState, ChangeEvent } from 'react';
import NavButton from '../components/NavButton';
// import M3U8Player from '../components/M3U8Player';
import { useNavigate } from 'react-router-dom';
// import { VLCPlayer } from 'react-native-vlc-media-player';
import VideoPlayer from '../components/VLCPLAYER';
import styled from 'styled-components';
import "./Canais.css";

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

const Container = styled.div`
    display: flex;
    justify-content: left;
    width: 100%;
    height: 180%;
`;

const Sidebar = styled.div`
    background-color: rgb(202, 91, 50);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150%;
    background: url(/background.jpg);
`;

const SearchInput = styled.input`
    margin: 20px 0;
    padding: 10px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
`;

const CategoryButton = styled.button`
    padding: 10px;
    margin-bottom: 5px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    text-align: left;
    text-transform: uppercase;
`;

const ChannelItem = styled.button`
    display: flex;
    align-items: center;
    padding: 10px;
    margin-bottom: 5px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
`;

const ChannelImage = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 50%;
`;

const TVContainer = styled.div`
    margin-top: 20px;
`;

const Canais: React.FC = () => {
    const categories: Category[] = [
        {
            title: "Canais Globo",
            channels: [
                { url: "https://www.youtube.com/embed/-NbkgC9kwEY?si=BOMPfLKaD9DSYaCf", name: "Globo", image: "https://th.bing.com/th/id/R.6a740f84b21670b198b297f5ea85ed0c?rik=5zKQeIuYfqJWQQ&riu=http%3a%2f%2fvignette4.wikia.nocookie.net%2fredeglobologopedia%2fimages%2fe%2fe3%2fGlobo_logotipo_2008.png%2frevision%2flatest%3fcb%3d20160119051348&ehk=Sm%2f%2bmV9ha2IZ2ceNmwVMhY8IM%2b5%2fhFW1XSiSE2qc7Jo%3d&risl=&pid=ImgRaw&r=0", categoria: "Aberto" },
                { url: "http://tvsd2.zoeweb.tv:1935/embed/tvsd2/smil:tvsd2.smil/playlist.m3u8", name: "Globo(ALT)", image: "https://th.bing.com/th/id/R.6a740f84b21670b198b297f5ea85ed0c?rik=5zKQeIuYfqJWQQ&riu=http%3a%2f%2fvignette4.wikia.nocookie.net%2fredeglobologopedia%2fimages%2fe%2fe3%2fGlobo_logotipo_2008.png%2frevision%2flatest%3fcb%3d20160119051348&ehk=Sm%2f%2bmV9ha2IZ2ceNmwVMhY8IM%2b5%2fhFW1XSiSE2qc7Jo%3d&risl=&pid=ImgRaw&r=0", categoria: "Aberto" },
            ]
        },
        {
            title: "Canais Record",
            channels: [
                { url: "https://www.youtube.com/embed/live/tctmsuassS0?si=QThCN42hzCq2zpSt", name: "RecordNews", image: "https://th.bing.com/th/id/R.c768d9bdee411035209141e526306b6a?rik=3oqnzR%2fG1ct7Fg&riu=http%3a%2f%2fimg2.wikia.nocookie.net%2f__cb20120229133037%2ftelepedia%2fpt-br%2fimages%2f0%2f05%2fRecord_News.png&ehk=vYpqQ9UVmMrwGH4brafaHZNmUpi9Q%2buA0yEJGIjioiI%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1", categoria: "Aberto" },
            ]
        },
        {
            title: "Canais Band",
            channels: [
                { url: "https://www.youtube.com/embed/live/sE497kDjkWQ?si=ZbRSPzeH-BgdT4Mk", name: "Band", image: "https://th.bing.com/th/id/OIP.OamxnSj0_zWmzXlljj1zgQHaGC?rs=1&pid=ImgDetMain", categoria: "Aberto" },
  
            ]
        },
        {
            title: "Canais SBT",
            channels: [
                { url: "https://www.youtube.com/embed/live/kBCfpwxP400?si=BOMPfLKaD9DSYaCf", name: "SBT", image: "public/Discovery Kids.jpg", categoria: "Aberto" },
                
                // Adicione os canais do SBT aqui
            ]
        },
        
        {
            title: "Canais Infantil",
            channels: [
                { url: "http://168.205.87.198:8555/live/1052/123456/143.m3u8", name: "Discovery Kids", image: "https://yt3.ggpht.com/Sy1nh5tP0V7p_nwM5KMFY0e-yN2pjFKpNQMSX3oTQHU1H2hOWVsrSXIfdcRKXCHcKVm6wiPCxhg=s48-c-k-c0x00ffffff-no-rj", categoria: "Aberto" },
                
                // Adicione os canais do SBT aqui
            ]
        },

        {
            title: "Canais Documentários",
            channels: [
                { url: "https://www.youtube.com/embed/xmGu7Wcl78k?si=7d6oUI62008LiRPi", name: "JP-NEWS ", image: "https://th.bing.com/th/id/OIP.D8VuRUqlfm6VQGMszNOUngHaD4?rs=1&pid=ImgDetMain", categoria: "Aberto" },
                // Adicione os canais de documentários aqui
            ]
        },
        {
            title: "Canais Premier",
            channels: [
                { url: "https://tv.unisc.br/hls/test.m3u8", name: "Premier", image: "https://th.bing.com/th/id/R.2b3aa23986720801fcc2eb4be36ddd16?rik=xew90jWv4kTWIQ&pid=ImgRaw&r=0", categoria: "Aberto" },
                // Adicione os canais de esportes aqui
            ]
        },
        {
            title: "Canais Sport",
            channels: [
                { url: "", name: "Combat", image: "https://th.bing.com/th/id/R.3165cf9f62f4d36e9e803acd8fb032a4?rik=oi7eSRUd%2bituZg&pid=ImgRaw&r=0", categoria: "Canais Sport" },
                // Adicione os canais de esportes aqui
            ]
        },
        {
            title: "Canais YouTube",
            channels: [
                { url: "https://www.youtube.com/embed/RZgxuQ0e5zc?si=Y1zub9obD3bTloMG", name: "SBT", image: "https://th.bing.com/th/id/R.c137f4b422793b4a46266b6d701b95cd?rik=hiifW1p57qKSXA&pid=ImgRaw&r=0", categoria: "Aberto" },
                { url: "https://www.youtube.com/embed/xe7yKIxUSEE?si=gEgfVTZNBqyvR9aO", name: "Globo(ALT)", image: "https://th.bing.com/th/id/R.6a740f84b21670b198b297f5ea85ed0c?rik=5zKQeIuYfqJWQQ&riu=http%3a%2f%2fvignette4.wikia.nocookie.net%2fredeglobologopedia%2fimages%2fe%2fe3%2fGlobo_logotipo_2008.png%2frevision%2flatest%3fcb%3d20160119051348&ehk=Sm%2f%2bmV9ha2IZ2ceNmwVMhY8IM%2b5%2fhFW1XSiSE2qc7Jo%3d&risl=&pid=ImgRaw&r=0", categoria: "Aberto" },
            ]
        },
        {
            title: "Outros Canais",
            channels: [
                { url: "", name: "TV-Cultura", image: "https://th.bing.com/th/id/R.ebb17f2da9c37bec66b7279f2d66e3a7?rik=k8EPGDHDsRL94g&pid=ImgRaw&r=0", categoria: "Outros Canais" },
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
        <Container>
            <Sidebar>
                <NavButton onClick={handleOnClickHome}>Home</NavButton>
                {categories.map((category, index) => (
                    <CategoryButton
                        key={index}
                        onClick={() => handleCategorySelection(category)}
                        style={{
                            border: "0",
                            backgroundColor: "transparent",
                            width: "100%",
                            padding: "10px",
                            fontSize: "medium",
                            cursor: "pointer"
                        }}
                    >
                        {category.title}
                    </CategoryButton>
                ))}
            </Sidebar>
            <Content>
                <div className='content-overlay'>
                    <SearchInput
                        type="text"
                        placeholder="Buscar canais..."
                        value={searchTerm}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    />
                    <div className="channels-list">
                        {filteredChannels.map((channel, index) => (
                            <><ChannelItem key={index} onClick={() => handleChannelSelection(channel)}>
                                <ChannelImage
                                    src={channel.image}
                                    alt={channel.name} />
                                <span>{channel.name}</span>
                            </ChannelItem><div key={index} className="channel-item">
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
                                            width: '100%',
                                            color: "black"
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
                                            }} />
                                        <span>{channel.name}</span>
                                    </button>
                                </div></>
                        ))}
                    </div>
                    {selectedChannel && (
                        <TVContainer>
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
                            )}
                        </TVContainer>
                    )}
                </div>
            </Content>
        </Container>
    );
};

export default Canais;
