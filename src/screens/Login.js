import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth_mod } from '../firebase/config.js'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { reducerSetUser } from "../../redux/userSlice.js";

//Definição

const AcoesDePesquisa = (props) => {

    const [txtEmail, setEmail] = useState('');

    const [txtSenha, setSenha] = useState('');

    const [msgError, setMsgError] = useState('')

    const dispatch = useDispatch();

    const userAuthentication = () => {
        let emailInvalido = verificaEmail(txtEmail);
       emailInvalido ? setMsgError('E-mail e/ou senha inválidos.') : setMsgError('');
        if(!emailInvalido){
            
            signInWithEmailAndPassword(auth_mod, txtEmail, txtSenha).then(
                (user) => {
                    const unsubscribe = onAuthStateChanged(auth_mod, (user) => {
                        if (user) {
                            console.log("Usuário autenticado:", auth_mod.currentUser.uid);

                            dispatch(reducerSetUser({
                                      userId:auth_mod.currentUser.uid
                                    }))

                            setTimeout(() => {
                                unsubscribe();
                                props.navigation.navigate("Drawer");
                            }, 1000);
                        }
                    });
                }
            ).catch((error) => {
                console.log('Erro: ' + JSON.stringify(error));
                setMsgError('E-mail e/ou senha inválidos.' + error.message)
            });
        }
    }

    const verificaEmail = (email) =>{
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let valid = emailPattern.test(email);
        return !valid;
    }

    const navigateNovaConta = () =>{
        props.navigation.push("NovaConta");
    }

    const navigateRecuperarSenha = () =>{
        props.navigation.push("RecuperarSenha");
    }

    return (
        <View style={estilos.view}>
            
                <View style={estilos.ContainerEmail}>

                    <View style={estilos.centralizedContainer}>
                        <Text style={estilos.centralizedText}>Satisfying.you</Text>
                        <Image style={estilos.image} source={require('../imgs/SmilingIcon.png')} />
                    </View>

                    <Text style={estilos.labelEmail}>E-mail</Text>
                    <TextInput style={estilos.textInput} value={txtEmail} onChangeText={setEmail}/>
                    <Text style={estilos.labelEmail}>Senha</Text>
                    <TextInput secureTextEntry={true} style={estilos.textInput} value={txtSenha} onChangeText={setSenha}/>
                    <Text  style={estilos.textWarn}>{msgError}</Text>
                
                {/* <View style={estilos.containerBotoes}>
                    <TouchableOpacity onPress={navigateToLogin} style={estilos.botao}>
                        <Text style={estilos.textoBotao}>Entrar</Text>
                    </TouchableOpacity>
                </View> */}
                </View> 

                <View style={estilos.containerBotoes}>
                    <TouchableOpacity onPress={userAuthentication} style={estilos.botao}>
                        <Text style={estilos.textoBotao}>Entrar</Text>
                    </TouchableOpacity>
                </View>

                <View style={estilos.containerBotoesBottom}>
                    <TouchableOpacity onPress={navigateNovaConta} style={estilos.botaoBottom}>
                        <Text style={[estilos.textoBotao, estilos.botaoAzul]}>Criar minha conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigateRecuperarSenha} style={estilos.botaoBottom}>
                        <Text style={[estilos.textoBotao, estilos.botaoCinza]}>Esqueci minha senha</Text>
                    </TouchableOpacity>
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
        paddingBottom: '2%',
        alignItems: 'center',
        justifyContent: 'flex-start',
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
        padding: '1.5%',
    },
    

    botaoBottom: {
        width: '100%',
        padding: 5,
    },

    botaoAzul:{
        backgroundColor: '#419ED7'
    },

    botaoCinza:{
        backgroundColor: '#B0CCDE'  
    },

    containerBotoesBottom: {
        flex: 0.2,
        width: '80%',
        justifyContent: 'space-between',
        paddingBottom: 10,
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

    centralizedContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: 0, 
    },
    image: {
        marginLeft: 5,
        marginTop: 5,
        width: 35, 
        height: 35,
    },
    centralizedText: {
        textAlign: 'center',
        fontSize: 30, 
        fontFamily: 'AveriaLibre-Regular',
        color: '#FFFFFF',
    },

})

//Exportação

export default AcoesDePesquisa;