import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet, Image, Dimensions } from 'react-native';
import { RootStackParams } from '../navigation/NavigationController';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}
const { height: screenHeight } = Dimensions.get('screen');

const DetailScreen = ({ navigation, route }: Props) => {
    const movie = route.params;

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        // <View>
        //     <Text
        //         style={{
        //             color: 'black',
        //         }}>
        //         DetailScreen
        //     </Text>

        //     <Button title="Go to Home" onPress={() => navigation.navigate('HomeScreen')} />
        <View style={styles.imageContainer}>
            <Image source={{ uri }} style={styles.posterImage} />
        </View>
        // </View>
    );
};
export default DetailScreen;

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
    },
    posterImage: {
        flex: 1,
        borderRadius: 20,
        width: 300,
        height: 420,
    },
});
