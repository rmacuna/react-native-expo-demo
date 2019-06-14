import React from 'react'
import {
    View,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    Platform
} from 'react-native';
import styles from './Pillbutton.styles';
import { FontAwesome5 } from '@expo/vector-icons';

const Pillbutton = (props) => {
    const content = (
        <View style={
            [styles.defaultButton,
            { backgroundColor: props.backgroundColor },
            props.disabled ? styles.disabled : null,
            props.style
            ]}>
            {props.icon ?
                <FontAwesome5 style={{ alignItems: 'flex-end' }} name="arrow-right" size={18} />
                : null}
            <Text style={[styles.customText, props.disabled ? styles.disabledText : null, { color: props.textColor }]}>{props.children}</Text>
        </View>
    )
    if (Platform.OS === "android") {
        return (
            <TouchableNativeFeedback
                style={{ zIndex: 2 }}
                background={TouchableNativeFeedback.Ripple()}
                onPress={props.onPress}>
                {content}
            </TouchableNativeFeedback>
        )
    }
    return (
        <TouchableOpacity
            activeOpacity={.9}
            onPress={props.onPress}>
            {content}
        </TouchableOpacity>
    )
}
export default Pillbutton
