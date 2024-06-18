import { createContext, useState } from "react";
import { Alert } from "react-native";

export const AuthContext = createContext(0);

function AuthProvider({ children }) {
    const [cadastrar, setCadastrar ] = useState( false );
    const [ resposta , setResposta ] = useState (false)

    const [logado, setLogado] = useState(true);
    const [error, setError] = useState(false);
    const [user, setUser] = useState(false);

    async function Login(email, senha) {      
        if (email != "" || senha != "") {
            fetch('http://10.139.75.31:5251/api/Usuario/Login', {
                method: 'POST',               
                body: JSON.stringify({
                    usuarioEmail: email,
                    usuarioSenha: senha
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then((res) => res.json())   
            .then((json) => {
                if( json.usuarioId) {
                    setUser( json );
                    setLogado( true );
                }
            })                
            .catch(err => setError( true ) )           
        } else {           
            setError( true )
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
      .then(json => alert("Cadastrado com suceso"))
      .catch(err => console.log(err))
}



async function CriarObservação(descricao, observacoesLocal, observacoesData, usuarioId, pessoaId  ){
    await fetch('http://10.139.75.31:5251/api/ObservacaoesControler/CreateObservacaoes', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            observacoesDescricao: descricao,
            observacoesLocal: observacoesLocal,
            observacoesData: observacoesData,
            usuarioId: usuarioId,
            pessoaId: pessoaId,
        })
    })
    .then(res => res.json())
      .then(json => alert("Nova Observação realizada "))
      .catch(err => console.log(err))
}


    return (
        <AuthContext.Provider value={{ logado: logado, Login, error: error , CriarUsuario, CriarObservação, cadastrar: cadastrar, setCadastrar, setResposta, resposta }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;