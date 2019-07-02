import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff',
    },
    lineSeparador: {
        width: 2,
        height: '80%',
        backgroundColor: '#000'
    },
    bottomFotterWrapper: {
        // width: '100%',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonMiddleWrapper: {
        flexDirection: 'row',
        position: 'relative',
        bottom: '-5%',
        justifyContent: 'center'
        // marginTop: 40,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
   
    topBackgroundYellow: {
        backgroundColor: '#FFC857',
        width: '100%',
        height: '70%',
        zIndex: -1,
        paddingTop: 32,
        paddingRight: 37,
        paddingLeft: 37,
        paddingBottom: 57
    },
    
    textCustom: {
        fontFamily: 'GorditaMedium'
    },
    footerAction: {
        fontFamily: 'GorditaMedium',
        fontSize: 16,
    }
})