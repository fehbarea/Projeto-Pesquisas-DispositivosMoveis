//Importacao

import {View, Text, Image, StyleSheet, TouchableOpacity,TextInput, Pressable} from "react-native";
import {useState} from "react";
import Card from "../components/Card";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImageResizer from "react-native-image-resizer";
import { Alert } from 'react-native';
import { PermissionsAndroid } from 'react-native';

//Definicao

const InputImagem = (props)=>{

    const imgSource = props.imgSource;
    const titulo = props.titulo;
    const data = props.data;

    return(
        <View style={estilos.view}>
            <View style={estilos.cImagem}>
                <Image style={estilos.imagem} resizeMode="contain" source={imgSource} />
            </View>

            <View style={estilos.cTitulo}>
                <Text style={estilos.textoTitulo}>{titulo}</Text>
            </View>

            <View style={estilos.cData}>
                <Text style={estilos.textoData}>{data}</Text>
            </View>
        </View>
    );
};

const estilos = StyleSheet.create({
    cImagem: {
        width: "90%",
        flex:0.40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      inputImagem: {
        width: "40%",
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
        backgroundColor: 'white',
        height: "70%",
        textAlign: 'center',
        justifyContent: 'center',
      },
      textoImagem:{
        fontSize: 15,
        color: "gray",
        fontFamily: 'AveriaLibre-Regular',
        textAlign: 'center'
      },
      imagemSelecionada:{
        height:'90%',
        width: "30%"
      }
});



export default InputImagem;