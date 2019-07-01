import { StyleSheet } from 'react-native'
import { FONT_SIZE, COLOR_DARK, COLOR_DARK_PLACEHOLDER } from '../../../constants/constants';

export default StyleSheet.create({
    containerCard: {
        position: 'absolute',
        height: '80%',
        width: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        bottom: 0,
        zIndex: 10,
        padding: 25
    },
    title: {
        fontFamily: 'GorditaMedium',
        fontSize: FONT_SIZE.xlarge,
        color: COLOR_DARK
    },
    subtitle: {
        fontFamily: 'GorditaMedium',
        color: COLOR_DARK_PLACEHOLDER,
        fontSize: FONT_SIZE.medium,
        paddingTop: 5,
    },
    iconBar: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'     
    },
    rowHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: COLOR_DARK_PLACEHOLDER
    }
})