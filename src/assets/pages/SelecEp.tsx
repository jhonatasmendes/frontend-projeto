import { seriesId } from "./Series";
import seriesData from "../../data/SeriesData";
import { useState, useEffect, useRef } from "react";
import "./SelecEp.css";

function SelecEp() {
    const [episodes, setEpisodes] = useState<any[]>([]);
    const holderRef = useRef<HTMLDivElement>(null);

    const addEpisodes = () => {
        const newEpisodes = [];
        for (let i = 1; i <= seriesData[seriesId].ep; i++) {
            newEpisodes.push(<><h3>Episode {episodes.length + i}</h3></>);
        };
        setEpisodes([episodes, newEpisodes]);
    };

    useEffect(() => {
        if (holderRef.current) {
            addEpisodes();
        }
    }, [holderRef]);

    return (
        <>
            <div>
                <h1>{seriesData[seriesId].title}</h1>
                <div ref={holderRef}>
                    <ul>
                        {episodes.map((episode, index) => (
                            <li key={index}>{episode}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SelecEp;