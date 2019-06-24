import { StyleSheet, Dimensions } from 'react-native'
import { COLOR_EMPHASIS, COLOR_LINK , FONT_SIZE} from './../../../constants/constants'


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR_EMPHASIS
    },
    card: {
        width: '90%',
        borderRadius: 16,
        padding: 25,
        backgroundColor: '#fff',
        zIndex: 1
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        zIndex: 0
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 40,
    },
    middleRow: {
        paddingTop: 35,
    },
    description: {
        fontFamily: 'GorditaMedium',
        fontSize:  16
    },
    imageWrapper: {
        width: '100%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30%',
    },
    title: {
        fontFamily: 'GorditaBold',
        fontSize: 25,
        width: 150,
    },
    padlock: {
        width: 54,
        height: 54
    },
    buttonBack: {
        fontFamily: 'GorditaMedium',
        color: COLOR_LINK,
        fontSize: FONT_SIZE.large
    }
})