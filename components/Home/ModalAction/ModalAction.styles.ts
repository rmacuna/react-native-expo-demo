import { StyleSheet, StatusBar } from 'react-native'

import {
    COLOR_PRIMARY,
    COLOR_DARK_PLACEHOLDER,
    FONT_SIZE,
    COLOR_DARK,
    COLOR_LINK,
} from '../../../constants/constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        backgroundColor: COLOR_PRIMARY,
    },
    card: {
        paddingTop: StatusBar.currentHeight,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 10,
        flex: 1,
    },
    hint: {
        paddingTop: 20,
        fontFamily: 'GorditaRegular',
        color: COLOR_DARK_PLACEHOLDER,
        fontSize: FONT_SIZE.medium,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    backButton: {
        position: 'absolute',
        left: 0,
    },
    modalHeader_title: {
        fontFamily: 'GorditaBold',
        color: COLOR_DARK,
        textAlign: 'center',
        fontSize: FONT_SIZE.xlarge,
    },
    modalFooter: {
        width: '100%',
        position: 'absolute',
        marginBottom: '20%',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    subtitle: {
        fontFamily: 'GorditaMedium',
        fontSize: FONT_SIZE.xlarge,
        paddingTop: 15,
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    separador: {
        paddingTop: '20%',
        paddingBottom: '10%'
    },
    textButton: {
        fontSize: FONT_SIZE.large,
        textAlign: 'center',
        color: COLOR_LINK,
        fontFamily: 'GorditaMedium',
        paddingBottom: 30
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
})