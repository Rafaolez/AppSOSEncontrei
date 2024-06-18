import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';

export default function Perfil() {

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
        setUsuarioId(json.usuarioId);
        setUsuarioNome(json.usuarioNome);
        setUsuarioTelefone(json.usuarioTelefone);
        setUsuarioEmail(json.usuarioEmail);
        setUsuarioSenha(json.usuarioSenha);
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
      <Text style={css.text}>{usuarioNome}</Text>
      <Text style={css.text}>{usuarioTelefone}</Text>
      <Text style={css.text}>{usuarioSenha}</Text>
      <Text style={css.text}>{usuarioEmail}</Text>
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