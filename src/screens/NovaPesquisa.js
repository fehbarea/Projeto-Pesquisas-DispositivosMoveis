//Importação
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Pressable } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { obterImagem } from "../utils/utils.js";
import { app, auth_mod } from '../firebase/config'
import { initializeFirestore, collection, addDoc } from 'firebase/firestore';
import { userCollection, getReferenciaDoc } from '../utils/firestoreUtils';
import { useSelector } from "react-redux";

//Definição

const NovaPesquisa = (props) => {

  const [txtNome, setNome] = useState("");
  const [txtData, setData] = useState("");
  const [imagem, setImagem] = useState("");

  const [txtErroNome, setErroNome] = useState("");
  const [txtErroData, setErroData] = useState("");
  const userId = useSelector((state) => state.user.userId);


  const cadastrar = () => {
    let invalido = txtNome == "" || txtData == "";
    txtNome == "" ? setErroNome("Preencha o nome da pesquisa") : setErroNome("");
    txtData == "" ? setErroData("Preencha a data") : setErroData("");

    const docPesquisa = {
      nome: txtNome,
      data: txtData,
      imagem: imagem,
      votos: {
        "pessimo": 0,
        "ruim": 0,
        "neutro": 0,
        "bom": 0,
        "excelente": 0
      }
    }

    if (!invalido) {
      addDoc(userCollection(userId), docPesquisa).then(() => {
        props.navigation.push("Drawer");
        console.log("item adicionado")
      }).catch((error) => {
        console.log(JSON.stringify(error));
      })

    }
  }

  return (
    <View style={estilos.view}>
      <View style={estilos.view2}>

        <View style={estilos.cNome}>
          <Text style={estilos.textoPadrao}>Nome</Text>
          <TextInput style={estilos.inputText} label='Nome' value={txtNome} onChangeText={setNome} />
          <Text style={estilos.textoValidacao}>{txtErroNome}</Text>
        </View>

        <View style={estilos.cData}>
          <Text style={estilos.textoPadrao}>Data</Text>

          <View style={estilos.cInputData}>
            <TextInput style={estilos.inputTextData} label='Data' value={txtData} onChangeText={setData} />
            <Icon name='calendar-month-outline' size={30} style={estilos.iconCalendario} />
          </View>

          <Text style={estilos.textoValidacao}>{txtErroData}</Text>
        </View>


        <View style={estilos.cImagem}>
          <Pressable style={({ pressed }) => [estilos.inputImagem, { transform: [{ scale: pressed ? 0.95 : 1 }] },]} onPress={() => obterImagem(setImagem)}>
            <Text style={estilos.textoImagem}>Câmera/Galeria de imagens</Text>
          </Pressable>
          <Image source={imagem ? { uri: imagem } : {}} style={estilos.imagemSelecionada} resizeMode="contain" />
        </View>


        <View style={estilos.cBotao}>
          <TouchableOpacity style={estilos.botao} onPress={cadastrar}>
            <Text style={estilos.textoBotaoCadastrar}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  imagemSelecionada: {
    height: '90%',
    width: "30%"
  },
  view: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 10,
    backgroundColor: "#372775"
  },
  view2: {
    flex: 1,
    width: "80%",
    flexDirection: "column",
    justifyContent: 'space-between',

  },
  cNome: {
    width: "90%",
    flex: 0.20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 10,
  },

  cData: {
    width: "90%",
    flex: 0.25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  cImagem: {
    width: "90%",
    flex: 0.40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  cBotao: {
    width: "90%",
    flex: 0.15,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
  },

  cInputData: {
    backgroundColor: 'white',
    width: "100%",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  iconCalendario: {
    color: 'gray',
  },

  inputTextData: {
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    width: "90%",
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
  },

  inputText: {
    height: "50%",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 15,
    width: "100%",
    fontSize: 20,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: 'white'
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


  botao: {
    height: "100%",
    backgroundColor: '#37BD6D',
    width: "100%",
    textAlignVertical: 'center',
    textAlign: 'center',
  },

  textoPadrao: {
    fontSize: 15,
    color: "white",
    fontFamily: 'AveriaLibre-Regular',

  },
  textoImagem: {
    fontSize: 15,
    color: "gray",
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center'
  },
  textoValidacao: {
    fontSize: 15,
    color: "#FD7979",
    fontFamily: 'AveriaLibre-Regular',
  },
  textoBotaoCadastrar: {
    fontSize: 15,
    color: "white",
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: "100%"
  }


})

//Exportação

export default NovaPesquisa;