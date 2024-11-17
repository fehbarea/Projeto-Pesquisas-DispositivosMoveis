//Importação

import {View, Text, Image, StyleSheet, TouchableOpacity,TextInput} from "react-native";
import {useState} from "react";
import Card from "../components/Card";


//Definição

const Home = (props) => {

  const [txtPeso, setPeso] = useState("");
  const [txtAltura, setAltura] = useState("");
  const [txtImc, setImc] = useState("");

  const calcularIMC = () =>{
    let peso = parseFloat(txtPeso);
    let altura = parseFloat(txtAltura);

    //imc = peso / (altura*altura)
    let resultado = peso / (altura*altura);

    setImc("O seu IMC é : " + resultado.toFixed(2));

  }

  const limpar = () =>{
    setAltura("");
    setImc("");
    setPeso("");
  }

  const voltar = () => {
    props.navigation.goBack();
  }

  return(
    <View style={estilos.view}>

      <View style={estilos.cImagem}>
        {/*<Image style={estilos.imagem} source={{uri:"https://reactnative.dev/img/tiny_logo.png"}} />*/}
        <Card titulo="SECOMP 2023" data="10/10/2023"/>
        <Card titulo="SECOMP 2023" data="10/10/2023"/>
        <Card titulo="SECOMP 2023" data="10/10/2023"/>
      </View>

      <View style={estilos.cInput}>
        <TextInput style={estilos.textInput} label='Peso' value={txtPeso} onChangeText={setPeso} placeholder="Digite seu peso em KG"/>
        <TextInput style={estilos.textInput} label='Altura' value={txtAltura} onChangeText={setAltura} placeholder="Digite a sua altura em metros"/>
      </View>

      <View style={estilos.cBotoes}>
      <TouchableOpacity style={estilos.botao} onPress={calcularIMC}><Text style={estilos.textoBotao}>Calcular IMC</Text></TouchableOpacity>
      <TouchableOpacity style={estilos.botao} onPress={limpar}><Text style={estilos.textoBotao}>Limpar</Text></TouchableOpacity>
      <TouchableOpacity style={estilos.botao} onPress={voltar}><Text style={estilos.textoBotao}>Voltar</Text></TouchableOpacity>
      </View>
      
    </View>
  );
}

const estilos = StyleSheet.create({
  botao: {
    backgroundColor: '#F15025',
    marginVertical: 5,
    width: '100%'
  },  
  textoBotao:{
    fontSize: 36,
    color: "#E6E8E6",
    textAlign: "center",
    fontFamily: 'AveriaLibre-Regular'
  },

  imagem: {
    height:100, 
    width: 100
  },

  view: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    backgroundColor:"#372775"
  },

  texto: {
    fontSize: 24,
    color: '#F15025',
    fontFamily: 'AveriaLibre-Regular'
  },

  textInput: {
    marginTop: 10,
    fontSize: 25,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#FFFFFF',
    color: '#F15025'
  },

  cImagem: {
    flex:0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  cInput: {
    flex:0.5,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  cBotoes: {
    flex:0.25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  resultado:{
    fontSize: 24,
    color: "#F15025"
  }

})

//Exportação

export default Home;