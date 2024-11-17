import {View, Image, Text} from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) =>{
    return(
        <DrawerContentScrollView {...props}>
            <View>
                <Text>Teste</Text>
            </View>
            <DrawerItemList {...props}/>
            <DrawerItem label="Sair" onPress={()=>{props.navigation.popToTop()}}/>
        </DrawerContentScrollView>
    )
}


export default CustomDrawer;
