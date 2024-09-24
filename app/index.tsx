import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { MyTabs } from './src/components';

export default function Page() {
    return (
        <PaperProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <MyTabs />
            </SafeAreaView>
        </PaperProvider>
    );
}
