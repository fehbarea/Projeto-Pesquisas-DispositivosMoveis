import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./src/screens/Login.js";
import Drawer from "./src/screens/Drawer.js";
import NovaPesquisa from "./src/screens/NovaPesquisa.js";
import AcoesDePesquisa from "./src/screens/AcoesDePesquisa.js";
import ModificarPesquisa from "./src/screens/ModificarPesquisa.js";
import Coleta from "./src/screens/Coleta.js";
import AgradecimentoParticipacao from "./src/screens/AgradecimentoParticipacao.js";
import Relatorio from "./src/screens/Relatorio.js";
import NovaConta from "./src/screens/NovaConta.js";
import RecuperarSenha from "./src/screens/RecuperarSenha.js";

const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"  screenOptions={{ headerShown: true, headerTintColor: 'blue', headerTitleStyle:{color:"white"} , headerStyle: {backgroundColor: "#2B1D62"}  }}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
        <Stack.Screen name="Drawer" component={Drawer} options={{ headerShown: false}}/>
        <Stack.Screen name="NovaPesquisa" component={NovaPesquisa} options={{ title: 'Nova Pesquisa' }}/>
        <Stack.Screen name="AcoesDePesquisa" component={AcoesDePesquisa} options={{ title: 'Carnaval' }}/>
        <Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa} options={{ title: 'Modificar pesquisa' }}/>
        <Stack.Screen name="Coleta" component={Coleta} options={{ headerShown: false }}/>
        <Stack.Screen name="AgradecimentoParticipacao" component={AgradecimentoParticipacao} options={{ headerShown: false }}/>
        <Stack.Screen name="Relatorio" component={Relatorio} options={{ title: 'Relatório' }}/>
        <Stack.Screen name="NovaConta" component={NovaConta} options={{ title: 'Nova Conta' }}/>
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{ title: 'Recuperação de senha' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
