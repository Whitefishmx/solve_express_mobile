import { Text, View } from 'react-native';
import { stylesG } from '../../theme/apptheme';

export const Profile = () => {
    return (
        <View style={stylesG.body}>
            <Text style={{ ...stylesG.titlePrimary, marginBottom: 10 }}>Profile</Text>
        </View>
    );
};
