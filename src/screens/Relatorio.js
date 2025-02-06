//Importação

import { View, Text, Image, StyleSheet } from "react-native";
import PieChart from "react-native-pie-chart";
import { useCallback, useEffect, useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { useSelector } from "react-redux";
import { useFocusEffect } from '@react-navigation/native';
import { getReferenciaDoc } from '../utils/firestoreUtils'

//Definição

const Relatorio = (props) => {


    const [votosExcelente, setVotosExcelente] = useState();
    const [votosBom, setVotosBom] = useState();
    const [votosNeutro, setVotosNeutro] = useState();
    const [votosRuim, setVotosRuim] = useState();
    const [votosPessimo, setVotosPessimo] = useState();
    const docId = useSelector((state) => state.review.reviewId);
    const userId = useSelector((state) => state.user.userId);
    const [votosNulos, setVotosNulos] = useState(1)


    const series = [
        { value: votosExcelente, color: '#F1CE7E' },
        { value: votosBom, color: '#6994FE' },
        { value: votosNeutro, color: '#5FCDA4' },
        { value: votosRuim, color: '#EA7288' },
        { value: votosPessimo, color: '#53D8D8' },
        { value: votosNulos, color: '#ffffff' }
    ];

    useFocusEffect(
        useCallback(() => {
            const unsubscribe = onSnapshot(getReferenciaDoc(userId, docId), (docPesquisa) => {

                setVotosPessimo(docPesquisa.data().votos.pessimo ? docPesquisa.data().votos.pessimo : 0);
                setVotosRuim(docPesquisa.data().votos.ruim ? docPesquisa.data().votos.ruim : 0);
                setVotosNeutro(docPesquisa.data().votos.neutro ? docPesquisa.data().votos.neutro : 0);
                setVotosBom(docPesquisa.data().votos.bom ? docPesquisa.data().votos.bom : 0);
                setVotosExcelente(docPesquisa.data().votos.excelente ? docPesquisa.data().votos.excelente : 0);

                if ((votosBom + votosExcelente + votosNeutro + votosRuim + votosPessimo) == 0) {
                    setVotosNulos(1)
                } else {
                    setVotosNulos(0)
                }
            })

            return () => { unsubscribe(); };
        },
            [])
    );


    return (
        <View style={estilos.view}>

            <View style={estilos.containerImage}>
                <PieChart
                    widthAndHeight={250}
                    series={series}
                />

            </View>

            <View style={estilos.containerLegenda}>
                <View style={estilos.legenda}>
                    <View style={[estilos.bloquinho, { backgroundColor: '#F1CE7E' }]} />
                    <Text style={estilos.texto}>Excelente</Text>
                </View>
                <View style={estilos.legenda}>
                    <View style={[estilos.bloquinho, { backgroundColor: '#6994FE' }]} />
                    <Text style={estilos.texto}>Bom</Text>
                </View>
                <View style={estilos.legenda}>
                    <View style={[estilos.bloquinho, { backgroundColor: '#5FCDA4' }]} />
                    <Text style={estilos.texto}>Neutro</Text>
                </View>
                <View style={estilos.legenda}>
                    <View style={[estilos.bloquinho, { backgroundColor: '#EA7288' }]} />
                    <Text style={estilos.texto}>Ruim</Text>
                </View>
                <View style={estilos.legenda}>
                    <View style={[estilos.bloquinho, { backgroundColor: '#53D8D8' }]} />
                    <Text style={estilos.texto}>Péssimo</Text>
                </View>
            </View>

        </View>
    );
}

const estilos = StyleSheet.create({

    view: {
        backgroundColor: '#372775',
        flex: 1,
        gap: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    containerImage: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center'

    },
    legenda: {
        flexDirection: 'row',
        gap: '5%'
    },
    bloquinho: {
        width: 25,
        height: 25
    },
    texto: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular'
    },
    containerLegenda: {
        flexDirection: 'column',
        justifyContent: "Center",
        gap: '5%',
        flex: 0.3
    }
})

//Exportação

export default Relatorio;