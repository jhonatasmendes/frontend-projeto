import "./Login.css";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface User {
    id: number;
    nome: string;
    email: string;
    senha: string;
    filmes: number;
    series: number;
    jogos: number;
    adulto: number;
};

function Login() {
    const navigate = useNavigate();

    const [user, setUser] = useState("");
    const [Adm, setAdm] = useState("");
    const [password, setPassword] = useState("");
    const [senha, setSenha] = useState("");
    const [database, setDatabase] = useState<User[]>([]);

    const users = [
        "Mendes",
        "Jonas"
    ];
    const passwords = [
        "10999",
        "1234"
    ];

    const Adms = [
        "tf",
    ];
    const senhas = [
        "10",

    ];

    const handleDatabase = async () => {
        const res = await axios.get("http://localhost:8080/users");
        setDatabase(res.data);
    };

    const handleUser = (e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
        setAdm(e.target.value);
    };
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setSenha(e.target.value);
    };

    const handleSubmit = () => {
        handleDatabase();
        console.log(database);

        if (users.indexOf(user) != -1 && passwords.indexOf(password) != -1) {
            if (users.indexOf(user) == passwords.indexOf(password)) {
                navigate("home");
                setUser("");
                setPassword("");
            } else {
                alert("Usuário ou senha incorreto.");
            };
        } else {
            alert("Usuário ou senha incorreto.");
        };

        if (Adms.indexOf(Adm) != -1 && senhas.indexOf(senha) != -1) {
            if (Adms.indexOf(Adm) == senhas.indexOf(senha)) {
                navigate("Revenda");
                setAdm("");
                setSenha("");
            } else {
                alert("Usuário ou senha incorreto.");
            };
        } else {
            alert("Usuário ou senha incorreto.");
        };
    };

    return (
        <>
            <div className="login-background">
                <div className="login-root">
                    <div className="login-box">
                        <input type="text" placeholder="Usuário" onChange={handleUser} id="usuario"/>
                        <input type="password" placeholder="Senha" onChange={handlePassword} id="senha" />

                        <button onClick={handleSubmit} style={{cursor: "pointer"}}>Entrar</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;