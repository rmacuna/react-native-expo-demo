import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    lineSeparador: {
        width: 2,
        height: '80%',
        backgroundColor: '#000'
    },
    BrandTitle: {
        fontSize: 36,
        fontFamily: 'GorditaBold',
        color: '#000',
    },
    bottomFotterWrapper: {
        // width: '100%',
        height: '25%',
        marginLeft: '2%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonMiddleWrapper: {
        paddingTop: 40,
    },
    pillImage: {
        width: 173,
        height: 173
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    PillImageWrapper: {
        width: '100%',
        height: '40%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10%'
    },
    BrandTitleWrapper: {
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topBackgroundYellow: {
        backgroundColor: '#FFC857',
        width: '100%',
        height: '70%',
        paddingTop: 32,
        paddingRight: 37,
        paddingLeft: 37,
        paddingBottom: 57
    },
    inputWrapper: {
        width: '100%',
    },
    textCustom: {
        fontFamily: 'GorditaMedium'
    },
    footerAction: {
        fontFamily: 'GorditaMedium',
        fontSize: 16,
    }
})