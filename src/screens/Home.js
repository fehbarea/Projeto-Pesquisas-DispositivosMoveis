//Importação

import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, FlatList } from "react-native";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import Icon from "react-native-vector-icons/MaterialIcons"
import { useDispatch } from "react-redux";
import { reducerSetReview } from "../../redux/reviewSlice";
import { query, onSnapshot, initializeFirestore, collection, updateDoc, doc } from 'firebase/firestore';
import { app, auth_mod } from '../firebase/config';

//Definição

const Home = (props) => {



  const dispatch = useDispatch(); 

  const [txtBusca, setBusca] = useState("");
  const [pesquisas, setPesquisa] = useState([]);
  const db = initializeFirestore(app, { experimentalForceLongPolling: true });
  const userCollection = collection(db, "usuarios", auth_mod.currentUser.uid, "pesquisas");

  const novaPesquisa = () => {
    props.navigation.push("NovaPesquisa");
  }

  const selecionarPesquisa = (event) =>{
    //assim quer tornar as pesquisas dinamicas, passar os valores do nome, data e imagem no dispatch

    //utilizando pesquisa SECOMP para teste
    dispatch(reducerSetReview({reviewName: "SECOMP 2023",
                               reviewDate: "10/10/2023",
                               reviewImg: "../imgs/notebook-mobile.png"}))

    props.navigation.push("AcoesDePesquisa");
  }

  return(
  const selecionarPesquisa = (id) => {
      const referenciaDoc = doc(db, "usuarios", auth_mod.currentUser.uid, "pesquisas", id)
      props.navigation.push("AcoesDePesquisa", { referencia: referenciaDoc })
        
  }

  useEffect(() => {
    const queryPesquisas = query(userCollection);

    const unsubscribe = onSnapshot(queryPesquisas, (snapshot) => {
      const p = snapshot.docs.map((pesquisa) => ({
        id: pesquisa.id,
        ...pesquisa.data()
      }));
      setPesquisa(p)
    })
    return () => unsubscribe();
  }, [])

  return (
    <View style={estilos.view}>

      <View style={estilos.cBusca}>
        <Icon name='search' size={30} style={estilos.iconBusca} />
        <TextInput style={estilos.inputBusca} label='Altura' value={txtBusca} onChangeText={setBusca} placeholder="Insira o termo de busca..." />
      </View>

      <View style={estilos.cPesquisas}>
        <FlatList
          data={pesquisas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity key={item.id} style={estilos.cardPesquisa} onPress={() => selecionarPesquisa(item.id)}>
              <Card imgSource={item.imagem} titulo={item.nome} data={item.data} />
            </TouchableOpacity>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 10 }}
          style={estilos.flatList}
        />
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
    backgroundColor: "#372775"
  },
  cBusca: {
    width: "90%",
    flex: 0.10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

  },
  cPesquisas: {
    flex: 0.65,
    height: "100%"
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  flatList: {
    paddingHorizontal: 10,
    paddingEnd: 20,
  },
  cBotoes: {
    width: "90%",
    backgroundColor: 'green',
    flex: 0.15,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  iconBusca: {
    color: 'gray',
    backgroundColor: 'white',
    width: "5%",
    height: '100%'
  },

  inputBusca: {
    width: "95%",
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: 'white',
    height: '100%',
    paddingTop: 0,
    textAlignVertical: 'center',
    paddingBottom: 0
  },

  botao: {
    height: "100%",
    backgroundColor: '#37BD6D',
    width: "100%",
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  textoBotao: {
    fontSize: 20,
    color: "white",
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: "100%"
  }

})

//Exportação

export default Home;