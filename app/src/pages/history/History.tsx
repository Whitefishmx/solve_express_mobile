import { Text, View, Pressable } from 'react-native';
import { stylesG } from '../../theme/apptheme';
import { Ionicons } from '@expo/vector-icons';
import { useSolveStore } from '../../store/solve/useSolveStore';
import { useEffect, useState } from 'react';
import { useAuthStore } from '../../store/auth/useAuthStore';
import DetalleModal from '../../components/DetalleModal';
import { Response } from '../../infrastructure';

export const History = () => {
    const { getListReported } = useSolveStore();
    const { history } = useSolveStore();
    const { user } = useAuthStore();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalInfoOpen, setIsModalInfoOpen] = useState<Response>({});

    useEffect(() => {
        getListReported(Number(user?.id));
    }, []);



    return (
        <View style={stylesG.body}>
            <Text style={{ ...stylesG.titlePrimary, marginBottom: 10 }}>Adelantos solicitados.</Text>
            <View style={stylesG.boxHistory}>
                {history?.map(info => (
                    <Pressable style={stylesG.boxDetail} key={info.reference_number}
                        onPress={() => {
                            console.log(info)
                            setIsModalInfoOpen(info)
                            setIsModalOpen(!isModalOpen);
                        }}>
                        <Ionicons name='document-text-outline' size={32} style={{ marginRight: 15 }} />
                        <View>
                            <Text>Adelanto solicitado: {`$${info.requested_amount}`}</Text>
                            <Text style={{ fontSize: 10 }}>{`${info['created_at']}`}</Text>
                        </View>
                    </Pressable>
                ))}
            </View>
            <DetalleModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    montoSolicitado={isModalInfoOpen.requested_amount}
                    fechaSolicitud={isModalInfoOpen['created_at']}
                    noReferencia={isModalInfoOpen.reference_number}
                    restoSalario={isModalInfoOpen.remaining_amount}

                />

        </View>
    );
};
