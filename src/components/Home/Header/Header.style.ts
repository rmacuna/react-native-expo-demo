import { StyleSheet } from 'react-native';
import { COLOR_EMPHASIS } from '../../../constants/constants';
export default StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 30,
        fontFamily: 'GorditaBold'
    },
    subtitle: {
        color: 'rgba(255,255,255, .8)',
        fontFamily: 'GorditaBold',
        fontSize: 14,
        paddingLeft: 7
    },
    horizontalWrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    date: {
        color: COLOR_EMPHASIS,
        fontSize: 16,
        fontFamily: 'GorditaMedium',
        paddingLeft: 5
    },
    hint: {
        fontFamily: 'GorditaMedium',
        color: '#FFE3DC',
        paddingLeft: 5,
        paddingTop: 5
    }
})