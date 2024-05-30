import { useState } from "react";
import { useNavigate } from "react-router-dom";

// componentes
import NavButton from "../components/NavButton";
import Product from "../components/Product";

export var filmSrc = "";

function Filmes() {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("recent");
    const [isAdultCategoryAccessible, setIsAdultCategoryAccessible] = useState(false);

    const handleOnClickHome = () => {
        navigate("/home");
    };

    const handleCategoryChange = (category) => {
        if (category === "adulto") {
            const password = prompt("Digite a senha para acessar esta categoria:");
            if (password === "programadortftv") {
                setIsAdultCategoryAccessible(true);
                setActiveCategory(category);
            } else {
                alert("Senha incorreta!");
            }
        } else {
            setActiveCategory(category);
        }
    };

    document.onclick = function(e) {
        if (e.target.tagName === "IMG") {
            filmSrc = e.target.id;
            navigate("/player");
        }
    };

    const renderFilms = (films) => {
        const rows = [];
        for (let i = 0; i < films.length; i += 3) {
            rows.push(
                <div className="film-row" key={i}>
                    {films.slice(i, i + 3).map((film, index) => (
                        <Product key={index} type={film.type} src={film.src} link={film.link}>
                            {film.title}
                        </Product>
                    ))}
                </div>
            );
        }
        return rows;
    };

    const recentFilms = [
        { type: "acao", src: "Atlas.jpg", link: "https://paineltftv.projetojmmidias.workers.dev/0:/Filmes/Filmes%202024/Atlas.mp4", title: "Atlas" },
        { type: "acao", src: "Taro Da Morte.jpg", link: "https://paineltftv.projetojmmidias.workers.dev/0:/Filmes/Filmes%202024/Taro%20Da%20Morte.mp4?a=view", title: "Taro Da Morte" },
        { type: "acao", src: "Uma Prova De Coragem.jpg", link: "https://paineltftv.projetojmmidias.workers.dev/0:/Filmes/Filmes%202024/Uma%20Prova%20De%20Coragem.mp4?a=view", title: "Uma Prova De Coragem" },
        { type: "acao", src: "/Herança Roubada.jpg", link: "https://paineltftv.projetojmmidias.workers.dev/0:/Filmes/Rec%C3%A9m%20Adicionado/TF-Heran%C3%A7a%20roubada.mp4", title: "Herança Roubada" },
        { type: "suspense", src: "/Assassino da Rua Das Flores.jpg", link: "https://paineltftv.projetojmmidias.workers.dev/0:/Filmes/Filmes%202023/%20Assassinos%20da%20Lua%20das%20Flores%20.mp4", title: "Assassino da Rua Das Flores" },
        { type: "animacao", src: "/kung-fu-panda4.jpg", link: "https://paineltftv.projetojmmidias.workers.dev/0:/Filmes/Rec%C3%A9m%20Adicionado/KUNG%20FU%20PANDA%204%20(TF_2024).mp4", title: "Kung Fu Panda 4" },
        { type: "acao", src: "Batalha dos Drones.jpg", link: "https://paineltftv.projetojmmidias.workers.dev/0:/Filmes/Filmes%202023/Batalha%20dos%20Drones.mp4", title: "Batalha dos Drones" }
    ];

    const acaoFilms = [
        { type: "acao", src: "Acao1.jpg", link: "link_do_filme_acao1", title: "Ação Filme 1" },
        { type: "acao", src: "Acao2.jpg", link: "link_do_filme_acao2", title: "Ação Filme 2" },
        // Adicione mais filmes de ação aqui
    ];

    const infantilFilms = [
        { type: "animacao", src: "/kung-fu-panda4.jpg", link: "https://paineltftv.projetojmmidias.workers.dev/0:/Filmes/Rec%C3%A9m%20Adicionado/KUNG%20FU%20PANDA%204%20(TF_2024).mp4", title: "Kung Fu Panda 4" },
        { type: "infantil", src: "Infantil2.jpg", link: "link_do_filme_infantil2", title: "Infantil Filme 2" },
        // Adicione mais filmes infantis aqui
    ];

    const terrorFilms = [
        { type: "terror", src: "Terror1.jpg", link: "link_do_filme_terror1", title: "Terror Filme 1" },
        { type: "terror", src: "Terror2.jpg", link: "link_do_filme_terror2", title: "Terror Filme 2" },
        // Adicione mais filmes de terror aqui
    ];

    const nacionalFilms = [
        { type: "nacional", src: "Nacional1.jpg", link: "link_do_filme_nacional1", title: "Nacional Filme 1" },
        { type: "nacional", src: "Nacional2.jpg", link: "link_do_filme_nacional2", title: "Nacional Filme 2" },
        // Adicione mais filmes nacionais aqui
    ];

    const adultoFilms = [
        { type: "adulto", src: "Adulto1.jpg", link: "link_do_filme_adulto1", title: "Adulto Filme 1" },
        { type: "adulto", src: "Adulto2.jpg", link: "link_do_filme_adulto2", title: "Adulto Filme 2" },
        // Adicione mais filmes adultos aqui
    ];

    return (
        <>
            <div className="container">
                <div className="sidebar">
                    <NavButton onClick={handleOnClickHome}>Home</NavButton>
                    <NavButton onClick={() => handleCategoryChange("recent")}>Lançamentos</NavButton>
                    <NavButton onClick={() => handleCategoryChange("acao")}>Ação</NavButton>
                    <NavButton onClick={() => handleCategoryChange("infantil")}>Infantil</NavButton>
                    <NavButton onClick={() => handleCategoryChange("terror")}>Terror</NavButton>
                    <NavButton onClick={() => handleCategoryChange("nacional")}>Nacional</NavButton>
                    <NavButton onClick={() => handleCategoryChange("adulto")}>Adulto</NavButton>
                </div>
                <div className="content">
                    <div className="content-overlay">
                        <div className="filmes">
                            {activeCategory === "recent" && (
                                <div className="cabecalho">
                                    <h1>Recém Adicionados</h1>
                                    <div className="recent">
                                        {renderFilms(recentFilms)}
                                    </div>
                                </div>
                            )}

                            {activeCategory === "acao" && (
                                <div className="cabecalho">
                                    <h1>Ação</h1>
                                    <div className="acao">
                                        {renderFilms(acaoFilms)}
                                    </div>
                                </div>
                            )}

                            {activeCategory === "infantil" && (
                                <div className="cabecalho">
                                    <h1>Infantil</h1>
                                    <div className="infantil">
                                        {renderFilms(infantilFilms)}
                                    </div>
                                </div>
                            )}

                            {activeCategory === "terror" && (
                                <div className="cabecalho">
                                    <h1>Terror</h1>
                                    <div className="terror">
                                        {renderFilms(terrorFilms)}
                                    </div>
                                </div>
                            )}

                            {activeCategory === "nacional" && (
                                <div className="cabecalho">
                                    <h1>Nacional</h1>
                                    <div className="nacional">
                                        {renderFilms(nacionalFilms)}
                                    </div>
                                </div>
                            )}

                            {activeCategory === "adulto" && isAdultCategoryAccessible && (
                                <div className="cabecalho">
                                    <h1>Adulto</h1>
                                    <div className="adulto">
                                        {renderFilms(adultoFilms)}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Filmes;
