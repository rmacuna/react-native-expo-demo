import { StyleSheet } from 'react-native';
import { FONT_SIZE } from '../../../constants/constants';


export default StyleSheet.create({
    card: {
        width: '45%',
        height: 90,
        borderRadius: 12,
        backgroundColor: 'rgb(248,248,248)',
        padding: 8,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 10,
    },
    cardTitle: {
        fontSize: FONT_SIZE.large,
        color: 'rgba(0,0,0,.8)',
        fontFamily: 'GorditaMedium'
    }
})