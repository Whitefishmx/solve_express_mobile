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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalStyle:{
        backgroundColor: 'white',
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

});

