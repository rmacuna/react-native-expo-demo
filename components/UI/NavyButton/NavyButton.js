import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { DISABLED_BUTTON_COLOR, DISABLED_BUTTON_TEXTCOLOR } from '../../../constants/constants';

const NavyButton = (props) => {
    return (
        <TouchableHighlight
            style={[
                styles.navyButton,
                { backgroundColor: props.backgroundColor ? props.backgroundColor : '#fff' },
                props.disabled ? styles.disabled : null,
                props.style
            ]}
            underlayColor="rgba(240,240,240,1)"
            activeOpacity={0.80}
            onPress={props.onPress}>
            <Text
                style={[
                    styles.navyButtonText,
                    props.disabled ? styles.disabledText : null]}>
                {props.children}
            </Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    navyButton: {
        flexDirection: 'row',
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


})


export default NavyButton
