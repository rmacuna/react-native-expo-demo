import { StyleSheet  } from 'react-native';

export default StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: 40,
    },
    label_IOS: {
        position: 'absolute',
        bottom: '50%',
        left: -4,
        fontFamily: 'GorditaMedium',
        fontSize: 16,
        color: '#323031',
        // marginBottom: -20 // Deberia interpolar de -20 a 5
    },
    label_ANDROID: {
        fontFamily: 'GorditaMedium',
        bottom: '50%',
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