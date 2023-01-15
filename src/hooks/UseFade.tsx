import { useRef } from 'react';
import { Animated } from 'react-native';
import { Easing } from 'react-native-reanimated';

const UseFade = () => {
    const opacity = useRef(new Animated.Value(0)).current;

    const fadeIn = (callback?: Function) => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start(() => callback && callback());
    };

    const fadeOut = (duration: number = 300) => {
        Animated.timing(opacity, {
            toValue: 0,
            duration,
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
