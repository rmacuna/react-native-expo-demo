import { StyleSheet } from 'react-native'
import { Styles } from './props.interface';
import { FONT_SIZE } from '../../constants/constants';

export default StyleSheet.create<Styles>({
    container: {
        flex: 1,
        padding: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textPlaceHolder: {
        fontFamily: 'GorditaMedium',
        color: 'rgba(0,0,0,.5)',
        fontSize: FONT_SIZE.large
    }
})
