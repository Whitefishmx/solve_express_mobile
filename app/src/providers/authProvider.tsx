import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { useNavigation } from 'expo-router';
import { Text, View } from 'react-native';
import { RootStackParams } from '../infrastructure/interfaces/navigation';
import { PropsWithChildren, useEffect } from 'react';
import { useAuthStore } from '../store/auth/useAuthStore';

export const AuthProvider = ({ children }: PropsWithChildren) => {
    
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
    const { checkStatus, status } = useAuthStore();

    useEffect(() => {
        checkStatus();
    }, []);

    useEffect(() => {
        if (status !== 'checking') {
            if (status === 'authenticated') {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                });
            } else {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                });
            }
        }
    }, [status]);

    return <>{children}</>;
};
