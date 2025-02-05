//Importação

import { useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { useSelector } from "react-redux";

//Definição

const AcoesDePesquisa = (props) => {
    //useState redux para usar o titulo da pesquisa selecionada na tela anterior
    const titulo = useSelector((state) => state.review.reviewName)
    props.navigation.setOptions({ title: titulo });


    const referencia = "";
    const nomePesquisa= "";

    const navigateScreenModificar = ()=>{
        props.navigation.push("ModificarPesquisa");
    }

    const navigateScreenColetaDedos= ()=>{
        props.navigation.push("Coleta");
    }

    const navigateScreenRelatorio = ()=>{
        props.navigation.push("Relatorio");
    }   


    useEffect(() => {
        props.navigation.setOptions({title: nomePesquisa})
    },
    [])

    return (
        <View style={estilos.view}>

            <View style={estilos.containerBotoes}>
                <TouchableOpacity onPress={navigateScreenModificar} style={estilos.botao}>
                    <Icon name='file-document-edit-outline' size={100} style={estilos.iconBotao}/>
                    <Text style={estilos.textoBotao}>Modificar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateScreenColetaDedos}  style={estilos.botao} >
                <Icon name='checkbox-multiple-marked-outline' size={100} style={estilos.iconBotao}/>
                    <Text style={estilos.textoBotao}>Coletar dados</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateScreenRelatorio} style={estilos.botao} >
                <Icon name='chart-donut' size={100} style={estilos.iconBotao}/>
                    <Text style={estilos.textoBotao}>Relatório</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const estilos = StyleSheet.create({
    view:{
        backgroundColor: '#372775',
        paddingLeft:'5%',
        paddingRight:'5%',
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
        height: "200",
        width: "200",
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center'
    },
    textoBotao:{
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'AveriaLibre-Regular',

    },
    iconBotao:{
        color: 'white',
        textAlign: 'center',
    }

})

//Exportação

export default AcoesDePesquisa;