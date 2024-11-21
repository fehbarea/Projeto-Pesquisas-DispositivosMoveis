//Importação

import {View, Text, Image, StyleSheet, TouchableOpacity,TextInput} from "react-native";
import {useState} from "react";
import Card from "../components/Card";
import Icon from "react-native-vector-icons/MaterialIcons"


//Definição

const Home = (props) => {

  const [txtBusca, setBusca] = useState("");

  const novaPesquisa = () => {
    props.navigation.push("NovaPesquisa");
  }

  const selecionarPesquisa = () =>{
    props.navigation.push("AcoesDePesquisa");
  }

  return(
    <View style={estilos.view}>

      <View style={estilos.cBusca}>
        <Icon name='search' size={30} style={estilos.iconBusca}/>
        <TextInput style={estilos.inputBusca} label='Altura' value={txtBusca} onChangeText={setBusca} placeholder="Insira o termo de busca..."/>
      </View>

      <View style={estilos.cPesquisas}>
        <TouchableOpacity style={estilos.cardPesquisa} onPress={selecionarPesquisa}>
          <Card imgSource={require("../imgs/notebook-mobile.png")} titulo="SECOMP 2023" data="10/10/2023"/>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.cardPesquisa} onPress={selecionarPesquisa}>
          <Card imgSource={require("../imgs/people.png")}  titulo="UBUNTU 2022" data="05/06/2022"/>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.cardPesquisa} onPress={selecionarPesquisa}>
          <Card imgSource={require("../imgs/red-women.png")}  titulo="MEMINAS CPU" data="01/04/2022"/>
        </TouchableOpacity>
      </View>



      <View style={estilos.cBotoes}>
        <TouchableOpacity style={estilos.botao} onPress={novaPesquisa}>
          <Text style={estilos.textoBotao}>NOVA PESQUISA</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const estilos = StyleSheet.create({

  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:"#372775"
  },
  cBusca: {
    width: "90%",
    flex:0.10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

  },
  cPesquisas: {
    flex:0.65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cBotoes: {
    width: "90%",
    backgroundColor: 'green',
    flex:0.15,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  iconBusca:{
    color: 'gray',  
    backgroundColor: 'white' ,
    width:"5%",
    height: '100%'
  },

  inputBusca: {
    width:"95%",
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: 'white',
    height: '100%',
    paddingTop:0,
    textAlignVertical: 'center',
    paddingBottom: 0
  },

  botao: {
    height: "100%",
    backgroundColor: '#37BD6D',
    width:"100%",
    textAlignVertical: 'center',
    textAlign: 'center',
  },  
  textoBotao:{
    fontSize: 20,
    color: "white",
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: "100%"   
  },
  cardPesquisa:{
    width: "30%",
  }


})

//Exportação

export default Home;