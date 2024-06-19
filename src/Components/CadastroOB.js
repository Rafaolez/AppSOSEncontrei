import { useContext } from "react";
import { View, Text, StyleSheet, Image, TextInput, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from "react-native";

import { useState, useEffect } from 'react';
import { AuthContext } from "../Context/AuthContext";


export default function CadastroOB({pessoaId, usuarioId, setObservacao, getPessoaId }) {


    const { CriarObservação } = useContext(AuthContext);
    const [descricao, setdescricao] = useState("");
    const [observacoesLocal, setObservacoesLocal] = useState("");
    const [observacoesData, setObservacoesData] = useState("");
    const [erro, setErro] = useState();
    const [resposta, setResposta] = useState(false)

    function Cadastrarob() {
        CriarObservação(descricao, observacoesLocal, observacoesData, usuarioId, pessoaId );
    }

    return (
        <View style={css.CaixaTotal}>
            <TouchableOpacity onPress={() => { setObservacao(true); getPessoaId }} style={css.btnObservacaoVota}>
                <Text style={css.btbLoginText}>❮</Text>
            </TouchableOpacity>
            <SafeAreaView>
                <ScrollView style={css.scrollView}>
                    <View style={css.PaiInput}>
                        <TextInput style={css.input} textInput={descricao} value={descricao} onChangeText={(digitado) => setdescricao(digitado)} placeholder="observacoes Descricao" />
                        <TextInput style={css.input} textInput={observacoesLocal} value={observacoesLocal} onChangeText={(digitado) => setObservacoesLocal(digitado)} placeholder="Local:" />
                        <TextInput style={css.input} textInput={observacoesData} value={observacoesData} onChangeText={(digitado) => setObservacoesData(digitado)} placeholder="Data da observação:" />
                    </View>
                    <View style={css.PaiCadastrar}>
                        <TouchableOpacity style={css.btn} onPress={Cadastrarob}>
                            <Text style={css.texto}>Salvar</Text>
                        </TouchableOpacity>
                        {resposta ? <Text> OLA teste cwerto</Text> : <Text></Text>}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const css = StyleSheet.create({
    PaiCadastrar: {
        display: "flex",
        //justifyContent:"center",
        alignItems: "center"
    },
    PaiInput: {
        display: "flex",
        alignItems: "center",
        marginTop: 50,
    },
    input: {
        width: "80%",
        height: 50,
        margin: 20,
        borderColor: "#000D",
        borderRadius: 15,
        borderWidth: 2,
        padding: 10,
        backgroundColor: "white",
        marginTop: 10
    },
    scrollView: {
        marginHorizontal: 1,
        width: "100%",
        height: "100%",
    },
    btn: {
        width: 200,
        height: 50,
        margin: 20,
        borderRadius: 10,
        backgroundColor: "#191919",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 120,
    },
    texto: {
        color: "white",
        fontSize: 30,
        fontWeight: "850"
    },
    CaixaTotal: {
        width: "100%",
        height: "100%",
    },
    btnObservacaoVota: {
        width: 100,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#191919",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        marginRight:300,
    },
    btbLoginText: {
        color: "white",
        fontSize: 30,
      },
})