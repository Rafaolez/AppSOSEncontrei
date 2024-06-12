import { useContext } from "react";
import { View, Text, StyleSheet, Image, TextInput, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from "react-native";

import { useState, useEffect } from 'react';
import { AuthContext } from "../Context/AuthContext";


export default function Cadastro() {


    const { setCadastrar, CriarUsuario } = useContext(AuthContext);
    const [nome, setNome] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState();
    const [ resposta , setResposta ] = useState (false)

    function Cadastrar() {
        CriarUsuario(email, senha, tel, nome);
    }

    return (
        <View style={css.CaixaTotal}>
            <SafeAreaView>
                <ScrollView>
                    <TouchableOpacity>
                        <Text style={css.BTNVoltar} onPress={() => setCadastrar(false)}>❮</Text>
                    </TouchableOpacity>
                    <View style={css.PaiInput}>
                        <TextInput style={css.input} textInput={nome} value={nome} onChangeText={(digitado) => setNome(digitado)} placeholder="Nome Completo:" />
                        <TextInput style={css.input} textInput={tel} value={tel} onChangeText={(digitado) => setTel(digitado)} placeholder="Telefone:" />
                        <TextInput style={css.input} textInput={email} value={email} onChangeText={(digitado) => setEmail(digitado)} placeholder="Email:" />
                        <TextInput style={css.input} textInput={senha} value={senha} onChangeText={(digitado) => setSenha(digitado)} placeholder="Senha:" />
                    </View>
                    <View style={css.PaiCadastrar}>
                        <TouchableOpacity style={css.btnLogin} onPress={Cadastrar}>
                            <Text style={css.btnLoginText}>Cadastro</Text>
                        </TouchableOpacity>
                        {resposta ? <Text> OLA teste cwerto</Text> : <Text></Text> }
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const css = StyleSheet.create({
    BTNVoltar: {
        marginLeft: 10,
        fontSize: 25
    },
    PaiCadastrar: {
        display: "flex",
        //justifyContent:"center",
        alignItems: "center"
    },
    nomePag: {
        marginTop: 25,
        color: "black",
        fontSize: 25,
        fontWeight: "900",
    },
    PaiImagens: {
        display: "flex",
        //alignItems:"center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 20
    },
    Gogle: {
        marginRight: 30,
    },
    Face: {
        width: 60,
        height: 70,
        marginRight: 30,
        marginTop: -5,
    },
    x: {
        width: 60,
        height: 70
    },
    PaiOu: {
        display: "flex",
        alignItems: "center",
    },
    ou: {
        color: "black",
        fontSize: 20,
        fontWeight: "800",
        marginTop: 20,
    },
    PaiInput: {
        display: "flex",
        alignItems: "center",
    },
    input: {
        width: "80%",
        height: 50,
        margin: 20,
        borderColor: "#C9994D",
        borderRadius: 15,
        borderWidth: 2,
        padding: 10,
        backgroundColor: "white",
        marginTop: 10
    },
    NomePagina: {
        marginBottom: 100,
        width: "100%",
        height: 350,
    },
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        marginHorizontal: 1,
        width: "100%",
        height: "100%",
        //backgroundColor: 'pink',
        margintop: 50

    },
    btn: {
        width: 200,
        height: 50,
        margin: 20,
        borderRadius: 10,
        backgroundColor: "#13293D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 120,
    },
    Texto: {
        color: "white",
        fontSize: 30,
        fontWeight: "850"
    },
    CaixaTotal: {
        width: "100%",
        height: "100%",
    }
})