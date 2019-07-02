import { StyleSheet } from 'react-native';
import { 
    DISABLED_BUTTON_COLOR, 
    DISABLED_BUTTON_TEXTCOLOR 
} from '../../../constants/constants';

export default StyleSheet.create({
    navyButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        padding: 14,
        borderRadius: 100,
    },
    navyButtonText: {
        fontFamily: 'GorditaMedium',
        fontSize: 16
    },
    disabled: {
        backgroundColor: DISABLED_BUTTON_COLOR,
    },
    disabledText: {
        color: DISABLED_BUTTON_TEXTCOLOR
    }
});