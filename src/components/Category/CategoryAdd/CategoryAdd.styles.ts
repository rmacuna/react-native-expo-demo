import { StyleSheet } from 'react-native'
import { CategoryStyles } from './CategoryAdd.interface'
import { COLOR_SECONDARY, FONT_SIZE, COLOR_DARK_PLACEHOLDER } from './../../../constants/constants'
export default StyleSheet.create<CategoryStyles>({
    modalContainer: {
        flex: 1,
        padding: 15,
    },
    subtitle: {
        width: '50%',
        paddingTop: 25,
        fontSize: FONT_SIZE.xlarge,
        fontFamily: 'GorditaMedium'
    },
    hint: {
        fontFamily: 'GorditaRegular',
        color: COLOR_DARK_PLACEHOLDER,
        fontSize: FONT_SIZE.medium,
        paddingTop: 20,
        paddingBottom: 20
    }
})