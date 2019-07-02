import { StyleSheet, Platform } from 'react-native';
import { FONT_SIZE } from '../../../constants/constants';

export default StyleSheet.create({
    mainWrapper: {
        width: '100%',
        height: '100%'
    },
    horizontalTitleWrapper: {
        width: '100%',
        padding: 12
    },
    hintWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hintNoObjectsFound: {
        fontFamily: 'GorditaBold',
        color: 'rgba(0,0,0,.4)',
        fontSize: FONT_SIZE.xlarge,
        width: 200
    },
    subtitle: {
        fontFamily: 'GorditaMedium',
        fontSize: FONT_SIZE.xlarge
    },
    categoryTitleHolder: {
        width: '100%',
        paddingTop: Platform.OS === "android" ? 45 : 34,
        alignItems: 'center'
    },
    categoryTitle:  {
        fontFamily: 'GorditaMedium',
        color: '#fff',
        width: 280,
        fontSize: FONT_SIZE.large
    },
    topContainer: {
        width: '100%',
        paddingTop: 45,
    },
    horizontalWrapper: {
        width: '100%',
        paddingLeft: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})