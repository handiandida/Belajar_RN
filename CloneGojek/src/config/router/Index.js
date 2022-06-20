import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewsDetail, Home, Order, OrderDetail } from '../../containers/pages/Index';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

// const HomeStack = createStackNavigator({
//     Home,
//     NewsDetail
// })

// const OrderStack = createStackNavigator({
//     Order,
//     OrderDetail
// })


function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NewsDetail" component={NewsDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router