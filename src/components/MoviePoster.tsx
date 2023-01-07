import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieInterfaces';
interface Props {
    movie: Movie;
}

export const MoviePoster = ({ movie }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri }} style={styles.image} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 420,
    },
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
