import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieInterfaces';
interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <View style={{ height, width, marginHorizontal: 7 }}>
            <View style={styles.imageContainer}>
                <Image source={{ uri }} style={styles.image} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 20,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.62,
        elevation: 10,
    },
});

export default MoviePoster;
