import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Detalhes({ pessoaFoto, pessoaNome, pessoaRoupa, pessoaCor, pessoaSexo, pessoaObservacao, pessoaLocalDesaparecimento, pessoaDtDesaparecimento, pessoaDtEncontro, pessoaStatus, usuarioId }) {

    //pagina de texte
    return (
        <View style={css.container}>
            <View style={css.boxImage}>
                <Image source={{ uri: pessoaFoto }} style={css.imagem} />
            </View>
            <View style={css.boxTexto}>
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
                <TouchableOpacity onPress={() => { setObservacao(true); getPessoaId }} style={css.btnObservacao}>
                    <Text style={css.btbLoginText}>Observção</Text>
                </TouchableOpacity>
            </View>
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
        fontWeight: "850"
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
        width: 200,
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
    }
})