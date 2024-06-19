import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Produto from '../Components/Produto';
import Detalheses from '../Components/Detalhes';
import CadastroOB from '../Components/CadastroOB';


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

  const [pessoaStatus, setPessoaStatus] = useState("");

  const [usuarioId, setUsuarioId] = useState([]);


  const [observacoes, setobservacoes] = useState([]);
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

  async function getObservação(id) {
    console.log(id);
    await fetch('http://10.139.75.31:5251/api/ObservacaoesControler/GetObservacaoPessoaId/' + id, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => {
        setobservacoes(json);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getPessoa();
    getPessoaId();
    getObservação();

  }, [])

  return (
    <View style={css.container}>
          {detalhes ?
            <>
              <View style={css.logo}>
                <Image source={require("../../assets/LogoApp.png")} style={css.logoImg} />
              </View>
              <Text style={css.titulos}>Pessoa desaparecidas:</Text>
              <FlatList
                data={pessoa}
                renderItem={({ item }) => <Produto  getPessoaId={getPessoaId} getObservação={getObservação} observacoesId={item.observacoesId} pessoaNome={item.pessoaNome} pessoaFoto={item.pessoaFoto} pessoaId={item.pessoaId} setDetalhes={setDetalhes} />}
                keyExtractor={(item) => item.pessoaId}
                contentContainerStyle={{ height: (pessoa.length * 600) + 200 }}
              />
            </>
            :
            <View>
              {observacao ?
                <>
                  <TouchableOpacity onPress={() => { setDetalhes(true); getPessoaId }} style={css.btnDelete}>
                    <Text style={css.btbLoginText}>❮</Text>
                  </TouchableOpacity>
                  <ScrollView style={css.scrollView}>
                    <View style={css.caixamaior}>
                      <View style={css.boxImage}>
                        <Image source={{ uri: pessoaFoto }} style={css.imagem} />
                      </View>
                      <Text style={css.pessoaNome01}>Nome da pessoa: {pessoaNome}</Text>
                      <Text style={css.pessoaNome}>Roupa da pessoa: {pessoaRoupa}</Text>
                      <Text style={css.pessoaNome}>Cor da pessoaCor: {pessoaCor}</Text>
                      <Text style={css.pessoaNome}>Sexo da pessoa: {pessoaSexo}</Text>
                      <Text style={css.pessoaNome}>Observacao sobre a pessoa: {pessoaObservacao}</Text>
                      <Text style={css.pessoaNome}>Local de Desaparecimento: {pessoaLocalDesaparecimento}</Text>
                      <Text style={css.pessoaNome}>Data de Desaparecimento: {pessoaDtDesaparecimento}</Text>
                      <Text style={css.pessoaNome}>Data de Encontro: {pessoaDtEncontro}</Text>
                      {pessoaStatus == 1 ?
                      <Text style={css.pessoaNome} >Desaparecido</Text>
                    :
                    <Text>Encontrado</Text>}
                    </View>
                  </ScrollView>
                  <View style={css.caixaMAiorOb}>
                    <Text style={css.textOb}>Observação:</Text>
                    <FlatList
                      data={observacoes}
                      renderItem={({ item }) =>
                        <View style={css.caixaFlatLIst}>
                          <Text style={css.textOb}>{item.observacoesDescricao}</Text>
                          <Text style={css.textOb}>{item.observacoesLocal}</Text>
                          <Text style={css.pessoaNomeOb}>{item.observacoesData}</Text>
                          <Text style={css.pessoaNomeOb}>{item.usuarioId}</Text>
                          <Text style={css.pessoaNomeOb}>{item.pessoaId}</Text>

                        </View>
                      }
                      keyExtractor={(item) => item.observacoesId}
                    />
                    <TouchableOpacity onPress={() => { setObservacao(false); getObservação }} style={css.btnObservacao}>
                      <Text style={css.btbLoginText}>Nova Observção</Text>
                    </TouchableOpacity>
                  </View>

                </>
                :
                <>
                  <CadastroOB pessoaId={pessoaId} usuarioId={usuarioId} setObservacao={setObservacao} getPessoaId={getPessoaId}  />
                </>}
            </View>
          }
        
      

    </View>
  )
}


const css = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  scrollView: {
    height: 500,
    backgroundColor: "red",

  },
  stories: {
    width: "100%",
    height: 100
  },
  btnDelete: {
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#191919",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
    marginRight: 250,
  },
  btbLoginText: {
    color: "white",
    fontSize: 30,
  },
  pessoaNomeOb: {
    color: "black",
  },
  pessoaNome01: {
    marginTop: -90,
    fontSize: 15,
    marginLeft: 15,
  },
  pessoaNome: {
    fontSize: 15,
    marginLeft: 15,
  },
  textOb: {
    fontSize: 20,
    marginLeft: 25,
  },
  imagem: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
    backgroundColor: "white",
  },
  btnObservacao: {
    width: 300,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#191919",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,

  },
  caixamaior: {
    width: "100%",
    height: 650,
    backgroundColor: "white"
  },

  caixaMAiorOb: {
    width: 350,
    height: 300,
    backgroundColor: "white",
    marginTop: 25,
  },
  logo: {
    width: "100%",
    height: 100,
    backgroundColor: "#191919",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoescrita: {
    fontSize: 60,
  },
  logoImg: {
    width: 90,
    height: 90,
    marginTop: 25,
  },
  titulos: {
    fontSize: 25,
    marginTop: 20,
  },
  caixaFlatLIst: {
    width: "90%",
    height: 140,
    marginBottom: 15,
    borderRadius: 15,
    borderColor: "#000D",
    borderWidth: 2,
  },
})