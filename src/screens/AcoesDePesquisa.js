//Importação

import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

//Definição

const AcoesDePesquisa = (props) => {

    const navigateScreenModificar = ()=>{
    
    }

    const navigateScreenColetaDedos= ()=>{
    
    }

    const navigateScreenRelatorio = ()=>{
    
    }

    return (
        <View style={estilos.view}>

            <View style={estilos.containerBotoes}>
                <TouchableOpacity onPress={navigateScreenModificar} style={estilos.botao}>
                    <Icon name='file-document-edit-outline' size={60} style={estilos.iconBotao}/>
                    <Text style={estilos.textoBotao}>Modificar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateScreenColetaDedos}  style={estilos.botao} >
                <Icon name='checkbox-multiple-marked-outline' size={60} style={estilos.iconBotao}/>
                    <Text style={estilos.textoBotao}>Coletar dados</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateScreenRelatorio} style={estilos.botao} >
                <Icon name='chart-donut' size={60} style={estilos.iconBotao}/>
                    <Text style={estilos.textoBotao}>Relatório</Text>
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerBotoes: {
        
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        width: '100%'
    },
    botao: {
        gap:2,
        backgroundColor: '#312464',
        height: 100,
        width: 100,
        padding: 10,
    },
    textoBotao:{
        color: 'white',
        textAlign: 'center',
        fontSize: 12.5,
        fontFamily: 'AveriaLibre-Regular'
    },
    iconBotao:{
        color: 'white',
        textAlign: 'center',
    }

})

//Exportação

export default AcoesDePesquisa;