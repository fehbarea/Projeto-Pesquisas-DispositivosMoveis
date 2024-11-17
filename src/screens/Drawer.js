import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrower.js";

const DrawerNavigator = createDrawerNavigator();

const Drawer = () =>{
    return(
        <DrawerNavigator.Navigator 
            screenOptions={{ drawerActiveTintColor: 'red'}} 
            drawerContent={(props)=> <CustomDrawer {...props}/>}>
                     
            <DrawerNavigator.Screen name="Calculadora" component={Calculadora} />
        </DrawerNavigator.Navigator>
    )
}

export default Drawer;
