//Importação

import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons"

//Definição

const AcoesDePesquisa = (props) => {



    return (
        <View style={estilos.view}>
            
            <Text style={estilos.titulo}>O que você achou do Carnaval 2024?</Text>

            <View style={estilos.containerBotoes}>
                <TouchableOpacity style={estilos.botao}>
                    <Icon name='sentiment-very-dissatisfied' size={60} style={[estilos.iconBotao, {color:"#D71616"}]}/>
                    <Text style={estilos.textoBotao}>Péssimo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao} >
                <Icon name='sentiment-dissatisfied' size={60} style={[estilos.iconBotao, {color:"#FF360A"}]}/>
                    <Text style={estilos.textoBotao}>Ruim</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao} >
                <Icon name='sentiment-neutral' size={60} style={[ estilos.iconBotao, {color:"#FFC632"}]}/>
                    <Text style={estilos.textoBotao}>Neutro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao} >
                <Icon name='sentiment-satisfied-alt' size={60} style={[estilos.iconBotao , {color:"#37BD6D"}]}/>
                    <Text style={estilos.textoBotao}>Bom</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.botao} >
                <Icon name='sentiment-very-satisfied' size={60} style={[estilos.iconBotao , {color:"#25BC22"}]}/>
                    <Text style={estilos.textoBotao}>Excelente</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const estilos = StyleSheet.create({
    view:{
        backgroundColor: '#372775',
        padding: '5%',
        height: '100%',
        gap: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    titulo:{
        color: 'white',
        textAlign: 'center',
        fontSize: 22.5,
        fontFamily: 'AveriaLibre-Regular'
    },
    containerBotoes: {
        
        flexDirection: "row",
        justifyContent:'space-between',
        alignItems: "center",
        
    },
    botao: {
        width:'20%',
        gap:2,
        flex: 0.2
    },
    textoBotao:{
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'AveriaLibre-Regular'
    },
    iconBotao:{
        color: 'white',
        textAlign: 'center',
    }

})

//Exportação

export default AcoesDePesquisa;