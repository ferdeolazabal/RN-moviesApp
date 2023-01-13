import { View, Animated, Button } from 'react-native';
import UseFade from '../hooks/UseFade';

const FadeScreen = () => {
    const { opacity, fadeIn, fadeOut } = UseFade();

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Button title="Fade Out" onPress={fadeOut} />
            <Animated.View
                style={{
                    backgroundColor: 'blue',
                    borderColor: 'white',
                    borderWidth: 10,
                    height: 150,
                    width: 150,
                    opacity,
                    margin: 10,
                }}
            />

            <Button title="Fade In" onPress={fadeIn} />
        </View>
    );
};

export default FadeScreen;
