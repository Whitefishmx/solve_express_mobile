import {React, useState} from 'react'
import { Text, View, SafeAreaView,  StyleSheet, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import InputPassword from '../components/InputPassword';
// import { StackNavigator } from 'react-navigation';
// import {  } from 'react-native-paper';
import Constants from 'expo-constants'



const Login = () => {

    return (

        <SafeAreaView style={styles.login}>
            <View style={styles.head}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMF4YyD9ZC__DsCN6ZhVnSaQnCrqyuBremMAs9iabq0O5gh5IzoX7Fl8zk4rKnac8_eq8&usqp=CAU'
                        // uri: 'data:image/png;base64,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'
                    }} />
                <Text style={{fontWeight: 'bold', fontSize: 24, }}>Bienvenido a Solve Express</Text>
                <Text>Accede a tu adelanto de salario de manera</Text> 
                <Text>rapida y segura.</Text>
            </View>

            <View>
                <TextInput
                    style={styles.inputIngreso}
                    placeholder="RFC"
                    maxLength={13} 
                />

                <InputPassword/>


                <TouchableWithoutFeedback
                //    onPress={() => navigate('Profile') }
                >
                    <View style={styles.olvido}>
                        <Text>¿Olvidaste tu contraseña?</Text>
                    </View>
                    </TouchableWithoutFeedback>

                    <TouchableOpacity style={styles.button}>
                        <Text style={{color: 'white'}}>Iniciar Sesión</Text>
                    </TouchableOpacity>

            </View>
        
        
                <TouchableWithoutFeedback>
                    <View style={styles.registro}>
                        <Text style={{fontWeight: '700'}}>Registrarse</Text>
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
                    <Text style={{fontSize:12}}> Términos de Servicio</Text>
                </TouchableWithoutFeedback>
                <Text style={{fontSize:12}}> | </Text>
                <TouchableWithoutFeedback>
                    <Text style={{fontSize:12}}>Politica de Privacidad</Text>
                </TouchableWithoutFeedback>
            </View>
            

        </SafeAreaView>
    )




}

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
    login:{
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
        alignItems: 'flex-end'
        
    },
    footer:{
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
    or:{
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
    }

});

export default Login;