import React from 'react'
import {
    View,
    Text,
    TouchableNativeFeedback,
    TouchableHighlight,
    Platform
} from 'react-native';
import styles from './Pillbutton.styles';

const Pillbutton = (props) => {
    return (
        <TouchableHighlight
            onPress={props.onPress}
            underlayColor={props.underlayColor ? props.underlayColor : "rgba(240,240,240,1)"}
            activeOpacity={0.8}
            style={[
                styles.defaultButton,
                { backgroundColor: props.backgroundColor },
                props.disabled ? styles.disabled : null,
                props.style
            ]}>
            <Text style={[styles.customText, props.disabled ? styles.disabledText : null]}>{props.children}</Text>
        </TouchableHighlight>
    )
}
export default Pillbutton
