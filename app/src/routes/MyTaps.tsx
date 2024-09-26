import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen, Login } from '../pages';
// import { Icon } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

export function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='HomeScreen' component={HomeScreen} options={{ tabBarIcon: () => <Ionicons name='alarm-outline' /> }} />
            {/* <Tab.Screen name='Home' component={Login} options={{ tabBarIcon: () => <Ionicons name='alarm-outline' /> }} /> */}
        </Tab.Navigator>
    );
}
