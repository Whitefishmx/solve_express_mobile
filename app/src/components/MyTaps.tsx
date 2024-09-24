import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Login from '../pages/Login';
import InputPassword from './InputPassword';
import { Ionicons } from '@expo/vector-icons';
// import { Icon } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

 export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Login} options={{tabBarIcon:()=>(<Ionicons name='alarm-outline' />)}}/>
      <Tab.Screen name="Settings" component={InputPassword} />
    </Tab.Navigator>
  );
}