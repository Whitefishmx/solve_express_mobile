import { Pressable, Text, View } from "react-native";
import { useAuthStore } from "../store/auth/useAuthStore";


export default function CerrarSesion() {

    const { logout } = useAuthStore();
    return(
        <View style={{alignItems: 'flex-end', padding: 5}}>
            <Pressable onPress={logout} style={{backgroundColor: '#73baff', borderRadius: 5, paddingVertical: 2, paddingHorizontal: 6}}>
                <Text style={{color: 'white'}}>Cerrar sesión</Text>
            </Pressable>


        </View>
        
    )

}