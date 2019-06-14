import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import styles from './NavyButton.style'; 

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
export default NavyButton
