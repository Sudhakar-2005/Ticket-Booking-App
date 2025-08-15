import React from 'react';
import { View, Text, Button } from 'react-native';

export default function CheckoutScreen({ route, navigation }) {
  const { movie, quantity } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>Checkout for {movie.title}</Text>
      <Text>Tickets: {quantity}</Text>
      <Button title="Confirm Booking" onPress={() => navigation.navigate('Confirmation', { movie, quantity })} />
    </View>
  );
}
