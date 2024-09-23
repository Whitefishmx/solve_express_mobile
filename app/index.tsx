import { NavigationContainer } from '@react-navigation/native';
import Login from './src/pages/Login';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Page() {
    return (
        <NavigationContainer>
            <SafeAreaView>
                <Login />
            </SafeAreaView>
        </NavigationContainer>
    );
}
