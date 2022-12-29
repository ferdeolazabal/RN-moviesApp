import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';

interface Props extends StackScreenProps<any, any> {}

const DetailScreen = ({ navigation }: Props) => {
    return (
        <View>
            <Text
                style={{
                    color: 'black',
                }}>
                DetailScreen
            </Text>

            <Button title="Go to Home" onPress={() => navigation.navigate('HomeScreen')} />
        </View>
    );
};
export default DetailScreen;
