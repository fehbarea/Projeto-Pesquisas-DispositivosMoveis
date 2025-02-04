//Importação

import {View, Text, Image, StyleSheet, TouchableOpacity,TextInput, Modal} from "react-native";
import {useState} from "react";
import Card from "../components/Card";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { updateDoc, deleteDoc } from 'firebase/firestore';

//Definição

const ModificarPesquisa = (props) => {

  const [txtNome, setNome] = useState("Carnaval 2024");
  const [txtData, setData] = useState("16/02/2024");
  const [isPopUpVisible,setIsPopUpVisibile] = useState(false);
  const referenciaDoc = props.params;

  const salvar = () => {
    setIsPopUpVisibile(false);
    props.navigation.goBack();
  }

  const apagar = () => {
    deleteDoc(referenciaDoc)
    .then(
      () => {
        setIsPopUpVisibile(true); 
      }
    )
    
  }

  const popUpSim = () =>{
    setIsPopUpVisibile(false);
    props.navigation.push("Drawer");
  }

  const popUpCancelar = () => {
    setIsPopUpVisibile(false);
  }

  return(
    <View style={estilosTela.view}>

      <View style={estilosTela.cNome}>
        <Text style={estilosTela.textoPadrao}>Nome</Text>
        <TextInput style={estilosTela.inputText} label='Nome' value={txtNome} onChangeText={setNome} />
      </View>

      <View style={estilosTela.cData}>
        <Text style={estilosTela.textoPadrao}>Data</Text>

        <View style={estilosTela.cInputData}>
          <TextInput style={estilosTela.inputTextData} label='Data' value={txtData} onChangeText={setData} />
          <Icon name='calendar-month-outline' size={40} style={estilosTela.iconCalendario}/>
        </View>      
      </View>

      <View style={estilosTela.cImagem}>
        <Text style={estilosTela.textoPadrao}>Imagem</Text>
        <View style={estilosTela.cRespostaImagem}>
          <Image style={estilosTela.imagem} resizeMode="contain" source={require("../imgs/party.png")} />
        </View>
      </View>

      <View style={estilosTela.cBotao}>
        <TouchableOpacity style={estilosTela.botao} onPress={salvar}>
          <Text style={estilosTela.textoPadrao}>Salvar</Text>
        </TouchableOpacity>

        <View style={estilosTela.cIconeApagar} >
          <TouchableOpacity onPress={apagar}>
            <Icon name='trash-can-outline' size={40} style={estilosTela.iconApagar}/>
          </TouchableOpacity>
          <Text style={estilosTela.textoIconeApagar}>Apagar</Text>

        </View>
      </View>
      
      <Modal visible={isPopUpVisible} transparent={true}>
        <View style={estilosPopUp.view}>
          <View style={estilosPopUp.view2}>

            <View style={estilosPopUp.cTexto}>
              <Text style={estilosPopUp.texto}>Tem certeza de apagar essa pesquisa?</Text>
            </View>

            <View style={estilosPopUp.cBotoes}>

              <View style={estilosPopUp.cBotaoSim}>
                <TouchableOpacity style={estilosPopUp.btSim} onPress={popUpSim}>
                  <Text style={estilosPopUp.texto}>SIM</Text>
                </TouchableOpacity> 
              </View>

              <View style={estilosPopUp.cBotaoCancelar}>
                <TouchableOpacity style={estilosPopUp.btCancelar} onPress={popUpCancelar}>
                  <Text style={estilosPopUp.texto}>CANCELAR</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </View>

      </Modal>
    </View>
  );
}

const estilosPopUp = StyleSheet.create({
  view:{
    flex:1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2:{
    height: "40%",
    borderWidth: 1,       
    borderColor: 'black',
  },
  cTexto:{
    padding: 10,
    backgroundColor:"#372775",
    flex:0.5,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
  },
  cBotoes:{
    flex:0.5,
    backgroundColor:"#372775",
    flexDirection: "row",
    justifyContent: 'space-between',
  },

  cBotaoSim:{
    flex:0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btSim:{
    height: "60%",
    backgroundColor: '#FF8383',
    width:"70%",
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  cBotaoCancelar:{
    flex:0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },


  btCancelar:{
    height: "60%",
    backgroundColor: '#3F92C5',
    width:"70%",
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  texto:{
    fontSize: 15,
    color: "white",
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: "100%"
  }

});

const estilosTela = StyleSheet.create({

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
    color: "#3F92C5",
    flex:0.92,
    paddingLeft:10,
    width: "80%",
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular',
  },

  inputText: {
    color: "#3F92C5",
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