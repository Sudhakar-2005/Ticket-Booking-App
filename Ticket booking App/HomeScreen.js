import React from 'react';
import { View, FlatList } from 'react-native';
import MovieCard from '../components/MovieCard';

const movies = [
  { id: '1', title: 'Movie One', poster: 'https://via.placeholder.com/150' },
  { id: '2', title: 'Movie Two', poster: 'https://via.placeholder.com/150' }
];

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <FlatList
        data={movies}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <MovieCard movie={item} onPress={() => navigation.navigate('Details', { movie: item })} />
        )}
      />
    </View>
  );
}
