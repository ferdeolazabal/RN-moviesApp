import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

const HomeScreen = ({ navigation }: Props) => {
    return (
        <View>
            <Text
                style={{
                    color: 'black',
                }}>
                Home
            </Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('DetailScreen')} />
        </View>
    );
};
export default HomeScreen;
