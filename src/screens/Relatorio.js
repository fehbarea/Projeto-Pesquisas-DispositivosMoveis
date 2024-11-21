//Importação

import { View, Text, Image, StyleSheet } from "react-native";

//Definição

const Relatorio = (props) => {


    return (
        <View style={estilos.view}>
            
            <View style={estilos.containerImage}>
                <Image style={estilos.image} resizeMode="contain" source={require('../imgs/grafico.png')} />
            </View>

            <View style={estilos.containerLegenda}>
            <View style={estilos.legenda}>
                <View style={[estilos.bloquinho, {backgroundColor: '#F1CE7E'}]} />
                <Text style={estilos.texto}>Excelente</Text>
            </View>
            <View style={estilos.legenda}>
                <View style={[estilos.bloquinho, {backgroundColor: '#6994FE'}]} />
                <Text style={estilos.texto}>Bom</Text>
            </View>
            <View style={estilos.legenda}>
                <View style={[estilos.bloquinho, {backgroundColor: '#5FCDA4'}]} />
                <Text style={estilos.texto}>Neutro</Text>
            </View>
            <View style={estilos.legenda}>
                <View style={[estilos.bloquinho, {backgroundColor: '#EA7288'}]} />
                <Text style={estilos.texto}>Ruim</Text>
            </View>
            <View style={estilos.legenda}>
                <View style={[estilos.bloquinho, {backgroundColor: '#53D8D8'}]} />
                <Text style={estilos.texto}>Excelente</Text>
            </View>
            </View>

        </View>
    );
}

const estilos = StyleSheet.create({

    view:{
        backgroundColor: '#372775',
        flex:1,
        gap: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    containerImage:{
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    image:{
        height: "100%", 
        width: "100%", 
       
    },
    legenda:{
        flexDirection: 'row',
        gap: '5%'
    },
    bloquinho:{
        width: 25,
        height: 25
    },
    texto:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular'
    },
     containerLegenda:{
        flexDirection:'column',
        justifyContent: "Center",
        gap:'5%',
        flex: 0.3
     }
})

//Exportação

export default Relatorio;