//Importação

import {View, Text, Image, StyleSheet, TouchableOpacity,TextInput} from "react-native";
import {useState} from "react";
import Card from "../components/Card";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


//Definição

const ModificarPesquisa = () => {

  const [txtNome, setNome] = useState("Carnaval 2024");
  const [txtData, setData] = useState("16/02/2024");


  const salvar = () => {

    //txtNome == "" ? setErroNome("Preencha o nome da pesquisa") : setErroNome("")
    //txtData == "" ? setErroData("Preencha a data") : setErroData("")

  }

  const apagar = () => {
    console.log("clicou em apagar");
  }

  return(
    <View style={estilos.view}>

      <View style={estilos.cNome}>
        <Text style={estilos.textoPadrao}>Nome</Text>
        <TextInput style={estilos.inputText} label='Nome' value={txtNome} onChangeText={setNome} />
      </View>

      <View style={estilos.cData}>
        <Text style={estilos.textoPadrao}>Data</Text>

        <View style={estilos.cInputData}>
          <TextInput style={estilos.inputTextData} label='Data' value={txtData} onChangeText={setData} />
          <Icon name='calendar-month-outline' size={40} style={estilos.iconCalendario}/>
        </View>      
      </View>

      <View style={estilos.cImagem}>
        <Text style={estilos.textoPadrao}>Imagem</Text>
        <View style={estilos.cRespostaImagem}>
          <Image style={estilos.imagem} resizeMode="contain" source={require("../imgs/party.png")} />
        </View>
      </View>

      <View style={estilos.cBotao}>
        <TouchableOpacity style={estilos.botao} onPress={salvar}>
          <Text style={estilos.textoPadrao}>Salvar</Text>
        </TouchableOpacity>

        <View style={estilos.cIconeApagar} >
          <TouchableOpacity onPress={apagar}>
            <Icon name='trash-can-outline' size={40} style={estilos.iconApagar}/>
          </TouchableOpacity>
          <Text style={estilos.textoIconeApagar}>Apagar</Text>

        </View>
      </View>
      
    </View>
  );
}

const estilos = StyleSheet.create({

  view: {
    paddingLeft: "10%",
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor:"#372775"
  },
  
  cNome: {
    width: "70%",
    flex:0.25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  cData: {
    width: "70%",
    flex:0.20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  cImagem: {
    width: "70%",
    flex:0.30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',

  },

  cBotao: {
    width: "100%",
    flex:0.25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingBottom: 10
  },

  cInputData: {
    backgroundColor:'white',
    width: "100%",
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  cRespostaImagem:{
    backgroundColor: 'white',
    width: "80%",
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  cIconeApagar:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconCalendario:{
    flex:0.08,
    color: 'gray',
  },

  iconApagar:{
    color: 'white',

  },
  inputTextData:{
    flex:0.92,
    paddingLeft:10,
    width: "80%",
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular',
  },

  inputText: {
    paddingLeft:10,
    width: "100%",
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: 'white'
  },

  imagem: {
    height: "80%",
    alignContent: 'center'
  },


  botao: {
    padding: 10,
    backgroundColor: '#37BD6D',
    width:"70%",
  },  

  textoPadrao:{
    fontSize: 15,
    color: "white",
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center'
  },
  textoValidacao:{
    fontSize: 15,
    color: "#FD7979",
    fontFamily: 'AveriaLibre-Regular',
  },

  textoIconeApagar:{
    fontSize: 20,
    color: "white",
    fontFamily: 'AveriaLibre-Regular',
  },


})

//Exportação

export default ModificarPesquisa;