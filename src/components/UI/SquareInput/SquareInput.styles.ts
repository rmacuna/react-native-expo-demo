import { StyleSheet } from 'react-native'
import { FONT_SIZE, COLOR_LINK } from '../../../constants/constants'
import SquareInputStyles from './SquareInput.interface'

export default StyleSheet.create<SquareInputStyles>({
    squareInput: {
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 13,
        width: '100%',
        paddingRight: 13,
        color: 'rgba(0,0,0,.7)',
        fontSize: FONT_SIZE.medium,
        fontFamily: 'GorditaMedium',
    },
    rowContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        paddingLeft: 9.66
    },
    labelIndicator: {
        textAlign: 'right',
        paddingEnd: 20,
        fontFamily: 'GorditaRegular',
        color: COLOR_LINK
    }
})