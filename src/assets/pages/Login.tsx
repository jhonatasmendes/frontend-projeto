import "./Login.css"

function Login() {
    return (
        <>
            <div className="login-background">
                <div className="login-root">
                    <div className="login-box">
                        <input type="text" placeholder="Usuário" id="usuario" />
                        <input type="password" placeholder="Senha" id="senha" />

                        <button>Login</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;