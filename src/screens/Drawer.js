import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrower.js";
import Calculadora from "./Calculadora.js";
import Home from "./Home.js";


const DrawerNavigator = createDrawerNavigator();

const Drawer = () =>{
    return(
        <DrawerNavigator.Navigator
            drawerContent={(props) => <CustomDrawer{...props} />}
            screenOptions={{ 
                drawerStyle:{
                    backgroundColor:'#2B1F5C'
                },
                headerStyle:{
                    backgroundColor: '#2B1D62',
                    height: 50
                },
                headerTintColor: 'white',
                headerTitle: ''
        }}
        >
            <DrawerNavigator.Screen name="Home" component={Home}/>
        </DrawerNavigator.Navigator>
    )
}

export default Drawer;
