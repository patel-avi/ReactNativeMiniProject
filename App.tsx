/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home'
import Details from './src/screens/Details';

export type RootStackParamList = {
  Home: undefined;
  Details: {title: string; important: boolean; text: string, color: string}
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home"
        component={Home}
        options={{headerShown: false}}/>
        <Stack.Screen 
        name="Details"
        component={Details}
        options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
