
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, SafeAreaView } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

//Definição

const AcoesDePesquisa = (props) => {

    const [txtEmail, setEmail] = useState('');

    const [txtSenha, setSenha] = useState('');

    const [txtRepetirSenha, setRepetirSenha] = useState('');

    const [msgErrorEmail, setMsgErrorEmail] = useState('')

    const [msgErrorSenha, setMsgErrorSenha] = useState('')

    const navigateToLogin = () => {
        let emailInvalido = verificaEmail(txtEmail);
        let senhaInvalida = verificaSenha(txtSenha, txtRepetirSenha)
       emailInvalido ? setMsgErrorEmail('E-mail inválido.') : setMsgErrorEmail('');
       senhaInvalida ? setMsgErrorSenha('O campo repetir senha difere da senha') : setMsgErrorSenha('');
        if(!emailInvalido && !senhaInvalida){
            props.navigation.push("Login");
        }
        
    }

    const verificaEmail = (email) =>{
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let valid = emailPattern.test(email);
        return !valid;
    }

    const verificaSenha = (senha, repetirSenha) =>{
        let valid = (senha == repetirSenha);
        return !valid
    }

    return (

        <View style={estilos.view}>
            
            <View style={estilos.ContainerEmail}>

                <Text style={estilos.labelEmail}>E-mail</Text>
                <TextInput style={estilos.textInput} value={txtEmail} onChangeText={setEmail}/>
                <Text  style={estilos.textWarn}>{msgErrorEmail}</Text>
                <Text style={estilos.labelEmail}>Senha</Text>
                <TextInput secureTextEntry={true} style={estilos.textInput} value={txtSenha} onChangeText={setSenha}/>
                <Text style={estilos.labelEmail}>Repetir senha</Text>
                <TextInput secureTextEntry={true} style={estilos.textInput} value={txtRepetirSenha} onChangeText={setRepetirSenha}/>
                <Text  style={estilos.textWarn}>{msgErrorSenha}</Text>
            
            {/* <View style={estilos.containerBotoes}>
                <TouchableOpacity onPress={navigateToLogin} style={estilos.botao}>
                    <Text style={estilos.textoBotao}>Entrar</Text>
                </TouchableOpacity>
            </View> */}
            <View >
                <TouchableOpacity onPress={navigateToLogin} style={estilos.botao}>
                    <Text style={estilos.textoBotao}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
            </View> 

            
        

    </View>

        
    );
}

const estilos = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#372775',
        paddingLeft: '10%',
        paddingRight: '10%',
        // paddingTop: '10%',
        paddingBottom: '2%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    containerBotoes: {
        flex: 0.2,
        width: '80%',
        justifyContent: 'center',
        paddingBottom: '1%',
    },

    botao: {
        backgroundColor: '#37BD6D',
        width: '100%',
        padding: '1%',
        marginTop: '2%'
    },
    
    textoBotao: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20, // Reduzido
        fontFamily: 'AveriaLibre-Regular',
    },
    textInput: {
        backgroundColor: '#ffffff',
        width: '100%',
        fontSize: 12, // Reduzido
        color: '#3F92C5',
    },
    ContainerEmail: {
        flex:0.8,
        width: '80%',
        justifyContent: 'flex-end',
        gap:2
    },
    labelEmail: {
        color: "#FFFFFF",
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular'
    },
    textWarn:{
        color: "#FD7979",
        fontSize: 14,
    },

    container: {
        flex: 1,
        backgroundColor: "#fff", // Ajuste conforme necessário
        // padding: 16, // Adicione espaçamento se necessário
      },


})

//Exportação

export default AcoesDePesquisa;