import { createStackNavigator } from '@react-navigation/stack';
import { Login, RecuperarContraseñaScreen } from '../pages';
import { MyTabs } from './MyTaps';

const Stack = createStackNavigator();

export function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            {/* <Stack.Screen name='Register' component={Rec} /> */}
            <Stack.Screen name='RecoverPassword' component={RecuperarContraseñaScreen} />
            <Stack.Screen name='Home' component={MyTabs} />
        </Stack.Navigator>
    );
}
