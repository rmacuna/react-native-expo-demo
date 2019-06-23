import { StyleSheet, Dimensions } from 'react-native'
import { COLOR_EMPHASIS } from './../../../constants/constants'


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR_EMPHASIS
    },
    card: {
        width: '90%',
        height: '90%',
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
    },
    title: {
        fontFamily: 'GorditaBold',
        fontSize: 25,
        width: 150,
    },
    padlock: {
        width: 54,
        height: 54
    }
})