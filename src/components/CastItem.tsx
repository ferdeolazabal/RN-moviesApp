import { View, Text, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    actor: Cast;
}

const CastItem = ({ actor }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <View style={{ alignItems: 'center', marginTop: 8 }}>
            <Image source={{ uri }} style={styles.image} />
            <View>
                <Text style={{ ...styles.title, fontSize: 16 }}>{actor.name}</Text>
                <Text style={{ ...styles.title, fontSize: 14, color: 'grey' }}>
                    {actor.character}
                </Text>
            </View>
        </View>
    );
};

export default CastItem;

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 10,
        alignContent: 'center',
    },
});
