import { StyleSheet, Platform, Dimensions } from 'react-native'
import { COLOR_PRIMARY, FONT_SIZE, COLOR_SECONDARY, COLOR_DARK } from './../../constants/constants';


let cardWidth = '98%';
let cardHeight = '100%';


if (Platform.OS === "android" ) {
    cardHeight = Dimensions.get('window').height - 100
}



export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR_SECONDARY
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    headerTitle: {
        textAlign: 'center',
        width: '100%',
        fontFamily: 'GorditaMedium',
        fontSize: FONT_SIZE.large
    },
    centerItems: {
        width: '100%',
        alignItems: 'center'
    },
    card: {
        marginTop: Platform.OS === "android" ? 30 : 0,
        width: cardWidth,
        height: cardHeight,
        borderRadius: 16,
        padding: 25,
        backgroundColor: '#fff'
    },
    title: {
        fontFamily: 'GorditaBold',
        fontSize: 25,
    },
    subtitle: {
        fontFamily: 'GorditaMedium',
        fontSize: FONT_SIZE.large
    },
    listWrapper: {
        flex: 11
    },
    footer: {
        position: 'absolute',
        zIndex: 10,
        bottom: 0,
        right: 0,
        left: 0,
        flexDirection: 'row', 
        padding: 25
    },
    footerButton: {
        flex: 1,
        fontFamily: 'GorditaMedium',
        textAlign: 'center',
        fontSize: FONT_SIZE.large,
        color: COLOR_DARK
    }
})