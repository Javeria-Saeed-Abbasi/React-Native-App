import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './assets/Home.js';
import SplashScreen from './assets/SplashScreen.js';
import LoginScreen from './assets/Login.js';
import BottomTabs from "./assets/components/BottomTabs.js";
const App = () => {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Home" component={Home}
        // options={{
        //   title: "asani.io", 
        //   headerBackVisible: false,
        //   headerTitleAlign:'center',
        //   headerTintColor:'#3e89be',
        // }}
        />
        <Stack.Screen name="Splash" component={SplashScreen}
        // options={{ headerShown: false }} 
        />
        <Stack.Screen name="Login" component={LoginScreen}
        // options={{ headerShown: false }}
        />
        <Stack.Screen name="App" component={BottomTabs} />

      </Stack.Navigator>
   
    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})