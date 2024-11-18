//Importação

import {View, Text, Image, StyleSheet, TouchableOpacity,TextInput} from "react-native";
import {useState} from "react";
import Card from "../components/Card";
import Icon from "react-native-vector-icons/MaterialIcons"


//Definição

const Home = (props) => {

  const [txtBusca, setBusca] = useState("");

  const novaPesquisa = () => {
    //props.navigation.goBack();
  }

  return(
    <View style={estilos.view}>

      <View style={estilos.cBusca}>
        <Icon name='search' size={30} style={estilos.iconBusca}/>
        <TextInput style={estilos.inputBusca} label='Altura' value={txtBusca} onChangeText={setBusca} placeholder="Insira o termo de busca..."/>
      </View>

      <View style={estilos.cPesquisas}>
        <Card imgSource={require("../imgs/notebook-mobile.png")} titulo="SECOMP 2023" data="10/10/2023"/>
        <Card imgSource={require("../imgs/people.png")}  titulo="UBUNTU 2022" data="05/06/2022"/>
        <Card imgSource={require("../imgs/red-women.png")}  titulo="MEMINAS CPU" data="01/04/2022"/>
      </View>



      <View style={estilos.cBotoes}>
        <TouchableOpacity style={estilos.botao} onPress={novaPesquisa}>
          <Text style={estilos.textoBotao}>Nova Pesquisa</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const estilos = StyleSheet.create({

  view: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    backgroundColor:"#372775"
  },
  cBusca: {
    flex:0.06,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cPesquisas: {
    flex:0.72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cBotoes: {
    flex:0.20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },

  iconBusca:{
    color: 'gray'   
  },

  inputBusca: {
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
    
  },

  botao: {
    padding: 10,
    backgroundColor: '#37BD6D',
    width:"100%",
    alignItems: 'center'
  },  
  textoBotao:{
    fontSize: 30,
    color: "white",
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center'
},


})

//Exportação

export default Home;