import React from 'react';
import { useState } from 'react';
import { View, TextInput, TouchableWithoutFeedback, StyleSheet, Text, Button, Image, Pressable } from 'react-native';

export default function InputPassword({ form, setForm }) {
    const [hidePass, setHidePass] = useState(true);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.password}
                placeholder='Contraseña'
                secureTextEntry={hidePass ? true : false}
                autoCapitalize='none'
                value={form.password}
                onChangeText={password => setForm({...form, password})}
            />

            <Pressable onPress={() => setHidePass(!hidePass)}>
                <Image
                    style={styles.imageButton}
                    source={
                        hidePass === true
                            ? require('../../../assets/images/ic_hide_password.png')
                            : require('../../../assets/images/ic_show_password.png')
                    }
                    resizeMode='stretch'
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    password: {
        height: 40,
        padding: 10,
        width: '100%',
        paddingVertical: 8,
        color: '#7E858C',
    },
    container: {
        flexDirection: 'row',
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#EDEFF2',
        paddingRight: 10,
    },
    imageButton: {
        height: 22,
        width: 22,
    },
});
