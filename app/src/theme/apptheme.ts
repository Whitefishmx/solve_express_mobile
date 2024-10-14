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
    inputIngreso: {
        height: 40,
        marginVertical: 8,
        padding: 10,
        color: '#7E858C',
        backgroundColor: '#EDEFF2',
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#6AB3F3',
        borderBottomColor: '#3071FF',
        alignItems: 'center',
        paddingVertical: 14,
        marginHorizontal: 40,
        borderRadius: 5,
        borderColor: '#3071FF',
        borderWidth: 1,
        marginTop: 25,
    },
    registro: {
        paddingTop: 10,
        marginVertical: 20,
        alignItems: 'center',
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
