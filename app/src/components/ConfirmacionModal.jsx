import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { createNumberMask } from 'react-native-mask-input';

export default function ConfirmacionModal({ isModalOpen, setIsModalOpen, value }) {
    const tarifa = 70;
    const totalDeposito = value.toString().includes('$')
        ? Number(value.toString().replace('$', '').replace(',', '')) - Number(tarifa)
        : Number(value) - Number(tarifa);

    const formatNumberToMask = number => {
        if (!number) return `$00.00`;
        return number?.toString().includes('.') ? `$${number.toString().replace('$', '')}` : `$${number}.00`;
    };

    const dollarMask = createNumberMask({
        prefix: ['$'],
        separator: '',
    });

    return (
        <>
            <Modal
                isVisible={isModalOpen}
                transparent={true}
                animationType='fade'
                backdropOpacity={0.2}
                // backdropColor='white'
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalStyle}>
                        <Text style={{ fontWeight: 'bold', fontSize: 32, marginBottom: 20 }}>Confirma tu monto</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: '70%' }}>
                                <Text>Monto Adelanto</Text>
                                <Text>Tarifa por disposición</Text>
                                <Text>Recibes en tu cuenta</Text>
                            </View>
                            <View style={{ width: '25%' }}>
                                <Text>{formatNumberToMask(value)}</Text>
                                <Text style={{ fontWeight: 'bold' }}>{formatNumberToMask(tarifa)}</Text>
                                <Text style={{ fontWeight: 'bold', marginBottom: 20 }}>{formatNumberToMask(totalDeposito)}</Text>
                            </View>
                        </View>

                        <Pressable
                            style={styles.button}
                            // onPress={ ()=> {setModalHistorial(!modalHistorial)}}
                        >
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Confirmar</Text>
                        </Pressable>
                        {/* <HistorialModal
                modalHistorial={modalHistorial}
                setModalHistorial={setModalHistorial}/> */}

                        <Pressable
                            style={styles.buttonEditar}
                            onPress={() => {
                                setIsModalOpen(!setIsModalOpen);
                            }}>
                            <Text style={{ color: 'black' }}>Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalStyle: {
        backgroundColor: 'white',
        ShadowColor: '#000',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 5,
        paddingVertical: 25,
        paddingHorizontal: 30,
        borderColor: '#7E858C',
        borderRadius: 20,
        // borderWidth: 1,
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
        shadowOffset: {
            width: 4,
            height: 4,
        },
    },
    buttonEditar: {
        justifyContent: 'center',
        backgroundColor: '#EBEDED',
        marginVertical: 10,
        borderRadius: 20,
        padding: 6,
        alignItems: 'center',
        width: 'auto',
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
