import { useAuthStore } from '../../store/auth/useAuthStore';
import { Text, TextInput, View, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import MaskInput, { createNumberMask } from 'react-native-mask-input';

export const HomeScreen = () => {
    const { logout } = useAuthStore();
    const { user } = useAuthStore();

    const diasTrabajados = 4;
    const adelantoDisponible = 2000;
    const adelantoSolicitado = 250;
    const minAdelanto = 250;

    const [value, setValue] = useState(adelantoSolicitado);

    const dollarMask = createNumberMask({
        prefix: ['$'],
        separator: '',
    });

    return (
        <View style={styles.body}>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }} showsVerticalScrollIndicator={false}>
                <Pressable onPress={logout}>
                    <Text>Cerrar sesión</Text>
                </Pressable>
                <View>
                    <Image
                        style={styles.logo}
                        source={{
                            uri: 'https://lirp.cdn-website.com/5e3948ec/dms3rep/multi/opt/Logo+Solve+Express+750x250-1920w.png',
                        }}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{user?.fullName}</Text>

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

                <View style={styles.boxCard}>
                    <Text style={{ fontWeight: 'medium', fontSize: 16, textAlign: 'center', marginBottom: 10 }}>Solicitar:</Text>

                    <MaskInput
                        style={{ fontWeight: 'bold', fontSize: 36, textAlign: 'center', width: '90%', borderRadius: 36 }}
                        value={'' + value}
                        mask={dollarMask}
                        onChangeText={(masked, unmasked) => {
                            if (Number(unmasked) <= adelantoDisponible) {
                                setValue(Number(unmasked));
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

                    <Pressable style={styles.button}>
                        <Text style={{ color: 'white' }}>Solicitar Adelanto</Text>
                    </Pressable>
                </View>

                <View style={{ width: '100%', marginTop: 10 }}>
                    <Text>Información Adicional</Text>
                    <TextInput style={styles.comentarios} placeholder='Información Adicional'></TextInput>
                </View>
            </ScrollView>
        </View>
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
        padding: 0,
    },
    box: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        // width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 10,
        borderRadius: 8,
    },
    boxCard: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 10,
        borderRadius: 8,
    },
    comentarios: {
        alignItems: 'flex-start',
        marginTop: 10,
        backgroundColor: '#EDEFF2',
        color: '#7E858C',
        width: '100%',
        height: 100,
        borderWidth: 1,
        borderRadius: 8,
    },
    button: {
        justifyContent: 'center',
        backgroundColor: '#FF9400',
        marginVertical: 10,
        borderRadius: 20,
        padding: 6,
        alignItems: 'center',
        width: '70%',
        height: 40,
    },
});
