import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';

export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const { Login, error, setCadastrar } = useContext(AuthContext);

    function RealizaLogin() {
        Login(email, senha);
    }

    return (
        <ScrollView contentContainerStyle={css.container}>
            <Image source={require("../../assets/LogoApp.png")} style={css.logo} />
            <TextInput
                inputMode="email"
                placeholder="Email"
                style={css.input}
                value={email}
                onChangeText={(digitado) => setEmail(digitado)}
            />
            <TextInput
                inputMode="text"
                placeholder="Password"
                secureTextEntry={true}
                style={css.input}
                value={senha}
                onChangeText={(digitado) => setSenha(digitado)}
            />
            <View style={css.forgot}>
                <Text style={css.forgotText}>Esqueceu a senha?</Text>
            </View>
            <TouchableOpacity style={css.btnLogin} onPress={RealizaLogin}>
                <Text style={css.btnLoginText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.btnLogin} onPress={ () => setCadastrar( true ) }>
                <Text style={css.btnLoginText}>Cadastro</Text>
            </TouchableOpacity>
            {error &&
                <View style={css.error}>
                    <Text style={css.errorText}>Email ou Senha incorretos</Text>
                </View>
            }

        </ScrollView>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    },
    logo: {
        width: 200,
        height:200,
        resizeMode: "contain"
    },
    input: {
        width: "90%",
        height: 50,
        margin: 20,
        borderColor: "#000D",
        borderRadius: 15,
        borderWidth: 2,
        padding: 10,
        backgroundColor: "white",
        marginTop: 10,
    },
    forgot: {
        width: "90%",
        marginTop: 10,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    forgotText: {
        color: "#000000",
        fontWeight: "bold"
    },
    btnLogin: {
        width: "90%",
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
        lineHeight: 45,
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold"
    },
    error: {
        width: "100%",
        height: 50,
        marginTop: 30
    },
    errorText: {
        textAlign: "center"
    },
    TextoTeste: {
        color: "red",
    }
});