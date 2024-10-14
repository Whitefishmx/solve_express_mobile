import { useState } from 'react';

import { TextInput, View, Pressable, Text } from 'react-native';
import { stylesG } from '../../theme/apptheme';
import {SelectDropdown, DropdownData} from "expo-select-dropdown";
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../infrastructure/interfaces/navigation';
// import { useForm } from '../../Hooks/useForm';

interface Props extends StackScreenProps<RootStackParams, 'Login'> {}

export const RegisterScreen = ({ navigation }: Props) => {
    // const { formState, onInputChange, onResetForm, nombre, apellidos, rfc, curp } = useForm({
    //     nombre:'',
    //     apellidos:'',
    //     rfc:'',
    //     curp: '',
    // });

    const [selected, setSelected] = useState<DropdownData<string, string>| null>();
    const [sexo] = useState<DropdownData<string, string>[]>([
        { key: '1', value: 'Hombre' },
        { key: '2', value: 'Mujer' },
        
    ]);

    return (
        <View style={{...stylesG.body}}>
            <View >
                <p >Registro de Usuario</p>
            </View>
            <View>
                <p>Nombre</p>
                <TextInput
                    style={stylesG.inputIngreso}
                    placeholder='Nombre'
                    // name="nombre"
                    // value={nombre}
                    // onChangeText={onInputChange}
                />
            </View>
            <View>
                <p>Apellido</p>
                <TextInput
                    style={stylesG.inputIngreso}
                    placeholder='Apellidos'
                    // name="nombre"
                    // value={nombre}
                    // onChangeText={onInputChange}
                />
            </View>
            <View>
                <p>RFC</p>
                <TextInput
                    style={stylesG.inputIngreso}
                    placeholder='RFC'
                    maxLength={13}
                    // name="nombre"
                    // value={nombre}
                    // onChangeText={onInputChange}
                />
            </View>
            <View>
                <p>Curp</p>
                <TextInput
                    style={stylesG.inputIngreso}
                    placeholder='Curp'
                    // name="nombre"
                    // value={nombre}
                    // onChangeText={onInputChange}
                />
            </View>
            <View>
                <p>Sexo</p>
                {/* <SelectDropdown
                    data={sexo}
                    placeholder={'Selecciona tu sexo'}
                    selected={selected}
                    setSelected={setSelected}
                    searchOptions={{ cursorColor: '#007bff' }}
                    searchBoxStyles={{ borderColor: '#007bff' }}
                    dropdownStyles={{ borderColor: '#007bff' }}
                /> */}
            </View>

            <Pressable style={{...stylesG.button}} >
                    <Text style={{ color: 'white', paddingHorizontal: 25 }}>Registrarse</Text>
            </Pressable>
            <Pressable 
                onPress={() => navigation.navigate('Login')}
            >
                <View style={stylesG.registro}>
                    <Text>¿Ya tienes una cuenta? Inicia sesión</Text>
                </View>
            </Pressable>
        </View>
    );
};
