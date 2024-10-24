import { StyleSheet, Text, View, Pressable, Linking, Alert, useWindowDimensions } from 'react-native';
import { stylesG } from '../../theme/apptheme';
import { SVGComponent } from '../../components/index';
import { useAuthStore } from '../../store/auth/useAuthStore';

export const Profile = () => {
    const { user } = useAuthStore();
    const { logout } = useAuthStore();

    const numberWhatsApp = 7716773869;
    const link: string = `https://api.whatsapp.com/send?phone=+${numberWhatsApp}`;
    const { width, height } = useWindowDimensions();

    const sendWhatsAppMessage = () => {
        Linking.canOpenURL(link)
            .then(supported => {
                if (!supported) {
                    Alert.alert('Please install whats app to send direct message');
                } else {
                    return Linking.openURL(link);
                }
            })
            .catch(err => console.error('An error occurred', err));
    };

    return (
        <View style={{ ...stylesG.body, width: width, height: height }}>
            <View>
                <Text style={{ ...stylesG.titlePrimary, marginBottom: 40 }}>Perfil de Usuario</Text>
            </View>
            {/* <View>
                <Text style={styles.usuarioText}>{user?.fullName}</Text>
            </View> */}
            <View>
                <Text style={styles.subtitulo}>Información Personal</Text>
            </View>
            <View style={{ ...styles.viewContainer, width: width * 0.9 }}>
                <View style={styles.container}>
                    <Text>Nombre completo</Text>
                    <Text style={styles.datos}>{user?.fullName}</Text>
                </View>
                <View style={styles.container}>
                    <Text>Correo electrónico</Text>
                    <Text style={styles.datos}>{user?.email}</Text>
                </View>
                <View style={styles.container}>
                    <Text>Teléfono</Text>
                    <Text style={styles.datos}>{user?.rfc}</Text>
                </View>
                <View style={styles.container}>
                    <Text>CURP</Text>
                    <Text style={styles.datos}>{user?.curp}</Text>
                </View>
            </View>
            <Pressable style={{ ...styles.btnCloseSesion, width: width * 0.9 }} onPress={logout}>
                <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: 600 }}>Cerrar Sesion</Text>
            </Pressable>

            <Pressable style={styles.buttonWhat} onPress={sendWhatsAppMessage}>
                <SVGComponent />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        marginVertical: 5,
        paddingVertical: 8,
        paddingHorizontal: 12,
        // borderBottomWidth: 2,
        // borderBottomColor: '#ffffff',
    },
    viewContainer: {
        alignItems: 'flex-start',
        marginVertical: 20,
        backgroundColor: '#dadfe9',
        padding: 10,
        borderRadius: 5,
    },
    usuarioText: {
        marginVertical: 40,
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitulo: {
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 'bold',
    },
    datos: {
        paddingLeft: 40,
        textAlign: 'right',
        fontWeight: 'bold',
    },
    buttonWhat: {
        position: 'absolute',
        right: 10,
        bottom: 100,
    },
    btnCloseSesion: {
        backgroundColor: '#73baff',
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderRadius: 8,
    },
});
