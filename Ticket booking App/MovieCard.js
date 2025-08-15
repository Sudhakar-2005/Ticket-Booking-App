import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function MovieCard({ movie, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: movie.poster }} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { margin: 10, alignItems: 'center' },
  image: { width: 150, height: 220, borderRadius: 8 },
  title: { marginTop: 5, fontSize: 16, fontWeight: 'bold' }
});
