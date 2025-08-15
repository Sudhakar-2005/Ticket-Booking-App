import React from 'react';
import { View, Text } from 'react-native';

export default function ConfirmationScreen({ route }) {
  const { movie, quantity } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Booking Confirmed!</Text>
      <Text>{quantity} tickets for {movie.title}</Text>
    </View>
  );
}
