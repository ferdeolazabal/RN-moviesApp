import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native';
import { RootStackParams } from '../navigation/NavigationController';
import UseMovieDetail from '../hooks/UseMovieDetail';
import MovieDetails from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}
const { height: screenHeight } = Dimensions.get('screen');

const DetailScreen = ({ navigation, route }: Props) => {
    const movie = route.params;

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, cast, fullMovie } = UseMovieDetail(movie.id);

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image source={{ uri }} style={styles.posterImage} />
                </View>
            </View>

            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>

            {isLoading ? (
                <ActivityIndicator color="grey" size={35} />
            ) : (
                <MovieDetails fullMovie={fullMovie!} cast={cast} />
            )}
            <TouchableOpacity onPress={() => navigation.pop()} activeOpacity={0.8}>
                <Icon name="arrow-back-outline" color="black" size={70} />
            </TouchableOpacity>
        </ScrollView>
    );
};
export default DetailScreen;

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 9,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    posterImage: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 10,
    },
    title: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    subTitle: {
        color: 'black',
        fontSize: 16,
        opacity: 0.5,
    },
});
