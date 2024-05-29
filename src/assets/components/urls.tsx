import React from 'react';
import ReactPlayer from 'react-player';

type urlsPlayerProps = {
  url: string;
};

const urlsPlayer: React.FC<urlsPlayerProps> = ({ url }) => {
  return (
    <div>
      <ReactPlayer url={url} controls={true} muted={true} playing={true}/>
    </div>
  );
};

export default urlsPlayer;