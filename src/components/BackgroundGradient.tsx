import { useContext, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import UseFade from '../hooks/UseFade';

interface Props {
    children: JSX.Element | JSX.Element[];
}

const BackgroundGradient = ({ children }: Props) => {
    const { colors, prevColors, setPrevMainColors } = useContext(GradientContext);

    const { fadeIn, opacity, fadeOut } = UseFade();
    useEffect(() => {
        fadeIn(() => {
            setPrevMainColors(colors);
            fadeOut(0);
        });
    }, [colors]);

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={[prevColors.primary, prevColors.secondary, 'white']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.7 }}
            />

            <Animated.View
                style={{
                    ...StyleSheet.absoluteFillObject,
                    opacity,
                }}>
                <LinearGradient
                    colors={[colors.primary, colors.secondary, 'white']}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.5, y: 0.7 }}
                />
            </Animated.View>
            {children}
        </View>
    );
};

export default BackgroundGradient;
