import { StyleSheet } from 'react-native';
import { COLOR_PRIMARY } from '../../../constants/constants';

export default StyleSheet.create({
    card: {
        marginTop: 12,
        width: '40%',
        height: '100%',
        backgroundColor: '#504265',
        borderRadius: 12,
        padding: 15
    },
    cardTitle: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'GorditaMedium'
    },
    horizontalWrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inlineSubtitle: {
        color: COLOR_PRIMARY,
        fontFamily: 'GorditaMedium',
        fontSize: 24,
        marginTop: 20,
        marginBottom: 10
    },
    hint: {
        fontFamily: 'GorditaMedium',
        color: '#FFE3DC',
        paddingLeft: 5,
        paddingTop: 5
    }
})