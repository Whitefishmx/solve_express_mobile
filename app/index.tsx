import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import Login from './src/pages/Login';

export default function Page() {
    return (
        <PaperProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <Login />
            </SafeAreaView>
        </PaperProvider>
    );
}
