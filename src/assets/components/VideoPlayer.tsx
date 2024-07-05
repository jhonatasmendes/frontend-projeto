import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

interface VideoPlayerProps {
    url: string;
}

const PlayerWrapper = styled.div`
    position: relative;
    padding-top: 56.25%; /* Manter a proporção 16:9 */
`;

const StyledReactPlayer = styled(ReactPlayer)`
    position: absolute;
    top: 10%;
    left: 10%;
`;

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
    return (
        <PlayerWrapper>
            <StyledReactPlayer url={url} controls />
        </PlayerWrapper>
    );
};

export default VideoPlayer;
