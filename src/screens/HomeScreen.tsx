import React, { useContext, useEffect } from 'react';
import { getImageColors } from '../helpers/getColores';
import { HoriontalSlider } from '../components/HoriontalSlider';
import { StackScreenProps } from '@react-navigation/stack';
import { UseMovies } from '../hooks/UseMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, ActivityIndicator, Dimensions, Text, ScrollView } from 'react-native';
import BackgroundGradient from '../components/BackgroundGradient';
import Carousel from 'react-native-reanimated-carousel';
import MoviePoster from '../components/MoviePoster';
import { GradientContext } from '../context/GradientContext';

interface Props extends StackScreenProps<any, any> {}
const { width: windowWidth } = Dimensions.get('window');

const HomeScreen = ({ navigation }: Props) => {
    const { isLoading, nowPlaying, popular, toprated, upcoming } = UseMovies();
    const { top } = useSafeAreaInsets();

    const { setMainColors } = useContext(GradientContext);

    const getPosterColors = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);

        setMainColors({ primary, secondary });
    };

    useEffect(() => {
        if (nowPlaying.length > 0) {
            getPosterColors(0);
        }
    }, [nowPlaying]);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={90} />
            </View>
        );
    }

    return (
        <BackgroundGradient>
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 30,
                            fontWeight: 'bold',
                            marginLeft: 10,
                            alignSelf: 'center',
                        }}>
                        En cartelera
                    </Text>
                    <View style={{ height: 405 }}>
                        <Carousel
                            mode="parallax"
                            style={{ width: windowWidth, justifyContent: 'center' }}
                            pagingEnabled={false}
                            windowSize={2}
                            snapEnabled
                            width={300}
                            height={420}
                            modeConfig={{
                                parallaxScrollingScale: 0.9,
                                parallaxScrollingOffset: 40,
                                parallaxAdjacentItemScale: 0.75,
                            }}
                            data={nowPlaying}
                            renderItem={({ item }) => <MoviePoster movie={item} />}
                            onSnapToItem={(index) => getPosterColors(index)}
                        />
                    </View>

                    <HoriontalSlider title="Populares" movies={popular} />
                    <HoriontalSlider title="Mas valoradas" movies={toprated} />
                    <HoriontalSlider title="Proximamente" movies={upcoming} />
                </View>
            </ScrollView>
        </BackgroundGradient>
    );
};
export default HomeScreen;
