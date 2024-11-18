//Importação

import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons"

//Definição

const AcoesDePesquisa = (props) => {


    return (
        <View style={estilos.view}>
            
            <Image style={estilos.image} resizeMode="cotain" source={require('../imgs/grafico.png')} />
            <View style={estilos.containerLegenda}>
            <View style={estilos.legenda}>
                <View style={[estilos.bloquinho, {backgroundColor: '#F1CE7E'}]} />
                <Text style={estilos.textoBotao}>Excelente</Text>
            </View>
            <View style={estilos.legenda}>
                <View style={[estilos.bloquinho, {backgroundColor: '#6994FE'}]} />
                <Text style={estilos.textoBotao}>Bom</Text>
            </View>
            <View style={estilos.legenda}>
                <View style={[estilos.bloquinho, {backgroundColor: '#5FCDA4'}]} />
                <Text style={estilos.textoBotao}>Neutro</Text>
            </View>
            <View style={estilos.legenda}>
                <View style={[estilos.bloquinho, {backgroundColor: '#EA7288'}]} />
                <Text style={estilos.textoBotao}>Ruim</Text>
            </View>
            <View style={estilos.legenda}>
                <View style={[estilos.bloquinho, {backgroundColor: '#53D8D8'}]} />
                <Text style={estilos.textoBotao}>Excelente</Text>
            </View>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({

    view:{
        backgroundColor: '#372775',
        padding: '5%',
        height: '100%',
        gap: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    image:{
        width: 200,
        height: 200,
    },
    bloquinho:{
        width: 15,
        height: 15
    },
    textoBotao:{
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'AveriaLibre-Regular'
    },
    legenda:{
        flexDirection: 'row',
        gap: '8%'
    },
     containerLegenda:{
        flexDirection:'column',
        justifyContent: "space-between",
        height: "120"
     }
})

//Exportação

export default AcoesDePesquisa;