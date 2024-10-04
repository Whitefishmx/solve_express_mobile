import { Text, View } from 'react-native';
import { stylesG } from '../../theme/apptheme';
import { Ionicons } from '@expo/vector-icons';
import { useSolveStore } from '../../store/solve/useSolveStore';
import { useEffect } from 'react';
import { useAuthStore } from '../../store/auth/useAuthStore';

export const History = () => {
    const { getListReported } = useSolveStore();
    const { history } = useSolveStore();
    const { user } = useAuthStore();
    useEffect(() => {
        getListReported(Number(user?.id));
    }, []);
    return (
        <View style={stylesG.body}>
            <Text style={{ ...stylesG.titlePrimary, marginBottom: 10 }}>Adelantos solicitados.</Text>
            <View style={stylesG.boxHistory}>
                {history?.map(info => (
                    <View style={stylesG.boxDetail} key={info.noReference}>
                        <Ionicons name='document-text-outline' size={32} style={{ marginRight: 15 }} />
                        <View>
                            <Text>Adelanto solicitado: {`$${info.requested_amount}`}</Text>
                            <Text style={{ fontSize: 10 }}>{`${info['Fecha solicitud']}`}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};