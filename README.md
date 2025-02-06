# Projeto de Pesquisa e Relatórios

Este projeto é uma aplicação móvel para gerenciar pesquisas e relatórios. Ele permite que os usuários criem, modifiquem e visualizem pesquisas, além de recuperar senhas e gerenciar contas.

## Funcionalidades

- **Autenticação de Usuários**: Login, criação de novas contas e recuperação de senhas.
- **Gerenciamento de Pesquisas**: Criação, modificação e visualização de pesquisas.
- **Relatórios**: Visualização de relatórios de pesquisas com gráficos de pizza.
- **Navegação**: Navegação entre diferentes telas usando React Navigation.
- **Gerenciamento de Estado**: Gerenciamento de estado global usando Redux.

## Bibliotecas Principais

### React Native

- **[React Native](https://reactnative.dev/)**: Framework para desenvolvimento de aplicativos móveis usando JavaScript e React.

### Navegação

- **[React Navigation](https://reactnavigation.org/)**: Biblioteca para navegação em aplicativos React Native.
  - **@react-navigation/native**: Biblioteca principal para navegação.
  - **@react-navigation/stack**: Navegação baseada em pilha.

### Gerenciamento de Estado

- **[Redux](https://redux.js.org/)**: Biblioteca para gerenciamento de estado global.
  - **@reduxjs/toolkit**: Ferramentas e convenções para escrever código Redux de forma mais eficiente.
  - **react-redux**: Integração do Redux com React.

### Firebase

- **[Firebase](https://firebase.google.com/)**: Plataforma para desenvolvimento de aplicativos móveis e web.
  - **firebase/auth**: Autenticação de usuários.
  - **firebase/firestore**: Banco de dados NoSQL em tempo real.

### Componentes e Estilos

- **[React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)**: Biblioteca de ícones para React Native.
- **[react-native-svg-charts](https://github.com/JesperLekland/react-native-svg-charts)**: Biblioteca para criação de gráficos em SVG.

### Hooks Utilizados

- `useState`
- `useEffect`
- `useCallback`
- `useFocusEffect`
- `useSelector`
- `useDispatch`
- `useNavigation`

## Estrutura do Projeto

- **src/screens**: Contém as telas principais do aplicativo, como Login, Nova Conta, Recuperar Senha, Relatório, etc.
- **src/utils**: Contém utilitários e funções auxiliares.
- **redux**: Contém a configuração do Redux, incluindo slices e store.
- **assets/fonts**: Contém as fontes personalizadas usadas no projeto.
