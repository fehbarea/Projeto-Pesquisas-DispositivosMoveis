import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Calculadora from "./src/screens/Calculadora.js";
import Drawer from "./src/screens/Drawer.js";

const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calculadora" screenOptions={{ headerShown: false, headerTintColor: 'blue', headerTitleStyle:{color:"white"} , headerStyle: {backgroundColor: "#BBBBBB"}  }}>
      <Stack.Screen name="Calculadora" component={Calculadora} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
