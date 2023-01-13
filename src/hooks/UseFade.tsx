import { useRef } from 'react';
import { Animated } from 'react-native';
import { Easing } from 'react-native-reanimated';

const UseFade = () => {
    const opacity = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    return {
        opacity,
        fadeIn,
        fadeOut,
    };
};

export default UseFade;
