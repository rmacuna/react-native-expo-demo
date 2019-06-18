import React, { useState } from 'react'
import { Text, TextInput, View, Platform, Animated, Easing } from 'react-native'
import styles from './Custominput.styles';
import { COLOR_DARK, COLOR_LIGHT, COLOR_DARK_PLACEHOLDER } from '../../../constants/constants';





// const calculateMargin = () => {
//     return new Ani
// }

const CustomInput = (props) => {

    const [animation, useAnimation] = useState({
        initialBottomRange: new Animated.Value(50),
        initialColor: new Animated.Value(50),
    })

    _onFocusInput = () => {
        Animated.parallel([
            Animated.timing(
                animation.initialBottomRange,
                {
                    toValue: 100,
                    duration: 100,
                    easing: Easing.linear
                }
            ),
            Animated.timing(
                animation.initialColor,
                {
                    toValue: 100,
                    duration: 200,
                    easing: Easing.linear
                }
            )
        ]).start();
        //    Animated.timing(
        //        animation.initialBottomRange,
        //        {
        //            toValue: 100,
        //            duration: 200,
        //            easing: Easing.linear
        //        }
        //    ).start();
    }
    return (

        <View style={[styles.container, { marginBottom: props.separation }]}>
            <Animated.Text style={
                [Platform.OS === "ios" ?
                    styles.label_IOS : styles.label_ANDROID,
                {
                    bottom: animation.initialBottomRange.interpolate(
                        {
                            inputRange: [50, 100],
                            outputRange: ['50%', '100%']
                        }
                    ),
                    color: animation.initialColor.interpolate(
                        {
                            inputRange: [50, 100],
                            outputRange: [COLOR_DARK, COLOR_DARK_PLACEHOLDER]
                        }
                    )
                },
                props.labelColor]
            }> {props.label} </Animated.Text>
            <TextInput {...props} onFocus={_onFocusInput}
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

