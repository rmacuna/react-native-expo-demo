import React from 'react'
import {
    View,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    StyleSheet,
    Platform
} from 'react-native';

const Pillbutton = (props) => {
    const content = (
        <View style={
            [styles.defaultButton,
            { backgroundColor: props.backgroundColor },
            props.disabled ? styles.disabled : null,
            props.style
            ]}>
            <Text style={[styles.customText, props.disabled ? styles.disabledText : null, { color: props.textColor }]} >{props.children}</Text>
        </View>
    )
    if (Platform.OS === "android") {
        return (
            <TouchableNativeFeedback
                style={{zIndex: 2}}
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

const styles = StyleSheet.create({
    defaultButton: {
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        shadowColor: 'rgba(0,15,69,1)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 15,
        elevation: 2
    },
    customText: {
        fontSize: 16,
        fontFamily: 'GorditaMedium',
        color: '#323031'
    }
})


export default Pillbutton
