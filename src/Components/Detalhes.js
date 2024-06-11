import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

export default function Detalhes({ pessoaFoto, pessoaNome, pessoaRoupa, pessoaCor, pessoaSexo, pessoaObservacao }) {
  return (
    <View style={css.container}>
        <View style={css.boxImage}>
            <Image source={{ uri: pessoaFoto }} style={css.imagem}/>
        </View>
        <View style={css.boxTexto}>
            <Text style={css.pessoaNome}>{pessoaNome}</Text>
            <Text style={css.pessoaNome}>{pessoaRoupa}</Text>
            <Text style={css.pessoaNome}>{pessoaCor}</Text>
            <Text style={css.pessoaNome}>{pessoaSexo}</Text>
            <Text style={css.pessoaNome}>{pessoaObservacao}</Text>

        </View>
    </View>
  )
}

const css = StyleSheet.create({
    container: {
        width: 350,
        height: 600,
        backgroundColor:"white",
        marginBottom: 25,
    },
    pessoaNome:{
        color:"blue"
    },
    
    imagem: {
        width: "90%",
        height: "50%",
        resizeMode: "cover",
        backgroundColor:"blue",
    },
   
})