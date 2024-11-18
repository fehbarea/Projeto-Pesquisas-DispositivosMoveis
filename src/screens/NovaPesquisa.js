//Importação

import {View, Text, Image, StyleSheet, TouchableOpacity,TextInput} from "react-native";
import {useState} from "react";
import Card from "../components/Card";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


//Definição

const NovaPesquisa = (props) => {

  const [txtNome, setNome] = useState("");
  const [txtData, setData] = useState("");
  const [txtImagem, setImagem] = useState("");

  const[txtErroNome,setErroNome] = useState("");
  const[txtErroData,setErroData] = useState("");

  const cadastrar = () => {

    txtNome == "" ? setErroNome("Preencha o nome da pesquisa") : setErroNome("")
    txtData == "" ? setErroData("Preencha a data") : setErroData("")

  }

  return(
    <View style={estilos.view}>

      <View style={estilos.cNome}>
        <Text style={estilos.textoPadrao}>Nome</Text>
        <TextInput style={estilos.inputText} label='Nome' value={txtNome} onChangeText={setNome} />
        <Text style={estilos.textoValidacao}>{txtErroNome}</Text>
      </View>

      <View style={estilos.cData}>
        <Text style={estilos.textoPadrao}>Data</Text>

        <View style={estilos.cInputData}>
          <TextInput style={estilos.inputTextData} label='Data' value={txtData} onChangeText={setData} />
          <Icon name='calendar-month-outline' size={40} style={estilos.iconCalendario}/>
        </View>
        
        <Text style={estilos.textoValidacao}>{txtErroData}</Text>
      </View>

      <View style={estilos.cImagem}>
        <Text style={estilos.textoPadrao}>Imagem</Text>
        <TextInput style={estilos.inputImagem} label='Imagem' value={txtImagem} onChangeText={setImagem} placeholder="Câmera/Galeria de imagens"/>
      </View>

      <View style={estilos.cBotao}>
        <TouchableOpacity style={estilos.botao} onPress={cadastrar}>
          <Text style={estilos.textoPadrao}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const estilos = StyleSheet.create({

  view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor:"#372775"
  },
  
  cNome: {
    width: "90%",
    flex:0.25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  cData: {
    width: "90%",
    flex:0.15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  cImagem: {
    width: "90%",
    flex:0.30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  cBotao: {
    width: "90%",
    flex:0.30,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    paddingBottom: 10
  },

  cInputData: {
    backgroundColor:'white',
    width: "100%",
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  iconCalendario:{
    color: 'gray',
    paddingRight: 10
  },

  inputTextData:{
    paddingLeft:20,
    width: "90%",
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
  },

  inputText: {
    paddingLeft:10,
    width: "100%",
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: 'white'
  },

  inputImagem: {
    width: "80%",
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: 'white',
    height: "50%",
    textAlign: 'center'
  },


  botao: {
    padding: 10,
    backgroundColor: '#37BD6D',
    width:"100%",
    alignItems: 'center'
  },  

  textoPadrao:{
    fontSize: 30,
    color: "white",
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center'
  },
  textoValidacao:{
    fontSize: 20,
    color: "#FD7979",
    fontFamily: 'AveriaLibre-Regular',
  },


})

//Exportação

export default NovaPesquisa;