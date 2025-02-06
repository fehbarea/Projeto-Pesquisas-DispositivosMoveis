//Importação

import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { getReferenciaDoc} from '../utils/firestoreUtils';
import { updateDoc, increment} from 'firebase/firestore';
import { useSelector } from "react-redux";

//Definição

const Coleta= (props) => {

    const [txtNome, setNome] = useState(useSelector((state) => state.review.reviewName));
    const [txtData, setData] = useState(useSelector((state) => state.review.reviewDate));
    const [imagem, setImagem] = useState(useSelector((state) => state.review.reviewImg));
    const docId = useSelector((state) => state.review.reviewId);
    const userId = useSelector((state) => state.user.userId);

    const navigateScreen = () =>{
        props.navigation.navigate("AgradecimentoParticipacao");
    };

    function botaoPessimo(){
        updateDoc(getReferenciaDoc(userId,docId),{
            'votos.pessimo': increment(1)
        }).then(
            (data) => {
                console.log("sucesso " + data);
                navigateScreen();
            }
        ).catch(
            (error) => console.log(JSON.stringify("erro"+error))
        )
    };
    function botaoRuim(){
        updateDoc(getReferenciaDoc(userId,docId),{
            'votos.ruim': increment(1)
        }).then(
            (data) => {
                console.log("sucesso " + data)
                navigateScreen();
            }
        ).catch(
            (error) => console.log(JSON.stringify("erro"+error))
        )
    };
    function botaoNeutro(){
        updateDoc(getReferenciaDoc(userId,docId),{
            'votos.neutro': increment(1)
        }).then(
            (data) => {
                console.log("sucesso " + data)
                navigateScreen();
            }
        ).catch(
            (error) => console.log(JSON.stringify("erro"+error))
        )
    };
    function botaoBom(){
        updateDoc(getReferenciaDoc(userId,docId),{
            'votos.bom': increment(1)
        }).then(
            (data) => {
                console.log("sucesso " + data)
                navigateScreen();
            }
        ).catch(
            (error) => console.log(JSON.stringify("erro"+error))
        )
    };
    function botaoExcelente(){
        updateDoc(getReferenciaDoc(userId,docId),{
            'votos.excelente': increment(1)
        }).then(
            (data) => {
                console.log("sucesso " + data)
                navigateScreen();
            }
        ).catch(
            (error) => console.log(JSON.stringify("erro"+error))
        )
    };


    return (
        <View style={estilos.view}>
            
            <Text style={estilos.titulo}>{txtNome}</Text>

            <View style={estilos.containerBotoes}>
                <TouchableOpacity onPress={botaoPessimo} style={estilos.botao}>
                    <Icon name='sentiment-very-dissatisfied' size={60} style={[estilos.iconBotao, {color:"#D71616"}]}/>
                    <Text style={estilos.textoBotao}>Péssimo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={botaoRuim} style={estilos.botao} >
                <Icon name='sentiment-dissatisfied' size={60} style={[estilos.iconBotao, {color:"#FF360A"}]}/>
                    <Text style={estilos.textoBotao}>Ruim</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={botaoNeutro} style={estilos.botao} >
                <Icon name='sentiment-neutral' size={60} style={[ estilos.iconBotao, {color:"#FFC632"}]}/>
                    <Text style={estilos.textoBotao}>Neutro</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={botaoBom} style={estilos.botao} >
                <Icon name='sentiment-satisfied-alt' size={60} style={[estilos.iconBotao , {color:"#37BD6D"}]}/>
                    <Text style={estilos.textoBotao}>Bom</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={botaoExcelente} style={estilos.botao} >
                <Icon name='sentiment-very-satisfied' size={60} style={[estilos.iconBotao , {color:"#25BC22"}]}/>
                    <Text style={estilos.textoBotao}>Excelente</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const estilos = StyleSheet.create({
    view:{
        backgroundColor: '#372775',
        padding: '5%',
        height: '100%',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    titulo:{
        color: 'white',
        textAlign: 'center',
        fontSize: 22.5,
        fontFamily: 'AveriaLibre-Regular',
        flex:0.5   
     },
    containerBotoes: {
        flexDirection: "row",
        justifyContent:'space-between',
        alignItems: 'flex-start',
        flex:0.5   
    },
    botao: {
        width:'20%',
        gap:2,
        flex: 0.2
    },
    textoBotao:{
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'AveriaLibre-Regular'
    },
    iconBotao:{
        color: 'white',
        textAlign: 'center',
    }

})

//Exportação

export default Coleta;