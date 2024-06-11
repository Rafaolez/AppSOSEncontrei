import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Produto from '../Components/Produto';
import Stories from '../Components/Stories';
import Detalheses from '../Components/Detalhes';


export default function Home() {

  const [produtos, setProdutos] = useState([]);
  const[pessoaId, setPessoaId]= useState([]);
  const[pessoaNome, setPessoaNome] = useState([]);
  const[pessoaRoupa, setPessoaRoupa]= useState([]);
  const[pessoaCor, setPessoaCor]= useState([]);
  const[pessoaSexo, setPessoaSexo] = useState([]);
  const[pessoaObservacao, setPessoaObservacao] = useState([]);
  const[pessoaLocalDesaparecimento, setPessoaLocalDesaparecimento] = useState([]);
  const[pessoaFoto, setPessoaFoto] = useState([]);
  const[pessoaDtDesaparecimento, setPessoaDtDesaparecimento] = useState([]);
  const[pessoaDtEncontro, setPessoaDtEncontro] = useState([]);
  const[pessoaStatus, setPessoaStatus] = useState([]);
  const[usuarioId, setUsuarioId] = useState([]);
  const[detalhes, setDetalhes] = useState(true);


  async function getProdutos() {
    await fetch('http://10.139.75.31:5251/api/Pessoa/GetAllPessoa', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setProdutos(json))
      .catch(err => console.log(err))
  }

  async function getPessoaId() {
    await fetch('http://10.139.75.31:5251/api/Pessoa/GetAllPessoa', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => {
         setPessoaId(json.pessoaId);
         setPessoaNome(json.pessoaNome);
         setPessoaRoupa(json.pessoaRoupa);
         setPessoaCor(json.pessoaCor);
         setPessoaSexo(json.pessoaSexo);
         setPessoaObservacao(json.pessoaObservacao);
         setPessoaLocalDesaparecimento(json.pessoaLocalDesaparecimento);
         setPessoaFoto(json.pessoaFoto);
         setPessoaDtDesaparecimento(json.pessoaDtDesaparecimento);
         setPessoaDtEncontro(json.pessoaDtEncontro);
         setPessoaStatus(json.pessoaStatus);
         setUsuarioId(json.usuarioId);
        })
      .catch(err => console.log(err))
  }


  useEffect(() => {
    getProdutos();
    getPessoaId()
    
  }, [])
  
    return (
      <View style={css.container}>
        {detalhes ?
          <>
            <Stories produtos={produtos} />
            <FlatList
              data={produtos}
              renderItem={({ item }) => <Produto getPessoaId={getPessoaId} pessoaNome={item.pessoaNome}  pessoaFoto={item.pessoaFoto} pessoaId={item.pessoaId} setDetalhes={setDetalhes} />}
              keyExtractor={(item) => item.pessoaId}
              contentContainerStyle={{ height: (produtos.length * 600) + 110 }}
            />
          </>
          :
            <View>
               <TouchableOpacity onPress={()=> {setDetalhes(true); getPessoaId}} style={css.btnDelete}>
                <Text  style={css.btbLoginText}>❮</Text>
              </TouchableOpacity>
              <Detalheses getPessoaId={getPessoaId(pessoaId)} pessoaNome={pessoaNome}  pessoaFoto={pessoaFoto} pessoaRoupa={pessoaRoupa} pessoaCor={pessoaCor} pessoaSexo={pessoaSexo} pessoaObservacao={pessoaObservacao} setDetalhes={setDetalhes} />
            </View>
        }
      </View>
    ) 
}

const css = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flexGrow: 1,
    color: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "blue"
  },
  stories: {
    width: "100%",
    height: 100
  },
  btnDelete:{
    width:200,
    height: 50,
    borderRadius:10,
    backgroundColor:"#13293D",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:150,
},
btbLoginText:{
    color:"white",
    fontSize:30,
    fontWeight:"850"
}
})