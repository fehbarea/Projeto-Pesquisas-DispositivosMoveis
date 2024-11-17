import {View, Image, Text, StyleSheet} from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) =>{
    return(
        <View style={estilos.cMainDrawer}>
                <View style={estilos.cHeaderDrawer}>
                    <Text style={estilos.texto}>usuario@dominio.com</Text>
                </View>
                <View style={estilos.cItensDrawer}>
                    <DrawerItemList {...props}/>
                    <DrawerItem label="Sair" onPress={()=>{props.navigation.popToTop()}}/>
                </View>
        </View>
    )
}
const estilos = StyleSheet.create({
    cMainDrawer:{
        backgroundColor:"#F15025",
    },
    cHeaderDrawer:{
        backgroundColor: "red"
    },
    cItensDrawer:{
        backgroundColor:"green",
    },

    texto: {
        textAlign:'center',
        fontSize: 24,
        color: 'black',
        fontFamily: 'AveriaLibre-Regular'
    }
})
export default CustomDrawer;
