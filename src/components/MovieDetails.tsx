import { View, Text, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';
import { FullMovieDetails } from '../interfaces/movieInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import CastItem from './CastItem';

interface Props {
    fullMovie: FullMovieDetails;
    cast: Cast[];
}

const MovieDetails = ({ fullMovie, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star-outline" color="grey" size={16} />
                    <Text style={{ ...styles.title, color: 'grey', fontSize: 14 }}>
                        &nbsp;{fullMovie.vote_average}
                    </Text>
                    <Text style={{ ...styles.title, marginLeft: 5, color: 'grey', fontSize: 14 }}>
                        - {fullMovie.genres.map((g) => g.name).join(', ')}
                    </Text>
                </View>
                <Text style={{ ...styles.title, fontSize: 21, marginTop: 10 }}>Sinopsis:</Text>
                <Text style={styles.title}>{fullMovie.overview}</Text>
                <Text style={{ ...styles.title, fontSize: 21, marginTop: 10 }}>Presupuesto:</Text>
                <Text style={styles.title}>
                    {fullMovie.budget.toLocaleString('en', { style: 'currency', currency: 'USD' })}
                </Text>

                <View style={{ marginTop: 10, marginBottom: 100 }}>
                    <Text style={{ ...styles.title, fontSize: 21 }}>Actores:</Text>

                    <View style={{ flexDirection: 'row' }}>
                        {cast.map((actor) => (
                            <View key={actor.id} style={{ marginRight: 10 }}>
                                <CastItem actor={actor} />
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </>
    );
};

export default MovieDetails;

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
