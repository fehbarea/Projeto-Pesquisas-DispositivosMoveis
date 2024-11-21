
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

//Definição

const RecuperarSenha = (props) => {

    const [txtEmail, setEmail] = useState('');

    const [msgError, setMsgError] = useState('')

    const navigateToLogin = () => {
        let emailInvalido = verificaEmail(txtEmail);
       emailInvalido ? setMsgError('E-mail parece ser inválido') : setMsgError('');
        if(!emailInvalido){
            props.navigation.push("Login");
        }

    }

    const verificaEmail = (email) =>{
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let valid = emailPattern.test(email);
        return !valid;
    }

    return (
        <View style={estilos.view}>

                <View style={estilos.ContainerEmail}>
                    <Text style={estilos.labelEmail}>E-mail</Text>
                    <TextInput style={estilos.textInput} value={txtEmail} onChangeText={setEmail}/>
                    <Text  style={estilos.textWarn}>{msgError}</Text>
                </View> 

                <View style={estilos.containerBotoes}>
                    <TouchableOpacity onPress={navigateToLogin} style={estilos.botao}>
                        <Text style={estilos.textoBotao}>RECUPERAR</Text>
                    </TouchableOpacity>

                </View>
            

        </View>
    );
}

const estilos = StyleSheet.create({
    view: {
        flex:1,
        backgroundColor: '#372775',
        paddingLeft:'15%',
        paddingRight: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerBotoes: {
        flex:0.3,
        flexDirection: "column",
        width: '100%',
        justifyContent: 'flex-end',
        paddingBottom:30
    },
    botao: {
        gap: 2,
        backgroundColor: '#37BD6D',
        width: '100%',
        padding: 10
    },
    textoBotao: {
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular'
    },
    textInput: {
        backgroundColor: '#ffffff',
        width: "100%",
        fontSize: 20,
        textAlignVertical: 'center', 
        color: '#3F92C5'
    },
    ContainerEmail: {
        flex:0.7,
        width: '100%',
        justifyContent: 'flex-end',
        gap:5
    },
    labelEmail: {
        color: "#FFFFFF",
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular'
    },
    textWarn:{
        color: "#FD7979",
        fontSize: 15,
    }

})

//Exportação

export default RecuperarSenha;