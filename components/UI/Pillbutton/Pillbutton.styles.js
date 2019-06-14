import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    defaultButton: {
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        padding: 12,
        shadowColor: 'rgba(0,15,69,1)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 15,
        elevation: 2
    },
    customText: {
        fontSize: 16,
        paddingLeft: '35%',
        textAlign: 'center',
        fontFamily: 'GorditaMedium',
        color: '#323031'
    }
})