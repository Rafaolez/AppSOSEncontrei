import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Produto from '../Components/Produto';
import Stories from '../Components/Stories';
import Detalheses from '../Components/Detalhes';


export default function Home() {

  const [pessoa, setPessoa] = useState([]);
  const [pessoaId, setPessoaId] = useState([]);
  const [pessoaNome, setPessoaNome] = useState([]);
  const [pessoaRoupa, setPessoaRoupa] = useState([]);
  const [pessoaCor, setPessoaCor] = useState([]);
  const [pessoaSexo, setPessoaSexo] = useState([]);
  const [pessoaObservacao, setPessoaObservacao] = useState([]);
  const [pessoaLocalDesaparecimento, setPessoaLocalDesaparecimento] = useState([]);
  const [pessoaFoto, setPessoaFoto] = useState([]);
  const [pessoaDtDesaparecimento, setPessoaDtDesaparecimento] = useState([]);
  const [pessoaDtEncontro, setPessoaDtEncontro] = useState([]);
  const [pessoaStatus, setPessoaStatus] = useState([]);
  const [usuarioId, setUsuarioId] = useState([]);

  const [observacoesId, setobservacoesId] = useState([]);
  const [observacoesDescricao, setobservacoesDescricao] = useState([]);
  const [observacoesLocal, setobservacoesLocal] = useState([]);
  const [observacoesData, setobservacoesData] = useState([]);
  const [usuarioIdOB, setusuarioId] = useState([]);
  const [pessoaIdOB, setpessoaId] = useState([]);


  const [detalhes, setDetalhes] = useState(true);
  const [observacao, setObservacao] = useState(true);


  async function getPessoa() {
    await fetch('http://10.139.75.31:5251/api/Pessoa/GetAllPessoa', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setPessoa(json))
      .catch(err => console.log(err))
  }

  async function getPessoaId(id) {
    await fetch('http://10.139.75.31:5251/api/Pessoa/GetPessoaId/' + id, {
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

  async function getObservação() {
    await fetch('http://10.139.75.31:5251/api/ObservacaoesControler/GetAllPessoa', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => {
        setobservacoesId(json.observacoesId);
        setobservacoesDescricao(json.observacoesDescricao);
        setobservacoesLocal(json.observacoesLocal);
        setobservacoesData(json.observacoesData);
        setusuarioId(json.usuarioId);
        setpessoaId(json.pessoaId);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getPessoa();
    getPessoaId()

  }, [])

  return (
    <View style={css.container}>
      {detalhes ?
        <>
          <Stories produtos={pessoa} />
          <FlatList
            data={pessoa}
            renderItem={({ item }) => <Produto getPessoaId={getPessoaId} pessoaNome={item.pessoaNome} pessoaFoto={item.pessoaFoto} pessoaId={item.pessoaId} setDetalhes={setDetalhes} />}
            keyExtractor={(item) => item.pessoaId}
            contentContainerStyle={{ height: (pessoa.length * 600) + 110 }}
          />
        </>
        :
        <View>
          {observacao ?
            <>
              <View>
                <TouchableOpacity onPress={() => { setDetalhes(true); getPessoaId }} style={css.btnDelete}>
                  <Text style={css.btbLoginText}>❮</Text>
                </TouchableOpacity>
                <View style={css.caixamaior}>
                  <View style={css.boxImage}>
                    <Image source={{ uri: pessoaFoto }} style={css.imagem} />
                  </View>
                  <Text style={css.pessoaNome}>{pessoaNome}</Text>
                  <Text style={css.pessoaNome}>{pessoaRoupa}</Text>
                  <Text style={css.pessoaNome}>{pessoaCor}</Text>
                  <Text style={css.pessoaNome}>{pessoaSexo}</Text>
                  <Text style={css.pessoaNome}>{pessoaObservacao}</Text>
                  <Text style={css.pessoaNome}>{pessoaLocalDesaparecimento}</Text>
                  <Text style={css.pessoaNome}>{pessoaDtDesaparecimento}</Text>
                  <Text style={css.pessoaNome}>{pessoaDtEncontro}</Text>
                  <Text style={css.pessoaNome}>{pessoaStatus}</Text>
                  <Text style={css.pessoaNome}>{usuarioId}</Text>
                </View>
               
                <View style={css.caixamaior}>
                  <Text style={css.pessoaNome}>{observacoesId}</Text>
                  <Text style={css.pessoaNome}>{observacoesDescricao}</Text>
                  <Text style={css.pessoaNome}>{observacoesLocal}</Text>
                  <Text style={css.pessoaNome}>{observacoesData}</Text>
                  <Text style={css.pessoaNome}>{usuarioIdOB}</Text>
                  <Text style={css.pessoaNome}>{pessoaIdOB}</Text>
                </View>

                <TouchableOpacity onPress={() => { setObservacao(true); getPessoaId }} style={css.btnObservacao}>
                  <Text style={css.btbLoginText}>Nova Observção</Text>
                </TouchableOpacity>
              </View>
            </>
            :
            <>
              <View style={css.caixaMAiorOb}>

              </View>
              <TouchableOpacity onPress={() => { setObservacao(false); getPessoaId }} style={css.btnObservacaoVota}>
                <Text style={css.btbLoginText}>❮</Text>
              </TouchableOpacity>
            </>}
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
  stories: {
    width: "100%",
    height: 100
  },
  btnDelete: {
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#13293D",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: -10,
  },
  btbLoginText: {
    color: "white",
    fontSize: 30,
    //fontWeight: "850"
  },
  pessoaNome: {
    color: "white"
  },

  imagem: {
    width: "90%",
    height: "50%",
    resizeMode: "cover",
    backgroundColor: "white",
  },
  btnObservacao: {
    width: 300,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#13293D",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 150,
  },
  caixamaior: {
    width: "90%",
    backgroundColor: "blue"
  },
  btnObservacaoVota: {
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#13293D",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: -10,
  },
  caixaMAiorOb: {
    width: 200,
    height: 200,
    backgroundColor: "white"
  }
})