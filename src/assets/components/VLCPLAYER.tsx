import React, { useEffect, useRef } from 'react';
import axios from 'axios';

const VideoPlayer: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await axios.get('http://15.235.11.7:14787', {
                    responseType: 'blob' // Importante para lidar com conteúdo de vídeo
                });

                if (videoRef.current) {
                    videoRef.current.src = URL.createObjectURL(response.data);
                }
            } catch (error) {
                console.error('Erro ao carregar vídeo:', error);
            }
        };

        fetchVideo();
    }, []);

    return (
        <div>
            <h2>Reproduzindo o canal</h2>
            <video ref={videoRef} controls width="640" height="360">
                Desculpe, seu navegador não suporta a reprodução de vídeos.
            </video>
        </div>
    );
}

export default VideoPlayer;
