import { useNavigate } from "react-router-dom";
// componentes
import NavButton from "../components/NavButton";
import Product from "../components/Product";

export var seriesId = 0;

function series() {
    const navigate = useNavigate();
    const handleOnClickHome = () => {
        navigate("/home");
    };
    document.onclick = function(e: MouseEvent) {
        const target = e.target as HTMLImageElement;
        if (target.tagName === "IMG") {
            seriesId = parseInt(target.className);
            navigate("/selecEp");
        }
    };
    return (
        <>
            <div className="container">
                <div className="sidebar">
                    <NavButton onClick={handleOnClickHome}>Home</NavButton>
                    
                   
                </div>
                <div className="content">
                    <div className="content-overlay">
                        <div className="series">
                            <div className="cabecalho">
                                <h1>Recém Adicionadas</h1>
                                <div className="recent">
                                    <Product type="acao" src="/na rota do ouro.webp" id="0">Na Rota do Ouro</Product>
                                    <Product type="suspense" src="/Os_Gigantes.jpg" id="1">Os Gigantes</Product>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default series;