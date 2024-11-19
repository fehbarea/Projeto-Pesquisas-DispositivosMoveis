import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Calculadora from "./src/screens/Calculadora.js";
import acoesDePesquisa from "./src/screens/AcoesDePesquisa.js"
import Drawer from "./src/screens/Drawer.js";
import icon from "react-native-vector-icons/MaterialIcons.js"
import Coleta from "./src/screens/Coleta.js"
import Relatorio from "./src/screens/Relatorio.js"
import AcoesDePesquisa from "./src/screens/AcoesDePesquisa.js";
import RecuperaraSenha from "./src/screens/recuperarSenha.js";

const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Calculadora" screenOptions={{ headerShown: true, headerTintColor: 'blue', headerTitleStyle:{color:"white"} , headerStyle: {backgroundColor: "#BBBBBB"}  }}>
      <Stack.Screen name="Calculadora" component={RecuperaraSenha} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
