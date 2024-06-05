import { seriesEp } from "./Series";

function SelecEp() {
    const ep = [];

    for (let i = 1; i < parseInt(seriesEp); i++) {
        ep.push({ title: `Episódio ${i}` });
    };

    console.log(ep);

    return (
        <>
            <div id="ep-holder">

            </div>
        </>
    );
};

export default SelecEp;