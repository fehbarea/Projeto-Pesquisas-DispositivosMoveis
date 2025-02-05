import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { auth_mod } from '../firebase/config';
import { signOut } from 'firebase/auth';


const CustomDrawer = (props) => {

    const goToPesquisas = () => {
        props.navigation.push("Drawer");
    }

    const logout = () => {
        signOut(auth_mod).then(() => {
            props.navigation.popToTop()
        }
        )

    }

    return (
        <DrawerContentScrollView {...props}>
            <View style={estilo.mainDrawer}>

                <View style={estilo.cHeader}>
                    <Text style={estilo.textoEmail}>usuario@dominio.com</Text>

                    <View style={estilo.linha}></View>
                </View>

                <View style={estilo.cItens}>
                    <TouchableOpacity style={estilo.btPesquisa} onPress={goToPesquisas}>
                        <Icon name='file-document-outline' size={40} color='white' />
                        <Text style={estilo.textoNormal}>Pesquisas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilo.btSair} onPress={logout}>
                        <Icon name='logout' size={40} color='white' />
                        <Text style={estilo.textoNormal}>Sair</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </DrawerContentScrollView>

    )
}

const estilo = StyleSheet.create({

    mainDrawer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',

    },

    linha: {
        backgroundColor: 'white',
        width: '90%',
        height: 2,
        alignSelf: 'center',
        top: 20
    },

    cHeader: {
        flex: 0.2,
        flexDirection: 'column',
        justifyContent: 'center',
    },

    cItens: {
        paddingTop: 50
    },

    btPesquisa: {
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },

    btSair: {
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '40%'

    },

    textoEmail: {
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 30,
        alignSelf: 'center'
    },
    textoNormal: {
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 30,
        left: 10
    },


})

export default CustomDrawer;
