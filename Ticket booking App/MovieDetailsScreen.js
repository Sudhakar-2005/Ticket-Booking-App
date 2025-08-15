import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import TicketSelector from '../components/TicketSelector';

export default function MovieDetailsScreen({ route, navigation }) {
  const { movie } = route.params;
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>{movie.title}</Text>
      <TicketSelector quantity={quantity} setQuantity={setQuantity} />
      <Button title="Proceed to Checkout" onPress={() => navigation.navigate('Checkout', { movie, quantity })} />
    </View>
  );
}
