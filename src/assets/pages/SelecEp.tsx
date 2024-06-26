import { seriesId } from "./Series";
import seriesData from "../../data/SeriesData";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./SelecEp.css";

export var serieSrc = "";

function SelecEp() {
    const navigate = useNavigate();

    const [episodes, setEpisodes] = useState<any[]>([]);
    const holderRef = useRef<HTMLDivElement>(null);

    const addEpisodes = () => {
        const newEpisodes = [];
        for (let i = 1; i <= seriesData[seriesId].ep; i++) {
            newEpisodes.push(<>
                <div className="ep">
                    <img className={`${seriesData[seriesId].link}${i}.mp4`} src={seriesData[seriesId].src}/>
                    <h3 className={`${seriesData[seriesId].link}${i}.mp4`}>Episódio {episodes.length + i}</h3>
                </div>
                </>);
        };
        setEpisodes([episodes, newEpisodes]);
    };

    useEffect(() => {
        if (holderRef.current) {
            addEpisodes();
        }
    }, [holderRef]);

    document.onclick = function(e: MouseEvent) {
        const target = e.target as HTMLTitleElement;
        if (target.tagName === "H3") {
            serieSrc = target.className;
            navigate("/playerS");
        } else if (target.tagName === "IMG") {
            serieSrc = target.className;
            navigate("/playerS");
        };
    };

    return (
        <>
            <div className="episode-select">
                <div className="episode-select-overlay">
                    <h1>{seriesData[seriesId].title}</h1>
                    <div ref={holderRef}>
                        <ul>
                            {episodes.map((episode, index) => (
                                <li key={index}>
                                    {episode}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SelecEp;