import { createContext, useState } from "react";
import { Alert } from "react-native";

export const AuthContext = createContext(0);

function AuthProvider({ children }) {
    const [logado, setLogado] = useState(true);
    const [error, setError] = useState(false);
    const [cadastrar, setCadastrar ] = useState( false );
    const [ resposta , setResposta ] = useState (false)

    async function Login(email, senha) {

        if (email != "" && senha != "") {
            await fetch('http://10.139.75.31:5251/api/Usuario/Login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    username: email,
                    password: senha
                })
            })
                .then(res => (res.ok == true) ? res.json() : false)
                .then(json => {
                    setLogado((json.token) ? true : false);
                    setError((json.token) ? false : true);
                }
                )
                .catch(err => setError(true))
        } else {
            setError(true)
        }
    }

async function CriarUsuario(email, senha, tel, nome ){
    await fetch('http://10.139.75.31:5251/api/Usuario/CreateUsuario', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            usuarioNome: nome,
            usuarioSenha: senha,
            usuarioTelefone: tel,
            usuarioEmail: email,
        })
    })
    .then(res => res.json())
      .then(json => setResposta(true) (json))
      .catch(err => console.log(err))
}



    return (
        <AuthContext.Provider value={{ logado: logado, Login, error: error , CriarUsuario, cadastrar: cadastrar, setCadastrar, setResposta, resposta }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;