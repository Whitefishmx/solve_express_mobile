import React from 'react';
import { Text, View, TextInput, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CerrarSesion from '../../components/CerrarSesion';

export const History = () => {

    const fechaMovimiento = '04/10/2024';
    const adelantoSolicitado = 1000;


    return (
        <View>
            <CerrarSesion/>
            <View >
                <View style={styles.modalStyle}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.encabezado}>Movimientos</Text>
                    </View>
                    <View style={styles.searchInput}>
                        <Ionicons name='search' size={15} style={{ paddingRight: 5 }} />
                        <TextInput placeholder='Buscar movimientos' style={{ paddingVertical: 4 }}></TextInput>
                        <Pressable>
                            <Text>Buscar</Text>
                        </Pressable>
                    </View>

                    <View style={styles.movimientoContainer}>
                        <Ionicons name='logo-usd' size={30} />
                        <View style={{ paddingLeft: 10, paddingRight: 100 }}>
                            <Text> Adelanto nomina</Text>
                            <Text>{fechaMovimiento}</Text>
                        </View>
                        <Text style={{ color: 'red' }}>{adelantoSolicitado}</Text>
                    </View>

                    <View style={styles.movimientoContainer}>
                        <Ionicons name='logo-usd' size={30} />
                        <View style={{ paddingLeft: 10, paddingRight: 100 }}>
                            <Text> Adelanto nomina</Text>
                            <Text>{fechaMovimiento}</Text>
                        </View>
                        <Text style={{ color: 'red' }}>{adelantoSolicitado}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        shadowColor: '#000',

        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        paddingVertical: 25,
        paddingHorizontal: 50,
        borderColor: '#7E858C',
        borderRadius: 20,
    },
    modalStyle: {
        backgroundColor: 'white',
        paddingVertical: 25,
        paddingHorizontal: 50,
    },
    encabezado: {
        fontSize: 26, 
        fontWeight: 'bold'
    },
    searchInput: {
        flexDirection: 'row', 
        paddingVertical: 10, 
        backgroundColor: '#EDEDF2', 
        paddingHorizontal: 10, 
        borderRadius: 30, 
        marginVertical: 30, 
        justifyContent: 'space-evenly', 
        alignItems: 'center'
    },
    movimientoContainer: {
        paddingVertical: 20, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: '#EBEDED', 
        paddingHorizontal: 20
    },

});
