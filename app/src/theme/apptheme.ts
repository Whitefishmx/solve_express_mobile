import { StyleSheet } from 'react-native';

export const colors = {
    bgprimary: '#9999',
};
export const stylesG = StyleSheet.create({
    body: {
        alignItems: 'center',
        padding: 20,
    },
    titlePrimary: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    boxHistory: {
        width: '100%',
    },
    boxDetail: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        // height: 'auto',
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
    },
});

