import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface M3U8PlayerProps {
    url: string;
}

const M3U8Player: React.FC<M3U8PlayerProps> = ({ url }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            if (Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(url);
                hls.attachMedia(videoRef.current);
                return () => {
                    hls.destroy();
                };
            } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
                videoRef.current.src = url;
            }
        }
    }, [url]);

    return (
        <video ref={videoRef} controls style={{ width: '100%' }} />
    );
};

export default M3U8Player;
