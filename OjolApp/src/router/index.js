import React from 'react';
import { Login, Register, Splash, WelcomeAuth } from '../pages';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

function Router() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen 
        name="Login" 
        component={Login}
        options={{
          headerShown: false,
        }} />
        <Stack.Screen 
        name="Register" 
        component={Register}
        options={{
          headerShown: false,
        }} />
        <Stack.Screen 
        name="WelcomeAuth" 
        component={WelcomeAuth}
        options={{
          headerShown: false,
        }} />
      </Stack.Navigator>
  );
}

export default Router