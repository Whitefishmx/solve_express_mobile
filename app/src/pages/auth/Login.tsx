import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image, Pressable, Alert } from 'react-native';

import InputPassword from '../../components/InputPassword';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../infrastructure/interfaces/navigation';
import { useAuthStore } from '../../store/auth/useAuthStore';
import { stylesG } from '../../theme/apptheme';

interface Props extends StackScreenProps<RootStackParams, 'Login'> {}

export const Login = ({ navigation }: Props) => {
    // const navigation = useNavigation();
    const { login } = useAuthStore();

    const [form, setForm] = useState({
        rfc: 'MALU970621T16',
        password: 'Pass1234',
    });
    const [isPosting, setIsPosting] = useState(false);
    const onLogin = async () => {
        const { rfc, password } = form;
        if (rfc.length === 0 || password.length === 0) {
            return;
        }
        setIsPosting(true);
        const resp = await login(rfc, password);
        if (resp) {
            return;
        }
        Alert.alert('Error', 'Usuario o contraseña incorrectos');
        setIsPosting(false);
    };

    return (
        <View style={styles.login}>
            <View style={styles.head}>
                <Image style={styles.logo} source={require('./../../../../assets/images/LogoSolve.png')} resizeMode='stretch' />
                <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 5 }}>Bienvenido a Solve Express</Text>
                <Text>¡Tu nómina al instante! Sin deuda y sin intereses.</Text>
            </View>

            <View>
                <TextInput
                    style={stylesG.inputIngreso}
                    placeholder='RFC'
                    maxLength={13}
                    value={form.rfc}
                    onChangeText={rfc => setForm({ ...form, rfc })}
                />
                {/* @ts-ignore */}
                <InputPassword form={form} setForm={setForm} />

                <Pressable
                //    onPress={() => navigate('Profile') }
                >
                    <View style={styles.olvido}>
                        <Text>¿Olvidaste tu contraseña?</Text>
                    </View>
                </Pressable>
                {/* <Text>{JSON.stringify(form, null, 2)}</Text>
                <Text>{process.env.EXPO_PUBLIC_API_URL_DEV}</Text> */}
                <Pressable style={stylesG.button} onPress={onLogin} disabled={isPosting}>
                    <Text style={{ color: 'white' }}>Iniciar Sesión</Text>
                </Pressable>
            </View>

            <Pressable 
                onPress={() => navigation.navigate('RegisterScreen')}
            >
                <View style={stylesG.registro}>
                    <Text style={{ fontWeight: '700' }}>Registrarse</Text>
                </View>
            </Pressable>

            {/* <View style={styles.containerOr}>
                    <View style={styles.hairline} />

                    <Text style={styles.or}>OR</Text>

                    <View style={styles.hairline} />
                </View>

                <View style={{ width: '100%' }}>
                    <View style={styles.otroRegistro}>
                        <Image
                            style={styles.iconoRegistro}
                            source={{
                                uri: 'https://img.icons8.com/?size=512&id=17949&format=png'
                            }}
                        />
                        <Text >Iniciar sesion con Google</Text>
                    </View>
                    <View style={styles.otroRegistro}>
                        <Image
                            style={styles.iconoRegistro}
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/0/747.png'
                            }}
                        />
                        <Text>Iniciar sesion con Apple</Text>
                    </View>

                </View> */}

            <View style={styles.footer}>
                <Pressable>
                    <Text style={{ fontSize: 12 }}> Términos de Servicio</Text>
                </Pressable>
                <Text style={{ fontSize: 12 }}> | </Text>
                <Pressable>
                    <Text style={{ fontSize: 12 }}>Política de Privacidad</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputIngreso: {
        height: 40,
        marginVertical: 8,
        padding: 10,
        color: '#7E858C',
        backgroundColor: '#e2e7ed',
        borderRadius: 5,
        textTransform: 'uppercase',
    },
    button: {
        backgroundColor: '#6AB3F3',
        borderBottomColor: '#3071FF',
        alignItems: 'center',
        paddingVertical: 14,
        marginHorizontal: 40,
        borderRadius: 5,
        borderColor: '#3071FF',
        borderWidth: 1,
        marginTop: 25,
    },
    logo: {
        height: 80,
        width: 220,
        paddingHorizontal: 10,
        marginBottom: 25,
    },
    login: {
        margin: 0,
        padding: 20,
    },
    head: {
        alignItems: 'center',
        marginVertical: 60,
    },
    olvido: {
        padding: 10,
        marginBottom: 20,
        alignItems: 'flex-end',
    },
    footer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center',
    },
    containerOr: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    or: {
        color: '#EDEFF2',
        paddingHorizontal: 8,
        alignSelf: 'center',
        width: 'auto',
    },
    hairline: {
        backgroundColor: '#EDEFF2',
        height: 2,
        width: '45%',
        alignSelf: 'center',
    },
    iconoRegistro: {
        height: 20,
        width: 20,
        margin: 10,
        paddingLeft: 10,
        paddingVertical: 10,
        marginRight: 30,
        resizeMode: 'stretch',
    },
    otroRegistro: {
        width: '100%',
        flex: 1,
        height: 'auto',
        flexDirection: 'row',
        marginVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#DEE2E6',
        alignItems: 'center',
    },
});
