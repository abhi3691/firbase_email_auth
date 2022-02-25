import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './android/src/Login';
import React from 'react';
import Home from './android/src/Home';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
