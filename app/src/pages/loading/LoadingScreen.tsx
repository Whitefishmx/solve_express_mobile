import React from 'react';
import { View, Text } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

export const LoadingScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator animating={true} color={MD2Colors.red800} size={'large'} />
        </View>
    );
};
