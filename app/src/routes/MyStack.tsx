import { createStackNavigator } from '@react-navigation/stack';
import { LoadingScreen, Login, RecuperarContraseñaScreen, RegisterScreen } from '../pages';
import { MyTabs } from './MyTaps';
import { RootStackParams } from '../infrastructure/interfaces/navigation';

const Stack = createStackNavigator<RootStackParams>();

export function MyStack() {
    return (
        <Stack.Navigator initialRouteName='LoadingScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='LoadingScreen' component={LoadingScreen} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
            <Stack.Screen name='RecuperarContraseñaScreen' component={RecuperarContraseñaScreen} />
            <Stack.Screen name='Home' component={MyTabs} />
        </Stack.Navigator>
    );
}
