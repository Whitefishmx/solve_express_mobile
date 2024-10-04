import * as React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Pressable} from 'react-native'
import Modal from 'react-native-modal';
import MaskInput, { createNumberMask } from 'react-native-mask-input';

export default function ConfirmacionModal ({isModalOpen, setIsModalOpen,value}) {

    // const [modalHistorial, setModalHistorial] = useState(false)
    
    const tarifa = 70;
    const totalDeposito = value-tarifa;

    const dollarMask = createNumberMask({
        prefix: ['$'],
        separator: '',
    });

    return(
        <>
        <Modal
        isVisible={isModalOpen}
        transparent={true}
        animationType='fade'
        backdropOpacity={.2}
        // backdropColor='white'
        >

            <View style={styles.modalContainer}>
                <View style={styles.modalStyle} >
                <Text style={{fontWeight: 'bold', fontSize: 36}}>Confirma tu monto</Text>

                <View style={{ flexDirection: 'row', }}>
                    <View style={{width: '80%'}}>
                        <Text>Monto Adelanto</Text>
                        <Text>Tarifa por disposición</Text>
                        <Text>Recibes en tu cuenta</Text>
                    </View>
                    <View style= {{width: '15%'}}>
                        <MaskInput
                            style={{ fontWeight: 'bold', }}
                            value={'' + value}
                            mask={dollarMask}
                            onChangeText={(masked, unmasked) => {
                                if (Number(unmasked) <= adelantoDisponible) {
                                    setValue(Number(unmasked)); // you can use the masked value as well
                                }
                        }}
                        />

                        <MaskInput
                            style={{ fontWeight: 'bold',  }}
                            value={'' + tarifa}
                            mask={dollarMask}
                            onChangeText={(masked, unmasked) => {
                                if (Number(unmasked) <= tarifa) {
                                    setValue(Number(unmasked)); // you can use the masked value as well
                                }
                        }}
                        />

                        <MaskInput
                            style={{ fontWeight: 'bold',  }}
                            value={'' + totalDeposito}
                            mask={dollarMask}
                            onChangeText={(masked, unmasked) => {
                                if (Number(unmasked) <= totalDeposito) {
                                    setValue(Number(unmasked)); // you can use the masked value as well
                                }
                        }}
                        />
                        
                    </View>
                </View>
                
                <Pressable 
                    style={styles.button}  
                    // onPress={ ()=> {setModalHistorial(!modalHistorial)}}  
                >
                    <Text style={{color: 'white', fontWeight: 'bold'}} >Confirmar</Text>
                </Pressable>
                {/* <HistorialModal
                modalHistorial={modalHistorial}
                setModalHistorial={setModalHistorial}/> */}

                <Pressable style={styles.buttonEditar} onPress ={ ()=>{ setIsModalOpen(!setIsModalOpen)}} >
                    <Text style={{color: 'black'}} >Cancelar</Text>
                </Pressable>

                </View>

            </View>
        </Modal>
        
        </>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalStyle:{
        backgroundColor: 'white',
        ShadowColor: '#000',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset:{
            width: 4,
            height: 4,
        },
        elevation: 5,
        paddingVertical: 25,
        paddingHorizontal: 50,
        borderColor: '#7E858C', 
        borderRadius: 20,
        borderWidth: 1,

        
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
        shadowOffset:{
            width: 4,
            height: 4,
        },
    },

})