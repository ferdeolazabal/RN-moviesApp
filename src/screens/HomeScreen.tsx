import React from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { UseMovies } from '../hooks/UseMovies';
import MoviePoster from '../components/MoviePoster';

interface Props extends StackScreenProps<any, any> {}

const HomeScreen = ({ navigation }: Props) => {
    const { actualMovies, isLoading } = UseMovies();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={90} />
            </View>
        );
    }

    return (
        <View>
            <MoviePoster />
            {/* <Text
                style={{
                    color: 'black',
                }}>
                Home
            </Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('DetailScreen')} /> */}
        </View>
    );
};
export default HomeScreen;
