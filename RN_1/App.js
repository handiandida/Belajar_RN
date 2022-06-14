import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from './src/screens/Home';
import DetailScreen from './src/screens/Detail';

import ClassA from './src/screens/ScreenStack1/ClassA';
import ClassB from './src/screens/ScreenStack1/ClassB';
import ClassC from './src/screens/ScreenStack1/ClassC';
import ClassD from './src/screens/ScreenStack1/ClassD';

import ClassE from './src/screens/ScreenStack2/ClassE';
import ClassF from './src/screens/ScreenStack2/ClassF';
import ClassG from './src/screens/ScreenStack2/ClassG';

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />

        <Stack.Screen name="ClassA" component={ClassA} />
        <Stack.Screen name="ClassB" component={ClassB} />
        <Stack.Screen name="ClassC" component={ClassC} />
        <Stack.Screen name="ClassD" component={ClassD} />

        <Stack.Screen name="ClassE" component={ClassE} />
        <Stack.Screen name="ClassF" component={ClassF} />
        <Stack.Screen name="ClassG" component={ClassG} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack
