import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Movies" component={HomeScreen} />
        <Stack.Screen name="Details" component={MovieDetailsScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
