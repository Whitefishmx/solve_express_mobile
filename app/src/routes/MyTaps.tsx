// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Alert, History, HomeScreen, Notificaciones, Profile } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

export function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveBackgroundColor: '#73baff',
                tabBarActiveTintColor: '#f2f2f2',
                tabBarInactiveTintColor: '#343d47',
                tabBarButton: props => <TouchableOpacity {...props} />,
            }}>
            <Tab.Screen
                name='AlertsScreen'
                component={Alert}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name='notifications-outline' size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name='HistoryScreen'
                component={History}
                options={{ tabBarIcon: ({ color }) => <Ionicons name='document-text-outline' size={24} color={color} /> }}
            />
            <Tab.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{ tabBarIcon: ({ color }) => <Ionicons name='home-outline' size={24} color={color} /> }}
            />
            <Tab.Screen
                name='ProfileScreen'
                component={Profile}
                options={{ tabBarIcon: ({ color }) => <Ionicons name='person-circle-outline' size={24} color={color} /> }}
            />
            <Tab.Screen
                name='NotificacionesScreen'
                component={Notificaciones}
                options={{ tabBarIcon: ({ color }) => <Ionicons name='chatbox-outline' size={24} color={color} /> }}
            />
        </Tab.Navigator>
    );
}
