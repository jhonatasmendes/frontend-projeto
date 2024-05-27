import { filmSrc } from "./FIlmes";

function Reprodutor() {
    return (
        <>
            <div style={{background: "url(/background.jpg)", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{background: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(2px)", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <video width="1280px" height="720px" controls style={{backgroundColor: "black"}}>
                        <source src={filmSrc} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </>
    );
};

export default Reprodutor;