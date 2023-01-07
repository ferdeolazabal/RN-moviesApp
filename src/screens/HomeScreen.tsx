import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { UseMovies } from '../hooks/UseMovies';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import MoviePoster from '../components/MoviePoster';

interface Props extends StackScreenProps<any, any> {}
const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = ({ navigation }: Props) => {
    const { actualMovies, isLoading } = UseMovies();
    const { top } = useSafeAreaInsets();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={90} />
            </View>
        );
    }

    return (
        <View style={{ marginTop: top + 20 }}>
            <View style={{ height: 440 }}>
                <Carousel
                    // Just one of the many styles from the Carousel module
                    mode="parallax"
                    // This style prop regards to the carousel container not to the item itself
                    style={{ width: windowWidth, justifyContent: 'center' }}
                    // Paging in false allows to do superfast scroll
                    pagingEnabled={false}
                    // and that superfast scroll stops on multiples of windowSize
                    windowSize={2}
                    // the snap helps to stop exactly in 1 item, no in the middle of two or so
                    snapEnabled
                    // This props are for the item in the middle
                    width={300}
                    height={420}
                    modeConfig={{
                        // How the "main" item will look
                        parallaxScrollingScale: 0.9,
                        // How separate the adjacent items will be
                        parallaxScrollingOffset: 40,
                        // How big the adjacent items will look compared to the "main" item
                        parallaxAdjacentItemScale: 0.75,
                    }}
                    data={actualMovies}
                    renderItem={({ item }) => <MoviePoster movie={item} />}
                />
            </View>
        </View>
    );
};
export default HomeScreen;
