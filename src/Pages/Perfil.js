import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';

export default function Perfil() {

  const[Usuario, setUsuario] = useState([])
  const [usuarioId, setUsuarioId] = useState("");
  const [usuarioNome, setUsuarioNome] = useState("");
  const [usuarioTelefone, setUsuarioTelefone] = useState("");
  const [usuarioEmail, setUsuarioEmail] = useState("");
  const [usuarioSenha, setUsuarioSenha] = useState("");

  async function getUsuario(id) {
    await fetch('http://10.139.75.31:5251/api/Usuario/GetUuarioId/' + id, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => {
        setUsuario(json);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getUsuario();

  }, [])

  return (
    <View style={css.container}>
      <View style={css.logo}>
        <Image source={require("../../assets/LogoApp.png")} style={css.logoImg} />
      </View>
      <FlatList
        data={Usuario}
        renderItem={({ item }) =>
          <View style={css.caixaFlatLIst}>
            <Text style={css.textOb}>{item.usuarioNome}</Text>
            <Text style={css.pessoaNomeOb}>{item.usuarioTelefone}</Text>
            <Text style={css.pessoaNomeOb}>{item.usuarioEmail}</Text>
            <Text style={css.pessoaNomeOb}>{item.pesusuarioSenhasoaId}</Text>

          </View>
        }
        keyExtractor={(item) => item.observacoesId}
      />
    </View>
  )
}
const css = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  text: {
    color: "red"
  },
  logo: {
    width: "100%",
    height: 120,
    backgroundColor: "#191919",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoImg: {
    width: 90,
    height: 90,
    marginTop: 25,
  },
})