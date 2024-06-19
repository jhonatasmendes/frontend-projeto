import { seriesEp } from "./Series";

function SelecEp() {
    var epCount = parseInt(seriesEp);
    var holder = document.getElementById("ep-holder");

    for (let i = 0; i < epCount; i++) {
        holder?.appendChild(document.createElement("a"));
    };

    return (
        <>
            <div id="ep-holder">

            </div>
        </>
    );
};

export default SelecEp;