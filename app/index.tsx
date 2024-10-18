// import 'react-native-gesture-handler';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { MyStack } from './src/routes';
import { AuthProvider } from './src/providers/authProvider';
import { View } from 'react-native';

export default function Page() {
    return (
        <PaperProvider>
            <View style={{ flex: 1 }}>
                <AuthProvider>
                    <MyStack />
                </AuthProvider>
            </View>
        </PaperProvider>
    );
}
