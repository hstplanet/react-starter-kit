import { store } from './src/store/index'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import AppLoading from 'expo-app-loading';

import MainLayout from "./src/layouts/MainLayout"
{{#if preset.loginsystem}}import LoginLayout from "./src/layouts/LoginLayout"{{/if}}
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
          {{#if preset.loginsystem}}<AppStack.Screen name="Login" component={LoginLayout} />{{/if}}
          <AppStack.Screen name="Main" component={MainLayout} />
        </AppStack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider >
  )

}
