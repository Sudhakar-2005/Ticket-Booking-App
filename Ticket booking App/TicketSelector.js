import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export default function TicketSelector({ quantity, setQuantity }) {
  return (
    <View style={styles.container}>
      <Button title="-" onPress={() => setQuantity(Math.max(1, quantity - 1))} />
      <Text style={styles.qty}>{quantity}</Text>
      <Button title="+" onPress={() => setQuantity(quantity + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  qty: { marginHorizontal: 20, fontSize: 18 }
});
