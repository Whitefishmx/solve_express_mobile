import Modal from 'react-native-modal';
import { View, Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { stylesG } from '../theme/apptheme';

export default function DetalleModal ({isModalOpen, setIsModalOpen, montoSolicitado, fechaSolicitud, noReferencia, restoSalario }){
    
    // const dollarMask = createNumberMask({
    //     prefix: ['$'],
    //     separator: '',
    // });

    return(
        <>
        <Modal
            isVisible={isModalOpen}
            transparent={true}
            animationType='fade'
            backdropOpacity={.2}
        >

            <View style={stylesG.modalContainer}>
                <View style={stylesG.modalStyle}>
                        <Pressable  onPress ={ ()=>{ setIsModalOpen(!setIsModalOpen)}} >
                            <View style={{flexDirection: 'row', }}>
                                <Ionicons name='close' size={20} />
                                <Text style={{color: 'black'}} >Detalle</Text>
                            </View>
                        </Pressable>
                
                    <View style={{paddingVertical: 20}}>
                        <Ionicons name='document-text-outline' size={70}/>
                    </View>
                    <View>
                        <Text>Retiro / Adelanto</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 48, }}>${montoSolicitado}</Text>
                        <Text>{fechaSolicitud}</Text>
                    </View>
                    
                    <View style={{flexDirection: 'row',  borderBottomWidth: 2, borderBottomColor: '#EBEDED', paddingVertical: 10, justifyContent: 'space-between' }}>
                        <Text>Numero de referencia</Text>
                        <Text style={{paddingLeft: 50}}>{noReferencia}</Text>
                    </View>
                    
                    <View style={{flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: '#EBEDED', paddingVertical: 10, justifyContent: 'space-between'}}>
                        <Text>Resto salario</Text>
                        <Text>${restoSalario}</Text>
                    </View>
                
                </View>
            </View>
        </Modal>
        
        </>
    )
}

