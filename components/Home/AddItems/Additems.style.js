import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    cardCircle: {
        width: 70,
        height: 70,
        backgroundColor: '#FFE3DC',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hint: {
        fontFamily: 'GorditaMedium',
        color: '#FFE3DC',
        paddingLeft: 5,
        paddingTop: 5
    },
    horizontalWrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})