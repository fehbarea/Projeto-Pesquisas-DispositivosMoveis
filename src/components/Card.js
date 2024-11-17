//Importacao

import {Text, TouchableOpacity, StyleSheet, View, Image} from "react-native";
//Definicao

const Card = (props)=>{

    const iconName = props.iconName;
    const titulo = props.titulo;
    const data = props.data;

    return(
        <View style={estilos.view}>
            <Image style={estilos.imagem} source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} />
            <Text style={estilos.textoTitulo}>{titulo}</Text>
            <Text style={estilos.textoData}>{data}</Text>
        </View>
    );
};

const estilos = StyleSheet.create({
    view:{
        margin: 10,
        flex:1,
        backgroundColor: 'white',
        marginVertical: 5,
        textAlign: 'center',
        justifyContent: 'center'
    },
    imagem:{
        flex:0.40,
        height:20, 
        width: 20,
    },
    textoTitulo:{
        flex:0.30,
        fontSize: 20,
        color: "#3F92C5",
        textAlign: "center",
        fontFamily: 'AveriaLibre-Regular'
    },
    textoData:{
        flex:0.30,
        fontSize: 10,
        color: "#8B8B8B",
        textAlign: "center",
        fontFamily: 'AveriaLibre-Regular'
    }
});

//Exportacao

export default Card;