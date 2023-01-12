import { View, Text, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    actor: Cast;
}

const CastItem = ({ actor }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <View style={{ ...styles.cardContainer }}>
            {actor.profile_path && <Image source={{ uri }} style={styles.image} />}
            <View style={styles.actorInfo}>
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
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 60,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 9,
        marginRight: 10,
        paddingRight: 10,
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
        margin: 4,
        alignContent: 'center',
    },
    actorInfo: {
        marginLeft: 5,
        marginTop: 4,
        marginBottom: 4,
        marginRight: 7,
    },
});
