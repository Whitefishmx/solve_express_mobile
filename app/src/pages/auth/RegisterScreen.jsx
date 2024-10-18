import { useEffect, useState } from 'react';

import { TextInput, View, Pressable, Text, NativeEventEmitter, NativeModules, StyleSheet } from 'react-native';
import { stylesG } from '../../theme/apptheme';
import { SelectDropdown, DropdownData } from 'expo-select-dropdown';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../infrastructure/interfaces/navigation';
// import { useForm } from '../../Hooks/useForm';
// @ts-ignore
import { MetaMapRNSdk } from 'react-native-expo-metamap-sdk';

// interface Props extends StackScreenProps<RootStackParams, 'Login'> {}

export const RegisterScreen = ({ navigation }) => {
    // const { formState, onInputChange, onResetForm, nombre, apellidos, rfc, curp } = useForm({
    //     nombre:'',
    //     apellidos:'',
    //     rfc:'',
    //     curp: '',
    // });

    // const [selected, setSelected] = useState<DropdownData<string, string> | null>();
    // const [sexo] = useState<DropdownData<string, string>[]>([
    //     { key: '1', value: 'Hombre' },
    //     { key: '2', value: 'Mujer' },
    // ]);

    useEffect(() => {
        const MetaMapVerifyResult = new NativeEventEmitter(NativeModules.MetaMapRNSdk);
        MetaMapVerifyResult.addListener('verificationSuccess', data => console.log(data));
        MetaMapVerifyResult.addListener('verificationCanceled', data => console.log(data));
    });

    const handleMetaMapClickButton = props => {
        try {
            // @ts-ignore
            console.log(MetaMapRNSdk);
            MetaMapRNSdk.showFlow('63d42dbd0be362001ceb58d1', '6706ca27cf0821001cc65f18', { key: 'value', fixedLanguage: 'es' });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <View>
                <Text>Registro de Usuario</Text>
            </View>

            <View>
                <Text>Curp</Text>
                <TextInput
                    style={stylesG.inputIngreso}
                    placeholder='Curp'
                    // name="nombre"
                    // value={nombre}
                    // onChangeText={onInputChange}
                />
            </View>


            <Pressable style={{ ...stylesG.button }}>
                <Text style={{ color: 'white', paddingHorizontal: 25 }}>Registrarse</Text>
            </Pressable>
            <Pressable style={{ ...stylesG.button }} onPress={() => handleMetaMapClickButton()}>
                <Text style={{ color: 'white', paddingHorizontal: 25 }}>Validar</Text>
            </Pressable>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'powderblue',
                }}>
                <Pressable onPress={() => handleMetaMapClickButton()} title='Click here'>
                    <Text style={{ color: 'white', paddingHorizontal: 25 }}>Validar</Text>
                </Pressable>
            </View>
            <Pressable onPress={() => navigation.navigate('Login')}>
                <View style={stylesG.registro}>
                    <Text>¿Ya tienes una cuenta? Inicia sesión</Text>
                </View>
            </Pressable>
        </View>
    );
};
