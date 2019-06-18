import React, { useState } from 'react'
import { Text, TextInput, View, Platform, Animated } from 'react-native'
import styles from './Custominput.styles';





// const calculateMargin = () => {
//     return new Ani
// }

const CustomInput = (props) => {

    const [ animation, useAnimation ] = useState({
        initialPadding: new Animated.Value(Platform.OS === "android" ? -25 : -20)
    })

    _onFocusInput = () => {
       Animated.timing(
           animation.initialPadding,
           {
               toValue: Platform.OS === "ios" ? 5 : 0,
               duration: 200
           }
       ).start();
    }
    return (

        <View style={[styles.container, { marginBottom: props.separation }]}>
            <Animated.Text style={
                [Platform.OS === "ios" ?
                    styles.label_IOS : styles.label_ANDROID,
                // Platform.OS === "ios" ? { marginBottom: animation.initialPadding } : { marginBottom: animation.initialPadding },
                props.labelColor]
            }> {props.label} </Animated.Text>
            <TextInput
                {...props}
                onFocus={_onFocusInput}
                style={
                    Platform.OS === "ios" ?
                        [styles.input_IOS, props.style, props.textColor] :
                        [styles.input_ANDROID, props.style, props.textColor]
                }>
            </TextInput>
            <View style={[styles.lineInput, props.lineColor]}></View>
        </View>

    )
}
export default CustomInput;

