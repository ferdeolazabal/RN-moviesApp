import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    children: JSX.Element | JSX.Element[];
}

const BackgroundGradient = ({ children }: Props) => {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#FF0000', '#00FF00', 'white']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.7 }}
            />
            {children}
        </View>
    );
};

export default BackgroundGradient;
