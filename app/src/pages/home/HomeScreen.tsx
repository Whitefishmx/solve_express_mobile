import { useAuthStore } from '../../store/auth/useAuthStore';
import { SafeAreaView, Text, TextInput, View, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import MaskInput, { createNumberMask } from 'react-native-mask-input';
import CerrarSesion from '../../components/CerrarSesion';
import ConfirmacionModal from '../../components/ConfirmacionModal'


export const HomeScreen = () => {
    // const { logout } = useAuthStore();
    const diasTrabajados = 4;
    const adelantoDisponible = 2000;
    const adelantoSolicitado = 100;
    const minAdelanto = 10;

    const [value, setValue] = useState(adelantoSolicitado);
    const [isModalOpen, setIsModalOpen] = useState(false);
    // console.log(value);

    const dollarMask = createNumberMask({
        prefix: ['$'],
        separator: '',
    });
    return (
        <>
            <CerrarSesion/>
            <View style={styles.body}>
                <View>
                    <Image
                        style={styles.logo}
                        source={{
                            uri: 'https://lirp.cdn-website.com/5e3948ec/dms3rep/multi/opt/Logo+Solve+Express+750x250-1920w.png',
                        }}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={{ fontWeight: 'medium', fontSize: 16 }}>Nombre Persona</Text>

                    <Text style={{ fontWeight: 'regular', fontSize: 14 }}>Solve. Express</Text>
                </View>

                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 26 }}>¿Cuánto dinero necesitas?</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.box}>
                        <Text>Días trabajados</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>{diasTrabajados}</Text>
                    </View>
                    <View style={styles.box}>
                        <Text>Tu adelanto disponible</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>${adelantoDisponible}</Text>
                    </View>
                </View>

                <View style={{ borderColor: '#000', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'medium', fontSize: 16, textAlign: 'center' }}>Solicitar:</Text>

                    <MaskInput
                        style={{ fontWeight: 'bold', fontSize: 36, textAlign: 'center' }}
                        value={'' + value}
                        mask={dollarMask}
                        onChangeText={(masked, unmasked) => {
                            if (Number(unmasked) <= adelantoDisponible) {
                                setValue(Number(unmasked)); // you can use the masked value as well
                            }
                        }}
                    />

                    <Slider
                        style={{ width: 300, height: 40 }}
                        minimumValue={minAdelanto}
                        maximumValue={adelantoDisponible}
                        minimumTrackTintColor='#FF9400'
                        maximumTrackTintColor='#EDEFF2'
                        thumbTintColor='#FF9400'
                        value={value}
                        onValueChange={nwe => setValue(nwe)}
                        step={1}
                    />

                    <Pressable style={styles.button} onPress={ ()=> {setIsModalOpen(!isModalOpen)}}>
                        <Text style={{ color: 'white' }}>Solicitar Adelanto</Text>
                    </Pressable>
                    <ConfirmacionModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    value={value}
                />
                </View>

                <View>
                    <Text>Información Adicional</Text>
                    <TextInput style={styles.comentarios} placeholder='Información Adicional'></TextInput>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    logo: {
        height: 80,
        width: 220,
        paddingHorizontal: 10,
        marginBottom: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    body: {
        alignItems: 'center',
        // margin: 10,
        // padding: 10,
    },
    box: {
        backgroundColor: 'white',
        alignItems: 'center',
        // width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 10,
        borderRadius: 8,
    },
    comentarios: {
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        marginTop: 10,
        backgroundColor: '#EDEFF2',
        color: '#7E858C',
        width: 400,
        height: 200,
    },
    button: {
        justifyContent: 'center',
        backgroundColor: '#FF9400',
        marginVertical: 10,
        borderRadius: 20,
        padding: 6,
        alignItems: 'center',
        width: 'auto',
        height: 40,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset:{
            width: 4,
            height: 4,
        },
    },
});
