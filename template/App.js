import { store } from './src/store/index'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import AppLoading from 'expo-app-loading';

import MainLayout from "./src/layouts/MainLayout"
{{#if_eq preset.loginsystem}}
import LoginLayout from "./src/layouts/LoginLayout"
{{/if_eq}}
import fonts from "./src/css/fonts"

const AppStack = createNativeStackNavigator();

export default function App() {

  let load = fonts.loadFonts();

  if (!load) {
    return (<AppLoading />);
  }

  const config = {
    headerShown: false,
    animationEnabled: false
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack.Navigator screenOptions={config}>
          {{#if_eq preset.loginsystem}}
          <AppStack.Screen name="Login" component={LoginLayout} />
          {{/if_eq}}
          <AppStack.Screen name="Main" component={MainLayout} />
        </AppStack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider >
  )

}
