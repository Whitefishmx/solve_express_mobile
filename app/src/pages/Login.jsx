import { React, useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import InputPassword from '../components/InputPassword';
// import { StackNavigator } from 'react-navigation';
// import {  } from 'react-native-paper';
import Constants from 'expo-constants';

const Login = () => {
    return (
        <View style={styles.login}>
            <View style={styles.head}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMF4YyD9ZC__DsCN6ZhVnSaQnCrqyuBremMAs9iabq0O5gh5IzoX7Fl8zk4rKnac8_eq8&usqp=CAU',
                    }}
                />
                <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Bienvenido a Solve Express</Text>
                <Text>Accede a tu adelanto de salario de manera</Text>
                <Text>rápida y segura.</Text>
            </View>

            <View>
                <TextInput style={styles.inputIngreso} placeholder='RFC' maxLength={13} />

                <InputPassword />

                <TouchableWithoutFeedback
                //    onPress={() => navigate('Profile') }
                >
                    <View style={styles.olvido}>
                        <Text>¿Olvidaste tu contraseña?</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: 'white' }}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>

            <TouchableWithoutFeedback>
                <View style={styles.registro}>
                    <Text style={{ fontWeight: '700' }}>Registrarse</Text>
                </View>
            </TouchableWithoutFeedback>

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
                <TouchableWithoutFeedback>
                    <Text style={{ fontSize: 12 }}> Términos de Servicio</Text>
                </TouchableWithoutFeedback>
                <Text style={{ fontSize: 12 }}> | </Text>
                <TouchableWithoutFeedback>
                    <Text style={{ fontSize: 12 }}>Politica de Privacidad</Text>
                </TouchableWithoutFeedback>
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
        backgroundColor: '#EDEFF2',
        borderRadius: 5,
        textTransform: 'uppercase',
    },
    button: {
        backgroundColor: '#6AB3F3',
        borderBottomColor: '#3071FF',
        alignItems: 'center',
        paddingVertical: 14,
        marginHorizontal: 40,
        justifyContent: 'right',
        borderRadius: 5,
        borderColor: '#3071FF',
        borderWidth: 1,
    },
    logo: {
        height: 80,
        width: 220,
        paddingHorizontal: 10,
        marginBottom: 25,
        resizeMode: 'stretch',
    },
    login: {
        margin: 20,
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
    registro: {
        paddingTop: 10,
        marginVertical: 20,
        alignItems: 'center',
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

export default Login;
