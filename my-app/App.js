import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/HomePage';
import Checkout from './pages/Checkout';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
  );
};

export default AppNavigator;
