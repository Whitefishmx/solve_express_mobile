import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { MyStack } from './src/routes';

export default function Page() {
    return (
        <PaperProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <MyStack />
            </SafeAreaView>
        </PaperProvider>
    );
}
