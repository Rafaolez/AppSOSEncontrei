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
    const [resposta, setResposta] = useState(false)

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
                    <Image source={require("../../assets/LogoApp.png")} style={css.logoImg} />
                    <View style={css.PaiInput}>
                        <TextInput style={css.inputPai} textInput={nome} value={nome} onChangeText={(digitado) => setNome(digitado)} placeholder="Nome Completo:" />
                        <TextInput style={css.input} textInput={tel} value={tel} onChangeText={(digitado) => setTel(digitado)} placeholder="Telefone:" />
                        <TextInput style={css.input} textInput={email} value={email} onChangeText={(digitado) => setEmail(digitado)} placeholder="Email:" />
                        <TextInput style={css.input} textInput={senha} value={senha} onChangeText={(digitado) => setSenha(digitado)} placeholder="Senha:" />
                    </View>
                    <View style={css.PaiCadastrar}>
                        <TouchableOpacity style={css.btnLogin} onPress={Cadastrar}>
                            <Text style={css.btnLoginText}>Cadastro</Text>
                        </TouchableOpacity>
                        {resposta ? <Text> OLA teste cwerto</Text> : <Text></Text>}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const css = StyleSheet.create({
    BTNVoltar: {
        marginTop: 20,
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
    PaiInput: {
        display: "flex",
        alignItems: "center",
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
    inputPai: {
        width: "80%",
        height: 50,
        margin: 20,
        borderColor: "#000D",
        borderRadius: 15,
        borderWidth: 2,
        padding: 10,
        backgroundColor: "white",
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
    btnLogin: {
        width: 200,
        height: 50,
        margin: 20,
        borderRadius: 10,
        backgroundColor: "#000000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    btnLoginText: {
        color: "white",
        fontSize: 30,
    },
    CaixaTotal: {
        width: "100%",
        height: "100%",
    },
    logoImg: {
        width: 150,
        height: 150,
        margin: 25,
        marginLeft:130,
    }
})