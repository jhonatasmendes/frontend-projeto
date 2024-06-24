import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// componentes
import NavButton from "../components/NavButton";
import Product from "../components/Product";

export var seriesEp = "";

const Series: React.FC = () => {
    const navigate = useNavigate();

    const handleOnClickHome = () => {
        navigate("/home");
    };

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target && target.tagName === "IMG") {
                seriesEp = target.className;
                navigate("/selecEp");
            }
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [navigate]);

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
                                    <Product type="acao" src="/Os Gigantes.jpg" ep="1" link="https://paineltftv.projetojmmidias.workers.dev/0:/S%C3%A9rie/NetFlix/Os%20Gigantes/EP%201.mp4">Os Gigantes</Product>
                                    <Product type="Faroeste" src="Na Rota Do Ouro.jpg" link="https://paineltftv.projetojmmidias.workers.dev/0:/Filmes/Filmes%202023/%20Assassinos%20da%20Lua%20das%20Flores%20.mp4?a=view">The Real Has Come</Product>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Series;