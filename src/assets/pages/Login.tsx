import "./Login.css"
import axios from 'axios';
import { useState } from 'react';

interface Users {
    id: number
    nome: string
    email: string
    senha: string
    filmes: number
    series: number
    jogos: number
    adulto: number
};

function Login() {
    const [users, setUsers] = useState<Users[]>([]);

    const handleGetUsers = async () => {
        const res = await axios.get("http://localhost:8080/users")
        setUsers(res.data)

        console.log(users)
    };

    return (
        <>
            <div className="login-background">
                <div className="login-root">
                    <div className="login-box">
                        <input type="text" placeholder="Usuário" id="usuario" />
                        <input type="password" placeholder="Senha" id="senha" />

                        <button onClick={handleGetUsers}>Login</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;