import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './src/CartContext';
import Checkout from './pages/Checkout';
import Home from './pages/HomePage';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function App() {
    return (
        <CartProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Checkout"
                        component={Checkout}
                        options={({ navigation }) => ({
                            headerShown: false,  // Show the header for Checkout screen
                            headerLeft: () => (
                                <MaterialIcons
                                    name='arrow-back'
                                    size={24}
                                    color='black'
                                    onPress={() => navigation.goBack()}
                                    style={{ marginLeft: 15 }} // Add margin to align the icon
                                />
                            ),
                            headerTitle: 'Checkout',
                            headerTitleAlign: 'center',
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </CartProvider>
    );
}
