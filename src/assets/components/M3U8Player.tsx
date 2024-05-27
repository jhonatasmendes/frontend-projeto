import React from 'react';
import ReactPlayer from 'react-player';

type M3U8PlayerProps = {
  url: string;
};

const M3U8Player: React.FC<M3U8PlayerProps> = ({ url }) => {
  return (
    <div>
      <ReactPlayer url={url} controls={true} muted={true} playing={true}/>
    </div>
  );
};

export default M3U8Player;