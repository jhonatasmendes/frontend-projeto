import "./Login.css";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleUser = (e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    };
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    };
    const handleSubmit = () => {
        if (user === "usuario1" && password === "1234") {
            navigate("home");
            setUser("");
            setPassword("");
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

                        <button onClick={handleSubmit} style={{cursor: "pointer"}}>Login</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;