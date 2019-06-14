import React from 'react'
import { Text, TextInput, View, Platform } from 'react-native'
import styles from './Custominput.styles';

const CustomInput = (props) => {
    return (

        <View style={[styles.container, { marginBottom : props.separation} ]}>
            <Text style={ 
                [Platform.OS === "ios" ? styles.label_IOS : styles.label_ANDROID, props.labelColor] }
                >
                {props.label}
            </Text>
            <TextInput
                {...props}
                style={
                    Platform.OS === "ios" ? 
                    [styles.input_IOS, props.style, props.textColor] : 
                    [styles.input_ANDROID, props.style, props.textColor] 
                }>
            </TextInput>
            <View  style={[styles.lineInput, props.lineColor]}></View>
        </View>

    )
}
export default CustomInput;

