const channels = {
    "Canais Globo": [
        { url: "https://5cf4a2c2512a2.streamlock.net/8016/8016/playlist.m3u8", name: "Globo", image: "https://paineltftv.projetojmmidias.workers.dev/0:/IMAGENS.LOGO/TFTV.jpg" },
        { url: "http://168.205.87.198:8555/live/1431/123456/70.m3u8", name: "Globo 2", image: "https://th.bing.com/th/id/R.119c69661a9e39bedea75b4d09ed1dee?rik=eF1S0MzuH1gBzQ&pid=ImgRaw&r=0&sres=1&sresct=1" }
    ],
    "Canais Record": [
        { url: "https://5cf4a2c2512a2.streamlock.net/8016/8016/playlist.m3u8", name: "RecordNews", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/RecordTV_logo_2020.svg/1280px-RecordTV_logo_2020.svg.png" },
        { url: "URL_DO_CANAL_2", name: "Record 2", image: "URL_DA_IMAGEM_2" }
    ],
    "Canais SBT": [
        { url: "http://s.streambr.site:80/824578/036170/3060507.m3u8", name: "SBT", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/SBT_logo.svg/1280px-SBT_logo.svg.png" }
    ],
    "Canais Documentários": [
        { url: "http://s.streambr.site:80/824578/036170/3060602.m3u8", name: "Discovery", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Discovery_Channel_logo.svg/1280px-Discovery_Channel_logo.svg.png" }
    ],
    "Canais Sport": [
        { url: "URL_DO_CANAL_SPORT_1", name: "ESPN", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/ESPN_wordmark.svg/1280px-ESPN_wordmark.svg.png" }
    ],
    "Canais Adulto": [
        { url: "http://cdn.adultiptv.net/anal.m3u8", name: "Anal", image: "https://files.adultiptv.net/adultiptvnet.jpg" },
        { url: "http://cdn.adultiptv.net/interracial.m3u8", name: "Interracial", image: "https://files.adultiptv.net/adultiptvnet.jpg" }
    ],
    "Outros Canais": [
        { url: "URL_DO_OUTRO_CANAL_1", name: "Canal X", image: "URL_DA_IMAGEM_CANAL_X" }
    ]
};

let currentCategory = "Canais Globo";
let passwordEntered = false;

function selectCategory(category) {
    if (category === "Canais Adulto" && !passwordEntered) {
        const inputPassword = prompt("Digite a senha para acessar os canais adultos:");
        if (inputPassword === "1099") {
            passwordEntered = true;
        } else {
            alert("Senha incorreta!");
            return;
        }
    }

    currentCategory = category;
    displayChannels();
}

function displayChannels() {
    const channelList = document.getElementById("channel-list");
    channelList.innerHTML = "";

    const filteredChannels = channels[currentCategory];

    filteredChannels.forEach(channel => {
        const channelItem = document.createElement("div");
        channelItem.className = "channel-item";
        channelItem.onclick = () => loadChannel(channel.url);

        const img = document.createElement("img");
        img.src = channel.image;
        img.alt = channel.name;

        const span = document.createElement("span");
        span.textContent = channel.name;

        channelItem.appendChild(img);
        channelItem.appendChild(span);
        channelList.appendChild(channelItem);
    });
}

function loadChannel(url) {
    const video = document.getElementById("video-player");

    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
    } else {
        alert('Seu navegador não suporta HLS.');
        return;
    }

    video.play();
}

function filterChannels() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const channelList = document.getElementById("channel-list");
    channelList.innerHTML = "";

    const filteredChannels = channels[currentCategory].filter(channel =>
        channel.name.toLowerCase().includes(searchTerm)
    );

    filteredChannels.forEach(channel => {
        const channelItem = document.createElement("div");
        channelItem.className = "channel-item";
        channelItem.onclick = () => loadChannel(channel.url);

        const img = document.createElement("img");
        img.src = channel.image;
        img.alt = channel.name;

        const span = document.createElement("span");
        span.textContent = channel.name;

        channelItem.appendChild(img);
        channelItem.appendChild(span);
        channelList.appendChild(channelItem);
    });
}

// Inicialização
selectCategory(currentCategory);
