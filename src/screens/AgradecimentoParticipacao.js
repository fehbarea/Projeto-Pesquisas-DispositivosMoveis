
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, SafeAreaView } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';
//Definição

const AcoesDePesquisa = () => {
    const navigation = useNavigation();

    React.useEffect(() => {
        const timer = navigation.addListener('focus', () => { //trigger pra quando a pagina carregar
            setTimeout(navigateToColeta, 3000)  //espera 3 segundos e vai para pagina de coleta
        })
    });
    const navigateToColeta = () => {
        navigation.navigate('Coleta')
    }

    return (

        <View style={estilos.view}>

            <Text style={estilos.texto}>Obrigado por participar da pesquisa!</Text>
            <Text style={estilos.texto}> </Text>
            <Text style={estilos.texto}>Aguardamos você no próximo ano!</Text>
                
            {/* <View style={estilos.containerBotoes}>
                    <TouchableOpacity onPress={navigateToColeta} style={estilos.botao}>
                        <Text style={estilos.textoBotao}>Entrar</Text>
                    </TouchableOpacity>
                </View> */}
        </View>

        
    );
}

const estilos = StyleSheet.create({
    view: {
        flex: 1,
        paddingLeft: '10%',
        paddingRight: '10%',
        backgroundColor: '#372775',
        alignItems: 'center',
        justifyContent: 'center',
    },

    texto: {
        color: 'white',
        textAlign: 'center',
        fontSize: 40, // Reduzido
        fontFamily: 'AveriaLibre-Regular',
    },

    containerBotoes: {
        flex: 0.2,
        width: '80%',
        justifyContent: 'center',
        paddingBottom: '1%',
    },
    
})

//Exportação

export default AcoesDePesquisa;