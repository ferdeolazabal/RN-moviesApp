import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { RootStackParams } from '../navigation/NavigationController';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}
const { height: screenHeight } = Dimensions.get('screen');

const DetailScreen = ({ navigation, route }: Props) => {
    const movie = route.params;

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image source={{ uri }} style={styles.posterImage} />
            </View>

            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>
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
    },
    posterImage: {
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
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
