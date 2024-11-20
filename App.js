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
import Login from "./src/screens/Login.js"
import NovaConta from "./src/screens/NovaConta.js"
import AgradecimentoParticipacao from "./src/screens/AgradecimentoParticipacao.js"

const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: true, headerTintColor: 'blue', headerTitleStyle:{color:"white"} , headerStyle: {backgroundColor: "#2B1D62"}  }}>
      <Stack.Screen name="NovaConta" component={AgradecimentoParticipacao} />
      <Stack.Screen name="Coleta" component={Coleta} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
