import { Text, View } from 'react-native';

export const HomeScreen = () => {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    return (
        <View>
            <Text>{apiUrl}</Text>
        </View>
    );
};
