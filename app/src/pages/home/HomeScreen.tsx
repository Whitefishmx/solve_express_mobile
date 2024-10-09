import { useAuthStore } from '../../store/auth/useAuthStore';
import { Text, TextInput, View, Image, StyleSheet, Pressable, ScrollView, useWindowDimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import Slider from '@react-native-community/slider';
import MaskInput, { createNumberMask } from 'react-native-mask-input';
import CerrarSesion from '../../components/CerrarSesion';
import ConfirmacionModal from '../../components/ConfirmacionModal';
import { useSolveStore } from '../../store/solve/useSolveStore';
import { Ionicons } from '@expo/vector-icons';

export const HomeScreen = () => {
    // const { logout } = useAuthStore();
    const { user } = useAuthStore();

    const { dashboard, getDashboard } = useSolveStore();
    const { height, width } = useWindowDimensions();

    useEffect(() => {
        getDashboard(Number(user?.id));
    }, []);

    const adelantoDisponible = 2000;
    const adelantoSolicitado = 250;
    const minAdelanto = dashboard?.['min-available'];

    const [value, setValue] = useState(adelantoSolicitado);
    const [isModalOpen, setIsModalOpen] = useState(false);
    // console.log(value);

    const dollarMask = createNumberMask({
        prefix: ['$'],
        delimiter: '',
        separator: '.',
        precision: 2,
    });

    const setFloatNumber = (number: number | string): string => {
        if (typeof number === 'number') {
            return number + '.00';
        }
        return number;
    };

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }} showsVerticalScrollIndicator={false}>
            <CerrarSesion />
            <View style={styles.body}>
                <View>
                    <Image style={styles.logo} source={require('./../../../../assets/images/LogoSolve.png')} />
                </View>
                <View style={{ ...styles.boxTitle, width: width * 0.9 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 24 }}>{user?.fullName}</Text>

                    <Text style={{ fontWeight: 'regular', fontSize: 12 }}>{dashboard?.short_name}</Text>
                </View>

                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 26, marginVertical: 15 }}>¿Cuánto dinero necesitas?</Text>
                </View>

                <View style={{ flexDirection: 'row', width: width * 0.9, justifyContent: 'space-between' }}>
                    <View style={{ ...styles.box, marginLeft: 0, width: width * 0.4 }}>
                        <Text>Días trabajados</Text>
                        <View style={{display: 'flex', alignItems: 'center', flexDirection:'row' }}>
                            <Ionicons name='calendar-outline' size={24} color={'#343d47'} style={{ marginRight: 10 }} />
                            <Text style={{ fontWeight: 'bold', fontSize: 24 }}>{dashboard?.worked_days}</Text>
                        </View>
                    </View>
                    <View style={{ ...styles.box, marginRight: 0, marginLeft: 0, width: width * 0.4 }}>
                        <Text>Monto disponible</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>${dashboard?.amount_available}</Text>
                    </View>
                </View>

                <View style={{ ...styles.boxCard, width: width * 0.9 }}>
                    <Text style={{ fontWeight: 'medium', fontSize: 24, textAlign: 'center', marginBottom: 10 }}>Solicitar</Text>

                    <MaskInput
                        style={{ fontWeight: 'bold', fontSize: 36, textAlign: 'center', width: '90%', borderRadius: 36 }}
                        value={setFloatNumber(value)}
                        mask={dollarMask}
                        onChangeText={(masked, unmasked) => {
                            const num = parseFloat(masked.replace('$', ''));
                            console.log(num);
                            if (num <= adelantoDisponible) {
                                setValue(num);
                            }
                        }}
                    />

                    <Slider
                        style={{ width: 300, height: 40 }}
                        minimumValue={minAdelanto}
                        maximumValue={2000}
                        minimumTrackTintColor='#FF9400'
                        maximumTrackTintColor='#EDEFF2'
                        thumbTintColor='#FF9400'
                        value={value}
                        onValueChange={nwe => {
                            setValue(nwe);
                        }}
                        step={1}
                    />

                    <Pressable
                        style={styles.button}
                        onPress={() => {
                            setIsModalOpen(!isModalOpen);
                        }}>
                        <Text style={{ color: 'white' }}>Solicitar Adelanto</Text>
                    </Pressable>
                    <ConfirmacionModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} value={value} />
                </View>

                <View style={{ width: width*.9, marginTop: 10 }}>
                    {/* <Text>Información Adicional</Text> */}
                    <TextInput style={styles.comentarios} placeholder='' editable={false} selectTextOnFocus={false}></TextInput>
                </View>
            </View>
        </ScrollView>
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
        padding: 10,
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
    boxTitle: {
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
        // width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 55,
        marginTop: 30,
        margin: 10,
        borderRadius: 8,
    },
    comentarios: {
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        marginTop: 10,
        backgroundColor: '#EDEFF2',
        color: '#7E858C',
        width: '100%',
        height: 100,
        borderRadius: 8,
    },
    button: {
        justifyContent: 'center',
        backgroundColor: '#FF9400',
        marginVertical: 10,
        borderRadius: 20,
        padding: 6,
        alignItems: 'center',
        width: '80%',
        height: 40,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: {
            width: 4,
            height: 4,
        },
    },
});
