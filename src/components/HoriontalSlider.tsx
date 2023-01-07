import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { Movie } from '../interfaces/movieInterfaces';
import MoviePoster from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
}

export const HoriontalSlider = ({ title, movies }: Props) => {
    return (
        <View style={{ height: !!title ? 270 : 220 }}>
            {title && (
                <Text
                    style={{
                        color: 'black',
                        fontSize: 30,
                        fontWeight: 'bold',
                        marginLeft: 10,
                        marginVertical: 5,
                    }}>
                    {title}
                </Text>
            )}
            <FlatList
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <MoviePoster movie={item} height={200} width={140} />}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};
