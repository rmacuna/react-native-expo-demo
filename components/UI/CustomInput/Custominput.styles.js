import { StyleSheet  } from 'react-native';

export default StyleSheet.create({
    container: {
        marginBottom: 10
    },
    label_IOS: {
        fontFamily: 'GorditaMedium',
        fontSize: 16,
        color: '#323031',
        // marginBottom: -20 // Deberia interpolar de -20 a 5
    },
    label_ANDROID: {
        fontFamily: 'GorditaMedium',
        fontSize: 16,
        color: '#323031',
        // marginBottom: -25, // Deberia interpolar de -25 a 0 
    },
    lineInput: {
        width: '100%',
        height: 2,
        backgroundColor: '#323031'
    },
    input_IOS: {
        width: '100%',
        zIndex: 1,
        paddingBottom: 6,

        fontFamily: 'GorditaMedium'
    },
    input_ANDROID: {
        width: '100%',
        zIndex: 1,
        paddingBottom: '1%',
        fontFamily: 'GorditaMedium'
    }
})