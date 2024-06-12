import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Observação( setObservacao) {
    return (
        <View>
            <View>
                <Text>Ola MUndo</Text>
            </View>
            <TouchableOpacity onPress={() => { setObservacao(true); getPessoaId }} style={css.btnObservacaoVota}>
                <Text style={css.btbLoginText}>❮</Text>
            </TouchableOpacity>
        </View>
    )
}

const css = StyleSheet.create({
    btnObservacaoVota:{
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
})