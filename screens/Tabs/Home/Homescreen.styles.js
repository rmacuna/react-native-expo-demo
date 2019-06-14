import { StyleSheet, Platform } from 'react-native';
import { COLOR_PRIMARY, COLOR_EMPHASIS } from './../../../constants/constants';
export default StyleSheet.create({
    topContainer: {
        width: '100%',
        paddingTop: 45,
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: Platform.OS === "android" ? 20 : null
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontFamily: 'GorditaBold'
    },
    cardCircle: {
        width: 70,
        height: 70,
        backgroundColor: '#FFE3DC',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
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
    inlineSubtitle: {
        color: COLOR_PRIMARY,
        fontFamily: 'GorditaMedium',
        fontSize: 24,
        marginTop: 20,
        marginBottom: 10
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